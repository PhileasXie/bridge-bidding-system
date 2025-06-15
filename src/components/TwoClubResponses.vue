<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第六章 2♣️开叫及以后的应叫</h2>

    <!-- 2C开叫说明 -->
    <div class="bridge-card mb-8">
      <h3 class="bridge-subtitle">2♣️开叫</h3>
      <div class="prose max-w-none">
        <p>22点以上，任意牌型；或18点以上，有9个以上赢墩。</p>
      </div>
    </div>

    <!-- 一、2C开叫的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">一、2♣️开叫的应叫</h3>
      <h4 class="bridge-subtitle">2♣️—? 应叫表</h4>
      <el-table :data="twoClubResponses" style="width: 100%" border>
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

    <!-- 二、2C在2D应叫后 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">二、2♣️在2♦️应叫后</h3>
      <h4 class="bridge-subtitle">2♣️—2♦️（2♦️ = 0—7点，示弱叫）后开叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondResponses" style="width: 100%" border>
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

    <!-- 2C-2D-2H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2♦️—2♥️（2♥️=18点以上，5张以上♥️，9个赢墩以上）后应叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondTwoHeartRebid" style="width: 100%" border>
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

    <!-- 2C-2D-2S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2♦️—2♠️（2♠️=18点以上，5张以上♠️，9个赢墩以上）后应叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 2C-2D-2NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2♦️—2NT（2NT=22—24点，均型牌）后应叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondTwoNTRebid" style="width: 100%" border>
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

    <!-- 2C-2D-3C后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2♦️—3♣️（3♣️=18点以上，5张以上♣️，9个赢墩以上，非均型）后应叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondThreeClubRebid" style="width: 100%" border>
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

    <!-- 2C-2D-3D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2♦️—3♦️（3♦️=18点以上，5张以上♦️，9个赢墩以上，非均型）后应叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 2C-2D-3H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2♦️—3♥️（3♥️=18点以上，4张♥️＋5张♦️）后应叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondThreeHeartRebid" style="width: 100%" border>
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

    <!-- 2C-2D-3S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2♦️—3♠️（3♠️=18点以上，4张♠️＋5张♦️）后应叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 2C-2D-3NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2♦️—3NT（3NT=25—27点，均型牌）后应叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondThreeNTRebid" style="width: 100%" border>
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

    <!-- 三、2C在2NT应叫后 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">三、2♣️在2NT应叫后</h3>
      <h4 class="bridge-subtitle">2♣️—2NT（2NT=8点以上，均型牌）后开叫方的再叫</h4>
      <el-table :data="twoClubTwoNTResponses" style="width: 100%" border>
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

    <!-- 2C-2NT-3C后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2NT—3♣️（3♣️=22点以上，斯台曼问叫）后应叫方的再叫</h4>
      <el-table :data="twoClubTwoNTThreeClubRebid" style="width: 100%" border>
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

    <!-- 2C-2NT-3C-3D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2NT—3♣️—3♦️（3♦️=8点以上，无4张高花，无5张低花）后开叫方的再叫</h4>
      <el-table :data="twoClubTwoNTThreeClubThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 四、2C在花色应叫后 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">四、2♣️在花色应叫后</h3>
      <h4 class="bridge-subtitle">2♣️—2♥️（2♥️=8点以上，5张以上♥️）后开叫方的再叫</h4>
      <el-table :data="twoClubTwoHeartResponses" style="width: 100%" border>
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

    <!-- 2C-2S后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—2♠️（2♠️=8点以上，5张以上♠️）后开叫方的再叫</h4>
      <el-table :data="twoClubTwoSpadeResponses" style="width: 100%" border>
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

    <!-- 2C-3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—3♣️（3♣️=8点以上，5张以上♣️）后开叫方的再叫</h4>
      <el-table :data="twoClubThreeClubResponses" style="width: 100%" border>
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

    <!-- 2C-3D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—3♦️（3♦️=8点以上，5张以上♦️）后开叫方的再叫</h4>
      <el-table :data="twoClubThreeDiamondResponses" style="width: 100%" border>
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

    <!-- 五、2C被干扰后的叫牌 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">五、2♣️被干扰后的叫牌</h3>
      <h4 class="bridge-subtitle">1、2♣️在敌方加倍后的应叫：2♣️—(×)—?（敌方×＝5－5双高花）</h4>
      <el-table :data="twoClubDoubledResponses" style="width: 100%" border>
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

    <!-- 2C在敌方2NT后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2、2♣️在敌方2NT后的应叫：2♣️—(2NT)—?（敌方2NT＝5－5双低花）</h4>
      <el-table :data="twoClubTwoNTInterferenceResponses" style="width: 100%" border>
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

    <!-- 2C在敌方自然花色争叫后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">3、2♣️在敌方自然花色争叫后的应叫：2♣️—(2♦️/2♥️/2♠️/3♣️)—?</h4>
      <el-table :data="twoClubNaturalInterferenceResponses" style="width: 100%" border>
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

    <!-- 2C-2D后敌方争叫的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2♣️—(/)—2♦️—(2♥️/2♠️/3♣️/3♦️)后开叫方的再叫</h4>
      <el-table :data="twoClubTwoDiamondInterferenceRebid" style="width: 100%" border>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 花色转换为emoji的函数
const suitToEmoji = (text: string) => {
  return text
    .replace(/C/g, '♣️')
    .replace(/D/g, '♦️')
    .replace(/H/g, '♥️')
    .replace(/S/g, '♠️')
    .replace(/NT/g, 'NT')
}

const getPointTagType = (points: string) => {
  if (points.includes('10点以上') || points.includes('18点以上') || points.includes('22点以上') || points.includes('25-27')) return 'success'
  if (points.includes('8点以上') || points.includes('4-7') || points.includes('5-7') || points.includes('22-24')) return 'info'
  if (points.includes('0-7') || points.includes('0-3') || points.includes('0-5') || points.includes('2-3') || points.includes('0-6')) return 'warning'
  return 'default'
}

// 2C开叫的应叫
const twoClubResponses = ref([
  { bid: '2D', points: '0-7点', description: '示弱叫' },
  { bid: '2H', points: '8点以上', description: '5张以上H，逼局' },
  { bid: '2S', points: '8点以上', description: '5张以上S，逼局' },
  { bid: '2NT', points: '8点以上', description: '均型牌；若5332牌型，5张为弱套；逼局' },
  { bid: '3C/3D', points: '8点以上', description: '5张以上C/D，逼局' },
  { bid: '3H/3S', points: '7点以上', description: '半坚固的6张以上H/S，逼局' },
  { bid: '4C/4D', points: '7点以上', description: '半坚固的6张以上C/D，逼局' },
  { bid: '4H/4S', points: '0-6点', description: '8张以上H/S' },
  { bid: '5C/5D', points: '0-6点', description: '8张以上C/D' }
])

// 2C-2D后开叫方的再叫
const twoClubTwoDiamondResponses = ref([
  { rebid: '2H', points: '18点以上', description: '5张以上H，9个以上赢墩，逼叫' },
  { rebid: '2S', points: '18点以上', description: '5张以上S，9个以上赢墩，逼叫' },
  { rebid: '2NT', points: '22-24点', description: '均型牌，可能有5张高花，不逼叫' },
  { rebid: '3C/3D', points: '18点以上', description: '5张以上C/D，9个以上赢墩，通常非均型，逼叫' },
  { rebid: '3H/3S', points: '18点以上', description: '4张H/S＋5张以上D，9个以上赢墩，逼局' },
  { rebid: '3NT', points: '25-27点', description: '均型牌，自然叫' },
  { rebid: '4NT', points: '28-31点', description: '均型牌，自然叫' }
])

// 2C-2D-2H后应叫方的再叫
const twoClubTwoDiamondTwoHeartRebid = ref([
  { rebid: '2S/3D', points: '4-7点', description: '5张以上S/D，逼局' },
  { rebid: '2NT', points: '4-7点', description: '均型，逼局' },
  { rebid: '3C', points: '0-3点', description: '二次示弱；同伴再叫3H不逼叫' },
  { rebid: '3H', points: '4-7点', description: '3张以上H，逼局' },
  { rebid: '3S', points: '5-7点', description: '3张以上H，S单缺，满贯兴趣' },
  { rebid: '4C/4D', points: '5-7点', description: '3张以上H，C/D单缺，满贯兴趣' },
  { rebid: '4H', points: '2-3点', description: '3张以上H，止叫' }
])

// 2C-2D-2S后应叫方的再叫
const twoClubTwoDiamondTwoSpadeRebid = ref([
  { rebid: '2NT', points: '4-7点', description: '均型，逼局' },
  { rebid: '3C', points: '0-3点', description: '二次示弱；同伴再叫3S不逼叫' },
  { rebid: '3D/3H', points: '4-7点', description: '5张以上D/H，逼局' },
  { rebid: '3S', points: '4-7点', description: '3张以上S，逼局' },
  { rebid: '4C/4D', points: '4-7点', description: '3张以上S，C/D单缺，满贯兴趣' },
  { rebid: '4H', points: '4-7点', description: '3张以上S，H单缺，满贯兴趣' },
  { rebid: '4S', points: '2-3点', description: '3张以上S，止叫' }
])

// 2C-2D-2NT后应叫方的再叫
const twoClubTwoDiamondTwoNTRebid = ref([
  { rebid: 'Pass', points: '0-3点', description: '均型牌' },
  { rebid: '3C', points: '3点以上', description: '傀儡斯台曼；有3~4张高花' },
  { rebid: '3D/3H', points: '0点以上', description: '雅各比转移叫，5张以上H/S' },
  { rebid: '3S', points: '3点以上', description: '低花斯台曼，至少4－4低花' },
  { rebid: '3NT', points: '4-8点', description: '无4张M，或3张M非均型，止叫' },
  { rebid: '4D/4H', points: '2-6点', description: '德克萨斯转移叫，6张以上H/S' },
  { rebid: '4S', points: '0-5点', description: '6－5以上低花套' },
  { rebid: '5C/5D', points: '3-6点', description: '7张C/D' }
])

// 2C-2D-3C后应叫方的再叫
const twoClubTwoDiamondThreeClubRebid = ref([
  { rebid: '3D', points: '0-3点', description: '二次示弱，和D无关；或4-7点，5张以上D，逼局' },
  { rebid: '3H/3S', points: '4-7点', description: '5张以上H/S，逼局' },
  { rebid: '3NT', points: '4-7点', description: '均型，没有C支持，止叫' },
  { rebid: '4C', points: '5-7点', description: '3张以上C，满贯兴趣' },
  { rebid: '4D', points: '5-7点', description: '4张C↑，D单缺，满贯兴趣' },
  { rebid: '4H/4S', points: '5-7点', description: '4张C↑，H/S单缺，满贯兴趣' },
  { rebid: '5C', points: '0-4点', description: '3张以上C，止叫' }
])

// 2C-2D-3D后应叫方的再叫
const twoClubTwoDiamondThreeDiamondRebid = ref([
  { rebid: '3H/3S', points: '4-7点', description: '5张以上H/S，逼局' },
  { rebid: '3NT', points: '0-7点', description: '不支持D，无二次示弱，无奈3NT' },
  { rebid: '4C', points: '5-7点', description: '6张以上C，逼局' },
  { rebid: '4D', points: '5-7点', description: '3张以上D，满贯兴趣' },
  { rebid: '4H/4S', points: '5-7点', description: '4张以上D，H/S单缺，满贯兴趣' },
  { rebid: '5C', points: '5-7点', description: '4张以上D，C单缺，满贯兴趣' },
  { rebid: '5D', points: '0-4点', description: '3张以上D，止叫' }
])

// 2C-2D-3H后应叫方的再叫
const twoClubTwoDiamondThreeHeartRebid = ref([
  { rebid: '3S', points: '4-7点', description: '5张以上S，无D/H支持，逼局' },
  { rebid: '3NT', points: '0-7点', description: '不支持D/H，无二次示弱，唉3NT' },
  { rebid: '4C', points: '5-7点', description: '4张H↑，和C控制无关，满贯' },
  { rebid: '4D', points: '5-7点', description: '3张以上D，满贯兴趣' },
  { rebid: '4H', points: '0-4点', description: '4张以上H，止叫' },
  { rebid: '4S', points: '5-7点', description: '4张以上H，S单缺，满贯兴趣' },
  { rebid: '5D', points: '0-4点', description: '3张以上D，止叫' }
])

// 2C-2D-3S后应叫方的再叫
const twoClubTwoDiamondThreeSpadeRebid = ref([
  { rebid: '3NT', points: '0-7点', description: '不支持D/S，无二次示弱，唉3NT' },
  { rebid: '4C', points: '4-7点', description: '4张S↑，和C控制无关，满贯兴趣' },
  { rebid: '4D', points: '5-7点', description: '3张以上D，满贯兴趣' },
  { rebid: '4H', points: '0-7点', description: '6张以上H，无D/S支持，止叫' },
  { rebid: '4S', points: '0-4点', description: '4张以上S，止叫' },
  { rebid: '5D', points: '0-4点', description: '3张以上D，止叫' }
])

// 2C-2D-3NT后应叫方的再叫
const twoClubTwoDiamondThreeNTRebid = ref([
  { rebid: '4C', points: '4-7点', description: '斯台曼问叫，问高花' },
  { rebid: '4D', points: '5-7点', description: '5张以上D，满贯兴趣' },
  { rebid: '4H/4S', points: '0-2点', description: '6张以上H/S，止叫' },
  { rebid: '4NT', points: '6-7点', description: '满贯邀叫' },
  { rebid: '5C/5D', points: '3-4点', description: '6张以上C/D，满贯邀叫' },
  { rebid: '5H/5S', points: '3-4点', description: '6张以上H/S，满贯邀叫' }
])

// 2C-2NT后开叫方的再叫
const twoClubTwoNTResponses = ref([
  { rebid: '3C', points: '22点以上', description: '斯台曼问叫，问高花；均型牌' },
  { rebid: '3D', points: '18点以上', description: '5张以上D，9个以上赢墩，逼局' },
  { rebid: '3H/3S', points: '18点以上', description: '5张以上H/S，9个以上赢墩，逼局' },
  { rebid: '3NT', points: '22-24点', description: '通常没有4张高花' },
  { rebid: '4C', points: '18点以上', description: '6张以上C，9个以上赢墩，逼局' }
])

// 2C-2NT-3C后应叫方的再叫
const twoClubTwoNTThreeClubRebid = ref([
  { rebid: '3D', points: '8点以上', description: '无4张M，无5张m，逼局' },
  { rebid: '3H/3S', points: '8点以上', description: '4张H/S，逼局' },
  { rebid: '3NT', points: '8-9点', description: '无4张M，无5张m，不逼叫' },
  { rebid: '4C/4D', points: '10点以上', description: '差的5张C/D，逼局' }
])

// 2C-2NT-3C-3D后开叫方的再叫
const twoClubTwoNTThreeClubThreeDiamondRebid = ref([
  { rebid: '3H', points: '18点以上', description: '5张H＋4张S，逼局' },
  { rebid: '3S', points: '18点以上', description: '5张S＋4张H，逼局' },
  { rebid: '3NT', points: '22-23点', description: '均型牌，止叫' },
  { rebid: '4C/4D', points: '18点以上', description: '5张以上C/D，逼局' },
  { rebid: '4H', points: '22点以上', description: '4-1-4-4牌型，H单张，逼局' },
  { rebid: '4S', points: '22点以上', description: '1-4-4-4牌型，S单张，逼局' }
])

// 四、2C在花色应叫后
// 2C-2H后开叫方的再叫
const twoClubTwoHeartResponses = ref([
  { rebid: '2S', points: '18点以上', description: '5张以上S，通常没有3张H' },
  { rebid: '2NT', points: '22-24点', description: '均型，通常没有3张H' },
  { rebid: '3C/3D', points: '18点以上', description: '5张以上C/D，通常没有3张H' },
  { rebid: '3H', points: '18点以上', description: '3张以上H' },
  { rebid: '3NT', points: '25-26点', description: '均型，通常没有3张H' }
])

// 2C-2S后开叫方的再叫
const twoClubTwoSpadeResponses = ref([
  { rebid: '2NT', points: '22-24点', description: '均型，通常没有3张S' },
  { rebid: '3C/3D', points: '18点以上', description: '5张以上C/D，通常没有3张S' },
  { rebid: '3H', points: '18点以上', description: '5张以上H，通常没有3张S' },
  { rebid: '3S', points: '18点以上', description: '3张以上S' },
  { rebid: '3NT', points: '25-26点', description: '均型，通常没有3张S' }
])

// 2C-3C后开叫方的再叫
const twoClubThreeClubResponses = ref([
  { rebid: '3D', points: '18点以上', description: '5张以上D，通常没有3张C' },
  { rebid: '3H/3S', points: '18点以上', description: '5张以上H/S，通常没有3张C' },
  { rebid: '3NT', points: '22-24点', description: '均型，通常没有3张C' },
  { rebid: '4C', points: '18点以上', description: '3张以上C' }
])

// 2C-3D后开叫方的再叫
const twoClubThreeDiamondResponses = ref([
  { rebid: '3H/3S', points: '18点以上', description: '5张以上H/S，通常没有3张D' },
  { rebid: '3NT', points: '22-24点', description: '均型，通常没有3张D' },
  { rebid: '4C', points: '18点以上', description: '5张以上C，通常没有3张D' },
  { rebid: '4D', points: '18点以上', description: '3张以上D' }
])

// 五、2C被干扰后的叫牌
// 2C在敌方加倍后的应叫
const twoClubDoubledResponses = ref([
  { bid: 'Pass', points: '0-4点', description: '示弱' },
  { bid: '××', points: '5点以上', description: '没有5张套，逼局' },
  { bid: '2H/2S', points: '5点以上', description: '所叫花色H/S有止张，逼局' },
  { bid: '2NT', points: '5点以上', description: '双高花均有止张，逼局' },
  { bid: '3C/3D', points: '5点以上', description: '5张以上C/D，逼局' }
])

// 2C在敌方2NT后的应叫
const twoClubTwoNTInterferenceResponses = ref([
  { bid: 'Pass', points: '0-4点', description: '示弱' },
  { bid: '×', points: '5点以上', description: '没有5张套，逼局' },
  { bid: '3C', points: '0-4点', description: '5－5双高花，逼叫' },
  { bid: '3D', points: '5点以上', description: '5－5双高花，逼局' },
  { bid: '3H/3S', points: '5点以上', description: '5张以上H/S，逼局' }
])

// 2C在敌方自然花色争叫后的应叫
const twoClubNaturalInterferenceResponses = ref([
  { bid: 'Pass', points: '0-4点', description: '示弱' },
  { bid: '×', points: '5点以上', description: '没有5张套，逼局' },
  { bid: '2NT', points: '5点以上', description: '敌方争叫花色有止张，逼局' },
  { bid: '新花', points: '5点以上', description: '5张以上套，逼局' }
])

// 2C-2D后敌方争叫的再叫
const twoClubTwoDiamondInterferenceRebid = ref([
  { rebid: 'Pass', points: '22点以上', description: '敌方争叫花色有长度，逼叫' },
  { rebid: '×', points: '22点以上', description: '技术性加倍' },
  { rebid: '2NT', points: '22-24点', description: '敌方争叫花色有止张，不逼叫' },
  { rebid: '新花', points: '18点以上', description: '5张以上套，逼叫' }
])
</script>

<style scoped>
.prose {
  @apply text-gray-700 leading-relaxed;
}

.prose p {
  @apply mb-4;
}
</style>