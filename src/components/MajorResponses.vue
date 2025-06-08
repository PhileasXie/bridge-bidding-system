<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第三章 1♥️/1♠️开叫及以后的应叫</h2>

    <!-- 1H/1S应叫主表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♥️/1♠️—? 应叫表</h3>
      <el-table :data="oneMajorResponses" style="width: 100%" border>
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

    <!-- 支持应叫详细表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">高花支持应叫详解</h3>
      <el-table :data="majorSupportResponses" style="width: 100%" border>
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
          <li>优先支持同伴的高花开叫，特别是有3张以上支持时。</li>
          <li>新花色应叫为逼叫，需要有足够的点力。</li>
          <li>跳叫支持显示不同的点力范围和牌型。</li>
          <li>1NT应叫否认对开叫花色的支持。</li>
        </ul>
      </div>
    </div>

    <!-- 详细说明、要点、问答等 -->
    <div class="bridge-card">
      <h3 class="bridge-subtitle">体系要点 & 常见问答</h3>
      <div class="prose max-w-none">
        <ul class="list-disc pl-6 mb-4">
          <li>高花开叫后的应叫以支持为优先考虑。</li>
          <li>有3张以上支持时，根据点力选择合适的支持水平。</li>
          <li>无支持时，优先叫新花色或1NT。</li>
        </ul>
        <ul class="list-disc pl-6">
          <li>Q: 什么时候选择跳叫支持？<br/>A: 有4张支持且10-12点时。</li>
          <li>Q: 1NT应叫的含义？<br/>A: 6-10点，否认对开叫花色的支持。</li>
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

const oneMajorResponses = ref([
  { bid: 'Pass', points: '0-5点', description: '弱牌，无配合' },
  { bid: '1S', points: '6-11点', description: '对1H开叫，4张以上S' },
  { bid: '1NT', points: '6-10点', description: '否认对开叫花色支持，均型' },
  { bid: '2C/2D', points: '10点以上', description: '4张以上低花，新花逼叫' },
  { bid: '2H/2S', points: '6-10点', description: '3张以上支持，不逼叫' },
  { bid: '2NT', points: '11-12点', description: '否认支持，邀叫' },
  { bid: '3C/3D', points: '12-15点', description: '5张以上低花，逼局' },
  { bid: '3H/3S', points: '10-12点', description: '4张支持，邀叫' },
  { bid: '3NT', points: '13-15点', description: '否认支持，止叫' },
  { bid: '4H/4S', points: '6-9点', description: '5张支持，阻击性' },
])

const majorSupportResponses = ref([
  { bid: '2H/2S', points: '6-10点', description: '3张支持，简单加叫' },
  { bid: '3H/3S', points: '10-12点', description: '4张支持，邀叫' },
  { bid: '4H/4S', points: '6-9点', description: '5张支持，阻击性加叫' },
  { bid: '1NT', points: '6-10点', description: '否认3张支持' },
  { bid: '2NT', points: '11-12点', description: '否认3张支持，邀叫' },
  { bid: '3NT', points: '13-15点', description: '否认3张支持，止叫' },
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
