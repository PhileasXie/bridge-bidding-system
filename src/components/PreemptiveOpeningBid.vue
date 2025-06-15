<template>
    <div class="bridge-card">
      <h2 class="bridge-title">第八章 阻击性开叫</h2>
  
      <!-- 阻击性开叫说明 -->
      <div class="bridge-card mb-8">
        <h3 class="bridge-subtitle">阻击性开叫</h3>
        <div class="prose max-w-none">
          <ul>
            <li><strong>2阶阻击叫</strong>：6—10点，好的6张以上套</li>
            <li><strong>3阶阻击叫</strong>：6—10点，好的7张以上套</li>
            <li><strong>4阶阻击叫</strong>：6—10点，好的8张以上套</li>
            <li><strong>赌博3NT</strong>：9—12点，坚固的7张以上低花，边花不能有A或K</li>
          </ul>
        </div>
      </div>
  
      <!-- 一、2阶阻击开叫的应叫 -->
      <div class="mb-8">
        <h3 class="bridge-subtitle">一、2阶阻击开叫的应叫</h3>
        
        <!-- 2D阻击叫的应叫 -->
        <h4 class="bridge-subtitle">2♦️—? （2♦️=6—10点，6张以上♦️，阻击叫）应叫</h4>
        <el-table :data="twoDiamondPreemptResponses" style="width: 100%" border>
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
  
      <!-- 2H阻击叫的应叫 -->
      <div class="mb-8">
        <h4 class="bridge-subtitle">2♥️—? （2♥️=6—10点，6张以上♥️，阻击叫）应叫</h4>
        <el-table :data="twoHeartPreemptResponses" style="width: 100%" border>
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
  
      <!-- 2S阻击叫的应叫 -->
      <div class="mb-8">
        <h4 class="bridge-subtitle">2♠️—? （2♠️=6—10点，6张以上♠️，阻击叫）应叫</h4>
        <el-table :data="twoSpadePreemptResponses" style="width: 100%" border>
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
  
      <!-- 2D-2H后的再叫 -->
      <div class="mb-8">
        <h4 class="bridge-subtitle">2♦️—2♥️（2♥️=15点以上，5张以上♥️，逼叫）后开叫方的再叫</h4>
        <el-table :data="twoDiamondTwoHeartRebid" style="width: 100%" border>
          <el-table-column prop="rebid" label="再叫" width="120">
            <template #default="{ row }">
              <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
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
  
      <!-- 其他所有后续叫牌序列的表格... -->
      <!-- 由于内容非常多，这里省略了其他表格的完整代码 -->
  
      <!-- 二、2阶阻击叫的奥古斯特问叫 -->
      <div class="mb-8">
        <h3 class="bridge-subtitle">二、2阶阻击叫的奥古斯特问叫</h3>
        <h4 class="bridge-subtitle">2♦️/2♥️/2♠️—2NT（2NT=13点以上，2张以上♦️/♥️/♠️，奥古斯特问叫）后开叫方的再叫</h4>
        <el-table :data="augustAskingRebid" style="width: 100%" border>
          <el-table-column prop="rebid" label="再叫" width="120">
            <template #default="{ row }">
              <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
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
  
      <!-- 奥古斯特问叫后的后续叫牌 -->
      <div class="mb-8">
        <h4 class="bridge-subtitle">2♦️/2♥️/2♠️—2NT—3♣️/3♦️/3♥️/3♠️后应叫方的再叫</h4>
        <el-table :data="augustFollowUpRebid" style="width: 100%" border>
          <el-table-column prop="rebid" label="再叫" width="120">
            <template #default="{ row }">
              <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
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
  
      <!-- 三、3阶阻击开叫的应叫 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-bridge-blue">三、3阶阻击开叫的应叫</h3>
      
      <!-- 3C阻击叫的应叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">3♣️——？（3♣️=6—10点，7张以上♣️，阻击叫）</h4>
        <el-table :data="threeClubPreemptResponses" border stripe>
          <el-table-column prop="bid" label="叫品" width="100">
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
        <p class="text-sm text-gray-600 mt-2">注：3♦️/3♥️/3♠️阻击叫的后续叫牌参考3♣️的后续叫牌。基本原则是：叫新花5张以上逼叫；加叫进局可强可弱；简单加叫至部分定约为加深阻击，不逼叫。</p>
      </div>
    </div>

    <!-- 四、赌博性3NT开叫的应叫 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-bridge-blue">四、赌博性3NT开叫的应叫</h3>
      
      <!-- 3NT开叫的应叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">3NT——？（3NT=9—12点，坚固的7张以上低花，边花不能有A或K）</h4>
        <el-table :data="gamblingThreeNTResponses" border stripe>
          <el-table-column prop="bid" label="叫品" width="100">
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

      <!-- 3NT-4D后的再叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">3NT—4♦️（4♦️=17点以上，问叫开叫人牌型，满贯兴趣）——？</h4>
        <el-table :data="gamblingThreeNTFourDiamondRebid" border stripe>
          <el-table-column prop="rebid" label="再叫" width="100">
            <template #default="{ row }">
              <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
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
    </div>

    <!-- 五、阻击叫被干扰后的应叫 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-bridge-blue">五、阻击叫被干扰后的应叫</h3>
      
      <!-- 2H被加倍后的应叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">2♥️ —（×）— ？</h4>
        <el-table :data="twoHeartDoubledResponses" border stripe>
          <el-table-column prop="bid" label="叫品" width="100">
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

      <!-- 2H被2S争叫后的应叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">2♥️ —（2♠️）— ？</h4>
        <el-table :data="twoHeartTwoSpadeResponses" border stripe>
          <el-table-column prop="bid" label="叫品" width="100">
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
        <p class="text-sm text-gray-600 mt-2">注：敌方对其他花色阻击叫的争叫参考以上两种应对方法。</p>
      </div>
    </div>
</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { ElTable, ElTableColumn, ElTag } from 'element-plus'
  
  // 花色转换为emoji的函数
  const suitToEmoji = (text: string): string => {
    return text
      .replace(/♣️/g, '♣️')
      .replace(/♦️/g, '♦️')
      .replace(/♥️/g, '♥️')
      .replace(/♠️/g, '♠️')
      .replace(/C/g, '♣️')
      .replace(/D/g, '♦️')
      .replace(/H/g, '♥️')
      .replace(/S/g, '♠️')
      .replace(/NT/g, 'NT')
      .replace(/Pass/g, 'Pass')
  }
  
  // 点力标签类型
  const getPointTagType = (points: string): string => {
    if (points.includes('0') || points.includes('1') || points.includes('2') || points.includes('3')) {
      return 'info'
    } else if (points.includes('4') || points.includes('5') || points.includes('6') || points.includes('7')) {
      return 'warning'
    } else if (points.includes('8') || points.includes('9') || points.includes('10') || points.includes('11')) {
      return 'success'
    } else {
      return 'danger'
    }
  }
  
  // 2D阻击叫的应叫数据
  const twoDiamondPreemptResponses = ref([
    { bid: 'Pass', points: '0—12点', description: '不符合其他叫品。' },
    { bid: '2H/2S', points: '15点以上', description: '5张以上♥️/♠️，逼叫。' },
    { bid: '2NT', points: '13点以上', description: '奥古斯特问叫；通常2张以上♦️。' },
    { bid: '3C', points: '16点以上', description: '5张以上♣️，逼叫。' },
    { bid: '3D', points: '5—12点', description: '3张以上♦️，加深阻击，不逼叫。' },
    { bid: '3NT', points: '15—19点', description: '有坚固的6张以上♣️套，止叫。' },
    { bid: '4C', points: '7—13点', description: '半坚固的7张以上♣️，不逼叫。' },
    { bid: '4D', points: '5—12点', description: '4张以上♦️，通常有单缺，加深阻击，不逼叫。' },
    { bid: '4H/4S', points: '10—14点', description: '7张以上♥️/♠️，止叫。' },
    { bid: '5D', points: '5—12点', description: '5—12点，加深阻击。' },
    { bid: '5D', points: '16—19点', description: '♦️好配合，有足够的赢墩完成定约。' }
  ])
  
  // 2H阻击叫的应叫数据
  const twoHeartPreemptResponses = ref([
    { bid: 'Pass', points: '0—12点', description: '不符合其他叫品。' },
    { bid: '2S', points: '15点以上', description: '5张以上♠️，逼叫。' },
    { bid: '2NT', points: '13以上', description: '奥古斯特问叫；通常2张以上♥️。' },
    { bid: '3C/3D', points: '16点以上', description: '5张以上♣️/♦️，逼叫。' },
    { bid: '3H', points: '5—12点', description: '3张以上♥️，加深阻击，不逼叫。' },
    { bid: '3NT', points: '15—19点', description: '有坚固的6张以上低花套，止叫。' },
    { bid: '4C/4D', points: '7—13点', description: '半坚固的7张以上♣️/♦️，不逼叫。' },
    { bid: '4H', points: '5—12点', description: '5—12点，4张以上H，加深阻击。' },
    { bid: '', points: '16—19点', description: '16—19点，2张以上H，止叫。' },
    { bid: '4S', points: '10—14点', description: '7张以上♠️，止叫。' }
  ])
  
  // 2S阻击叫的应叫数据
  const twoSpadePreemptResponses = ref([
    { bid: 'Pass', points: '0—12点', description: '不符合其他叫品。' },
    { bid: '2NT', points: '13点以上', description: '奥古斯特问叫；通常2张以上♠️。' },
    { bid: '3C/3D', points: '16点以上', description: '5张以上♣️/♦️，逼叫。' },
    { bid: '3H', points: '16点以上', description: '5张以上♥️，逼叫。' },
    { bid: '3S', points: '5—12点', description: '3张以上♠️，加深阻击，不逼叫。' },
    { bid: '3NT', points: '15—19点', description: '有坚固的6张以上低花套，止叫。' },
    { bid: '4C/4D', points: '7—13点', description: '半坚固的7张以上♣️/♦️，不逼叫。' },
    { bid: '4H', points: '7—14点', description: '半坚固的7张以上♥️，止叫。' },
    { bid: '4S', points: '5—12点', description: '5—12点，4张以上♠️，加深阻击。' },
    { bid: '', points: '16—19点', description: '16—19点，2张以上♠️，止叫。' }
  ])
  
  // 2D-2H后开叫方的再叫数据
  const twoDiamondTwoHeartRebid = ref([
    { rebid: '2S', points: '8—10点', description: '♠️有大牌，没有3张♥️，逼叫。' },
    { rebid: '2NT', points: '8—10点', description: '高限，没有3张♥️，不逼叫。' },
    { rebid: '3C', points: '8—10点', description: '♣️有大牌，没有3张♥️，逼叫。' },
    { rebid: '3D', points: '6—7点', description: '低限，没有3张♥️，不逼叫。' },
    { rebid: '3H', points: '6—7点', description: '低限，3张♥️，不逼叫。' },
    { rebid: '4H', points: '8—10点', description: '高限，3张♥️，止叫。' }
  ])
  
  // 奥古斯特问叫后开叫方的再叫数据
  const augustAskingRebid = ref([
    { rebid: '3C', points: '6—8点', description: '低限，开叫花色质量差。' },
    { rebid: '3D', points: '6—8点', description: '低限，开叫花色质量好。' },
    { rebid: '3H', points: '9—10点', description: '高限，开叫花色质量差。' },
    { rebid: '3S', points: '9—10点', description: '高限，开叫花色质量好。' },
    { rebid: '3NT', points: '9—10点', description: '高限，开叫花色为AKQXXX。' }
  ])
  
  // 奥古斯特问叫后应叫方的后续再叫数据
  const augustFollowUpRebid = ref([
    { rebid: '3D/3H/3S', points: '12—14点', description: '赢墩不足，止叫。' },
    { rebid: '新花色', points: '15点以上', description: '通常2张以上♦️/♥️/♠️，扣叫，满贯兴趣。' },
    { rebid: '3NT', points: '13点以上', description: '通常2张以上♦️/♥️/♠️，同伴示选。' },
    { rebid: '4D/4H/4S', points: '13点以上', description: '通常2张以上♦️/♥️/♠️，止叫。' }
  ])
  
  // 3C阻击叫的应叫数据
  const threeClubPreemptResponses = ref([
    { bid: 'Pass', points: '0—12点', description: '不符合以下叫品。' },
    { bid: '3D', points: '15点以上', description: '5张以上♦️，逼叫。' },
    { bid: '3H', points: '15点以上', description: '5张以上♥️，逼叫。' },
    { bid: '3S', points: '15点以上', description: '5张以上♠️，逼叫。' },
    { bid: '3NT', points: '15—20点', description: '未叫花色均有止张，止叫。' },
    { bid: '4C', points: '5—10点', description: '3张以上♣️，不逼叫。' },
    { bid: '4H', points: '10—16点', description: '7张以上♥️，止叫。' },
    { bid: '4S', points: '10—16点', description: '7张以上♠️，止叫。' },
    { bid: '5C', points: '16—19点', description: '2张以上♣️，止叫；或5—12点4张以上♣️，加深阻击。' }
  ])

  // 赌博性3NT开叫的应叫数据
  const gamblingThreeNTResponses = ref([
    { bid: 'Pass', points: '6—17点', description: '保证3门花色有止张。' },
    { bid: '4C', points: '0—13点', description: 'Pass与改正。' },
    { bid: '4D', points: '17点以上', description: '问叫开叫人牌型，满贯兴趣，逼局。' },
    { bid: '4H', points: '12—17点', description: '7张以上♥️，止叫。' },
    { bid: '4S', points: '12—17点', description: '7张以上♠️，止叫。' },
    { bid: '4NT', points: '18—19点', description: '小满贯邀叫。' },
    { bid: '5C', points: '10—17点', description: 'Pass与改正。' },
    { bid: '6C', points: '18点以上', description: 'Pass与改正。' }
  ])

  // 3NT-4D后开叫方的再叫数据
  const gamblingThreeNTFourDiamondRebid = ref([
    { rebid: '4H', points: '9—12点', description: '所叫花色♥️单缺，逼叫。' },
    { rebid: '4S', points: '9—12点', description: '所叫花色♠️单缺，逼叫。' },
    { rebid: '4NT', points: '9—12点', description: '7 2 2 2牌型，不逼叫。' },
    { rebid: '5C', points: '9—12点', description: '♣️套，♦️单缺，不逼叫。' },
    { rebid: '5D', points: '9—12点', description: '♦️套，♣️单缺，不逼叫。' }
  ])

  // 2H被加倍后的应叫数据
  const twoHeartDoubledResponses = ref([
    { bid: 'Pass', points: '0—14点', description: '不符合下面的叫品。' },
    { bid: '××', points: '15点以上', description: '通常无♥️支持，准备惩罚。' },
    { bid: '2S/3m', points: '6—13点', description: '6张以上♠️/♣️/♦️，不逼叫。' },
    { bid: '2NT', points: '13点以上', description: '通常2张以上♥️，奥古斯特问叫。' },
    { bid: '3H', points: '5—12点', description: '3张以上♥️，不逼叫。' },
    { bid: '3NT', points: '15—19点', description: '进局止叫。' },
    { bid: '3S/4m', points: '7—13点', description: '7张以上♠️/♣️/♦️，阻击叫。' },
    { bid: '4H', points: '16—19点', description: '2张以上♥️，止叫；或5—12点，4张以上♥️，加深阻击。' }
  ])

  // 2H被2S争叫后的应叫数据
  const twoHeartTwoSpadeResponses = ref([
    { bid: 'Pass', points: '0—14点', description: '不符合下面的叫品。' },
    { bid: '×', points: '15点以上', description: '惩罚性加倍；在敌方所叫花色♠️有长度。' },
    { bid: '2NT', points: '14点以上', description: '3张以上♥️，建设性加叫，逼叫。' },
    { bid: '3C/3D', points: '12点以上', description: '5张以上♣️/♦️，逼叫。' },
    { bid: '3H', points: '5—13点', description: '3张以上♥️，不逼叫。' },
    { bid: '3S', points: '20点以上', description: '3张以上♥️，和♠️控制无关，满贯兴趣。' },
    { bid: '3NT', points: '15—19点', description: '进局止叫。' },
    { bid: '4H', points: '16—19点', description: '2张以上♥️，止叫；或5—12点，4张以上♥️，加深阻击。' }
  ])
  
  </script>