<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第四章 1♠️开叫及以后的应叫</h2>

    <!-- 1S开叫说明 -->
    <div class="bridge-card mb-8">
      <h3 class="bridge-subtitle">1♠️开叫</h3>
      <div class="prose max-w-none">
        <p>12—21点，5张以上♠️；第三家允许轻开叫。</p>
      </div>
    </div>

    <!-- 一、1S开叫的应叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">一、1♠️开叫的应叫</h2>
    </div>
    
    <!-- 1S应叫主表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♠️—? 应叫表</h3>
      <el-table :data="oneSpadeResponsesFull" style="width: 100%" border>
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

    <!-- 第三家、第四家1S开叫后的应叫数据 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">第三、四家开叫 1♠️—? 应叫表</h3>
      <el-table :data="oneSpadeThirdFourthPositionResponses" style="width: 100%" border>
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

    <!-- 第三家、第四家1S开叫后2C应叫的开叫方再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️（3张以上♠️，逆德鲁里（朱瑞）约定叫，逼叫）后开叫方的再叫</h4>
      <el-table :data="oneSpadeThirdFourthTwoClubRebid" style="width: 100%" border>
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

    <div class="mb-8">
      <h2 class="bridge-title">二、1♠️在1NT应叫后</h2>
    </div>
    <!-- 1S-1NT后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT（6—12点，半逼叫）后开叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTOpenerRebid" style="width: 100%" border>
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

    <!-- 1S—1NT—2C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT—2♣️ 后应叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTTwoClubRebid" style="width: 100%" border>
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

    <!-- 1S—1NT—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT—2♦️ 后应叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1S—1NT—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT—2♥️ 后应叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1S—1NT—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT—2♠️后应叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1S—1NT—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT—2NT后应叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTTwoNTRebid" style="width: 100%" border>
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

    <div class="mb-8">
      <h2 class="bridge-title">三、1♠️在二盖一应叫后</h2>
    </div>
    <!-- 1S-2C后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️（13点以上，3~4张以上♣️，逼局）后开叫方的再叫</h4>
      <el-table :data="oneSpadeClubTwoGamingRebid" style="width: 100%" border>
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

    <!-- 1S-2C-2D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️—2♦️（12—21点，5张以上♠️＋4张以上♦️）后应叫方的再叫</h4>
      <el-table :data="oneSpadeClubTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1S-2C-2H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️—2♥️（12—21点，5张以上♠️＋4张以上♥️）后应叫方的再叫</h4>
      <el-table :data="oneSpadeClubTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1S-2C-2S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️—2♠️（12—21点，5张以上♠️，垃圾叫）后应叫方的再叫</h4>
      <el-table :data="oneSpadeClubTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1S-2C-2NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️—2NT（14—19点，均型，高限）后应叫方的再叫</h4>
      <el-table :data="oneSpadeClubTwoNTRebid" style="width: 100%" border>
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

    <!-- 1S-2C-3C后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️—3♣️（14—21点，4张以上♣️，或3张♣️带大牌）后应叫方的再叫</h4>
      <el-table :data="oneSpadeClubThreeClubRebid" style="width: 100%" border>
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

    <!-- 1S-2C-3D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️—3♦️（14—21点，4张以上♣️，♦️单缺）后应叫方的再叫</h4>
      <el-table :data="oneSpadeClubThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1S-2C-3H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️—3♥️（14—21点，4张以上♣️，♥️单缺）后应叫方的再叫</h4>
      <el-table :data="oneSpadeClubThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1S-2C-3S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♣️—3♠️（15—21点，半坚固的6张以上♠️）后应叫方的再叫</h4>
      <el-table :data="oneSpadeClubThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 1S-2D后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♦️（13点以上，4张以上♦️，逼局）后开叫方的再叫</h4>
      <el-table :data="oneSpadeDiamondTwoGamingRebid" style="width: 100%" border>
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

    <!-- 1S-2D-2H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♦️—2♥️（12—21点，5张以上♠️＋4张以上♥️）后应叫方的再叫</h4>
      <el-table :data="oneSpadeDiamondTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1S-2D-2S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♦️—2♠️（12—21点，5张以上♠️，垃圾叫）后应叫方的再叫</h4>
      <el-table :data="oneSpadeDiamondTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1S-2D-2NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♦️—2NT（14—19点，均型，高限）后应叫方的再叫</h4>
      <el-table :data="oneSpadeDiamondTwoNTRebid" style="width: 100%" border>
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

    <!-- 1S-2D-3C后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♦️—3♣️（12—21点，5张♣️，或15点以上4张♣️）后应叫方的再叫</h4>
      <el-table :data="oneSpadeDiamondThreeClubRebid" style="width: 100%" border>
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

    <!-- 1S-2D-3D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♦️—3♦️（14—21点，4张以上♦️，或3张♦️带大牌）后应叫方的再叫</h4>
      <el-table :data="oneSpadeDiamondThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1S-2D-3H/4C后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♦️—3♥️/4♣️（14—21点，4张以上♦️，♥️/♣️单缺）后应叫方的再叫</h4>
      <el-table :data="oneSpadeDiamondThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1S-2D-3S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♦️—3♠️（15—21点，半坚固的6张以上♠️）后应叫方的再叫</h4>
      <el-table :data="oneSpadeDiamondThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 1S-2H后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♥️（12点以上，5张以上♥️，逼局）后开叫方的再叫</h4>
      <el-table :data="oneSpadeHeartTwoGamingRebid" style="width: 100%" border>
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

    <!-- 1S-2H-2S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♥️—2♠️（12—21点，5张以上S，垃圾叫）后应叫方的再叫</h4>
      <el-table :data="oneSpadeHeartTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1S-2H-2NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♥️—2NT（14—21点，均型，高限）后应叫方的再叫</h4>
      <el-table :data="oneSpadeHeartTwoNTRebid" style="width: 100%" border>
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

    <!-- 1S-2H-3C后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♥️—3♣️（12—21点，5张♣️，或15点以上4张♣️）后应叫方的再叫</h4>
      <el-table :data="oneSpadeHeartThreeClubRebid" style="width: 100%" border>
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

    <!-- 1S-2H-3D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♥️—3♦️（12—21点，5张♦️，或15点以上4张♦️）后应叫方的再叫</h4>
      <el-table :data="oneSpadeHeartThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1S-2H-3H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♥️—3♥️（15点以上，3张♥️，高限）后应叫方的再叫</h4>
      <el-table :data="oneSpadeHeartThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1S-2H-3S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♥️—3♠️（15—21点，半坚固的6张以上♠️）后应叫方的再叫</h4>
      <el-table :data="oneSpadeHeartThreeSpadeRebid" style="width: 100%" border>
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

    <div class="mb-8">
      <h2 class="bridge-title">四、1♠️开叫后支持♠️的应叫</h2>
    </div>

    <!-- 1S-2S后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2♠️（简单加叫；7—9点，3张S支持）后开叫方的再叫</h4>
      <el-table :data="oneSpadeSimpleRaiseRebid" style="width: 100%" border>
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

    <!-- 1S-2NT（雅各比2NT）后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—2NT（Jacoby 2NT；13点以上，4张以上S支持）后开叫方的再叫</h4>
      <el-table :data="oneSpadeJacobyTwoNTRebid" style="width: 100%" border>
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

    <!-- 1S-3C后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—3♣️（伯根加叫；7—9点，4张以上♠️支持）后开叫方的再叫</h4>
      <el-table :data="oneSpadeBergenThreeClubRebid" style="width: 100%" border>
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

    <!-- 1S-3C-3D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—3♣️—3♦️（14—21点，3张以上♦️，帮张邀叫）后应叫方的再叫</h4>
      <el-table :data="oneSpadeBergenThreeClubThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1S-3C-3H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—3♣️—3♥️（14—21点，3张以上♥️，帮张邀叫）后应叫方的再叫</h4>
      <el-table :data="oneSpadeBergenThreeClubThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1S-3D后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—3♦️（伯根加叫；10—12点，4张以上♠️支持）后开叫方的再叫</h4>
      <el-table :data="oneSpadeBergenThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1S-3S后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—3♠️（伯根阻击；3—6点，4张以上♠️支持）后开叫方的再叫</h4>
      <el-table :data="oneSpadeBergenThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 1S-3H（迷你斯普林特）后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—3♥️（10—12点，4张以上♠️支持，有单缺）后开叫方的再叫</h4>
      <el-table :data="oneSpadeMinisplinterRebid" style="width: 100%" border>
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

    <!-- 1S-3H-3S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—3♥️—3♠️（16—21点，问单缺；满贯兴趣）后应叫方的再叫</h4>
      <el-table :data="oneSpadeMinisplinterThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 1S-3NT（斯普林特）后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—3NT（斯普林特；13—15点，4张以上♠️，♥️单缺）后开叫方的再叫</h4>
      <el-table :data="oneSpadeSplinterThreeNTRebid" style="width: 100%" border>
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

    <!-- 1S-4C（斯普林特）后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—4♣️（斯普林特；13—15点，4张以上♠️，♣️单缺）后开叫方的再叫</h4>
      <el-table :data="oneSpadeSplinterFourClubRebid" style="width: 100%" border>
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

    <!-- 1S-4D（斯普林特）后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—4♦️（斯普林特；13—15点，4张以上♠️，♦️单缺）后开叫方的再叫</h4>
      <el-table :data="oneSpadeSplinterFourDiamondRebid" style="width: 100%" border>
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

    <div class="mb-8">
      <h2 class="bridge-title">五、开叫人跳叫</h2>
    </div>

    <!-- 1S-1NT-3C后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT—3♣️（18—21点，3张以上♣️，逼局）后应叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTJumpThreeClubRebid" style="width: 100%" border>
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

    <!-- 1S-1NT-3D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT—3♦️（18—21点，3张以上♦️，逼局）后应叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTJumpThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1S-1NT-3H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT—3♥️（18—21点，3张以上♥️，逼局）后应叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTJumpThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1S-1NT-3S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♠️—1NT—3♠️（16—18点，6张以上♠️，邀叫）后应叫方的再叫</h4>
      <el-table :data="oneSpadeOneNTJumpThreeSpadeRebid" style="width: 100%" border>
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

    <div class="mb-8">
      <h2 class="bridge-title">六、1♠️被敌方干扰叫后的应叫</h2>
    </div>

    <!-- 1、1S被敌方加倍后的应叫 1S —（×）— ？ -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♠️被敌方加倍后的应叫</h3>
      <h4 class="bridge-subtitle">1♠️—（×）— ?</h4>
      <el-table :data="oneSpadeDoubleInterference" style="width: 100%" border>
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

    <!-- 2、1S被敌方花色争叫后的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">2、1♠️被敌方花色争叫后的应叫</h3>
      <h4 class="bridge-subtitle">1♠️—（2♣️）— ?</h4>
      <el-table :data="oneSpadeClubInterference" style="width: 100%" border>
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

    <!-- 2、1S被敌方花色争叫后的应叫 1♠️—（2♦️）— ? -->
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1♠️—（2♦️）— ?</h4>
      <el-table :data="oneSpadeDiamondInterference" style="width: 100%" border>
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

    <!-- 2、1S被敌方花色争叫后的应叫 1♠️—（2♥️）— ? -->
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1♠️—（2♥️）— ?</h4>
      <el-table :data="oneSpadeHeartInterference" style="width: 100%" border>
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

    <!-- 3、1S被敌方1NT争叫后的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">3、1♠️被敌方1NT争叫后的应叫</h3>
      <h4 class="bridge-subtitle">1♠️—（1NT）— ?</h4>
      <el-table :data="oneSpadeOneNTInterference" style="width: 100%" border>
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

    <!-- 4、1S被敌方迈克尔斯扣叫后的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">4、1♠️被敌方迈克尔斯扣叫后的应叫</h3>
      <h4 class="bridge-subtitle">1♠️—（2♠️）— ?</h4>
      <el-table :data="oneSpadeMichaelsCueInterference" style="width: 100%" border>
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

    <!-- 5、1S被敌方不寻常2NT争叫后的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">5、1♠️被敌方不寻常2NT争叫后的应叫</h3>
      <h4 class="bridge-subtitle">1♠️—（2NT）— ?</h4>
      <el-table :data="oneSpadeUnusualTwoNTInterference" style="width: 100%" border>
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
  </div>
</template>

<script setup lang="ts">
  // 根据点力范围获取标签类型
const getPointTagType = (points: string) => {
  if (points.includes('0-') || points.includes('4-') || points.includes('5-') || points.includes('6-')) {
    return 'info'
  } else if (points.includes('8-') || points.includes('9-') || points.includes('10-') || points.includes('11-')) {
    return 'warning'
  } else if (points.includes('12-') || points.includes('13-') || points.includes('14-') || points.includes('15-')) {
    return 'success'
  } else if (points.includes('16-') || points.includes('18-') || points.includes('21')) {
    return 'danger'
  }
  return ''
}

// 花色转换为emoji的函数
const suitToEmoji = (text: string) => {
  return text
    .replace(/C/g, '♣️')
    .replace(/D/g, '♦️')
    .replace(/H/g, '♥️')
    .replace(/S/g, '♠️')
    .replace(/NT/g, 'NT')
}

// 更新后的1S开叫应叫数据
const oneSpadeResponsesFull = [
  { bid: 'Pass', points: '0—5点', description: '不符合其他叫品' },
  { bid: '1NT', points: '6—12点', description: '半逼叫；5—7点时，可以有3~4张S。（同伴低限5 3 3 2牌型时，可以不叫）' },
  { bid: '2C', points: '13点以上', description: '3~4张以上C，4 3 3 3牌型建议叫2C，逼局' },
  { bid: '2D', points: '13点以上', description: '4张以上D，逼局' },
  { bid: '2H', points: '12点以上', description: '5张以上H，逼局' },
  { bid: '2S', points: '7—9点', description: '3张以上S，4 3 3 3牌型时可能4张S，简单加叫，不逼叫' },
  { bid: '2NT', points: '13点以上', description: '4张以上S，雅各比2NT，逼局。（同伴再叫为单缺，有满贯兴趣）' },
  { bid: '3C', points: '7—9点', description: '4张以上S，伯根加叫，非4-3-3-3牌型，逼叫' },
  { bid: '3D', points: '10—12点', description: '4张以上S，伯根加叫，为限制性加叫，逼叫' },
  { bid: '3H', points: '10—12点', description: '4张以上S，有单缺，迷你爆裂叫，逼局' },
  { bid: '3S', points: '3—6点', description: '4张以上S，伯根阻击，不逼叫' },
  { bid: '3NT', points: '13—15点', description: '4张以上S，H单缺，逼局' },
  { bid: '4C/4D', points: '13—15点', description: '4张以上S，C/D单缺，逼局' },
  { bid: '4H', points: '7—10点', description: '7张以上H，止叫' },
  { bid: '4S', points: '2—7点', description: '5张以上S，止叫' },
  { bid: '4NT', points: '18点以上', description: '4张以上S，罗马关键张问叫' }
]

// 第三家、第四家1S开叫后的应叫数据
const oneSpadeThirdFourthPositionResponses = [
  { bid: '2C', points: '10—11点', description: '3张以上S，逆德鲁里（朱瑞）约定叫，逼叫' },
  { bid: '2D', points: '9—11点', description: '5张以上D，没有3张S，不逼叫' },
  { bid: '2H', points: '9—11点', description: '5张以上H，没有3张S，不逼叫' },
  { bid: '2S', points: '6—9点', description: '3张以上S，简单加叫，不逼叫' },
  { bid: '2NT', points: '10—11点', description: '4张以上S，未叫花色有单缺，逼叫。（3C问单缺：答叫——3D/3H/3S=D/H/C单缺）' },
  { bid: '3C', points: '9—11点', description: '6张以上C，没有3张S，不逼叫' },
  { bid: '3D', points: '9—11点', description: '4张S，带2张大牌的4张以上D，配合显示叫，逼叫' },
  { bid: '3H', points: '9—11点', description: '4张S，带2张大牌的4张以上H，配合显示叫，逼叫' }
]

// 第三家、第四家1S开叫后2C应叫的开叫方再叫数据
const oneSpadeThirdFourthTwoClubRebid = [
  { rebid: '2D', points: '12—14点', description: '5张以上S，正常开叫，通常均型牌，逼叫' },
  { rebid: '2H', points: '9—14点', description: '5张以上S＋4~5张H，帮张邀请，逼叫。（注：9-11点，5张H）' },
  { rebid: '2S', points: '9—11点', description: '4~5张S，轻开叫，不逼叫' },
  { rebid: '3C/3D', points: '12—14点', description: '5张以上S＋4张以上C/D，帮张邀请，逼叫' },
  { rebid: '2NT', points: '15—16点', description: '6张S，均型，逼叫' },
  { rebid: '3H', points: '14点以上', description: '5张H＋5张S，逼叫' },
  { rebid: '3S', points: '12—14点', description: '6张S，有单缺，不逼叫' },
  { rebid: '3NT', points: '17—19点', description: '5张S，5 3 3 2牌型' },
  { rebid: '4C/4D/4H', points: '19—21点', description: '5张以上S，C/D/H单缺，满贯兴趣' },
  { rebid: '4S', points: '15—18点', description: '5张以上S，止叫' }
]

// 1S-1NT后开叫方的再叫数据
const oneSpadeOneNTOpenerRebid = [
  { rebid: 'Pass', points: '11—12点', description: '5 3 3 2牌型，均型，低限' },
  { rebid: '2C/2D', points: '12—17点', description: '3张以上C/D，不逼叫' },
  { rebid: '2H', points: '12—17点', description: '4张以上H，不逼叫' },
  { rebid: '2S', points: '12—15点', description: '6张以上S，不逼叫' },
  { rebid: '2NT', points: '18—19点', description: '5 3 3 2牌型，均型，不逼叫' },
  { rebid: '3C', points: '18—21点', description: '3张以上C，跳叫新花逼局' },
  { rebid: '3D', points: '18—21点', description: '4张以上D，跳叫新花逼局' },
  { rebid: '3H', points: '18—21点', description: '4张以上H，跳叫新花逼局' },
  { rebid: '3S', points: '16—18点', description: '6张以上S，跳叫原花，邀叫' },
  { rebid: '3NT', points: '16—21点', description: '坚固的6张以上S，无单缺' },
  { rebid: '4C/4D', points: '16—21点', description: '6张S＋6张C/D，逼局' },
  { rebid: '4H', points: '15—17点', description: '6张S＋5张H' },
  { rebid: '4S', points: '15—17点', description: '7张以上S，止叫' }
]

// 1S-1NT-2C后应叫方的再叫数据
const oneSpadeOneNTTwoClubRebid = [
  { rebid: 'Pass', points: '6—7点', description: '5张C，S单缺时可能4张C' },
  { rebid: '2D', points: '6—9点', description: '6张以上D，不逼叫' },
  { rebid: '2H', points: '6—9点', description: '5~6张以上H，不逼叫' },
  { rebid: '2S', points: '8—10点', description: '2张S，或5—7点，3~4张S' },
  { rebid: '2NT', points: '11—12点', description: '均型，高花无配合，邀叫' },
  { rebid: '3C', points: '9—11点', description: '5张以上C，邀叫' },
  { rebid: '3D', points: '9—11点', description: '好的6张以上D，邀叫' },
  { rebid: '3H', points: '9—11点', description: '好的6张以上H，邀叫' },
  { rebid: '3S', points: '10—12点', description: '3张S，邀叫' },
  { rebid: '3NT', points: '10—12点', description: '5张以上C，止叫' },
  { rebid: '4C', points: '10—12点', description: '6张以上C，有单缺花色' },
  { rebid: '4S', points: '11—12点', description: '3张S，有牌型，止叫' }
]

// 1S-1NT-2D后应叫方的再叫数据
const oneSpadeOneNTTwoDiamondRebid = [
  { rebid: 'Pass', points: '6—7点', description: '5张D，S单缺时可能4张D' },
  { rebid: '2H', points: '6—9点', description: '5~6张以上H，不逼叫' },
  { rebid: '2S', points: '8—10点', description: '2张S，或5—7点，3~4张S' },
  { rebid: '2NT', points: '11—12点', description: '均型，高花无配合，邀叫' },
  { rebid: '3C', points: '6—11点', description: '6张以上C，不逼叫' },
  { rebid: '3D', points: '9—11点', description: '5张以上D，邀叫' },
  { rebid: '3H', points: '9—11点', description: '好的6张以上H，邀叫' },
  { rebid: '3S', points: '10—12点', description: '3张S，邀叫' },
  { rebid: '3NT', points: '10—12点', description: '5张以上D，止叫' },
  { rebid: '4C', points: '10—12点', description: '5张C＋5张D，不逼叫' },
  { rebid: '4D', points: '10—12点', description: '6张以上D，有单缺花色' },
  { rebid: '4S', points: '11—12点', description: '3张S，有牌型，止叫' }
]

// 1S-1NT-2H后应叫方的再叫数据
const oneSpadeOneNTTwoHeartRebid = [
  { rebid: 'Pass', points: '6—8点', description: '3张以上H，没有成局的可能' },
  { rebid: '2S', points: '8—10点', description: '2张S，或5—7点，3~4张S' },
  { rebid: '2NT', points: '11—12点', description: '均型，高花无配合，邀叫' },
  { rebid: '3C', points: '6—9点', description: '6张以上C，不逼叫' },
  { rebid: '3D', points: '6—9点', description: '6张以上D，不逼叫' },
  { rebid: '3H', points: '9—10点', description: '4张以上H，邀叫' },
  { rebid: '3S', points: '10—11点', description: '3张S，邀叫' },
  { rebid: '4C', points: '10—11点', description: '4张以上H，C单缺，逼局' },
  { rebid: '4D', points: '10—11点', description: '4张以上H，D单缺，逼局' },
  { rebid: '4H', points: '10—12点', description: '4张以上H，有牌型，止叫' },
  { rebid: '4S', points: '10—12点', description: '3张S，有牌型，止叫' }
]

// 1S-1NT-2S后应叫方的再叫数据
const oneSpadeOneNTTwoSpadeRebid = [
  { rebid: 'Pass', points: '6—9点', description: '没有成局的可能' },
  { rebid: '2NT', points: '11—12点', description: '均型，高花无配合，邀叫' },
  { rebid: '3C', points: '9—11点', description: '好的6张C↑，S单缺，不逼叫' },
  { rebid: '3D', points: '9—11点', description: '好的6张D↑，S单缺，不逼叫' },
  { rebid: '3H', points: '9—11点', description: '好的6张H↑，S单缺，不逼叫' },
  { rebid: '3S', points: '10—11点', description: '2~3张S，邀叫' },
  { rebid: '4S', points: '10—12点', description: '2~3张S，通常有牌型，止叫' }
]

// 1S-1NT-2NT后应叫方的再叫数据
const oneSpadeOneNTTwoNTRebid = [
  { rebid: 'Pass', points: '6—7点', description: '没有成局的可能' },
  { rebid: '3C/3D', points: '6—7点', description: '6张以上C/D，不逼叫' },
  { rebid: '3H', points: '7—11点', description: '5张以上H，逼局' },
  { rebid: '3S', points: '8—12点', description: '2~3张S，逼局' },
  { rebid: '3NT', points: '8—11点', description: '止叫' },
  { rebid: '4C/4D', points: '8—11点', description: '6张以上C/D，逼局' },
  { rebid: '4H', points: '8—11点', description: '6张以上H' },
  { rebid: '4S', points: '5—6点', description: '3张以上S，止叫' }
]

// 1S-2C后开叫方的再叫数据
const oneSpadeClubTwoGamingRebid = [
  { rebid: '2D', points: '12—21点', description: '5张以上S＋4张以上D' },
  { rebid: '2H', points: '12—21点', description: '4张以上H' },
  { rebid: '2S', points: '12—21点', description: '垃圾叫，不符合其他叫品的牌' },
  { rebid: '2NT', points: '14—19点', description: '均型，高限' },
  { rebid: '3C', points: '14—21点', description: '4张以上C，或3张C带大牌' },
  { rebid: '3D', points: '14—21点', description: '4张以上C，D单缺，斯普林特' },
  { rebid: '3H', points: '14—21点', description: '4张以上C，H单缺，斯普林特' },
  { rebid: '3S', points: '15—21点', description: '半坚固的6张以上S' },
  { rebid: '3NT', points: '16—17点', description: '5 3 3 2牌型' },
  { rebid: '4C', points: '15—21点', description: '5张以上C，满贯兴趣' }
]

// 1S-2C-2D后应叫方的再叫数据
const oneSpadeClubTwoDiamondRebid = [
  { rebid: '2H', points: '12点以上', description: '第四花色逼局；通常H无止张' },
  { rebid: '2S', points: '14点以上', description: '3张以上S，高限' },
  { rebid: '2NT', points: '12点以上', description: 'H有止张，没有3张S' },
  { rebid: '3C', points: '12点以上', description: '好的6张以上C' },
  { rebid: '3D', points: '12点以上', description: '4张以上D' },
  { rebid: '3H', points: '14—21点', description: '4张以上D，H单缺，斯普林特' },
  { rebid: '3S', points: '15点以上', description: '5张以上C＋4张S' },
  { rebid: '3NT', points: '13—15点', description: '通常S单张' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上C' },
  { rebid: '4D', points: '12点以上', description: '6张以上C＋5张D' },
  { rebid: '4S', points: '12—13点', description: '3张以上S，低限' }
]

// 1S-2C-2H后应叫方的再叫数据
const oneSpadeClubTwoHeartRebid = [
  { rebid: '2S', points: '14点以上', description: '3张S，高限' },
  { rebid: '2NT', points: '13点以上', description: '没有3张S，等待叫' },
  { rebid: '3C', points: '12点以上', description: '好的6张以上C' },
  { rebid: '3D', points: '12点以上', description: '6张C＋4张以上D' },
  { rebid: '3H', points: '15点以上', description: '4张H，高限' },
  { rebid: '3S', points: '15点以上', description: '5张以上C＋4张S' },
  { rebid: '3NT', points: '13—15点', description: '4张D，通常S单张' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上C' },
  { rebid: '4D', points: '13点以上', description: '4张H，D单缺，斯普林特' },
  { rebid: '4H', points: '12—14点', description: '4张H，低限' },
  { rebid: '4S', points: '12—13点', description: '3张S，低限' }
]

// 1S-2C-2S后应叫方的再叫数据
const oneSpadeClubTwoSpadeRebid = [
  { rebid: '2NT', points: '13点以上', description: '等待叫' },
  { rebid: '3C', points: '12点以上', description: '好的6张以上C' },
  { rebid: '3D', points: '12点以上', description: '6张C＋4张以上D' },
  { rebid: '3H', points: '12点以上', description: '5张以上C＋4张H' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—15点', description: '通常S单张' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上C' },
  { rebid: '4D', points: '12点以上', description: '4张S，D单缺，斯普林特' },
  { rebid: '4H', points: '12点以上', description: '4张S，H单缺，斯普林特' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' }
]

// 1S-2C-2NT后应叫方的再叫数据
const oneSpadeClubTwoNTRebid = [
  { rebid: '3C', points: '12点以上', description: '好的6张以上C' },
  { rebid: '3D', points: '12点以上', description: '5张以上C＋4张以上D' },
  { rebid: '3H', points: '12点以上', description: '5张以上C＋4张H' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—17点', description: '止叫' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上C' },
  { rebid: '4D/4H', points: '12点以上', description: '4张S，D/H单缺，斯普林特' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' }
]

// 1S-2C-3C后应叫方的再叫数据
const oneSpadeClubThreeClubRebid = [
  { rebid: '3D', points: '12点以上', description: 'D有止张；或扣叫，满贯兴趣' },
  { rebid: '3H', points: '12点以上', description: 'H有止张，D没有止张' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—16点', description: '止叫' },
  { rebid: '4C', points: '18点以上', description: '6张以上C，满贯兴趣' },
  { rebid: '4D', points: '12点以上', description: '6张以上C，D单缺，斯普林特' },
  { rebid: '4H', points: '12点以上', description: '6张以上C，H单缺，斯普林特' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' }
]

// 1S-2C-3D后应叫方的再叫数据
const oneSpadeClubThreeDiamondRebid = [
  { rebid: '3H', points: '15点以上', description: '扣叫，满贯兴趣' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—16点', description: 'D好止张，止叫' },
  { rebid: '4C', points: '15点以上', description: 'H没有控制，满贯兴趣' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' },
  { rebid: '5C', points: '12—14点', description: '低限，止叫' }
]

// 1S-2C-3H后应叫方的再叫数据
const oneSpadeClubThreeHeartRebid = [
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—16点', description: 'H好止张，止叫' },
  { rebid: '4C', points: '15点以上', description: '5张以上C，满贯兴趣' },
  { rebid: '4D/4H', points: '12点以上', description: '扣叫，满贯兴趣' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' },
  { rebid: '5C', points: '12—14点', description: '低限，止叫' }
]

// 1S-2C-3S后应叫方的再叫数据
const oneSpadeClubThreeSpadeRebid = [
  { rebid: '3NT', points: '12—16点', description: '止张' },
  { rebid: '4C', points: '15点以上', description: '6张C↑，满贯兴趣，等待叫' },
  { rebid: '4D', points: '15点以上', description: 'S为将牌，扣叫，满贯兴趣' },
  { rebid: '4H', points: '15点以上', description: 'S为将牌，扣叫，满贯兴趣' },
  { rebid: '4S', points: '12—14点', description: '低限，止叫' }
]

// 1S-2D后开叫方的再叫数据
const oneSpadeDiamondTwoGamingRebid = [
  { rebid: '2H', points: '12—21点', description: '4张以上H' },
  { rebid: '2S', points: '12—21点', description: '垃圾叫，不符合其他叫品的牌' },
  { rebid: '2NT', points: '14—19点', description: '均型，高限' },
  { rebid: '3C', points: '12—21点', description: '5张C，或15点以上4张C' },
  { rebid: '3D', points: '14—21点', description: '4张以上D，或3张D带大牌' },
  { rebid: '3H/4C', points: '14—21点', description: '4张以上D，H/C单缺，斯普林特' },
  { rebid: '3S', points: '15—21点', description: '半坚固的6张以上S' },
  { rebid: '3NT', points: '16—17点', description: '5 3 3 2牌型' },
  { rebid: '4D', points: '14—21点', description: '5张以上D，满贯兴趣' }
]

// 1S-2D-2H后应叫方的再叫数据
const oneSpadeDiamondTwoHeartRebid = [
  { rebid: '2S', points: '15点以上', description: '3张以上S，高限' },
  { rebid: '2NT', points: '13点以上', description: '没有3张S，等待叫' },
  { rebid: '3C', points: '15点以上', description: '5张以上D＋5张C' },
  { rebid: '3D', points: '12点以上', description: '6张以上D' },
  { rebid: '3H', points: '15点以上', description: '4张以上H，高限' },
  { rebid: '3S', points: '15点以上', description: '5张以上D＋4张S' },
  { rebid: '3NT', points: '13—15点', description: '通常S单张' },
  { rebid: '4C', points: '12点以上', description: '5张D↑＋4张H，C单缺，斯普林特' },
  { rebid: '4D', points: '16点以上', description: '半坚固的7张以上D' },
  { rebid: '4H', points: '12—14点', description: '4张以上H，低限' },
  { rebid: '4S', points: '12—14点', description: '3张以上S，低限' }
]

// 1S-2D-2S后应叫方的再叫数据
const oneSpadeDiamondTwoSpadeRebid = [
  { rebid: '2NT', points: '13点以上', description: '等待叫' },
  { rebid: '3C', points: '12点以上', description: '5张以上D＋4张以上C' },
  { rebid: '3D', points: '12点以上', description: '好的6张以上D' },
  { rebid: '3H', points: '12点以上', description: '5张以上D＋4张以上H' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—14点', description: '通常S单张' },
  { rebid: '4C', points: '12点以上', description: '4张S，C单缺，斯普林特' },
  { rebid: '4D', points: '16点以上', description: '半坚固的7张以上D' },
  { rebid: '4H', points: '12点以上', description: '4张S，H单缺，斯普林特' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' }
]

// 1S-2D-2NT后应叫方的再叫数据
const oneSpadeDiamondTwoNTRebid = [
  { rebid: '3C', points: '12点以上', description: '5张以上D＋4张以上C' },
  { rebid: '3D', points: '12点以上', description: '好的6张以上D' },
  { rebid: '3H', points: '12点以上', description: '5张以上D＋4张以上H' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—17点', description: '止叫' },
  { rebid: '4C', points: '12点以上', description: '5张D＋4张S，C单缺，斯普林特' },
  { rebid: '4D', points: '16点以上', description: '半坚固的7张以上D' },
  { rebid: '4H', points: '12点以上', description: '5张D＋4张S，H单缺，斯普林特' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' },
  { rebid: '4NT', points: '18—19点', description: '满贯邀叫' }
]

// 1S-2D-3C后应叫方的再叫数据
const oneSpadeDiamondThreeClubRebid = [
  { rebid: '3D', points: '12点以上', description: '好的6张以上D' },
  { rebid: '3H', points: '13点以上', description: '4张D↑＋4张C或16点↑3张C' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—16点', description: '止叫' },
  { rebid: '4C', points: '15点以上', description: '4张以上C，满贯兴趣' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' }
]

// 1S-2D-3D后应叫方的再叫数据
const oneSpadeDiamondThreeDiamondRebid = [
  { rebid: '3H', points: '12点以上', description: 'H有止张' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—16点', description: '止叫' },
  { rebid: '4C', points: '15点以上', description: 'C有控制，H无控制，满贯兴趣' },
  { rebid: '4D', points: '18点以上', description: '6张以上D，满贯兴趣' },
  { rebid: '4H', points: '12点以上', description: '6张以上D，H单缺，斯普林特' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' }
]

// 1S-2D-3H后应叫方的再叫数据
const oneSpadeDiamondThreeHeartRebid = [
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—14点', description: 'H好止张，止叫' },
  { rebid: '4C', points: '15点以上', description: '扣叫控制，满贯兴趣' },
  { rebid: '4D', points: '15点以上', description: '4张以上D，满贯兴趣' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' },
  { rebid: '5D', points: '12—14点', description: '低限，止叫' }
]

// 1S-2D-3S后应叫方的再叫数据
const oneSpadeDiamondThreeSpadeRebid = [
  { rebid: '3NT', points: '12—14点', description: '止张' },
  { rebid: '4C', points: '12点以上', description: '默认S将牌，C有控制' },
  { rebid: '4D', points: '15点以上', description: '6张以上D' },
  { rebid: '4H', points: '12点以上', description: '默认S将牌，H有控，C无控' },
  { rebid: '4S', points: '12—14点', description: '低限，止叫' }
]

// 1S-2H后开叫方的再叫数据
const oneSpadeHeartTwoGamingRebid = [
  { rebid: '2S', points: '12—21点', description: '垃圾叫，不符合其他叫品的牌' },
  { rebid: '2NT', points: '14—21点', description: '均型，高限' },
  { rebid: '3C', points: '12—21点', description: '5张C，或15点以上4张C' },
  { rebid: '3D', points: '12—21点', description: '5张D，或15点以上4张D' },
  { rebid: '3H', points: '15点以上', description: '3张H，高限' },
  { rebid: '3S', points: '15—21点', description: '半坚固的6张以上S' },
  { rebid: '3NT', points: '15—17点', description: '5 3 3 2牌型' },
  { rebid: '4C/4D', points: '14—21点', description: '4张H，C/D单缺，斯普林特' },
  { rebid: '4H', points: '12—14点', description: '3张H，低限' }
]

// 1S-2H-2S后应叫方的再叫数据
const oneSpadeHeartTwoSpadeRebid = [
  { rebid: '2NT', points: '13点以上', description: '等待叫' },
  { rebid: '3C/3D', points: '12点以上', description: '5张以上H＋4张以上C/D' },
  { rebid: '3H', points: '12点以上', description: '6张以上H' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '4C/4D', points: '12点以上', description: '4张S，C/D单缺，斯普林特' },
  { rebid: '4H', points: '12—15点', description: '7张以上H' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' }
]

// 1S-2H-2NT后应叫方的再叫数据
const oneSpadeHeartTwoNTRebid = [
  { rebid: '3C/3D', points: '12点以上', description: '5张以上H＋4张以上C/D' },
  { rebid: '3H', points: '12点以上', description: '6张以上H' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—17点', description: '止叫' },
  { rebid: '4C/4D', points: '12点以上', description: '4张S，C/D单缺，斯普林特' },
  { rebid: '4H', points: '12—15点', description: '7张以上H' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' },
  { rebid: '4NT', points: '17—18点', description: '满贯邀叫' }
]

// 1S-2H-3C后应叫方的再叫数据
const oneSpadeHeartThreeClubRebid = [
  { rebid: '3D', points: '12点以上', description: '4张C，或≥16点3张C' },
  { rebid: '3H', points: '12点以上', description: '6张以上H' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—16点', description: '止叫' },
  { rebid: '4C', points: '15点以上', description: '4张以上C，满贯兴趣' },
  { rebid: '4D', points: '12点以上', description: '4张以上C，D单缺，斯普林特' },
  { rebid: '4H', points: '12—15点', description: '7张以上H' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' }
]

// 1S-2H-3D后应叫方的再叫数据
const oneSpadeHeartThreeDiamondRebid = [
  { rebid: '3H', points: '12点以上', description: '6张以上H' },
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '12—16点', description: '止叫' },
  { rebid: '4C', points: '16点以上', description: '3张D，C无控制，2-5-3-3牌型' },
  { rebid: '4D', points: '15点以上', description: '4张以上D，满贯兴趣' },
  { rebid: '4H', points: '12—15点', description: '7张以上H' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限' },
  { rebid: '4NT', points: '17—18点', description: '满贯邀叫' }
]

// 1S-2H-3H后应叫方的再叫数据
const oneSpadeHeartThreeHeartRebid = [
  { rebid: '3S', points: '15点以上', description: '3张S，高限' },
  { rebid: '3NT', points: '14点以上', description: '轻微满贯兴趣，逼叫' },
  { rebid: '4C', points: '14点以上', description: 'C有控制，满贯兴趣' },
  { rebid: '4D', points: '14点以上', description: 'D有控制，C无控，满贯兴趣' },
  { rebid: '4H', points: '12—14点', description: '5张H，低限或低于4个控制' },
  { rebid: '4S', points: '12—14点', description: '3张S，低限或低于4个控制' }
]

// 1S-2H-3S后应叫方的再叫数据
const oneSpadeHeartThreeSpadeRebid = [
  { rebid: '3NT', points: '12—16点', description: '未叫花色有止张，止叫' },
  { rebid: '4C', points: '14点以上', description: '默认S为将牌，C有控制' },
  { rebid: '4D', points: '14点以上', description: 'S为将牌，D有控制，C无控制' },
  { rebid: '4H', points: '12点以上', description: '半坚固的6张以上H' },
  { rebid: '4S', points: '12—14点', description: '低限止叫' }
]

// 1S-2S后开叫方的再叫数据（简单加叫）
const oneSpadeSimpleRaiseRebid = [
  { rebid: 'Pass', points: '12—15点', description: '不符合其他叫品' },
  { rebid: '2NT', points: '16—17点', description: '均型牌邀请，不逼叫' },
  { rebid: '3C/3D', points: '14点以上', description: '3张以上C/D，帮张进局邀请，逼叫' },
  { rebid: '3H', points: '14点以上', description: '3张以上H，帮张进局邀请，逼叫' },
  { rebid: '3S', points: '14—17点', description: '通常6张S，邀叫' },
  { rebid: '3NT', points: '18—19点', description: '4S和3NT示选' },
  { rebid: '4C/4D', points: '17—21点', description: '5张以上S，所叫花色C/D单缺，逼局' },
  { rebid: '4H', points: '17—21点', description: '5张以上S，所叫花色H单缺，逼局' },
  { rebid: '4S', points: '15—19点', description: '5张以上S，止叫' }
]

// 1S-2NT后开叫方的再叫数据（雅各比2NT）
const oneSpadeJacobyTwoNTRebid = [
  { rebid: '3C/3D/3H', points: '12—21点', description: '5张以上S，所叫花色C/D/H单缺' },
  { rebid: '3S', points: '16—21点', description: '无单缺，5张以上S，4个控制以上（无单缺，强）' },
  { rebid: '3NT', points: '14—15点', description: '无单缺，5张以上S，3个控制以上（无单缺，中等）' },
  { rebid: '4C/4D/4H', points: '12—21点', description: '5张以上S＋5张以上C/D/H有2张大牌，配合显示叫（优先叫）' },
  { rebid: '4S', points: '12—13点', description: '无单缺，5张以上S，3个控制以下（无单缺，弱）' }
]

// 1S-3C后开叫方的再叫数据（伯根加叫）
const oneSpadeBergenThreeClubRebid = [
  { rebid: '3D/3H', points: '14—21点', description: '高限，3张以上D/H，帮张邀叫；若同伴高限可以进局' },
  { rebid: '3S', points: '12—13点', description: '低限，不逼叫' },
  { rebid: '3NT', points: '16—19点', description: '各门花色均有止张' },
  { rebid: '4C/4D/4H', points: '18—21点', description: '扣叫所叫花色控制，满贯兴趣' },
  { rebid: '4S', points: '14—17点', description: '高限，通常有牌型，止叫' }
]

// 1S-3C-3D后应叫方的再叫数据
const oneSpadeBergenThreeClubThreeDiamondRebid = [
  { rebid: '3H', points: '8—9点', description: 'D无帮助，H有大牌，逼叫' },
  { rebid: '3S', points: '6—9点', description: 'D无帮助，不逼叫' },
  { rebid: '4C/4D/4H', points: '8—9点', description: '所叫花色C/D/H单缺，逼局' },
  { rebid: '4S', points: '8—9点', description: '通常D有帮助，止叫' }
]

// 1S-3C-3H后应叫方的再叫数据
const oneSpadeBergenThreeClubThreeHeartRebid = [
  { rebid: '3S', points: '6—9点', description: 'H无帮助，不逼叫' },
  { rebid: '4C/4D', points: '8—9点', description: '所叫花色C/D单缺，逼局' },
  { rebid: '4H', points: '8—9点', description: '所叫花色H单缺，逼局' },
  { rebid: '4S', points: '8—9点', description: '通常H有帮助，止叫' }
]

// 1S-3D后开叫方的再叫数据（伯根加叫）
const oneSpadeBergenThreeDiamondRebid = [
  { rebid: '3H', points: '14—21点', description: '等待叫，邀叫实力以上，逼叫' },
  { rebid: '3S', points: '12—13点', description: '低限，不逼叫' },
  { rebid: '3NT', points: '16—19点', description: '各门花色均有止张' },
  { rebid: '4C/4D/4H', points: '15—21点', description: '扣叫所叫花色控制，满贯兴趣' },
  { rebid: '4S', points: '14—16点', description: '高限，通常有牌型，止叫' }
]

// 1S-3S后开叫方的再叫数据（伯根阻击）
const oneSpadeBergenThreeSpadeRebid = [
  { rebid: 'Pass', points: '12—17点', description: '不能成局' },
  { rebid: '4C/4D', points: '18—21点', description: '扣叫所叫花色控制，逼局' },
  { rebid: '4H', points: '18—21点', description: '扣叫所叫花色控制，逼局' },
  { rebid: '4S', points: '18—21点', description: '止叫' }
]

// 1S-3H后开叫方的再叫数据（迷你斯普林特）
const oneSpadeMinisplinterRebid = [
  { rebid: '3S', points: '16—21点', description: '问应叫人的单缺花色，满贯兴趣' },
  { rebid: '4C/4D/4H', points: '16—21点', description: '扣叫所叫花色控制，满贯兴趣' },
  { rebid: '4S', points: '12—15点', description: '止叫' }
]

// 1S-3H-3S后应叫方的再叫数据（问单缺）
const oneSpadeMinisplinterThreeSpadeRebid = [
  { rebid: '3NT', points: '10—12点', description: 'H单缺' },
  { rebid: '4C', points: '10—12点', description: 'C单缺' },
  { rebid: '4D', points: '10—12点', description: 'D单缺' }
]

// 1S-3NT后开叫方的再叫数据（斯普林特H单缺）
const oneSpadeSplinterThreeNTRebid = [
  { rebid: '4C', points: '15点以上', description: 'C有控制，满贯兴趣' },
  { rebid: '4D', points: '15点以上', description: 'D有控制，C没有控制，满贯兴趣' },
  { rebid: '4H', points: '15点以上', description: 'H有控制，C/D没有控制，满贯兴趣' },
  { rebid: '4S', points: '12—14点', description: '止叫' }
]

// 1S-4C后开叫方的再叫数据（斯普林特C单缺）
const oneSpadeSplinterFourClubRebid = [
  { rebid: '4D', points: '15点以上', description: 'D有控制，满贯兴趣' },
  { rebid: '4H', points: '15点以上', description: 'H有控制，D无控制，满贯兴趣' },
  { rebid: '4S', points: '12—14点', description: '止叫' }
]

// 1S-4D后开叫方的再叫数据（斯普林特D单缺）
const oneSpadeSplinterFourDiamondRebid = [
  { rebid: '4H', points: '15点以上', description: 'H有控制，满贯兴趣' },
  { rebid: '4S', points: '12—15点', description: '止叫' },
  { rebid: '5C', points: '16点以上', description: 'C有控制，H无控制，满贯兴趣' }
]

// 1S-1NT-3C后应叫方的再叫数据（跳叫新花3C）
const oneSpadeOneNTJumpThreeClubRebid = [
  { rebid: '3D', points: '6—11点', description: '5张以上D' },
  { rebid: '3H', points: '6—11点', description: '5张以上H' },
  { rebid: '3S', points: '10—11点', description: '3张S，或2张S带大牌' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4C', points: '6—11点', description: '5张以上C' },
  { rebid: '4D', points: '10点以上', description: '5张D＋5张C，S单缺，满贯' },
  { rebid: '4H', points: '6—11点', description: '7张以上H' },
  { rebid: '4S', points: '5—6点', description: '3张S，止叫' }
]

// 1S-1NT-3D后应叫方的再叫数据（跳叫新花3D）
const oneSpadeOneNTJumpThreeDiamondRebid = [
  { rebid: '3H', points: '6—11点', description: '5张以上H' },
  { rebid: '3S', points: '10—11点', description: '3张S，或2张S带大牌' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4C', points: '6—11点', description: '6张以上C' },
  { rebid: '4D', points: '10点以上', description: '4张以上D' },
  { rebid: '4H', points: '6—11点', description: '7张以上H' },
  { rebid: '4S', points: '5—6点', description: '3张S，止叫' }
]

// 1S-1NT-3H后应叫方的再叫数据（跳叫新花3H）
const oneSpadeOneNTJumpThreeHeartRebid = [
  { rebid: '3S', points: '10—11点', description: '3张S，或2张S带大牌' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4C', points: '9—11点', description: '4张以上H，扣叫所叫花色' },
  { rebid: '4D', points: '9—11点', description: '4张以上H，扣叫所叫花色' },
  { rebid: '4H', points: '6—8点', description: '4张以上H' },
  { rebid: '4S', points: '5—6点', description: '3张S，止叫' }
]

// 1S-1NT-3S后应叫方的再叫数据（跳叫原花3S）
const oneSpadeOneNTJumpThreeSpadeRebid = [
  { rebid: 'Pass', points: '6—7点', description: '没有成局可能' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4C', points: '8—11点', description: '7张以上C，逼局' },
  { rebid: '4D', points: '8—11点', description: '7张以上D，逼局' },
  { rebid: '4H', points: '8—11点', description: '7张以上H' },
  { rebid: '4S', points: '6—11点', description: '止叫' }
]

// 1S被加倍后的应叫数据
const oneSpadeDoubleInterference = [
  { bid: 'Pass', points: '0—10点', description: '不适合以下叫品的牌' },
  { bid: '××', points: '11点以上', description: '通常是可以惩罚对方的均型牌' },
  { bid: '1NT', points: '8—10点', description: '3张S，建设性加叫，逼叫' },
  { bid: '2C/2D/2H', points: '6—9点', description: '6张以上C/D/H，没有3张S，不逼叫' },
  { bid: '2S', points: '4—6点', description: '3张S，不逼叫' },
  { bid: '2NT', points: '10点以上', description: '4张以上S，逼叫。乔丹约定叫' },
  { bid: '3C/3D', points: '4—6点', description: '7张以上C/D，阻击叫' },
  { bid: '3H/4C/4D', points: '10点以上', description: '4张以上S，H/C/D单缺，斯普林特，逼局' },
  { bid: '3S', points: '4—7点', description: '4张以上S，阻击叫' },
  { bid: '3NT', points: '13—15点', description: '4 3 3 3牌型，4张套不确定，不逼叫' },
  { bid: '4S', points: '0—10点', description: '4张以上S，阻击叫' }
]

// 1S被2C争叫后的应叫数据
const oneSpadeClubInterference = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '8点以上', description: '技术性加倍；通常保证4张H，不符合其他自然叫' },
  { bid: '2D/2H', points: '9点以上', description: '5张以上D/H，逼叫' },
  { bid: '2S', points: '6—9点', description: '3张以上S，简单加叫，不逼叫' },
  { bid: '2NT', points: '10—11点', description: 'C有止张，没有4张H，邀叫' },
  { bid: '3C', points: '10点以上', description: '3张以上S，限制性加叫，逼叫' },
  { bid: '3D/3H', points: '6—8点', description: '6张以上D/H，阻击叫' },
  { bid: '3S', points: '3—7点', description: '4张以上S，阻击叫' },
  { bid: '3NT', points: '12—15点', description: 'C有止张，止叫' },
  { bid: '4C/4D', points: '10点以上', description: '4张以上S，所叫花色C/D单缺，斯普林特，逼局' },
  { bid: '4H', points: '10点以上', description: '4张以上S，所叫花色H单缺，斯普林特，逼局' },
  { bid: '4S', points: '4—9点', description: '4张以上S，通常有牌型' }
]

// 1S被2D争叫后的应叫数据
const oneSpadeDiamondInterference = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '8点以上', description: '技术性加倍；通常保证4张H，不符合其他自然叫' },
  { bid: '2H', points: '9点以上', description: '5张以上H，逼叫' },
  { bid: '2S', points: '6—9点', description: '3张以上S，简单加叫，不逼叫' },
  { bid: '2NT', points: '10—11点', description: 'D有止张，没有4张H，邀叫' },
  { bid: '3C', points: '11点以上', description: '5张以上C，逼叫' },
  { bid: '3D', points: '10点以上', description: '3张以上S，限制性加叫，逼叫' },
  { bid: '3H', points: '6—8点', description: '6张以上H，阻击叫' },
  { bid: '3S', points: '3—7点', description: '4张以上S，阻击叫' },
  { bid: '3NT', points: '12—15点', description: 'D有止张，止叫' },
  { bid: '4C', points: '6—8点', description: '7张以上C，阻击叫' },
  { bid: '4D', points: '10点以上', description: '4张以上S，所叫花色D单缺，斯普林特，逼局' },
  { bid: '4H', points: '10点以上', description: '4张以上S，所叫花色H单缺，斯普林特，逼局' },
  { bid: '4S', points: '4—9点', description: '4张以上S，通常有牌型' }
]

// 1S被2H争叫后的应叫数据
const oneSpadeHeartInterference = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '8点以上', description: '技术性加倍；保证4－4低花，不符合其他自然叫' },
  { bid: '2S', points: '6—9点', description: '3张以上S，简单加叫，不逼叫' },
  { bid: '2NT', points: '10—11点', description: 'H有止张，邀叫' },
  { bid: '3C/3D', points: '10点以上', description: '5张以上C/D，逼叫' },
  { bid: '3H', points: '11点以上', description: '3张以上S，限制性加叫，逼叫' },
  { bid: '3S', points: '3—7点', description: '4张以上S，阻击叫' },
  { bid: '3NT', points: '12—15点', description: 'H有止张，止叫' },
  { bid: '4C/4D', points: '6—8点', description: '7张以上C/D，阻击叫' },
  { bid: '4H', points: '10点以上', description: '4张以上S，所叫花色H单缺，斯普林特，逼局' },
  { bid: '4S', points: '4—9点', description: '4张以上S，通常有牌型' }
]

// 1S被1NT争叫后的应叫数据
const oneSpadeOneNTInterference = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '9点以上', description: '惩罚性' },
  { bid: '2C/2D', points: '5—9点', description: '5张以上C/D，低限为6张，不逼叫' },
  { bid: '2H', points: '5—9点', description: '5张以上H，低限为6张，不逼叫' },
  { bid: '2S', points: '6—9点', description: '3张以上S，简单加叫，不逼叫' },
  { bid: '2NT', points: '11点以上', description: '4张以上S，逼叫' }
]

// 1S被迈克尔斯扣叫2S后的应叫数据
const oneSpadeMichaelsCueInterference = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '9点以上', description: '至少可以惩罚1个花色' },
  { bid: '2NT', points: '11—12点', description: 'H有止张，邀叫' },
  { bid: '3C/3D', points: '11点以上', description: '5张以上C/D，逼叫' },
  { bid: '3H', points: '10点以上', description: '3张以上S，S的限制性加叫，逼叫' },
  { bid: '3S', points: '6—9点', description: '3张以上S，简单加叫，不逼叫' },
  { bid: '3NT', points: '12—15点', description: 'H有止张，止叫' },
  { bid: '4C/4D', points: '10—14点', description: '4张S＋5张以上C/D有两张大牌，配合显示叫，逼局' },
  { bid: '4H', points: '10点以上', description: '4张以上S，所叫花色H单缺，斯普林特，逼局' },
  { bid: '4S', points: '4—9点', description: '4张以上S，有牌型' }
]

// 1S被不寻常2NT争叫后的应叫数据
const oneSpadeUnusualTwoNTInterference = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '9点以上', description: '至少可以惩罚C/D中的一套' },
  { bid: '3C', points: '10点以上', description: '5张以上H，逼叫' },
  { bid: '3D', points: '10点以上', description: '3张以上S，限制性加叫，逼叫' },
  { bid: '3H', points: '6—9点', description: '6张以上H，不逼叫' },
  { bid: '3S', points: '6—9点', description: '3张以上S，简单加叫，不逼叫' },
  { bid: '3NT', points: '12—15点', description: 'C和D均有止张，止叫' }
]
</script>