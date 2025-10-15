<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第三章 1♥️开叫及以后的应叫</h2>
    
    <!-- 1H开叫说明 -->
    <div class="bridge-card mb-8">
      <h3 class="bridge-subtitle">1♥️开叫</h3>
      <div class="prose max-w-none">
        <p>12—21点，5张以上♥️；第三家允许轻开叫。</p>
      </div>
    </div>

    <!-- 一、1H开叫的应叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">一、1♥️开叫的应叫</h2>
    </div>
    
    <!-- 1H应叫主表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♥️—? 应叫表</h3>
      <el-table :data="oneHeartResponsesFull" style="width: 100%" border>
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
      <h3 class="bridge-subtitle">第3~4家开叫1♥️后的应叫</h3>
      <el-table :data="thirdFourthPositionResponses" style="width: 100%" border>
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

    <div class="bridge-card mb-8">
      <h3 class="bridge-subtitle">第3~4家开叫1♥️，朱瑞应叫后开叫方再叫</h3>
      <el-table :data="thirdFourthPositionTwoClubRebid" style="width: 100%" border>
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

    <!-- 二、1H在一盖一（1S）应叫后 -->
    <div class="mb-8">
      <h2 class="bridge-title">二、1♥️在一盖一（1♠️）应叫后</h2>
    </div>

    <!-- 1H—1S后开叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♥️—1♠️ 后开叫方的再叫</h3>
      <el-table :data="oneHeartOneSpadeRebidFull" style="width: 100%" border>
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

    <!-- 1H—1S—2C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—2♣️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartOneSpadeeTwoClubRebid" style="width: 100%" border>
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

    <!-- 1H—1S—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—2♦️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartOneSpadeeTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—1S—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—2♥️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartOneSpadeeTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1H—1S—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—2♠️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartOneSpadeeTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1H—1S—2S—2NT后再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—2♠️—2NT 后再叫（2NT=10—11点，重询高花）</h4>
      <el-table :data="oneHeartOneSpadeeTwoSpadeTwoNTRebid" style="width: 100%" border>
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

    <!-- 三、双路重询斯台曼 -->
    <div class="mb-8">
      <h2 class="bridge-title">三、双路重询斯台曼</h2>
    </div>

    <!-- 1H—1S—1NT后的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♥️—1♠️—1NT—？（1NT=12—14点，5张以上♥️，均型牌，不保证止张）</h3>
      <el-table :data="oneHeartOneSpadeOneNTResponses" style="width: 100%" border>
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

    <!-- 1H—1S—1NT—2C—2D后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—1NT—2♣️—2♦️—？（2♣️=6—12点，重询斯台曼）</h4>
      <el-table :data="oneHeartOneSpadeOneNTTwoClubTwoDiamondResponses" style="width: 100%" border>
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

    <!-- 1H—1S—1NT—2D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—1NT—2♦️—？（2♦️=13点以上，重询斯台曼，逼局）</h4>
      <el-table :data="oneHeartOneSpadeOneNTTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 四、1H在1NT应叫后 -->
    <div class="mb-8">
      <h2 class="bridge-title">四、1♥️在1NT应叫后</h2>
    </div>

    <!-- 1H—1NT后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♥️—1NT—？（1NT=6—12点，半逼叫；5—7点时，可以有3~4张♥️）</h3>
      <el-table :data="oneHeartOneNTRebid" style="width: 100%" border>
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

    <!-- 1H—1NT—2C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1NT—2♣️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartOneNTTwoClubRebid" style="width: 100%" border>
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

    <!-- 1H—1NT—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1NT—2♦️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartOneNTTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—1NT—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1NT—2♥️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartOneNTTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1H—1NT—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1NT—2NT 后应叫方的再叫</h4>
      <el-table :data="oneHeartOneNTTwoNTRebid" style="width: 100%" border>
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

    <!-- 五、1H在二盖一应叫后 -->
    <div class="mb-8">
      <h2 class="bridge-title">五、1♥️在二盖一应叫后</h2>
    </div>

    <!-- 1H—2C后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♥️—2♣️ 后开叫方的再叫（2♣️=13点以上，4张以上♣️，偶尔3张♣️，逼局）</h3>
      <el-table :data="oneHeartTwoClubRebid" style="width: 100%" border>
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

    <!-- 1H—2C—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♣️—2♦️ 后应叫方的再叫（2♦️=12—21点，5张以上♥️＋4张以上♦️）</h4>
      <el-table :data="oneHeartTwoClubTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—2C—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♣️—2♥️ 后应叫方的再叫（2♥️=12—21点，5张以上♥️，垃圾叫）</h4>
      <el-table :data="oneHeartTwoClubTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1H—2C—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♣️—2♠️ 后应叫方的再叫（2♠️=12—21点，5张以上♥️＋4张以上♠️）</h4>
      <el-table :data="oneHeartTwoClubTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1H—2C—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♣️—2NT 后应叫方的再叫（2NT=14—19点，5张以上♥️，均型，高限）</h4>
      <el-table :data="oneHeartTwoClubTwoNTRebid" style="width: 100%" border>
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

    <!-- 1H—2C—3C后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♣️—3♣️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartTwoClubThreeClubRebid" style="width: 100%" border>
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

    <!-- 1H—2C—3D后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♣️—3♦️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartTwoClubThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—2C—3H后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♣️—3♥️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartTwoClubThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1H—2C—3S后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♣️—3♠️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartTwoClubThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 1H—2D后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♥️—2♦️后开叫方的再叫（2♦️=13点以上，4张以上♦️，逼局）</h3>
      <el-table :data="oneHeartTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—2D—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♦️—2♥️ 后应叫方的再叫（2♥️=12—21点，5张以上♥️，垃圾叫）</h4>
      <el-table :data="oneHeartTwoDiamondTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1H—2D—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♦️—2♠️ 后应叫方的再叫（2♠️=12—21点，5张以上♥️＋4张以上♠️）</h4>
      <el-table :data="oneHeartTwoDiamondTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1H—2D—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♦️—2NT 后应叫方的再叫（2NT=14—19点，5张以上♥️，均型，高限）</h4>
      <el-table :data="oneHeartTwoDiamondTwoNTRebid" style="width: 100%" border>
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

    <!-- 1H—2D—3C后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♦️—3♣️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartTwoDiamondThreeClubRebid" style="width: 100%" border>
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

    <!-- 1H—2D—3D后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♦️—3♦️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartTwoDiamondThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—2D—3H后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♦️—3♥️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartTwoDiamondThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1H—2D—3S后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♦️—3♠️ 后应叫方的再叫</h4>
      <el-table :data="oneHeartTwoDiamondThreeSpadeRebid" style="width: 100%" border>
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
      <h2 class="bridge-title">六、1♥️开叫后支持♥️的后续</h2>
    </div>

    <!-- 1H—2H后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♥️后开叫方的再叫</h4>
      <el-table :data="oneHeartTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1H—2NT后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2NT(Jacoby 2NT)后开叫方的再叫</h4>
      <el-table :data="oneHeartTwoNTRebid" style="width: 100%" border>
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

    <!-- 1H—3C后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—3♣️（伯根加叫；7—9点，4张以上♥️支持）后开叫方的再叫</h4>
      <el-table :data="oneHeartThreeClubRebid" style="width: 100%" border>
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

    <!-- 1H—3C—3D后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—3♣️—3♦️后应叫方的再叫</h4>
      <el-table :data="oneHeartThreeClubThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—3D后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—3♦️（伯根加叫；10—12点，4张以上♥️支持）后开叫方的再叫</h4>
      <el-table :data="oneHeartThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—3H后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—3♥️（伯根阻击；3—6点，4张以上♥️支持）后开叫方的再叫</h4>
      <el-table :data="oneHeartThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1H—3S后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—3♠️（迷你斯普林特；10—12点，4张以上♥️支持，有单缺）后开叫方的再叫</h4>
      <el-table :data="oneHeartThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 1H—3S—3NT后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—3♠️—3NT后应叫方的再叫</h4>
      <el-table :data="oneHeartThreeSpadeThreeNTRebid" style="width: 100%" border>
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

    <!-- 1H—3NT后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—3NT（斯普林特；13—15点，4张以上♥️支持，♠️单缺）后开叫方的再叫</h4>
      <el-table :data="oneHeartThreeNTRebid" style="width: 100%" border>
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

    <!-- 1H—4C后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—4♣️（斯普林特；13—15点，4张以上♥️支持，♣️单缺）后开叫方的再叫</h4>
      <el-table :data="oneHeartFourClubRebid" style="width: 100%" border>
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

    <!-- 1H—4D后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—4♦️（斯普林特；13—15点，4张以上♥️支持，♦️单缺）后开叫方的再叫</h4>
      <el-table :data="oneHeartFourDiamondRebid" style="width: 100%" border>
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
      <h2 class="bridge-title">七、应叫人跳叫新花</h2>
    </div>

    <!-- 1H—2S后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♠️（跳叫2♠️=4—6点，6张以上♠️，阻击叫）后开叫方的再叫</h4>
      <el-table :data="oneHeartTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1H—2S—2NT后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—2♠️—2NT后应叫方的再叫</h4>
      <el-table :data="oneHeartTwoSpadeTwoNTRebid" style="width: 100%" border>
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
      <h2 class="bridge-title">八、开叫人逆叫</h2>
    </div>

    <!-- 1H—1NT—2S后应叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1NT—2♠️（逆叫=16—21点，5－4以上套，逼叫）后应叫方的再叫</h4>
      <el-table :data="oneHeartOneNTTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1H—1NT—2S—2NT后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1NT—2♠️—2NT（6—12点，等待叫）后开叫方的再叫</h4>
      <el-table :data="oneHeartOneNTTwoSpadeTwoNTRebid" style="width: 100%" border>
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
      <h2 class="bridge-title">九、开叫人跳叫</h2>
    </div>

    <!-- 1H—1S—2NT 应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—2NT（18—19点，均型）后应叫方的再叫</h4>
      <el-table :data="oneHeartOneSpadeJumpTwoNTRebid" style="width: 100%" border>
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

    <!-- 1H—1S—2NT—3C后开叫方的再叫数据 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—2NT—3♣️（6点以上，重询）后开叫方的再叫</h4>
      <el-table :data="oneHeartOneSpadeJumpTwoNTThreeClubRebid" style="width: 100%" border>
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

    <!-- 1H—1S—3C 应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—3♣️（18—21点，通常5－4套，逼局）后应叫方的再叫</h4>
      <el-table :data="oneHeartOneSpadeJumpThreeClubRebid" style="width: 100%" border>
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

    <!-- 1H—1S—3D 应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—3♦️（18—21点，通常5－4套，逼局）后应叫方的再叫</h4>
      <el-table :data="oneHeartOneSpadeJumpThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—1NT—3C 应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1NT—3♣️（18—21点，通常5－4套，逼局）后应叫方的再叫</h4>
      <el-table :data="oneHeartOneNTJumpThreeClubRebid" style="width: 100%" border>
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

    <!-- 1H—1NT—3D 应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1NT—3♦️（18—21点，通常5－4套，逼局）后应叫方的再叫</h4>
      <el-table :data="oneHeartOneNTJumpThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1H—1S—3H 应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1♠️—3♥️（16—18点，6张以上♥️，邀叫）后应叫方的再叫</h4>
      <el-table :data="oneHeartOneSpadeJumpThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1H—1NT—3H 应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—1NT—3♥️（16—18点，6张以上♥️，邀叫）后应叫方的再叫</h4>
      <el-table :data="oneHeartOneNTJumpThreeHeartRebid" style="width: 100%" border>
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
      <h2 class="bridge-title">十、1H被敌方干扰叫后的应叫</h2>
    </div>

    <!-- 1、1H被敌方加倍后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️—(×)后的应叫</h4>
      <el-table :data="oneHeartDoubleInterference" style="width: 100%" border>
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

    <!-- 2、1H被敌方花色争叫后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️被敌方花色争叫后的应叫</h4>
      <h5 class="bridge-subtitle">1♥️ —（1♠️）— ？</h5>
      <el-table :data="oneHeartOneSpadeInterference" style="width: 100%" border>
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
      <h5 class="bridge-subtitle">1♥️ —（2♣️）— ？</h5>
      <el-table :data="oneHeartTwoClubInterference" style="width: 100%" border>
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
      <h5 class="bridge-subtitle">1♥️ —（2♦️）— ？</h5>
      <el-table :data="oneHeartTwoDiamondInterference" style="width: 100%" border>
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
      <h5 class="bridge-subtitle">1♥️ —（2♠️）— ？</h5>
      <el-table :data="oneHeartTwoSpadeInterference" style="width: 100%" border>
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

    <!-- 3、1H被敌方1NT争叫后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️被敌方1NT争叫后的应叫</h4>
      <h5 class="bridge-subtitle">1♥️ —（1NT 15—18点，均型牌）— ？</h5>
      <el-table :data="oneHeartOneNTInterference" style="width: 100%" border>
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

    <!-- 4. 1H被敌方迈克尔斯扣叫后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️被敌方迈克尔斯扣叫后的应叫</h4>
      <h5 class="bridge-subtitle">1♥️ —（2♥️）— ？</h5>
      <el-table :data="oneHeartMichaelsCueInterference" style="width: 100%" border>
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

    <!-- 5. 1H被敌方不寻常2NT争叫后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♥️被敌方不寻常2NT争叫后的应叫</h4>
      <h5 class="bridge-subtitle">1♥️ —（2NT）— ？</h5>
      <el-table :data="oneHeartUnusualTwoNTInterference" style="width: 100%" border>
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

// 花色转换为emoji的函数
const suitToEmoji = (text: string) => {
  return text
    .replace(/C/g, '♣️')
    .replace(/D/g, '♦️')
    .replace(/H/g, '♥️')
    .replace(/S/g, '♠️')
    .replace(/NT/g, 'NT')
}

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

// 1H应叫主表格数据
const oneHeartResponsesFull = [
  { bid: 'Pass', points: '0-5点', description: '不符合其他叫品' },
  { bid: '1S', points: '6点以上', description: '4张以上S，逼叫' },
  { bid: '1NT', points: '6-12点', description: '半逼叫；5—7点时，可以有3~4张H。（同伴低限5 3 3 2牌型时，可以不叫）' },
  { bid: '2C', points: '13点以上', description: '4张以上C，偶尔3张C（4 3 3 3牌型建议叫2C），逼局' },
  { bid: '2D', points: '13点以上', description: '4张以上D，逼局' },
  { bid: '2H', points: '7-9点', description: '3张H；或4张H，3-4-3-3牌型；不逼叫' },
  { bid: '2S', points: '4-6点', description: '6张以上S，阻击叫' },
  { bid: '2NT', points: '13点以上', description: '4张以上H，雅各比2NT，逼局。（同伴再叫为单缺，有满贯兴趣）' },
  { bid: '3C', points: '7-9点', description: '4张以上H，伯根加叫，非3-4-3-3牌型，逼叫一轮' },
  { bid: '3D', points: '10-12点', description: '4张以上H，伯根加叫，为限制性加叫，逼叫' },
  { bid: '3H', points: '3-6点', description: '4张以上H，伯根阻击，不逼叫' },
  { bid: '3S', points: '10-12点', description: '4张以上H，有单缺，迷你斯普林特，逼局' },
  { bid: '3NT', points: '13-15点', description: '4张以上H，S单缺，斯普林特，逼局' },
  { bid: '4C/4D', points: '13-15点', description: '4张以上H，C/D单缺，斯普林特，逼局' },
  { bid: '4H', points: '2-7点', description: '5张以上H，阻击叫；或12—13点，3张以上H，3个控制以下' },
  { bid: '4S', points: '5-8点', description: '7张以上S，止叫' },
  { bid: '4NT', points: '18点以上', description: '4张以上H，罗马关键张问叫' }
]

// 第三家、第四家1H开叫后的应叫数据
const thirdFourthPositionResponses = [
  { bid: '1S', points: '6点以上', description: '4张以上S，保持原意，但不逼叫' },
  { bid: '2C', points: '10-11点', description: '3张以上H，逆德鲁里（朱瑞）约定叫，逼叫' },
  { bid: '2D', points: '9-11点', description: '5张以上D，没有3张H，不逼叫' },
  { bid: '2H', points: '6-9点', description: '3张以上H，不逼叫' },
  { bid: '2NT', points: '10-11点', description: '4张以上H，未叫花色有单缺，逼叫。（3C问单缺：答叫——3D/3H/3S=D/C/S单缺）' },
  { bid: '3C', points: '9-11点', description: '6张以上C，2张以下H，不逼叫' },
  { bid: '3D', points: '9-11点', description: '4张H，带2张大牌的4张以上D，配合显示叫，逼叫' }
]

// 第三家、第四家1H开叫后2C应叫的再叫数据
const thirdFourthPositionTwoClubRebid = [
  { rebid: '2D', points: '12-14点', description: '5张以上H，正常开叫，通常均型牌，逼叫' },
  { rebid: '2H', points: '9-11点', description: '4~5张H，轻开叫，不逼叫' },
  { rebid: '2S', points: '12-14点', description: '5张以上H＋4张S，帮张邀请，逼叫' },
  { rebid: '3C/3D', points: '12-14点', description: '5张以上H＋4张C/D，帮张邀请，逼叫' },
  { rebid: '2NT', points: '15-16点', description: '6张H，均型，逼叫' },
  { rebid: '3H', points: '12-14点', description: '6张H，有单缺，不逼叫' },
  { rebid: '3S/4m', points: '19-21点', description: '5张以上H，斯普林特，满贯兴趣' },
  { rebid: '3NT', points: '17-19点', description: '5张H，5 3 3 2牌型' },
  { rebid: '4H', points: '15-18点', description: '5张以上H，通常有边花套，止叫' }
]

// 1H—1S后开叫方的再叫数据
const oneHeartOneSpadeRebidFull = [
  { rebid: '1NT', points: '12-14点', description: '均型牌，不保证止张，不逼叫' },
  { rebid: '2C/2D', points: '12-17点', description: '4张以上C/D，不逼叫' },
  { rebid: '2H', points: '12-15点', description: '6张以上H，不逼叫' },
  { rebid: '2S', points: '12-15点', description: '4张S或3张S有单缺，不逼叫' },
  { rebid: '2NT', points: '18-19点', description: '相对均型，不逼叫' },
  { rebid: '3C', points: '18-21点', description: '3张以上C，跳叫新花，逼局' },
  { rebid: '3D', points: '18-21点', description: '4张以上D，跳叫新花，逼局' },
  { rebid: '3H', points: '16-18点', description: '6张以上H，跳叫原花，邀叫' },
  { rebid: '3S', points: '15-17点', description: '5张以上H＋4张S，邀叫' },
  { rebid: '3NT', points: '13-16点', description: '好的6张H＋4张小S，逼局' },
  { rebid: '4C/4D', points: '17-21点', description: '5张以上H＋4张S，斯普林特，逼局' },
  { rebid: '4H', points: '13-16点', description: '7张以上H' },
  { rebid: '4S', points: '18-21点', description: '4张S，4-5-2-2牌型' }
]

// 1H—1S—2C后应叫方的再叫数据
const oneHeartOneSpadeeTwoClubRebid = [
  { rebid: 'Pass', points: '6-9点', description: '3张以上C，没有成局可能' },
  { rebid: '2D', points: '12点以上', description: '第四花色逼局，和D无关' },
  { rebid: '2H', points: '8-10点', description: '2张H，或6—7点，3张H' },
  { rebid: '2S', points: '6-9点', description: '6张S，不逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型牌，高花不配合，邀叫' },
  { rebid: '3C', points: '9-11点', description: '4张以上C，邀叫' },
  { rebid: '3D', points: '13点以上', description: '4张以上C，D单缺，斯普林特，逼局' },
  { rebid: '3H', points: '10-12点', description: '3张H，邀叫' },
  { rebid: '3S', points: '10-11点', description: '6张以上S，邀叫' },
  { rebid: '3NT', points: '12-17点', description: '止叫' },
  { rebid: '4C', points: '10-11点', description: '5张以上C，邀叫' },
  { rebid: '4H', points: '13-15点', description: '3张H，止叫' }
]

// 1H—1S—2D后应叫方的再叫数据
const oneHeartOneSpadeeTwoDiamondRebid = [
  { rebid: 'Pass', points: '6-9点', description: '3张以上D，没有成局可能' },
  { rebid: '2H', points: '8-10点', description: '2张H，或6—7点，3张H' },
  { rebid: '2S', points: '6-9点', description: '6张S，不逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型牌，高花不配合，邀叫' },
  { rebid: '3C', points: '12点以上', description: '第四花色逼局，和C无关' },
  { rebid: '3D', points: '9-11点', description: '4张以上D，邀叫' },
  { rebid: '3H', points: '10-12点', description: '3张H，邀叫' },
  { rebid: '3S', points: '10-11点', description: '6张以上S，邀叫' },
  { rebid: '3NT', points: '12-17点', description: '止叫' },
  { rebid: '4D', points: '10-11点', description: '5张以上D，邀叫' },
  { rebid: '4H', points: '13-15点', description: '3张H，止叫' }
]

// 1H—1S—2H后应叫方的再叫数据
const oneHeartOneSpadeeTwoHeartRebid = [
  { rebid: '2S', points: '7-9点', description: '6张S，通常H单缺，不逼叫' },
  { rebid: '2NT', points: '10-11点', description: '通常H单缺，邀叫' },
  { rebid: '3C', points: '12点以上', description: '3张以上C，新低花逼局' },
  { rebid: '3D', points: '12点以上', description: '3张以上D，新低花逼局' },
  { rebid: '3H', points: '10-11点', description: '2张以上H，邀叫' },
  { rebid: '3S', points: '10-11点', description: '6张以上S，邀叫' },
  { rebid: '3NT', points: '12-16点', description: '止叫' },
  { rebid: '4C', points: '12点以上', description: '3张以上H，C单缺，斯普林特，逼局' },
  { rebid: '4D', points: '12点以上', description: '3张以上H，D单缺，斯普林特，逼局' },
  { rebid: '4H', points: '12-16点', description: '2张以上H，止叫' },
  { rebid: '4S', points: '10-15点', description: '7张以上S，止叫' }
]

// 1H—1S—2S后应叫方的再叫数据
const oneHeartOneSpadeeTwoSpadeRebid = [
  { rebid: 'Pass', points: '6-9点', description: '均型牌' },
  { rebid: '2NT', points: '10-11点', description: '重询高花，请同伴描述牌情' },
  { rebid: '3C/3D', points: '10点以上', description: '5张S↑，3张C/D↑，帮张邀叫' },
  { rebid: '3H', points: '10点以上', description: '3张H，逼叫' },
  { rebid: '3S', points: '10-11点', description: '5张以上S，邀叫' },
  { rebid: '3NT', points: '12-13点', description: '未叫花色有止张，止叫' },
  { rebid: '4C/4D', points: '12点以上', description: '5张以上S，C/D单缺，逼局' },
  { rebid: '4H', points: '15点以上', description: '5张以上S，H单缺，逼局' },
  { rebid: '4S', points: '12-15点', description: '5张以上S，止叫' }
]

// 1H—1S—2S—2NT后再叫数据
const oneHeartOneSpadeeTwoSpadeTwoNTRebid = [
  { rebid: '3C', points: '12-14点', description: '3张S，4张C，不逼叫' },
  { rebid: '3D', points: '12-14点', description: '3张S，4张D，不逼叫' },
  { rebid: '3H', points: '12-13点', description: '3张S，6张H，不逼叫' },
  { rebid: '3S', points: '12-13点', description: '4张S，低限，不逼叫' },
  { rebid: '4C', points: '13-15点', description: '4张S，C单缺，逼局' },
  { rebid: '4D', points: '13-15点', description: '4张S，D单缺，逼局' },
  { rebid: '4H', points: '14-15点', description: '4张S，好的5张以上H' },
  { rebid: '4S', points: '14-15点', description: '4张S，高限，止叫' }
]

// 1H—1S—1NT后的应叫数据
const oneHeartOneSpadeOneNTResponses = [
  { bid: 'Pass', points: '6-9点', description: '不符合其他叫品' },
  { bid: '2C', points: '6-9点', description: '要求同伴叫2D；后续Pass=5张以上D，示弱。10—12点，要求同伴叫2D；后续选择自然叫，邀叫' },
  { bid: '2D', points: '13点以上', description: '多数进局牌起步叫品，与D无关，逼局' },
  { bid: '2H', points: '6-9点', description: '3张H，或2张H有单缺，不逼叫' },
  { bid: '2S', points: '6-9点', description: '6张以上S，不逼叫' },
  { bid: '2NT', points: '6-9点', description: '要求同伴叫3C；后续Pass=6张以上C，示弱。10—12点，要求同伴叫3C；后续叫3D=5张D＋5张S，邀叫' },
  { bid: '3C/3D', points: '13点以上', description: '5张S＋5张C/D，逼局' },
  { bid: '3H', points: '13点以上', description: '5张S＋好的4张H，逼局' },
  { bid: '3S', points: '13点以上', description: '半坚固的6张以上S，逼局' },
  { bid: '3NT', points: '13-17点', description: '不满足其他进局条件，止叫' },
  { bid: '4H', points: '10-14点', description: '3张H，止叫' },
  { bid: '4S', points: '9-12点', description: '半坚固的6张以上S，止叫' },
  { bid: '4NT', points: '18-19点', description: '满贯邀叫' }
]

// 1H—1S—1NT—2C—2D后的应叫数据
const oneHeartOneSpadeOneNTTwoClubTwoDiamondResponses = [
  { bid: 'Pass', points: '6-9点', description: '5张以上D；示弱' },
  { bid: '2H', points: '9-10点', description: '3张H，不逼叫' },
  { bid: '2S', points: '10-12点', description: '好的5张以上S，邀叫' },
  { bid: '2NT', points: '10-12点', description: '均型牌，邀叫' },
  { bid: '3C/3D', points: '10-12点', description: '6张C/D↑＋4张S，邀叫' },
  { bid: '3H', points: '11-12点', description: '3张H，邀叫' },
  { bid: '3S', points: '10-12点', description: '好的6张以上S，邀叫' }
]

// 1H—1S—1NT—2D后开叫方的再叫数据
const oneHeartOneSpadeOneNTTwoDiamondRebid = [
  { rebid: '2H', points: '12-14点', description: '5张H；等待叫' },
  { rebid: '2S', points: '12-14点', description: '3张S' },
  { rebid: '2NT', points: '12-14点', description: '无3张S，均型牌' },
  { rebid: '3C', points: '12-14点', description: '5张H＋4张C' },
  { rebid: '3D', points: '12-14点', description: '5张H＋4张D' }
]

// 1H—1NT后开叫方的再叫数据
const oneHeartOneNTRebid = [
  { rebid: 'Pass', points: '11-12点', description: '5 3 3 2牌型，低限' },
  { rebid: '2C', points: '12-17点', description: '5张H＋3张以上C；4-5-2-2牌型，只能2张C，不逼叫' },
  { rebid: '2D', points: '12-17点', description: '5张H＋3张以上D，不逼叫' },
  { rebid: '2H', points: '12-15点', description: '6张以上H，不逼叫' },
  { rebid: '2S', points: '17-21点', description: '5张H＋4张S，偶尔3张S，逆叫，逼叫' },
  { rebid: '2NT', points: '18-19点', description: '5张H，均型牌，不逼叫' },
  { rebid: '3C', points: '18-21点', description: '5张H＋3张以上C，偶尔2张C，跳叫新花，逼局' },
  { rebid: '3D', points: '18-21点', description: '5张H＋4张以上D，偶尔3张D，跳叫新花，逼局' },
  { rebid: '3H', points: '16-18点', description: '6张以上H，跳叫原花，邀叫' },
  { rebid: '3S', points: '15-21点', description: '6张以上H＋5张S，逼叫' },
  { rebid: '3NT', points: '16-21点', description: '坚固的6张以上H，无单缺' },
  { rebid: '4C/4D', points: '16-21点', description: '6张H＋6张C/D，逼局' },
  { rebid: '4H', points: '15-17点', description: '7张以上H，止叫' }
]

// 1H—1NT—2C后应叫方的再叫数据
const oneHeartOneNTTwoClubRebid = [
  { rebid: 'Pass', points: '6-7点', description: '5张C，H单缺时4张C' },
  { rebid: '2D', points: '6-9点', description: '6张以上D，不逼叫' },
  { rebid: '2H', points: '8-10点', description: '2张H，或6—7点，3张H' },
  { rebid: '2S', points: '10-12点', description: '5张以上C，建设性加叫，逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型，H无配合，邀叫' },
  { rebid: '3C', points: '8-9点', description: '5张以上C，不逼叫' },
  { rebid: '3D', points: '10-11点', description: '好的6张以上D，邀叫' },
  { rebid: '3H', points: '10-12点', description: '3张H，邀叫' },
  { rebid: '3NT', points: '10-12点', description: '5张以上C，止叫' },
  { rebid: '4C', points: '10-12点', description: '6张以上C，有单缺' },
  { rebid: '4H', points: '11-12点', description: '3张H，有牌型，止叫' }
]

// 1H—1NT—2D后应叫方的再叫数据
const oneHeartOneNTTwoDiamondRebid = [
  { rebid: 'Pass', points: '6-7点', description: '5张D，H单缺时可能4张D' },
  { rebid: '2H', points: '8-10点', description: '2张H，或6—7点，3张H' },
  { rebid: '2S', points: '10-12点', description: '5张以上D，建设性加叫，逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型，H无配合，邀叫' },
  { rebid: '3C', points: '6-11点', description: '好的6张以上C，不逼叫' },
  { rebid: '3D', points: '8-9点', description: '5张以上D，不逼叫' },
  { rebid: '3H', points: '10-12点', description: '3张H，邀叫' },
  { rebid: '3NT', points: '10-12点', description: '5张以上D，止叫' },
  { rebid: '4C', points: '10-12点', description: '5张C＋5张D，不逼叫' },
  { rebid: '4D', points: '10-12点', description: '6张以上D，有单缺' },
  { rebid: '4H', points: '11-12点', description: '3张H，有牌型，止叫' }
]

// 1H—1NT—2H后应叫方的再叫数据
const oneHeartOneNTTwoHeartRebid = [
  { rebid: 'Pass', points: '6-9点', description: '没有成局可能' },
  { rebid: '2S', points: '8-10点', description: '5张C＋5张D，逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型，H无配合，邀叫' },
  { rebid: '3C', points: '9-11点', description: '6张以上C，H单缺，不逼叫' },
  { rebid: '3D', points: '9-11点', description: '6张以上D，H单缺，不逼叫' },
  { rebid: '3H', points: '10-12点', description: '2~3张H，邀叫' },
  { rebid: '4H', points: '11-12点', description: '2~3张H，有牌型，止叫' }
]

// 1H—1NT—2NT后应叫方的再叫数据
const oneHeartOneNTTwoNTRebid = [
  { rebid: 'Pass', points: '6-7点', description: '没有成局可能' },
  { rebid: '3C/3D', points: '6-7点', description: '6张以上C/D，不逼叫' },
  { rebid: '3H', points: '8-11点', description: '2~3张H，逼局' },
  { rebid: '3S', points: '8-10点', description: '5张C＋5张D，逼叫' },
  { rebid: '3NT', points: '8-11点', description: '止叫' },
  { rebid: '4C/4D', points: '8-11点', description: '6张以上C/D，逼局' },
  { rebid: '4H', points: '6-7点', description: '3张H，止叫' }
]

// 1H—2C后开叫方的再叫数据
const oneHeartTwoClubRebid = [
  { rebid: '2D', points: '12—21点', description: '5张以上♥️＋4张以上♦️' },
  { rebid: '2H', points: '12—21点', description: '5张以上♥️，垃圾叫，不符合其他叫品的牌' },
  { rebid: '2S', points: '12—21点', description: '5张以上♥️＋4张以上♠️' },
  { rebid: '2NT', points: '14—19点', description: '5张以上♥️，均型，高限' },
  { rebid: '3C', points: '14—21点', description: '5张以上♥️＋4张以上♣️支持，或3张♣️带大牌' },
  { rebid: '3D/3S', points: '14—21点', description: '5张以上♥️＋4张以上♣️支持，♦️/♠️单缺，斯普林特' },
  { rebid: '3H', points: '15—21点', description: '半坚固的6张以上♥️' },
  { rebid: '3NT', points: '16—17点', description: '均型牌，5 3 3 2牌型' },
  { rebid: '4C', points: '15—21点', description: '5张以上♥️＋5张以上♣️支持，满贯兴趣' }
]

// 1H—2C—2D后应叫方的再叫数据
const oneHeartTwoClubTwoDiamondRebid = [
  { rebid: '2H', points: '15点以上', description: '3张以上♥️，高限' },
  { rebid: '2S', points: '12点以上', description: '第四花色逼局，通常♠️无止张' },
  { rebid: '2NT', points: '12点以上', description: '♠️有止张，没有3张♥️' },
  { rebid: '3C', points: '12点以上', description: '好的6张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '4张以上♦️' },
  { rebid: '3H', points: '15点以上', description: '5张以上♣️＋4张♥️' },
  { rebid: '3NT', points: '15—17点', description: '均型牌' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上♣️' },
  { rebid: '4D', points: '12点以上', description: '6张以上♣️＋5张♦️' },
  { rebid: '4H', points: '12—14点', description: '3张以上♥️，低限' }
]

// 1H—2C—2H后应叫方的再叫数据
const oneHeartTwoClubTwoHeartRebid = [
  { rebid: '2S', points: '12点以上', description: '5张以上♣️＋4张♠️' },
  { rebid: '2NT', points: '13点以上', description: '没有3张♥️，等待叫' },
  { rebid: '3C', points: '12点以上', description: '好的6张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '6张以上♣️＋4张以上♦️' },
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S/4D', points: '12点以上', description: '3张♥️，♠️/♦️单缺，斯普林特' },
  { rebid: '3NT', points: '13—15点', description: '通常5 3 3 2牌型' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上♣️' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' }
]

// 1H—2C—2S后应叫方的再叫数据
const oneHeartTwoClubTwoSpadeRebid = [
  { rebid: '2NT', points: '13点以上', description: '等待叫' },
  { rebid: '3C', points: '12点以上', description: '好的6张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '6张♣️＋4张以上♦️' },
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S', points: '15点以上', description: '4张♠️，高限' },
  { rebid: '3NT', points: '12—14点', description: '通常♥️单缺' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上♣️' },
  { rebid: '4D', points: '12点以上', description: '4张♠️，♦️单缺，斯普林特' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' },
  { rebid: '4S', points: '12—14点', description: '4张♠️，低限' }
]

// 1H—2C—2NT后应叫方的再叫数据
const oneHeartTwoClubTwoNTRebid = [
  { rebid: '3C', points: '12点以上', description: '好的6张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '5张以上♣️＋4张以上♦️' },
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S', points: '12点以上', description: '6张以上♣️＋4张♠️' },
  { rebid: '3NT', points: '12—17点', description: '止叫' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上♣️' },
  { rebid: '4D', points: '12点以上', description: '4张♥️，♦️单缺，斯普林特' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' },
  { rebid: '4NT', points: '18—19点', description: '均型牌，满贯邀叫' }
]

// 1H—2C—3C后应叫方的再叫数据
const oneHeartTwoClubThreeClubRebid = [
  { rebid: '3D', points: '12点以上', description: '♦️有止张' },
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S', points: '12点以上', description: '♠️有止张，♦️没有止张' },
  { rebid: '3NT', points: '12—16点', description: '未叫花色有止张，止叫' },
  { rebid: '4C', points: '16点以上', description: '6张以上♣️，满贯兴趣' },
  { rebid: '4D/4S', points: '12点以上', description: '6张以上♣️，♦️/♠️单缺，斯普林特' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' }
]

// 1H—2C—3D后应叫方的再叫数据
const oneHeartTwoClubThreeDiamondRebid = [
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S', points: '15点以上', description: '4张♣️↑，扣叫，♠️有控制' },
  { rebid: '3NT', points: '12—16点', description: '♦️有好止张，止叫' },
  { rebid: '4C', points: '15点以上', description: '4张♣️↑，♠️无控制，满贯兴趣' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' },
  { rebid: '5C', points: '12—14点', description: '5张以上♣️，低限止叫' }
]

// 1H—2C—3H后应叫方的再叫数据
const oneHeartTwoClubThreeHeartRebid = [
  { rebid: '3S', points: '12点以上', description: '默认♥️将牌，♠️有控制' },
  { rebid: '3NT', points: '12—14点', description: '未叫花色有止张，止叫' },
  { rebid: '4C', points: '15点以上', description: '6张以上♣️' },
  { rebid: '4D', points: '12点以上', description: '默认♥️将牌，♦️有控，♠️无控' },
  { rebid: '4H', points: '12—14点', description: '低限止叫' }
]

// 1H—2C—3S后应叫方的再叫数据
const oneHeartTwoClubThreeSpadeRebid = [
  { rebid: '3NT', points: '12—16点', description: '♠️有好止张，止叫' },
  { rebid: '4C', points: '15点以上', description: '4张以上♣️，满贯兴趣，等待叫' },
  { rebid: '4D', points: '15点以上', description: '3张♥️，高限，满贯兴趣' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' },
  { rebid: '5C', points: '12—14点', description: '5张以上♣️，低限止叫' }
]

// 1H—2D后开叫方的再叫数据
const oneHeartTwoDiamondRebid = [
  { rebid: '2H', points: '12—21点', description: '垃圾叫，不符合其他叫品的牌' },
  { rebid: '2S', points: '12—21点', description: '5张以上♥️＋4张以上♠️' },
  { rebid: '2NT', points: '14—19点', description: '5张以上♥️，均型，高限' },
  { rebid: '3C', points: '12—21点', description: '5张♣️；或15点以上，4张♣️' },
  { rebid: '3D', points: '14—21点', description: '4张以上♦️，或3张♦️有大牌' },
  { rebid: '3H', points: '15—21点', description: '半坚固的6张以上♥️' },
  { rebid: '3S', points: '14—21点', description: '4张以上♦️，♠️单缺' },
  { rebid: '3NT', points: '16—17点', description: '5 3 3 2牌型' },
  { rebid: '4C', points: '14—21点', description: '4张以上♦️，♣️单缺' },
  { rebid: '4D', points: '14—21点', description: '5张以上♦️，满贯兴趣' }
]

// 1H—2D—2H后应叫方的再叫数据
const oneHeartTwoDiamondTwoHeartRebid = [
  { rebid: '2S', points: '12点以上', description: '5张以上♦️＋4张♠️' },
  { rebid: '2NT', points: '13点以上', description: '没有3张♥️，等待叫' },
  { rebid: '3C', points: '12点以上', description: '5张以上♦️＋4张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '好的6张以上♦️' },
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S', points: '12点以上', description: '3张♥️，♠️单缺，斯普林特' },
  { rebid: '3NT', points: '13—15点', description: '5 3 3 2牌型' },
  { rebid: '4C', points: '12点以上', description: '3张♥️，♣️单缺，斯普林特' },
  { rebid: '4D', points: '16点以上', description: '半坚固的7张以上♦️' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' }
]

// 1H—2D—2S后应叫方的再叫数据
const oneHeartTwoDiamondTwoSpadeRebid = [
  { rebid: '2NT', points: '13点以上', description: '等待叫' },
  { rebid: '3C', points: '12点以上', description: '5张以上♦️＋5张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '好的6张以上♦️' },
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S', points: '15点以上', description: '4张♠️，高限' },
  { rebid: '3NT', points: '12—14点', description: '通常♥️单缺' },
  { rebid: '4C', points: '12点以上', description: '4张♠️，♣️单缺' },
  { rebid: '4D', points: '16点以上', description: '半坚固的7张以上♦️' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' },
  { rebid: '4S', points: '12—14点', description: '4张♠️，低限' }
]

// 1H—2D—2NT后应叫方的再叫数据
const oneHeartTwoDiamondTwoNTRebid = [
  { rebid: '3C', points: '12点以上', description: '5张以上♦️＋4张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '好的6张以上♦️' },
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S', points: '12点以上', description: '6张以上♦️＋4张♠️' },
  { rebid: '3NT', points: '12—17点', description: '止叫' },
  { rebid: '4C', points: '12点以上', description: '5张♦️＋4张♥️，♣️单缺' },
  { rebid: '4D', points: '16点以上', description: '半坚固的7张以上♦️' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' },
  { rebid: '4NT', points: '18—19点', description: '均型牌，满贯邀叫' }
]

// 1H—2D—3C后应叫方的再叫数据
const oneHeartTwoDiamondThreeClubRebid = [
  { rebid: '3D', points: '12点以上', description: '好的6张以上♦️' },
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S', points: '12—14点', description: '4张♣️＋4张以上♦️' },
  { rebid: '3NT', points: '12—16点', description: '止叫' },
  { rebid: '4C', points: '15点以上', description: '4张以上♣️，满贯兴趣' },
  { rebid: '4D', points: '16点以上', description: '坚固的7张以上♦️，满贯兴趣' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' }
]

// 1H—2D—3D后应叫方的再叫数据
const oneHeartTwoDiamondThreeDiamondRebid = [
  { rebid: '3H', points: '15点以上', description: '3张♥️，高限' },
  { rebid: '3S', points: '12点以上', description: '♠️有止张' },
  { rebid: '3NT', points: '12—16点', description: '止叫' },
  { rebid: '4C', points: '15点以上', description: '♣️有控，♠️无控制，♦️满贯兴趣' },
  { rebid: '4D', points: '18点以上', description: '6张以上♦️，满贯兴趣' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' },
  { rebid: '4S', points: '13—14点', description: '6张以上♦️，♠️单缺，斯普林特' }
]

// 1H—2D—3H后应叫方的再叫数据
const oneHeartTwoDiamondThreeHeartRebid = [
  { rebid: '3S', points: '12点以上', description: '默认♥️将牌，♠️有控制' },
  { rebid: '3NT', points: '12—14点', description: '止叫' },
  { rebid: '4C', points: '12点以上', description: '默认♥️将牌，♣️有控，♠️无控' },
  { rebid: '4D', points: '15点以上', description: '6张以上♦️' },
  { rebid: '4H', points: '12—14点', description: '低限止叫' }
]

// 1H—2D—3S后应叫方的再叫数据
const oneHeartTwoDiamondThreeSpadeRebid = [
  { rebid: '3NT', points: '12—16点', description: '♠️有好止张，止叫' },
  { rebid: '4C', points: '15点以上', description: '3张♥️，高限；满贯兴趣' },
  { rebid: '4D', points: '15点以上', description: '4张以上♦️，满贯兴趣，等待叫' },
  { rebid: '4H', points: '12—14点', description: '3张♥️，低限' },
  { rebid: '5D', points: '12—14点', description: '低限止叫' }
]

// 1H—2H后开叫方的再叫数据（简单加叫）
const oneHeartTwoHeartRebid = [
  { rebid: 'Pass', points: '12—14点', description: '不符合其他叫品' },
  { rebid: '2S', points: '14点以上', description: '3张以上♠️，帮张进局邀请，逼叫' },
  { rebid: '3C', points: '14点以上', description: '3张以上♣️，帮张进局邀请，逼叫' },
  { rebid: '3D', points: '14点以上', description: '3张以上♦️，帮张进局邀请，逼叫' },
  { rebid: '2NT', points: '16—17点', description: '均型牌邀请，不逼叫' },
  { rebid: '3H', points: '14—17点', description: '通常6张以上♥️，邀叫' },
  { rebid: '3S', points: '17—21点', description: '5张以上♥️，♠️单缺，逼局' },
  { rebid: '4C', points: '17—21点', description: '5张以上♥️，♣️单缺，逼局' },
  { rebid: '4D', points: '17—21点', description: '5张以上♥️，♦️单缺，逼局' },
  { rebid: '3NT', points: '18—19点', description: '4♥️和3NT示选' },
  { rebid: '4H', points: '15—19点', description: '5张以上♥️，止叫' }
]

// 1H—2NT后开叫方的再叫数据（雅各比2NT）
const oneHeartTwoNTRebid = [
  { rebid: '3C', points: '12—21点', description: '5张以上♥️，♣️单缺' },
  { rebid: '3D', points: '12—21点', description: '5张以上♥️，♦️单缺' },
  { rebid: '3S', points: '12—21点', description: '5张以上♥️，♠️单缺' },
  { rebid: '3H', points: '16—21点', description: '无单缺，5张以上♥️，4个控制以上（无单缺，强）' },
  { rebid: '3NT', points: '14—15点', description: '无单缺，5张以上♥️，3个控制以上（无单缺，中等）' },
  { rebid: '4C', points: '12—21点', description: '5张以上♥️＋5张以上♣️有2张大牌，配合显示叫（优先叫）' },
  { rebid: '4D', points: '12—21点', description: '5张以上♥️＋5张以上♦️有2张大牌，配合显示叫（优先叫）' },
  { rebid: '4H', points: '12—13点', description: '无单缺，5张以上♥️，3个控制以下（无单缺，弱）' }
]

// 1H—3C后开叫方的再叫数据（伯根加叫）
const oneHeartThreeClubRebid = [
  { rebid: '3D', points: '14—21点', description: '高限，3张以上♦️；若同伴高限可以进局；或是满贯兴趣的扣叫' },
  { rebid: '3H', points: '12—13点', description: '低限，不逼叫' },
  { rebid: '3S', points: '18—21点', description: '扣叫，满贯兴趣' },
  { rebid: '3NT', points: '16—19点', description: '各门花色均有止张' },
  { rebid: '4C', points: '18—21点', description: '扣叫，满贯兴趣' },
  { rebid: '4D', points: '18—21点', description: '扣叫，满贯兴趣' },
  { rebid: '4H', points: '14—17点', description: '高限，通常有牌型，止叫' }
]

// 1H—3C—3D后应叫方的再叫数据
const oneHeartThreeClubThreeDiamondRebid = [
  { rebid: '3H', points: '6—9点', description: '不符合其他叫品，不逼叫' },
  { rebid: '3S', points: '8—9点', description: '♠️单缺，逼局' },
  { rebid: '4C', points: '8—9点', description: '♣️单缺，逼局' },
  { rebid: '4D', points: '8—9点', description: '♦️单缺，逼局' },
  { rebid: '4H', points: '6—7点', description: '5张以上♥️，通常有牌型，止叫' }
]

// 1H—3D后开叫方的再叫数据（伯根加叫）
const oneHeartThreeDiamondRebid = [
  { rebid: '3H', points: '12—13点', description: '低限，不逼叫' },
  { rebid: '3S', points: '15—21点', description: '扣叫控制，满贯兴趣' },
  { rebid: '3NT', points: '16—19点', description: '各门花色均有止张' },
  { rebid: '4C', points: '15—21点', description: '扣叫控制，满贯兴趣' },
  { rebid: '4D', points: '15—21点', description: '扣叫控制，满贯兴趣' },
  { rebid: '4H', points: '14—16点', description: '高限，通常有牌型，止叫' }
]

// 1H—3H后开叫方的再叫数据（伯根阻击）
const oneHeartThreeHeartRebid = [
  { rebid: 'Pass', points: '12—17点', description: '不能成局' },
  { rebid: '3S', points: '18—21点', description: '扣叫控制，逼局' },
  { rebid: '4C', points: '18—21点', description: '扣叫控制，逼局' },
  { rebid: '4D', points: '18—21点', description: '扣叫控制，逼局' },
  { rebid: '4H', points: '18—21点', description: '止叫' }
]

// 1H—3S后开叫方的再叫数据（迷你斯普林特）
const oneHeartThreeSpadeRebid = [
  { rebid: '3NT', points: '16—21点', description: '问应叫人的单缺花色，满贯兴趣' },
  { rebid: '4C', points: '16—21点', description: '扣叫控制，满贯兴趣' },
  { rebid: '4D', points: '16—21点', description: '扣叫控制，满贯兴趣' },
  { rebid: '4H', points: '12—15点', description: '止叫' }
]

// 1H—3S—3NT后应叫方的再叫数据
const oneHeartThreeSpadeThreeNTRebid = [
  { rebid: '4C', points: '10—12点', description: '♣️单缺，逼局' },
  { rebid: '4D', points: '10—12点', description: '♦️单缺，逼局' },
  { rebid: '4H', points: '10—12点', description: '♠️单缺' }
]

// 1H—3NT后开叫方的再叫数据（斯普林特）
const oneHeartThreeNTRebid = [
  { rebid: '4C', points: '15点以上', description: '♣️有控制，满贯兴趣' },
  { rebid: '4D', points: '15点以上', description: '♦️有控制，♣️没有控制，满贯兴趣' },
  { rebid: '4H', points: '12—14点', description: '止叫' }
]

// 1H—4C后开叫方的再叫数据（斯普林特）
const oneHeartFourClubRebid = [
  { rebid: '4D', points: '15点以上', description: '♦️有控制，满贯兴趣' },
  { rebid: '4H', points: '12—14点', description: '止叫' },
  { rebid: '4S', points: '16点以上', description: '♠️有控制，♦️无控制，满贯兴趣' }
]

// 1H—4D后开叫方的再叫数据（斯普林特）
const oneHeartFourDiamondRebid = [
  { rebid: '4H', points: '12—15点', description: '止叫' },
  { rebid: '4S', points: '16点以上', description: '♠️有控制，满贯兴趣' },
  { rebid: '5C', points: '16点以上', description: '♣️有控制，♠️无控制，满贯兴趣' }
]

// 1H—2S后开叫方的再叫数据（应叫人跳叫新花）
const oneHeartTwoSpadeRebid = [
  { rebid: 'Pass', points: '12点以上', description: '不符合其他叫品' },
  { rebid: '2NT', points: '15—21点', description: '问单缺；2张以上♠️，逼叫' },
  { rebid: '3C', points: '15—18点', description: '5张♥️＋5张♣️，♠️单缺，不逼叫' },
  { rebid: '3D', points: '15—18点', description: '5张♥️＋5张♦️，♠️单缺，不逼叫' },
  { rebid: '3H', points: '12—18点', description: '半坚固的6张以上♥️，♠️单缺，不逼叫' },
  { rebid: '3S', points: '12—15点', description: '3张以上♠️，不逼叫' },
  { rebid: '3NT', points: '18—19点', description: '坚固的6张以上♥️，未叫花色有止张' },
  { rebid: '4H', points: '16—21点', description: '7张以上♥️，止叫' },
  { rebid: '4S', points: '15—21点', description: '3~4张♠️，止叫' }
]

// 1H—2S—2NT后应叫方的再叫数据
const oneHeartTwoSpadeTwoNTRebid = [
  { rebid: '3C', points: '4—5点', description: '♣️单缺，逼叫' },
  { rebid: '3D', points: '4—5点', description: '♦️单缺，逼叫' },
  { rebid: '3H', points: '4—5点', description: '♥️单缺，逼叫' },
  { rebid: '3S', points: '4—5点', description: '无单缺，不逼叫' },
  { rebid: '3NT', points: '6—7点', description: '无单缺，高限，止叫' },
  { rebid: '4C', points: '6—7点', description: '♣️单缺，高限，逼叫' },
  { rebid: '4D', points: '6—7点', description: '♦️单缺，高限，逼叫' },
  { rebid: '4H', points: '6—7点', description: '♥️单缺，高限，逼叫' }
]

// 1H—1NT—2S后应叫方的再叫数据（开叫人逆叫）
const oneHeartOneNTTwoSpadeRebid = [
  { rebid: '2NT', points: '6—12点', description: '等待叫，逼叫' },
  { rebid: '3C', points: '6—8点', description: '6张以上♣️，不逼叫' },
  { rebid: '3D', points: '6—8点', description: '6张以上♦️，不逼叫' },
  { rebid: '3H', points: '10—11点', description: '3张♥️，逼局' },
  { rebid: '3S', points: '6—8点', description: '3张♠️，低花无止张，不逼叫' },
  { rebid: '3NT', points: '9—11点', description: '♣️/♦️有止张，止叫' },
  { rebid: '4H', points: '5—6点', description: '3张♥️，止叫' }
]

// 1H—1NT—2S—2NT后开叫方的再叫数据
const oneHeartOneNTTwoSpadeTwoNTRebid = [
  { rebid: '3C', points: '16—21点', description: '3~4张♣️，逼叫' },
  { rebid: '3D', points: '16—21点', description: '3~4张♦️，逼叫' },
  { rebid: '3H', points: '17—21点', description: '6张以上♥️，逼局' },
  { rebid: '3S', points: '16—21点', description: '6张以上♥️＋5张♠️，逼局' },
  { rebid: '3NT', points: '19—21点', description: '止叫' }
]

// 1H—1S—2NT后应叫方的再叫数据（开叫人跳叫）
const oneHeartOneSpadeJumpTwoNTRebid = [
  { rebid: 'Pass', points: '6—7点', description: '最低限，4~5张♠️' },
  { rebid: '3C', points: '6点以上', description: '3C重询；5张♠️或5张♣️，逼局' },
  { rebid: '3D', points: '10点以上', description: '5张以上♦️＋4张♠️，满贯兴趣' },
  { rebid: '3H', points: '10点以上', description: '3张以上♥️，满贯兴趣' },
  { rebid: '3S', points: '6点以上', description: '6张以上♠️，邀叫' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4H', points: '5—6点', description: '3张以上♥️，止叫' },
  { rebid: '4S', points: '6—9点', description: '7张以上♠️，止叫' },
  { rebid: '4NT', points: '12—14点', description: '满贯邀叫' }
]

// 1H—1S—2NT—3C后开叫方的再叫数据
const oneHeartOneSpadeJumpTwoNTThreeClubRebid = [
  { rebid: '3D', points: '18—19点', description: '4张♦️，无3张♠️' },
  { rebid: '3H', points: '18—19点', description: '较差的6张♥️，无3张♠️' },
  { rebid: '3S', points: '18—19点', description: '3张♠️' },
  { rebid: '3NT', points: '18—19点', description: '不符合其他叫品' }
]

// 1H—1S—3C后应叫方的再叫数据（跳叫新花）
const oneHeartOneSpadeJumpThreeClubRebid = [
  { rebid: '3D', points: '6点以上', description: '等待叫，通常♦️无止张' },
  { rebid: '3H', points: '9点以上', description: '3张♥️，满贯兴趣' },
  { rebid: '3S', points: '6点以上', description: '5张以上♠️' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4C', points: '10点以上', description: '4张以上♣️' },
  { rebid: '4D', points: '10点以上', description: '4张以上♣️，♦️单缺' },
  { rebid: '4H', points: '5—6点', description: '3张♥️，止叫' },
  { rebid: '5C', points: '6—9点', description: '5张以上♣️，止叫' }
]

// 1H—1S—3D后应叫方的再叫数据（跳叫新花）
const oneHeartOneSpadeJumpThreeDiamondRebid = [
  { rebid: '3H', points: '9点以上', description: '3张♥️，满贯兴趣' },
  { rebid: '3S', points: '6点以上', description: '5张以上♠️' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4C', points: '10点以上', description: '等待叫，通常♣️无止张' },
  { rebid: '4D', points: '10点以上', description: '4张以上♦️' },
  { rebid: '4H', points: '5—6点', description: '3张♥️，止叫' },
  { rebid: '5D', points: '6—9点', description: '5张以上♦️，止叫' }
]

// 1H—1NT—3C后应叫方的再叫数据（跳叫新花）
const oneHeartOneNTJumpThreeClubRebid = [
  { rebid: '3D', points: '6—11点', description: '5张以上♦️' },
  { rebid: '3H', points: '10—11点', description: '3张♥️，或2张♥️带大牌' },
  { rebid: '3S', points: '6—7点', description: '4张♣️＋5张♦️，通常♥️单缺' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4C', points: '6—11点', description: '4张以上♣️' },
  { rebid: '4D', points: '10点以上', description: '5张♦️＋5张♣️，♥️单缺，满贯' },
  { rebid: '4H', points: '5—6点', description: '3张♥️，止叫' },
  { rebid: '4S', points: '8—11点', description: '6张以上♣️，♠️单缺' }
]

// 1H—1NT—3D后应叫方的再叫数据（跳叫新花）
const oneHeartOneNTJumpThreeDiamondRebid = [
  { rebid: '3H', points: '10—11点', description: '3张♥️，或2张♥️带大牌' },
  { rebid: '3S', points: '6—7点', description: '4张♦️＋5张♣️，通常♥️单缺' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4C', points: '10点以上', description: '6张以上♣️' },
  { rebid: '4D', points: '6—11点', description: '4张以上♦️' },
  { rebid: '4H', points: '5—6点', description: '3张♥️，止叫' },
  { rebid: '4S', points: '8—11点', description: '6张以上♦️，♠️单缺' }
]

// 1H—1S—3H后应叫方的再叫数据（跳叫原花）
const oneHeartOneSpadeJumpThreeHeartRebid = [
  { rebid: 'Pass', points: '6—7点', description: '没有成局可能' },
  { rebid: '3S', points: '8点以上', description: '6张以上♠️，逼叫' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4C', points: '11点以上', description: '2张以上♥️，扣叫♣️' },
  { rebid: '4D', points: '11点以上', description: '2张以上♥️，扣叫♦️' },
  { rebid: '4H', points: '6—10点', description: '2~3张♥️，止叫' },
  { rebid: '5C', points: '10—12点', description: '7张以上♣️' },
  { rebid: '5D', points: '10—12点', description: '7张以上♦️' }
]

// 1H—1NT—3H后应叫方的再叫数据（跳叫原花）
const oneHeartOneNTJumpThreeHeartRebid = [
  { rebid: 'Pass', points: '6—7点', description: '没有成局可能' },
  { rebid: '3S', points: '10—11点', description: '3张♥️，扣叫，轻微满贯兴趣' },
  { rebid: '3NT', points: '6—11点', description: '2~3张♥️，止叫' },
  { rebid: '4C', points: '8—11点', description: '7张以上♣️，逼局' },
  { rebid: '4D', points: '8—11点', description: '7张以上♦️，逼局' },
  { rebid: '4H', points: '6—11点', description: '止叫' }
]

// 1H被敌方加倍后的应叫数据
const oneHeartDoubleInterference = [
  { rebid: 'Pass', points: '0—10点', description: '不适合以下叫品的牌' },
  { rebid: '××', points: '11点以上', description: '通常是可以惩罚对方的均型牌' },
  { rebid: '1S', points: '6点以上', description: '4张以上♠️，逼叫；和没有加倍含义相同' },
  { rebid: '1NT', points: '8—10点', description: '3张♥️，建设性加叫，逼叫' },
  { rebid: '2C/2D', points: '6—9点', description: '6张以上♣️/♦️，没有3张♥️，不逼叫' },
  { rebid: '2H', points: '4—7点', description: '3张♥️，不逼叫' },
  { rebid: '2S', points: '4—6点', description: '6张以上♠️，阻击叫' },
  { rebid: '2NT', points: '10点以上', description: '4张以上♥️，逼叫。乔丹约定叫' },
  { rebid: '3C/3D', points: '4—6点', description: '7张以上♣️/♦️，阻击叫' },
  { rebid: '3H', points: '4—7点', description: '4张以上♥️，阻击叫' },
  { rebid: '3S', points: '10点以上', description: '4张以上♥️，♠️单缺，斯普林特，逼局' },
  { rebid: '3NT', points: '13—15点', description: '4 3 3 3牌型，4张套不确定，不逼叫' },
  { rebid: '4C/4D', points: '10点以上', description: '4张以上♥️，♣️/♦️单缺，斯普林特，逼局' },
  { rebid: '4H', points: '0—10点', description: '4张以上♥️，阻击叫' }
]

// 1H被敌方1S争叫后的应叫数据
const oneHeartOneSpadeInterference = [
  { rebid: 'Pass', points: '0—5点', description: '不符合其他叫品；或8点以上，有♠️长套的埋伏性不叫' },
  { rebid: '×', points: '6点以上', description: '技术性加倍；通常有4张以上♣️＋4张以上♦️' },
  { rebid: '1NT', points: '6—10点', description: '♠️有止张，通常没有3张♥️，不逼叫' },
  { rebid: '2C/2D', points: '10点以上', description: '5张以上♣️/♦️，逼叫' },
  { rebid: '2H', points: '6—9点', description: '3张以上♥️，简单加叫，不逼叫' },
  { rebid: '2S', points: '10点以上', description: '3张以上♥️，限制性加叫，逼叫' },
  { rebid: '2NT', points: '11—12点', description: '♠️有止张，通常没有3张♥️，邀叫' },
  { rebid: '3C/3D', points: '6—8点', description: '6张以上♣️/♦️，阻击叫' },
  { rebid: '3H', points: '3—7点', description: '4张以上♥️，阻击叫' },
  { rebid: '3S', points: '12—15点', description: '4张以上♥️，所叫花色♠️单缺，斯普林特，逼局' },
  { rebid: '3NT', points: '12—15点', description: '♠️有止张，止叫' },
  { rebid: '4C/4D', points: '12—15点', description: '4张以上♥️，所叫花色♣️/♦️单缺，斯普林特，逼局' },
  { rebid: '4H', points: '4—8点', description: '5张以上♥️，通常有牌型' }
]

// 1H被敌方2C争叫后的应叫数据
const oneHeartTwoClubInterference = [
  { rebid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { rebid: '×', points: '8点以上', description: '技术性加倍；通常保证4张♠️，不符合其他自然叫' },
  { rebid: '2D', points: '9点以上', description: '5张以上♦️，逼叫' },
  { rebid: '2H', points: '6—9点', description: '3张以上♥️，简单加叫，不逼叫' },
  { rebid: '2S', points: '9点以上', description: '5张以上♠️，逼叫' },
  { rebid: '2NT', points: '10—11点', description: '♣️有止张，没有4张♠️，邀叫' },
  { rebid: '3C', points: '10点以上', description: '3张以上♥️，限制性加叫，逼叫' },
  { rebid: '3D', points: '6—8点', description: '6张以上♦️，阻击叫' },
  { rebid: '3H', points: '3—7点', description: '4张以上♥️，阻击叫' },
  { rebid: '3S', points: '6—8点', description: '6张以上♠️，阻击叫' },
  { rebid: '3NT', points: '12—15点', description: '♣️有止张，止叫' },
  { rebid: '4C/4D', points: '10点以上', description: '4张以上♥️，所叫花色♣️/♦️单缺，斯普林特，逼局' },
  { rebid: '4H', points: '4—9点', description: '4张以上♥️，通常有牌型' },
  { rebid: '4S', points: '4—8点', description: '7张以上♠️，止叫' }
]

// 1H被敌方2D争叫后的应叫数据
const oneHeartTwoDiamondInterference = [
  { rebid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { rebid: '×', points: '8点以上', description: '技术性加倍；通常保证4张♠️，不符合其他自然叫' },
  { rebid: '2H', points: '6—9点', description: '3张以上♥️，简单加叫，不逼叫' },
  { rebid: '2S', points: '9点以上', description: '5张以上♠️，逼叫' },
  { rebid: '2NT', points: '10—11点', description: '♦️有止张，没有4张♠️，邀叫' },
  { rebid: '3C', points: '10点以上', description: '5张以上♣️，逼叫' },
  { rebid: '3D', points: '10点以上', description: '3张以上♥️，限制性加叫，逼叫' },
  { rebid: '3H', points: '3—7点', description: '4张以上♥️，阻击叫' },
  { rebid: '3S', points: '6—8点', description: '6张以上♠️，阻击叫' },
  { rebid: '3NT', points: '12—15点', description: '♦️有止张，止叫' },
  { rebid: '4C', points: '6—8点', description: '7张以上♣️，阻击叫' },
  { rebid: '4D', points: '10点以上', description: '4张以上♥️，所叫花色♦️单缺，斯普林特，逼局' },
  { rebid: '4H', points: '4—9点', description: '4张以上♥️，通常有牌型' },
  { rebid: '4S', points: '4—8点', description: '7张以上♠️，止叫' }
]

// 1H被敌方2S争叫后的应叫数据
const oneHeartTwoSpadeInterference = [
  { rebid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { rebid: '×', points: '8点以上', description: '技术性加倍；保证4－4低花，不符合其他自然叫' },
  { rebid: '2NT', points: '10—11点', description: '♠️有止张，邀叫' },
  { rebid: '3C/3D', points: '10点以上', description: '5张以上♣️/♦️，逼叫' },
  { rebid: '3H', points: '7—10点', description: '3张以上♥️，简单加叫，不逼叫' },
  { rebid: '3S', points: '11点以上', description: '3张以上♥️，限制性加叫，逼局' },
  { rebid: '3NT', points: '12—15点', description: '♠️有止张，止叫' },
  { rebid: '4C/4D', points: '10点以上', description: '4张以上♥️，所叫花色♣️/♦️单缺，斯普林特，逼局' },
  { rebid: '4H', points: '4—9点', description: '4张以上♥️，通常有牌型' }
]

// 1H被敌方1NT争叫后的应叫数据
const oneHeartOneNTInterference = [
  { rebid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { rebid: '×', points: '9点以上', description: '惩罚性' },
  { rebid: '2C/2D', points: '5—9点', description: '5张以上♣️/♦️，低限为6张，不逼叫' },
  { rebid: '2H', points: '6—9点', description: '3张以上♥️，简单加叫，不逼叫' },
  { rebid: '2S', points: '5—9点', description: '5张以上♠️，低限为6张，不逼叫' },
  { rebid: '2NT', points: '11点以上', description: '4张以上♥️，逼叫' }
]

// 1H被敌方迈克尔斯扣叫后的应叫数据
const oneHeartMichaelsCueInterference = [
  { rebid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { rebid: '×', points: '9点以上', description: '至少可以惩罚1个花色' },
  { rebid: '2S', points: '10点以上', description: '3张以上♥️，限制性加叫，逼叫' },
  { rebid: '2NT', points: '11—12点', description: '♠️有止张，邀叫' },
  { rebid: '3C/3D', points: '11点以上', description: '5张以上♣️/♦️，逼叫一轮' },
  { rebid: '3H', points: '6—9点', description: '3张以上♥️，简单加叫，不逼叫' },
  { rebid: '3S', points: '10点以上', description: '4张以上♥️，♠️单缺，斯普林特，逼局' },
  { rebid: '3NT', points: '12—15点', description: '♠️有止张，止叫' },
  { rebid: '4C/4D', points: '10—14点', description: '4张♥️，5张以上♣️/♦️有两张大牌，配合显示叫，逼局' },
  { rebid: '4H', points: '4—9点', description: '4张以上♥️，通常有牌型' }
]

// 1H被敌方不寻常2NT争叫后的应叫数据
const oneHeartUnusualTwoNTInterference = [
  { rebid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { rebid: '×', points: '9点以上', description: '至少可以惩罚♣️/♦️中的一套' },
  { rebid: '3C', points: '10点以上', description: '3张以上♥️，限制性加叫，逼叫' },
  { rebid: '3D', points: '10点以上', description: '5张以上♠️，逼叫' },
  { rebid: '3H', points: '6—9点', description: '3张以上♥️，简单加叫，不逼叫' },
  { rebid: '3S', points: '6—9点', description: '6张以上♠️，不逼叫' },
  { rebid: '3NT', points: '12—15点', description: '♣️和♦️均有止张，止叫' }
]
</script>

<style scoped>
.bridge-card {
  @apply bg-white rounded-lg shadow-md p-6 border border-gray-200;
}

.bridge-title {
  @apply text-2xl font-bold text-gray-800 mb-4;
}

.bridge-subtitle {
  @apply text-lg font-semibold text-gray-700 mb-3;
}

.text-bridge-blue {
  @apply text-blue-600;
}

.prose {
  @apply text-gray-600 leading-relaxed;
}
</style>