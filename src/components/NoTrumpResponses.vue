<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第四章 1NT开叫及以后的应叫</h2>

    <!-- 1NT应叫主表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1NT—? 应叫表</h3>
      <el-table :data="oneNoTrumpResponses" style="width: 100%" border>
        <el-table-column prop="bid" label="应叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="牌型/说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 斯台曼约定叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">斯台曼约定叫 1NT—2♣️</h3>
      <el-table :data="staymanResponses" style="width: 100%" border>
        <el-table-column prop="bid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="开叫方牌型" width="150">
          <template #default="{ row }">
            <el-tag type="info" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 转移叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">转移叫 1NT—2♦️/2♥️</h3>
      <el-table :data="transferResponses" style="width: 100%" border>
        <el-table-column prop="bid" label="应叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 注意事项卡片 -->
    <div class="bridge-card mb-8">
      <h3 class="bridge-subtitle">注意事项</h3>
      <div class="prose max-w-none">
        <ul class="list-disc pl-6">
          <li>2♣️为斯台曼约定叫，询问开叫方是否有4张高花。</li>
          <li>2♦️为转移叫，要求开叫方叫2♥️，显示5张以上♥️。</li>
          <li>2♥️为转移叫，要求开叫方叫2♠️，显示5张以上♠️。</li>
          <li>直接跳叫3NT为止叫，否认4张高花。</li>
        </ul>
      </div>
    </div>

    <!-- 详细说明、要点、问答等 -->
    <div class="bridge-card">
      <h3 class="bridge-subtitle">体系要点 & 常见问答</h3>
      <div class="prose max-w-none">
        <ul class="list-disc pl-6 mb-4">
          <li>1NT开叫后的应叫体系相对复杂，需要掌握约定叫。</li>
          <li>斯台曼和转移叫是最重要的两个约定叫。</li>
          <li>应叫方需要根据自己的牌型选择合适的约定叫。</li>
        </ul>
        <ul class="list-disc pl-6">
          <li>Q: 什么时候使用斯台曼？<br/>A: 有4张高花且希望寻找4-4配合时。</li>
          <li>Q: 转移叫的优势？<br/>A: 让强手做庄，保护开叫方的止张。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

function suitToEmoji(str: string) {
  return str
    .replace(/C/g, '♣️')
    .replace(/D/g, '♦️')
    .replace(/H/g, '♥️')
    .replace(/S/g, '♠️')
}

const oneNoTrumpResponses = ref([
  { bid: 'Pass', points: '0-7点', description: '弱牌，满足于1NT定约' },
  { bid: '2C', points: '8点以上', description: '斯台曼约定叫，询问4张高花' },
  { bid: '2D', points: '0点以上', description: '转移叫，5张以上H，要求叫2H' },
  { bid: '2H', points: '0点以上', description: '转移叫，5张以上S，要求叫2S' },
  { bid: '2S', points: '6-10点', description: '6张以上低花，弱牌逃叫' },
  { bid: '2NT', points: '8-9点', description: '均型牌，邀叫' },
  { bid: '3C/3D', points: '10点以上', description: '5张以上低花，逼局' },
  { bid: '3H/3S', points: '10点以上', description: '6张以上高花，逼局' },
  { bid: '3NT', points: '10-15点', description: '均型牌，止叫' },
  { bid: '4H/4S', points: '6-9点', description: '6张以上高花，止叫' },
])

const staymanResponses = ref([
  { bid: '2D', points: '无4张高花', description: '否认有4张H或S' },
  { bid: '2H', points: '有4张H', description: '显示4张H，可能同时有4张S' },
  { bid: '2S', points: '有4张S', description: '显示4张S，否认4张H' },
])

const transferResponses = ref([
  { bid: '2D→2H', points: '0点以上', description: '5张以上H，开叫方必须叫2H' },
  { bid: '2H→2S', points: '0点以上', description: '5张以上S，开叫方必须叫2S' },
])

const getPointTagType = (points: string) => {
  if (points.includes('10点以上') || points.includes('11-12') || points.includes('18点以上') || points.includes('18-19') || points.includes('20-21')) return 'success'
  if (points.includes('6-11') || points.includes('6-10') || points.includes('12-14') || points.includes('12-15') || points.includes('13-15') || points.includes('15-17') || points.includes('5-8')) return 'info'
  if (points.includes('0-5') || points.includes('4-8') || points.includes('0-7') || points.includes('6-9')) return 'warning'
  return 'default'
}
</script>

<style scoped>
.prose {
  @apply text-gray-700 leading-relaxed;
}

.prose p {
  @apply mb-4;
}
</style>
