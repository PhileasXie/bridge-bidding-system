<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第二章 1♦️开叫及以后的应叫</h2>

    <!-- 1D应叫主表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—? 应叫表</h3>
      <el-table :data="oneDiamondResponses" style="width: 100%" border>
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

    <!-- 注意事项卡片 -->
    <div class="bridge-card mb-8">
      <h3 class="bridge-subtitle">注意事项</h3>
      <div class="prose max-w-none">
        <ul class="list-disc pl-6">
          <li>1♥️/1♠️：6-11点，4张以上高花，自然应叫。</li>
          <li>1NT：6-10点，没有4张高花，均型牌。</li>
          <li>2♣️：10点以上，4张以上♣️，逼叫。</li>
          <li>2♦️：6-10点，4张以上♦️支持，不逼叫。</li>
        </ul>
      </div>
    </div>

    <!-- 详细说明、要点、问答等 -->
    <div class="bridge-card">
      <h3 class="bridge-subtitle">体系要点 & 常见问答</h3>
      <div class="prose max-w-none">
        <ul class="list-disc pl-6 mb-4">
          <li>1♦️开叫后的应叫相对简单，主要遵循自然叫牌原则。</li>
          <li>优先显示4张以上高花，其次考虑支持♦️。</li>
          <li>新花色应叫为逼叫，支持应叫不逼叫。</li>
        </ul>
        <ul class="list-disc pl-6">
          <li>Q: 什么时候选择2♦️支持？<br/>A: 有4张以上♦️支持且点力适中时。</li>
          <li>Q: 1NT应叫的条件？<br/>A: 6-10点，没有4张高花，均型牌。</li>
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

const oneDiamondResponses = ref([
  { bid: 'Pass', points: '0-5点', description: '弱牌，无配合' },
  { bid: '1H', points: '6-11点', description: '4张以上H，自然应叫' },
  { bid: '1S', points: '6-11点', description: '4张以上S，自然应叫' },
  { bid: '1NT', points: '6-10点', description: '没有4张高花，均型牌' },
  { bid: '2C', points: '10点以上', description: '4张以上C，新花逼叫' },
  { bid: '2D', points: '6-10点', description: '4张以上D支持，不逼叫' },
  { bid: '2H/2S', points: '4-8点', description: '6张以上H/S，阻击叫' },
  { bid: '2NT', points: '11-12点', description: '没有4张高花，邀叫' },
  { bid: '3C', points: '12-15点', description: '5张以上C，逼局' },
  { bid: '3D', points: '10-12点', description: '5张以上D支持，邀叫' },
  { bid: '3H/3S', points: '4-8点', description: '7张以上H/S，阻击叫' },
  { bid: '3NT', points: '13-15点', description: '没有4张高花，止叫' },
])

const getPointTagType = (points: string) => {
  if (points.includes('10点以上') || points.includes('11-12') || points.includes('18点以上') || points.includes('18-19') || points.includes('20-21')) return 'success'
  if (points.includes('6-11') || points.includes('6-10') || points.includes('12-14') || points.includes('12-15') || points.includes('13-15') || points.includes('15-17') || points.includes('5-8')) return 'info'
  if (points.includes('0-5') || points.includes('4-8')) return 'warning'
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
