<template>
  <div class="partner-rotation-page">
    <!-- 独立的顶部导航栏 -->
    <header class="page-header">
      <div class="container mx-auto flex items-center justify-between h-full px-6">
        <h1 class="text-2xl font-bold text-white">桥牌搭档轮换系统</h1>
        <el-button
          type="info"
          @click="goHome"
          class="back-button"
        >
          <el-icon class="mr-1"><HomeFilled /></el-icon>
          返回主页
        </el-button>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="page-content">
      <div class="content-wrapper">
        <div class="current-day mb-8">
          <h3 class="section-title">第 {{ day }} 次</h3>

          <!-- 玩家列表 -->
          <div class="players-list mb-6">
            <div v-for="(player, index) in players" :key="index" class="player-item">
              <span class="player-number">{{ player.id }}号</span>
              <span class="player-name">{{ player.name }}</span>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="action-buttons">
            <el-button
              type="primary"
              size="large"
              @click="generatePairs"
              :disabled="hasGeneratedToday"
              class="action-btn"
            >
              <el-icon class="mr-2"><Refresh /></el-icon>
              生成本次搭档
            </el-button>

            <el-button
              type="success"
              size="large"
              @click="nextTime"
              class="action-btn"
            >
              <el-icon class="mr-2"><DArrowRight /></el-icon>
              下一次
            </el-button>
          </div>

          <!-- 本次搭档结果 -->
          <div v-if="todayPairs.length > 0" class="pairs-result">
            <h4 class="result-title">本次搭档：</h4>
            <div v-for="(pair, index) in todayPairs" :key="index" class="pair-item">
              <div class="pair-number">搭档 {{ index + 1 }}</div>
              <div class="pair-players">
                <span class="player">{{ pair[0].name }}（{{ pair[0].id }}号）</span>
                <span class="separator">和</span>
                <span class="player">{{ pair[1].name }}（{{ pair[1].id }}号）</span>
              </div>
            </div>

            <!-- 比赛结果录入 -->
            <div class="match-result-section">
              <h4 class="result-title mt-4">比赛结果：</h4>
              <el-input
                v-model="matchResult"
                type="text"                
                placeholder="请输入本次比赛结果（胜：输入1，负：输入0）"
                class="match-result-input"
                @input="saveState"
              />
              <div v-if="matchResult" class="result-status success">
                <el-icon><CircleCheck /></el-icon>
                <span>比赛结果已录入</span>
              </div>
              <div v-else class="result-status warning">
                <el-icon><Warning /></el-icon>
                <span>请录入比赛结果后才能进行下一次</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 历史记录 -->
        <div class="history-section">
          <h3 class="section-title">历史记录</h3>
          <el-collapse accordion>
            <el-collapse-item
              v-for="(dayData, dayIndex) in history"
              :key="dayIndex"
              :title="`第 ${dayIndex + 1} 次 (${dayData.date || '日期未知'})`"
            >
              <div v-for="(pair, pairIndex) in dayData.pairs" :key="pairIndex" class="history-pair">
                <strong>搭档 {{ pairIndex + 1 }}:</strong> {{ pair[0].name }}（{{ pair[0].id }}号）和 {{ pair[1].name }}（{{ pair[1].id }}号）
              </div>
              <div class="history-order">
                <strong>当日顺序：</strong>{{ dayData.playersOrder.map(p => p.name).join(' → ') }}
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { createClient } from '@supabase/supabase-js';
import { HomeFilled, Refresh, DArrowRight, CircleCheck, Warning } from '@element-plus/icons-vue';

const router = useRouter();

// 默认玩家列表
const defaultPlayers = [] as const;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface Player {
  id: number;
  name: string;
}

const players = ref<Player[]>([]);
const day = ref(1);
const todayPairs = ref<[Player, Player][]>([]);
const history = ref<{pairs: [Player, Player][], playersOrder: Player[], date: string}[]>([]);
const hasGeneratedToday = ref(false);
const lastGeneratedDate = ref<string | null>(null);
const matchResult = ref<string | null>(null); // 比赛结果


// 从数据库加载玩家列表
const loadPlayers = async () => {
  try {
    const { data, error } = await supabase
      .from('players')
      .select('id, name')
      .order('id', { ascending: true });

    if (error) throw error;
    
    if (data && data.length > 0) {
      players.value = data as Player[];
    } else {
      // 如果数据库中没有玩家，使用默认值
      players.value = [...defaultPlayers];
    }
  } catch (error) {
    console.error('加载玩家列表失败:', error);
    // 出错时使用默认值
    players.value = [...defaultPlayers];
  }
};

// 保存状态到Supabase
const saveState = async () => {
  try {
    const now = new Date().toISOString();
    // 准备要保存的数据
    const saveData = {
      players: players.value,
      day: day.value,
      today_pairs: todayPairs.value,
      history: history.value,
      last_generated_date: lastGeneratedDate.value,
      match_result: matchResult.value, // 添加比赛结果字段
      updated_at: now,
      created_at: now // 确保包含 created_at 字段
    };

    console.log('保存数据:', JSON.stringify(saveData, null, 2));

    // 使用 upsert 方法
    const { data, error } = await supabase
      .from('bridge_state')
      .upsert(saveData)
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('保存状态失败:', error);
    throw error;
  }
};

// 从Supabase加载数据
const loadState = async () => {
  try {
    // 先尝试获取记录
    const { data, error } = await supabase
      .from('bridge_state')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    // 处理未找到记录的情况
    if (error) {
      console.error('加载数据失败:', error);
      throw error;
    }

    // 如果有数据，加载到状态中
    if (data && data.length > 0) {
      const state = data[0];
      if (state.day) day.value = state.day;
      if (state.today_pairs) todayPairs.value = state.today_pairs;
      if (state.history) history.value = state.history;
      if (state.last_generated_date) lastGeneratedDate.value = state.last_generated_date;
      if (state.match_result !== undefined) matchResult.value = state.match_result; // 加载比赛结果

      // 检查是否今天已经生成过
      const today = new Date().toISOString().split('T')[0];
      hasGeneratedToday.value = lastGeneratedDate.value === today;
    }
  } catch (error: any) {
    // 处理 PGRST116 错误（表为空）
    if (error?.code === 'PGRST116' || error?.message?.includes('No rows returned')) {
      console.log('表为空，将创建新记录...');
      await saveState();
    } else {
      console.error('加载状态失败:', error);
    }
  }
};

// 洗牌算法
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// 生成搭档对
const generatePairs = async () => {  
  // 获取前4名玩家
  const currentPlayers = [...players.value].slice(0, 4);
  
  // 随机打乱顺序
  const shuffled = shuffleArray(currentPlayers);
  
  // 分成两组
  const pairs: [Player, Player][] = [
    [shuffled[0], shuffled[1]],
    [shuffled[2], shuffled[3]]
  ];
  
  todayPairs.value = pairs;
  
  // 设置最后生成本次搭档的日期
  const today = new Date().toISOString().split('T')[0];
  lastGeneratedDate.value = today;
  hasGeneratedToday.value = true;
  
  // 保存到历史记录
  history.value.unshift({
    pairs,
    playersOrder: [...players.value],
    date: today
  });

  // 保存状态到Supabase
  await saveState();
};

// 下一次
const nextTime = async () => {
  // 如果没有生成过今天的配对，先生成
  if (!hasGeneratedToday.value) {
    alert('请先生成本次搭档');
    return;
  }

  // 检查比赛结果是否已录入
  if (matchResult.value === null || matchResult.value === '') {
    alert('当前比赛尚未结束，请先录入比赛结果后再进行下一次');
    return;
  }

  // 保存当前配对到历史记录
  const todayRecord = {
    pairs: [...todayPairs.value],
    playersOrder: [...players.value],
    date: new Date().toISOString().split('T')[0] // 只保存日期部分
  };

  history.value.unshift(todayRecord);

  // 将前一名玩家移到队列末尾
  const [first, ...rest] = players.value;
  players.value = [...rest, first];

  // 重置状态
  todayPairs.value = [];
  hasGeneratedToday.value = false;
  matchResult.value = null; // 重置比赛结果
  day.value += 1;

  // 保存状态
  saveState();
};

// 返回主页
const goHome = () => {
  router.push('/');
};

// 组件挂载时加载数据
onMounted(() => {
  loadPlayers();
  loadState();
});
</script>

<style scoped>
/* 页面整体布局 */
.partner-rotation-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
  -webkit-overflow-scrolling: touch; /* iOS 平滑滚动 */
}

/* 顶部导航栏 */
.page-header {
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.back-button {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  min-height: 44px; /* iOS 推荐的最小触摸目标 */
}

.back-button:hover,
.back-button:active {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

/* 主要内容区 */
.page-content {
  flex: 1;
  padding: 40px 20px;
  overflow-y: auto;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* 标题样式 */
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

/* 玩家列表 */
.players-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.player-item {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 16px 20px;
  border-radius: 8px;
  border: 2px solid #dee2e6;
  transition: all 0.3s ease;
  font-size: 18px;
  min-height: 60px; /* 触摸友好的高度 */
}

.player-item:active {
  transform: scale(0.98);
  background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
}

.player-number {
  display: inline-block;
  background-color: #667eea;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
  margin-right: 12px;
  min-width: 50px;
  text-align: center;
}

.player-name {
  font-weight: 500;
  color: #333;
  flex: 1;
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.action-btn {
  flex: 1;
  min-width: 160px;
  min-height: 50px; /* 触摸友好 */
  font-size: 16px;
  font-weight: 600;
}

/* 搭档配对结果 */
.pairs-result {
  margin-top: 24px;
  padding: 20px;
  background-color: #f0f9ff;
  border-radius: 12px;
  border: 2px solid #bfdbfe;
}

.result-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e40af;
}

.pair-item {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-left: 5px solid #3b82f6;
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pair-number {
  font-size: 14px;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 8px;
}

.pair-players {
  font-size: 16px;
  font-weight: 500;
  color: #1e3a8a;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.pair-players .player {
  background-color: white;
  padding: 6px 12px;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.pair-players .separator {
  color: #3b82f6;
  font-weight: 600;
}

/* 比赛结果录入 */
.match-result-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px dashed #bfdbfe;
}

.match-result-input {
  margin-bottom: 12px;
}

.match-result-input :deep(.el-textarea__inner) {
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #bfdbfe;
  padding: 12px;
  min-height: 80px;
}

.match-result-input :deep(.el-textarea__inner):focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.result-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
}

.result-status.success {
  background-color: #d1fae5;
  color: #065f46;
  border: 2px solid #6ee7b7;
}

.result-status.success .el-icon {
  font-size: 20px;
  color: #10b981;
}

.result-status.warning {
  background-color: #fef3c7;
  color: #92400e;
  border: 2px solid #fcd34d;
}

.result-status.warning .el-icon {
  font-size: 20px;
  color: #f59e0b;
}

/* 历史记录 */
.history-section {
  margin-top: 32px;
}

.history-pair {
  padding: 12px 0;
  border-bottom: 1px dashed #e5e7eb;
  font-size: 15px;
  line-height: 1.6;
}

.history-pair:last-child {
  border-bottom: none;
}

.history-order {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 2px solid #e5e7eb;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}

/* 响应式设计 - 移动端优化 */
@media (max-width: 768px) {
  .page-header {
    height: 60px;
  }

  .page-header h1 {
    font-size: 1.1rem;
  }

  .back-button {
    font-size: 14px;
    padding: 8px 12px;
  }

  .content-wrapper {
    padding: 20px 16px;
    border-radius: 0;
    box-shadow: none;
  }

  .page-content {
    padding: 16px 8px;
  }

  .section-title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .player-item {
    padding: 14px 16px;
    font-size: 16px;
    min-height: 56px;
  }

  .player-number {
    padding: 3px 10px;
    font-size: 14px;
    min-width: 45px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 12px;
  }

  .action-btn {
    width: 100%;
    min-width: 100%;
    min-height: 52px;
    font-size: 17px;
  }

  .pairs-result {
    padding: 16px;
  }

  .result-title {
    font-size: 1.1rem;
  }

  .pair-item {
    padding: 14px 16px;
  }

  .pair-players {
    font-size: 15px;
    flex-direction: column;
    align-items: flex-start;
  }

  .pair-players .player {
    width: 100%;
  }

  .match-result-input :deep(.el-textarea__inner) {
    font-size: 15px;
    padding: 10px;
  }

  .result-status {
    font-size: 14px;
    padding: 10px 12px;
  }

  .history-pair {
    font-size: 14px;
    padding: 10px 0;
  }

  .history-order {
    font-size: 13px;
  }
}

/* 超小屏幕优化 */
@media (max-width: 375px) {
  .page-header h1 {
    font-size: 1rem;
  }

  .content-wrapper {
    padding: 16px 12px;
  }

  .player-item {
    font-size: 15px;
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .player-item:hover {
    transform: none;
  }

  .player-item:active {
    transform: scale(0.98);
  }

  /* 增大可点击区域 */
  :deep(.el-collapse-item__header) {
    min-height: 52px;
    padding: 12px 16px;
    font-size: 16px;
  }

  :deep(.el-button) {
    min-height: 48px;
  }
}
</style>