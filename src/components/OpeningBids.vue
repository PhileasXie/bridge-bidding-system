<template>
  <div class="bridge-card">
    <h2 class="bridge-title">开叫体系</h2>
    
    <!-- 开叫表格 -->
    <el-table :data="openingBids" style="width: 100%" border>
      <el-table-column prop="bid" label="叫品" width="120">
        <template #default="{ row }">
          <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="points" label="点力范围" width="150">
        <template #default="{ row }">
          <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述">
        <template #default="{ row }">
          <div class="space-y-1">
            <p>{{ suitToEmoji(row.description) }}</p>
            <p v-if="row.note" class="text-sm text-gray-500">{{ suitToEmoji(row.note) }}</p>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 详细说明 -->
    <div class="mt-8 space-y-6">
      <div v-for="(section, index) in detailedSections" :key="index" class="bridge-card">
        <h3 class="bridge-subtitle">{{ suitToEmoji(section.title) }}</h3>
        <div class="prose max-w-none">
          <template v-for="(paragraph, pIndex) in section.content" :key="pIndex">
            <p v-if="typeof paragraph === 'string'">{{ suitToEmoji(paragraph) }}</p>
            <ul v-else-if="Array.isArray(paragraph)" class="list-disc pl-6">
              <li v-for="(item, i) in paragraph" :key="i">{{ suitToEmoji(item) }}</li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 花色缩写转emoji
function suitToEmoji(str: string) {
  return str
    .replace(/C/g, '♣️')
    .replace(/D/g, '♦️')
    .replace(/H/g, '♥️')
    .replace(/S/g, '♠️')
}

const openingBids = ref([
  {
    bid: 'Pass',
    points: '0-11点',
    description: '均型牌',
    note: ''
  },
  {
    bid: '1C/1D',
    points: '12-21点',
    description: '3张以上C/D，没有5张高花套',
    note: ''
  },
  {
    bid: '1H/1S',
    points: '12-21点',
    description: '5张以上H/S，第3家允许轻开叫',
    note: ''
  },
  {
    bid: '1NT',
    points: '15-17点',
    description: '平均牌型，允许有5张高花套',
    note: ''
  },
  {
    bid: '2C',
    points: '22点以上',
    description: '任意牌型；或18点以上，9个以上赢墩',
    note: ''
  },
  {
    bid: '2D',
    points: '6-10点',
    description: '好的6张以上D套，阻击叫',
    note: ''
  },
  {
    bid: '2H',
    points: '6-10点',
    description: '好的6张以上H套，阻击叫',
    note: ''
  },
  {
    bid: '2S',
    points: '6-10点',
    description: '好的6张以上S套，阻击叫',
    note: ''
  },
  {
    bid: '2NT',
    points: '20-21点',
    description: '平均牌型，允许有5张高花套',
    note: ''
  },
  {
    bid: '3C/3D',
    points: '6-10点',
    description: '好的7张C/D套，阻击叫',
    note: ''
  },
  {
    bid: '3H/3S',
    points: '6-10点',
    description: '好的7张H/S套，阻击叫',
    note: ''
  },
  {
    bid: '3NT',
    points: '9-12点',
    description: '赌博性，7张以上坚固的低花套，旁门没有A或K',
    note: ''
  },
  {
    bid: '4C/4D',
    points: '6-10点',
    description: '好的8张C/D套，阻击叫',
    note: ''
  },
  {
    bid: '4H/4S',
    points: '6-10点',
    description: '好的8张H/S套，阻击叫',
    note: ''
  },
  {
    bid: '5C/5D',
    points: '8-10点',
    description: '好的9张C/D套，或8张有单缺，阻击叫',
    note: ''
  }
])

const detailedSections = ref([
  {
    title: '1C/1D/1H/1S/1NT/2C/2D/2H/2S/2NT/3C/3D/3H/3S/3NT/4C/4D/4H/4S/5C/5D 各叫品说明',
    content: [
      '1C/1D：12－21点，3张以上C/D，没有5张高花套。',
      '1H/1S：12－21点，5张以上H/S；第3家允许轻开叫。',
      '1NT：15－17点，平均牌型；允许有5张高花套。',
      '2C：22点以上，任意牌型；或18点以上，9个以上赢墩。',
      '2D/2H/2S：6－10点，好的6张以上D/H/S套，阻击叫。',
      '2NT：20－21点，平均牌型；允许有5张高花套。',
      '3C/3D/3H/3S：6－10点，好的7张C/D/H/S套，阻击叫。',
      '3NT：9－12点，赌博性，7张以上坚固的低花套，旁门没有A或K。',
      '4C/4D/4H/4S：6－10点，好的8张C/D/H/S套，阻击叫。',
      '5C/5D：8－10点，好的9张C/D套，或8张有单缺，阻击叫。'
    ]
  },
  {
    title: '开叫体系要点',
    content: [
      '1. 所有开叫均需根据牌力和牌型综合判断，避免过度冒险。',
      '2. 阻击叫需确保套质良好，避免给对手送分。',
      '3. 1NT/2NT开叫允许有5张高花套，需注意后续应叫体系的衔接。',
      [
        '开叫点力范围：',
        '— 普通开叫：12-21点',
        '— 强开叫（2C）：22点以上或9赢墩',
        '— 阻击叫：6-10点，套质要求高',
        '— 赌博3NT：9-12点，7张坚固低花'
      ]
    ]
  },
  {
    title: '常见问答',
    content: [
      [
        'Q: 1C/1D/1H/1S/1NT/2C/2D/2H/2S/2NT/3C/3D/3H/3S/3NT/4C/4D/4H/4S/5C/5D 这些开叫分别适合什么样的牌型？',
        'A: 详见上表和说明，建议结合实战多加体会。',
        'Q: 阻击叫的风险是什么？',
        'A: 如果套质不够好，容易被对手惩罚。',
        'Q: 1NT/2NT开叫有5张高花时，后续应叫怎么处理？',
        'A: 体系有专门的衔接方案，详见应叫章节。'
      ]
    ]
  }
])

const getPointTagType = (points: string) => {
  if (points.includes('22')) return 'danger'
  if (points.includes('15-17') || points.includes('20-21')) return 'warning'
  if (points.includes('12-21')) return 'success'
  if (points.includes('6-10')) return 'info'
  if (points.includes('9-12')) return 'primary'
  if (points.includes('8-10')) return 'primary'
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