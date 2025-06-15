<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第九章  满贯叫牌</h2>
    
    <!-- 一、罗马关键张问叫 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-bridge-blue">一、罗马关键张问叫</h3>
      
      <!-- 4NT问叫的基本应叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">4NT —— ？</h4>
        <el-table :data="romanKeyCardResponses" border stripe>
          <el-table-column prop="bid" label="叫品" width="100">
            <template #default="{ row }">
              <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="说明">
            <template #default="{ row }">
              <span>{{ suitToEmoji(row.description) }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 有缺门时的答叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">有缺门时答叫：</h4>
        <el-table :data="voidResponses" border stripe>
          <el-table-column prop="bid" label="叫品" width="100">
            <template #default="{ row }">
              <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="说明">
            <template #default="{ row }">
              <span>{{ suitToEmoji(row.description) }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 干扰后的应对 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">干扰后的应对：</h4>
        <div class="text-sm space-y-2">
          <p><strong>1、当敌方在4NT问叫花色干扰时：</strong>加倍为第1级；Pass为第2级；在敌方所叫花色上加1级为第3级；类推。</p>
          <p><strong>2、当干扰超过5阶将牌时按DO（奇数）/ PE（偶数）答叫：</strong>×＝1或3个A； Pass＝0或2或4个A。</p>
        </div>
      </div>

      <!-- 将牌Q问叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">将牌Q问叫（4NT————5♣️/5♦️后）</h4>
        <p class="text-sm mb-3">当答叫是5♣️或5♦️时，问叫者的加级叫（非将牌花色）是将牌Q问叫；答叫如下：</p>
        <el-table :data="trumpQueenResponses" border stripe>
          <el-table-column prop="bid" label="叫品" width="150">
            <template #default="{ row }">
              <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="说明">
            <template #default="{ row }">
              <span>{{ suitToEmoji(row.description) }}</span>
            </template>
          </el-table-column>
        </el-table>
        <p class="text-sm text-gray-600 mt-2">注：如果你没有将牌Q，但确知联手至少持有10张将牌时（如：××××对6张套、×××××对5张套），答叫时就按有将牌Q处理。</p>
      </div>

      <!-- 控制问叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">控制问叫</h4>
        <div class="text-sm space-y-2">
          <p><strong>4、在罗马关键张问叫后，问叫者的非将牌Q问叫的新花色再叫，是该花色的控制问叫。</strong></p>
          <p><strong>（1）如果在控制问叫的花色和将牌花色之间，至少有一个以上叫牌空间时，答叫为——</strong></p>
          <p class="ml-4">第一级＝无第3轮控制；第二级＝有第3轮控制；第三级＝有第2轮控制。</p>
          <p><strong>（2）如果在控制问叫的花色和将牌花色之间，没有叫牌空间时，</strong>答叫者持第2轮控制时直接叫上大满贯，反之即叫回将牌花色。</p>
        </div>
      </div>

      <!-- K问叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">K问叫（5NT）</h4>
        <p class="text-sm mb-3">在罗马关键张问叫后，问叫者再叫5NT是K问叫，承诺联手持有5个关键张和将牌Q。</p>
        <el-table :data="kingAskingResponses" border stripe>
          <el-table-column prop="bid" label="叫品" width="120">
            <template #default="{ row }">
              <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="说明">
            <template #default="{ row }">
              <span>{{ suitToEmoji(row.description) }}</span>
            </template>
          </el-table-column>
        </el-table>
        <p class="text-sm text-gray-600 mt-2">注：在5NT问K后，继续叫新花色——问是否有额外赢墩以便上大满贯。</p>
      </div>

      <!-- 缺门关键张问叫 -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">缺门（排除）关键张问叫</h4>
        <p class="text-sm mb-3">（将牌Q=0.5关键张）</p>
        <el-table :data="exclusionKeyCardResponses" border stripe>
          <el-table-column prop="level" label="级别" width="100">
            <template #default="{ row }">
              <span class="font-bold text-bridge-blue">{{ row.level }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="说明">
            <template #default="{ row }">
              <span>{{ row.description }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 二、格伯A、K问叫 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-bridge-blue">二、格伯A、K问叫</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- A问叫 -->
        <div>
          <h4 class="text-lg font-semibold mb-3 text-bridge-green">4♣️——？</h4>
          <el-table :data="gerberAceResponses" border stripe>
            <el-table-column prop="bid" label="叫品" width="80">
              <template #default="{ row }">
                <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="description" label="说明">
              <template #default="{ row }">
                <span>{{ row.description }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- K问叫 -->
        <div>
          <h4 class="text-lg font-semibold mb-3 text-bridge-green">5♣️——？</h4>
          <el-table :data="gerberKingResponses" border stripe>
            <el-table-column prop="bid" label="叫品" width="80">
              <template #default="{ row }">
                <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="description" label="说明">
              <template #default="{ row }">
                <span>{{ row.description }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <!-- 三、布莱克伍德问叫 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-bridge-blue">三、布莱克伍德问叫</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- A问叫 -->
        <div>
          <h4 class="text-lg font-semibold mb-3 text-bridge-green">4NT— ？</h4>
          <el-table :data="blackwoodAceResponses" border stripe>
            <el-table-column prop="bid" label="叫品" width="80">
              <template #default="{ row }">
                <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="description" label="说明">
              <template #default="{ row }">
                <span>{{ row.description }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- K问叫 -->
        <div>
          <h4 class="text-lg font-semibold mb-3 text-bridge-green">5NT— ？</h4>
          <el-table :data="blackwoodKingResponses" border stripe>
            <el-table-column prop="bid" label="叫品" width="80">
              <template #default="{ row }">
                <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.bid) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="description" label="说明">
              <template #default="{ row }">
                <span>{{ row.description }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <!-- 四、扣叫控制 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-bridge-blue">四、扣叫控制</h3>
      
      <div class="mb-6">
        <p class="text-sm mb-4">在找到将牌配合后，再叫新花色表示该花色至少有第2轮控制；如果是高花配合，只有高于≥3♠️的新花才可以被认为是扣叫，如果是低花配合，只有高于3NT的新花才可以被认为是扣叫；同时扣叫都是从最经济的花色开始的，如果越过某个花色则表示该花色没有控制。</p>
        
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">探贯时何时用罗马关键张问叫，何时用扣叫的几条原则：</h4>
        <div class="text-sm space-y-2">
          <p><strong>（1）</strong> 如果你有缺门，则运用扣叫为宜。</p>
          <p><strong>（2）</strong> 如果你手中某个花色上没有第1轮控制和第2轮控制，则运用扣叫为宜。</p>
          <p><strong>（3）</strong> 如果你需要知道同伴是否持有某花色的K，则运用扣叫为宜。</p>
          <p><strong>（4）</strong> 当问题在于有几个A时，不论其位置如何，或在于有几个K时，不论其位置如何，则运用罗马关键张问叫为宜。</p>
          <p><strong>（5）</strong> 如果一手牌虽然适合运用扣叫，但要求所扣叫的花色级别太高，则运用罗马关键张问叫为宜；如果要求所扣叫的花色级别较低，则运用扣叫为宜。</p>
          <p><strong>（6）</strong> 你有满贯潜势，但无法安排扣叫，则运用罗马关键张问叫为宜。</p>
          <p><strong>（7）</strong> 如果打满贯在某花色上依赖于有无第3轮控制，扣叫可以找到它。</p>
          <p><strong>（8）</strong> 在同伴手中如有1个关键缺门或单张，则用扣叫，不用罗马关键张问叫。</p>
          <p><strong>（9）</strong> 如果准备用5NT问将牌，应当用扣叫系统。</p>
          <p><strong>（10）</strong>扣叫总是从低到高开始，可以扣A或K：</p>
          <div class="ml-4 space-y-1">
            <p>① 扣叫永远从最低水平开始，如果跳过一级（某花色）则表示无法扣叫该花色。</p>
            <p>② 扣叫自己的2盖1花色，表示有3张大牌中的2张。（A、K、Q）</p>
            <p>③ 扣叫同伴的2盖1花色，表示有3张大牌中的1张。（A、K、Q）</p>
            <p>④ 扣叫未叫花色，表示有第1或第2轮控制。（A或K；缺门或单张）</p>
            <p>⑤ 任何一方再叫4NT均为罗马关键张问叫。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 五、非正常跳叫到5阶高花 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-bridge-blue">五、非正常跳叫到5阶高花</h3>
      
      <div class="mb-6">
        <p class="text-sm mb-4">有时由于叫牌空间限制，不能显示配合的同时又在成局以下显示满贯兴趣，跳叫到5阶也是一种显示满贯兴趣的方法。</p>
        
        <h4 class="text-lg font-semibold mb-3 text-bridge-green">1、当同伴间已叫过三门花色，只有一门未叫时：</h4>
        <div class="text-sm mb-4">
          <p>若搭档一方主动在5阶叫出已同意为叫牌的高花，即显示他在已叫过的两门花色均有首轮控制（有A或缺门），并持有一可提供大量赢墩的坚固套，但唯有未叫花色有两个失张。问同伴该花色的持牌情况，作小满贯邀叫——对此同伴回答如下：</p>
          <div class="ml-4 space-y-1">
            <p><strong>（1）同伴Pass：</strong>表示未叫花色也有2个以上失张。</p>
            <p><strong>（2）同伴在此未叫花色有控制时，按如下叫牌：</strong></p>
            <div class="ml-4 space-y-1">
              <p>① 6阶叫将牌——表示未叫花色单张或有K，将成为庄家。</p>
              <p>② 6阶叫新花——表示未叫花色有首控，叫新花为扣叫。</p>
              <p>③ 叫5NT ——— 表示未叫花色有K，将成为明手，请选择定约。</p>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-semibold mb-3 text-bridge-green">2、敌方争叫或加倍过一门花色：</h4>
        <p class="text-sm mb-4">这表示邀叫人其他两门花色均有首轮控制（有A或缺门），并持有一可提供大量赢墩的坚固套，但唯有敌方争叫或加倍的花色有两个失张。问同伴该花色的持牌情况，作小满贯邀叫。（答叫同1）</p>

        <h4 class="text-lg font-semibold mb-3 text-bridge-green">3、敌方未争叫或未加倍过，定约方也只叫过1~2门花色：</h4>
        <div class="text-sm">
          <p class="mb-2">这表示邀叫人其他三门花色均有首轮控制（有A或缺门），并持有一可提供大量赢墩的坚固套，但唯有将牌3~4小张，不宜作罗马关键张问叫，而只关心同伴有几张大将牌的一种约定性邀叫。对此同伴回答如下：</p>
          <div class="ml-4 space-y-1">
            <p>① Pass ——— 有1张大将牌。</p>
            <p>② 6阶将牌——有2张大将牌。</p>
            <p>③ 7阶将牌——有3张大将牌。</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'

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

// 罗马关键张问叫基本应叫数据
const romanKeyCardResponses = ref([
  { bid: '5C', description: '= 1 或4个A。（5♦️是问叫牌Q；若♦️是将牌则5♥️是问将牌Q）' },
  { bid: '5D', description: '= 0 或3个A。（5♥️是问叫牌Q；若♥️是将牌则5♠️是问将牌Q）' },
  { bid: '5H', description: '= 2 或5个A，无将牌Q。' },
  { bid: '5S', description: '= 2 或5个A，有将牌Q。' }
])

// 有缺门时的答叫数据
const voidResponses = ref([
  { bid: '5NT', description: '= 0或2个A，有一缺门。' },
  { bid: '6C', description: '= 1或3个A，♣️缺门。' },
  { bid: '6D', description: '= 1或3个A，♦️缺门。' },
  { bid: '6H', description: '= 1或3个A，♥️缺门。' },
  { bid: '6阶将牌', description: '= 1或3个A，比将牌高的某一花色缺门。' }
])

// 将牌Q问叫应叫数据
const trumpQueenResponses = ref([
  { bid: '5阶将牌', description: '无将牌Q。' },
  { bid: '6阶将牌', description: '有将牌Q；没有低于将牌的K，且无额外实力。' },
  { bid: '5NT', description: '有将牌Q；没有低于将牌的K，但有额外实力。' },
  { bid: '低于6阶将牌花色', description: '有将牌Q；有该花色的K。' },
  { bid: '高于6阶将牌花色', description: '有将牌Q；有该花色的K；且有额外实力，可以打6NT。' }
])

// K问叫应叫数据
const kingAskingResponses = ref([
  { bid: '6阶将牌', description: '无边花K；或有边花K高于将牌花色，且没有额外实力。' },
  { bid: '6阶花色', description: '有边花K；如果边花K高于将牌花色，则表示有额外实力。' },
  { bid: '7阶将牌', description: '能数出13个赢墩。' }
])

// 缺门关键张问叫应叫数据
const exclusionKeyCardResponses = ref([
  { level: '第1级', description: '0或0.5个关键张。' },
  { level: '第2级', description: '1个关键张。' },
  { level: '第3级', description: '2个关键张。' },
  { level: '第4级', description: '2.5个关键张。' },
  { level: '大满贯', description: '3个以上关键张。' }
])

// 格伯A问叫应叫数据
const gerberAceResponses = ref([
  { bid: '4D', description: '0或4个A。' },
  { bid: '4H', description: '1个A。' },
  { bid: '4S', description: '2个A。' },
  { bid: '4NT', description: '3个A。' }
])

// 格伯K问叫应叫数据
const gerberKingResponses = ref([
  { bid: '5C', description: '0个K。' },
  { bid: '5D', description: '1个K。' },
  { bid: '5H', description: '2个K。' },
  { bid: '5NT', description: '3个K。' },
  { bid: '6C', description: '4个K。' }
])

// 布莱克伍德A问叫应叫数据
const blackwoodAceResponses = ref([
  { bid: '5C', description: '0或4个A。' },
  { bid: '5D', description: '1个A。' },
  { bid: '5H', description: '2个A。' },
  { bid: '5S', description: '3个A。' }
])

// 布莱克伍德K问叫应叫数据
const blackwoodKingResponses = ref([
  { bid: '6C', description: '0个K。' },
  { bid: '6D', description: '1个K。' },
  { bid: '6H', description: '2个K。' },
  { bid: '6S', description: '3个K。' },
  { bid: '6NT', description: '4个K。' }
])

</script>