<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第二章 1♦️开叫及以后的应叫</h2>
    
    <!-- 1D开叫说明 -->
    <div class="bridge-card mb-8">
      <h3 class="bridge-subtitle">1♦️开叫</h3>
      <div class="prose max-w-none">
        <p>12—21点，3张以上♦️，一般没有5张以上高花套；3－3低花叫1♣️，4－4低花叫1♦️。</p>
      </div>
    </div>

    <!-- 一、1D开叫的应叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">一、1♦️开叫的应叫</h2>
    </div>
    
    <!-- 1D应叫主表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—? 应叫表</h3>
      <el-table :data="oneDiamondResponsesFull" style="width: 100%" border>
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
      <h3 class="bridge-subtitle">注意事项（第3~4家开叫1♦️）</h3>
      <div class="prose max-w-none">
        <ul class="list-disc pl-6">
          <li>1♥️：6-11点，4张以上♥️，保持原意，不逼叫。</li>
          <li>1♠️：6-11点，4张以上♠️，保持原意，不逼叫。</li>
          <li>2♣️：8-11点，5张以上♣️，没有4张高花，不逼叫。</li>
          <li>2♦️：8-11点，4张以上♦️，没有4张高花，不逼叫。</li>
        </ul>
      </div>
    </div>

    <!-- 二、1D在1H/1S应叫后的再叫及演变 -->
    <div class="mb-8">
      <h2 class="bridge-title">二、1♦️在1♥️/1♠️应叫后的再叫及演变</h2>
    </div>

    <!-- 1、1D—1H以后的叫牌 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1、1♦️—1♥️以后的叫牌</h3>
    </div>

    <!-- 1D—1H后开叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♥️ 后开叫方的再叫</h3>
      <el-table :data="oneDiamondOneHeartRebidFull" style="width: 100%" border>
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

    <!-- 1D—1H—1S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♥️—1♠️ 后应叫方的再叫</h4>
      <el-table :data="oneDiamondOneHeartOneSpadeRebid" style="width: 100%" border>
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

    <!-- 1D—1H—2C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♥️—2♣️ 后应叫方的再叫</h4>
      <el-table :data="oneDiamondOneHeartTwoClubRebid" style="width: 100%" border>
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

    <!-- 1D—1H—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♥️—2♦️ 后应叫方的再叫</h4>
      <el-table :data="oneDiamondOneHeartTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1D—1H—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♥️—2♥️ 后应叫方的再叫</h4>
      <el-table :data="oneDiamondOneHeartTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1D—1H—2H—2NT后再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♥️—2♥️—2NT 后再叫（2NT=10点以上，重询高花）</h4>
      <el-table :data="oneDiamondOneHeartTwoHeartTwoNTRebid" style="width: 100%" border>
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

    <!-- 2、1D—1S以后的叫牌 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">2、1♦️—1♠️以后的叫牌</h3>
    </div>

    <!-- 1D—1S后开叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♠️ 后开叫方的再叫</h3>
      <el-table :data="oneDiamondOneSpadeRebidFull" style="width: 100%" border>
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

    <!-- 1D—1S—2C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♠️—2♣️ 后应叫方的再叫</h4>
      <el-table :data="oneDiamondOneSpadeeTwoClubRebid" style="width: 100%" border>
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

    <!-- 1D—1S—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♠️—2♦️ 后应叫方的再叫</h4>
      <el-table :data="oneDiamondOneSpadeTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1D—1S—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♠️—2♠️ 后应叫方的再叫</h4>
      <el-table :data="oneDiamondOneSpadeeTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1D—1S—2S—2NT后再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♠️—2♠️—2NT 后再叫（2NT=10点以上，重询高花）</h4>
      <el-table :data="oneDiamondOneSpadeeTwoSpadeTwoNTRebid" style="width: 100%" border>
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

    <!-- 1D—1H—1NT后的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♥️—1NT—？（1NT=12—14点，无4张高花；未叫花色可无止张）</h3>
      <el-table :data="oneDiamondOneHeartOneNTResponses" style="width: 100%" border>
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

    <!-- 1D—1H—1NT—2C—2D后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♥️—1NT—2♣️—2♦️—？（2♣️=6—12点，重询斯台曼）</h4>
      <el-table :data="oneDiamondOneHeartOneNTTwoClubTwoDiamondResponses" style="width: 100%" border>
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

    <!-- 1D—1H—1NT—2D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♥️—1NT—2♦️—？（2♦️=13点以上，重询斯台曼，逼局）</h4>
      <el-table :data="oneDiamondOneHeartOneNTTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1D—1S—1NT后的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♠️—1NT—？（1NT=12—14点，可能有4张♥️；未叫花色可无止张）</h3>
      <el-table :data="oneDiamondOneSpadeOneNTResponses" style="width: 100%" border>
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

    <!-- 1D—1S—1NT—2C—2D后的应叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♠️—1NT—2♣️—2♦️—？（2♣️=6—12点，重询斯台曼）</h4>
      <el-table :data="oneDiamondOneSpadeOneNTTwoClubTwoDiamondResponses" style="width: 100%" border>
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

    <!-- 1D—1S—1NT—2D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♠️—1NT—2♦️—？（2♦️=13点以上，重询斯台曼，逼局）</h4>
      <el-table :data="oneDiamondOneSpadeOneNTTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 四、新高花逼局 -->
    <div class="mb-8">
      <h2 class="bridge-title">四、新高花逼局</h2>
    </div>

    <!-- 1D—1H—2D—2S后的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♥️—2♦️—2♠️—？（2♠️=12点以上，新高花逼局）</h3>
      <el-table :data="oneDiamondOneHeartTwoDiamondTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1D—1S—2D—2H后的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♠️—2♦️—2♥️—？（2♥️=12点以上，新高花逼局）</h3>
      <el-table :data="oneDiamondOneSpadeeTwoDiamondTwoHeartRebid" style="width: 100%" border>
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

    <!-- 五、1D在1NT应叫后 -->
    <div class="mb-8">
      <h2 class="bridge-title">五、1♦️在1NT应叫后</h2>
    </div>

    <!-- 1D—1NT后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1NT—？（1NT=6—10点，均型牌）</h3>
      <el-table :data="oneDiamondOneNTRebid" style="width: 100%" border>
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

    <!-- 1D—1NT—2C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1NT—2♣️—？（2♣️=12—17点，4张以上♦️＋4张以上♣️）</h4>
      <el-table :data="oneDiamondOneNTTwoClubResponses" style="width: 100%" border>
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

    <!-- 六、1D在二盖一应叫后 -->
    <div class="mb-8">
      <h2 class="bridge-title">六、1♦️在二盖一应叫后</h2>
    </div>

    <!-- 1D—2C后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—2♣️ 后开叫方的再叫（2♣️=12点以上，5张以上♣️，可能有4张高花，2盖1逼局）</h3>
      <el-table :data="oneDiamondTwoClubRebid" style="width: 100%" border>
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

    <!-- 1D—2C—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♣️—2♦️ 后应叫方的再叫（2♦️=12—21点，5张以上♦️）</h4>
      <el-table :data="oneDiamondTwoClubTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1D—2C—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♣️—2♥️ 后应叫方的再叫（2♥️=12—21点，5张以上♦️＋4张♥️）</h4>
      <el-table :data="oneDiamondTwoClubTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1D—2C—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♣️—2♠️ 后应叫方的再叫（2♠️=12—21点，5张以上♦️＋4张♠️）</h4>
      <el-table :data="oneDiamondTwoClubTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1D—2C—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♣️—2NT 后应叫方的再叫（2NT=12—14点，或18—19点，均型）</h4>
      <el-table :data="oneDiamondTwoClubTwoNTRebid" style="width: 100%" border>
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

    <!-- 1D—2C—3C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♣️—3♣️ 后应叫方的再叫（3♣️=12—21点，4张以上♣️，或3张♣️带大牌）</h4>
      <el-table :data="oneDiamondTwoClubThreeClubRebid" style="width: 100%" border>
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

    <!-- 1D—2C—3D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♣️—3♦️ 后应叫方的再叫（3♦️=15—21点，半坚固的6张以上♦️）</h4>
      <el-table :data="oneDiamondTwoClubThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 七、低花反加叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">七、低花反加叫</h2>
    </div>

    <!-- 1D—2D后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—2♦️ 后开叫方的再叫（2♦️=10点以上，4张以上♦️，低花反加叫，逼叫）</h3>
      <el-table :data="oneDiamondTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1D—2D—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♦️—2♥️ 后应叫方的再叫（2♥️=12—21点，5张♦️＋4张♥️或4-4-4-1牌型）</h4>
      <el-table :data="oneDiamondTwoDiamondTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1D—2D—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♦️—2♠️ 后应叫方的再叫（2♠️=12—21点，5张♦️＋4张♠️，非均型牌）</h4>
      <el-table :data="oneDiamondTwoDiamondTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1D—2D—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♦️—2NT 后应叫方的再叫（2NT=12—14点，或18—19点，均型）</h4>
      <el-table :data="oneDiamondTwoDiamondTwoNTRebid" style="width: 100%" border>
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

    <!-- 1D—2D—3C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♦️—3♣️ 后应叫方的再叫（3♣️=12点以上，5张以上♦️＋4张以上♣️，非均型）</h4>
      <el-table :data="oneDiamondTwoDiamondThreeClubRebid" style="width: 100%" border>
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
    
    <!-- 八、应叫人跳叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">八、应叫人跳叫</h2>
    </div>

    <!-- 1D—2H后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—2♥️ 后开叫方的再叫（2♥️=4—6点，6张以上♥️，阻击叫）</h3>
      <el-table :data="oneDiamondTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1D—2H—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♥️—2NT 后应叫方的再叫（2NT=15—21点，问单缺；2张以上♥️）</h4>
      <el-table :data="oneDiamondTwoHeartTwoNTRebid" style="width: 100%" border>
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

    <!-- 1D—2S后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—2♠️ 后开叫方的再叫（2♠️=4—6点，6张以上♠️，阻击叫）</h3>
      <el-table :data="oneDiamondTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1D—2S—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—2♠️—2NT 后应叫方的再叫（2NT=15—21点，问单缺；2张以上♠️）</h4>
      <el-table :data="oneDiamondTwoSpadeTwoNTRebid" style="width: 100%" border>
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

    <!-- 1D—2NT后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—2NT 后开叫方的再叫（2NT=11—12点，无4张M和5张♦️，邀叫）</h3>
      <el-table :data="oneDiamondTwoNTRebid" style="width: 100%" border>
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

    <!-- 1D—3C后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—3♣️ 后开叫方的再叫（3♣️=9—11点，6张以上♣️，邀叫）</h3>
      <el-table :data="oneDiamondThreeClubRebid" style="width: 100%" border>
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

    <!-- 1D—3D后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—3♦️ 后开叫方的再叫（3♦️=4—8点，5张以上♦️，阻击叫）</h3>
      <el-table :data="oneDiamondThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1D—3H/3S后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—3♥️/3♠️ 后开叫方的再叫（3♥️/3♠️=12—15点，5张以上♦️，斯普林特，逼局）</h3>
      <div class="bridge-card mb-4">
        <div class="prose max-w-none">
          <p><strong>注：</strong>1♦️—4♣️=16点以上，5张以上♦️，斯普林特，逼局</p>
        </div>
      </div>
      <el-table :data="oneDiamondThreeHeartSpadeRebid" style="width: 100%" border>
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

    <!-- 九、开叫人逆叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">九、开叫人逆叫</h2>
    </div>

    <!-- 1D—1S—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♠️—2♥️ 后应叫方的再叫（逆叫=16—21点，5－4以上套）</h3>
      <el-table :data="oneDiamondOneSpadeReverseRebid" style="width: 100%" border>
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

    <!-- 1D—1S—2H—2NT后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♠️—2♥️—2NT 后开叫方的再叫（2NT≥6点，不保证♣️止张，可能是弱牌）</h4>
      <el-table :data="oneDiamondOneSpadeReverseTwoNTRebid" style="width: 100%" border>
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

    <!-- 1D—1NT—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1NT—2♥️ 后应叫方的再叫（逆叫=16—21点，5－4以上套）</h3>
      <el-table :data="oneDiamondOneNTReverseHeartRebid" style="width: 100%" border>
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

    <!-- 1D—1NT—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1NT—2♠️ 后应叫方的再叫（逆叫=16—21点，5－4以上套）</h3>
      <el-table :data="oneDiamondOneNTReverseSpadeRebid" style="width: 100%" border>
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

    <!-- 十、开叫人跳叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">十、开叫人跳叫</h2>
    </div>

    <!-- 1D—1H—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♥️—2NT 后应叫方的再叫（跳叫2NT=18—19点，可能有4张♠️）</h3>
      <el-table :data="oneDiamondOneHeartJumpTwoNTRebid" style="width: 100%" border>
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

    <!-- 1D—1H—2NT—3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♥️—2NT—3♣️ 后开叫方的再叫（3♣️=6点以上，3♣️重询高花）</h4>
      <el-table :data="oneDiamondOneHeartJumpTwoNTThreeClubRebid" style="width: 100%" border>
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

    <!-- 1D—1S—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♠️—2NT 后应叫方的再叫（跳叫2NT=18—19点，可能有4张♥️）</h3>
      <el-table :data="oneDiamondOneSpadeJumpTwoNTRebid" style="width: 100%" border>
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

    <!-- 1D—1S—2NT—3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♦️—1♠️—2NT—3♣️ 后开叫方的再叫（3♣️=6点以上，3♣️重询高花）</h4>
      <el-table :data="oneDiamondOneSpadeJumpTwoNTThreeClubRebid" style="width: 100%" border>
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

    <!-- 其他跳叫新花的表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♦️—1♥️—2♠️ 后应叫方的再叫（跳叫新花=18—21点，5－4张以上套）</h3>
      <el-table :data="oneDiamondOneHeartJumpTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 继续添加其他跳叫相关的表格... -->

    <!-- 十一、1D在敌方干扰后的叫牌 -->
    <div class="mb-8">
      <h2 class="bridge-title">十一、1♦️在敌方干扰后的叫牌</h2>
    </div>

    <!-- 1、1D被敌方加倍 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1、1♦️被敌方加倍</h3>
      <div class="bridge-card mb-4">
        <div class="prose max-w-none">
          <p><strong>应叫的基本原则：</strong></p>
          <ul class="list-disc pl-6">
            <li>①再加倍是偏重惩罚</li>
            <li>②没有低花反加叫和斯普林特约定叫</li>
            <li>③2NT是好的开叫花色加叫（乔丹约定叫）</li>
            <li>④1阶新花逼叫一轮</li>
            <li>⑤跳叫新花或跳加叫开叫花色是阻击叫</li>
          </ul>
        </div>
      </div>
      <h4 class="bridge-subtitle">1♦️—(×)—? （敌方×＝11点以上，一般有双高花）</h4>
      <el-table :data="oneDiamondDoubledResponses" style="width: 100%" border>
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

    <!-- 2、1D被敌方花色争叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">2、1♦️被敌方花色争叫</h3>
      <div class="bridge-card mb-4">
        <div class="prose max-w-none">
          <p><strong>应叫的基本原则：</strong></p>
          <ul class="list-disc pl-6">
            <li>①如果敌方是双套牌，加倍是至少惩罚其中一套；如果是单套，4♥️以下加倍是负加倍</li>
            <li>②简单1阶新花应叫逼叫一轮；简单2阶花色应叫逼叫一轮；简单3阶花色应叫逼叫进局</li>
            <li>③跳叫新花或跳加叫开叫花色为阻击叫</li>
            <li>④扣叫敌方花色是对开叫花色的限制性加叫</li>
          </ul>
        </div>
      </div>

      <h4 class="bridge-subtitle">1♦️—(1♥️)—?</h4>
      <el-table :data="oneDiamondOneHeartInterferenceResponses" style="width: 100%" border>
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

    <!-- 继续添加其他干扰情况的表格... -->

    <!-- 6、支持性加倍或支持性再加倍 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">6、支持性加倍或支持性再加倍（只适用同伴一阶高花应叫）</h3>
      <el-table :data="supportDoubleData" style="width: 100%" border>
        <el-table-column prop="situation" label="叫牌序列" width="200">
          <template #default="{ row }">
            <span class="text-sm">{{ suitToEmoji(row.situation) }}</span>
          </template>
        </el-table-column>
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
import { computed } from 'vue'

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

// 1D应叫主表格数据
const oneDiamondResponsesFull = [
  { bid: 'Pass', points: '0-5点', description: '4~5张以上D，弱牌' },
  { bid: '1H/1S', points: '6-11点', description: '4张H/S↑，或有更长低花；或12点↑，H/S为长套，4-4叫1H，5-5叫1S，逼叫' },
  { bid: '1NT', points: '6-10点', description: '没有4张高花，但可能有4~5张D，不逼叫' },
  { bid: '2C', points: '12点以上', description: '5张以上C，可能有4张高花，二盖一逼局' },
  { bid: '2D', points: '10点以上', description: '4张以上D，低花反加叫，逼叫' },
  { bid: '2H/2S', points: '4-6点', description: '6张以上H/S，阻击叫' },
  { bid: '2NT', points: '11-12点', description: '没有4张高花和5张以上D，邀叫' },
  { bid: '3C', points: '9-11点', description: '好的6张以上C，邀叫' },
  { bid: '3D', points: '4-8点', description: '5张D↑，无4张高花，阻击叫；6—8点时通常高花有单缺（否则叫1NT），不逼叫' },
  { bid: '3H/3S', points: '12-15点', description: '5张以上D，没有4张高花，H/S单缺，斯普林特，逼局' },
  { bid: '3NT', points: '13-15点', description: '没有4张高花' },
  { bid: '4C', points: '16点以上', description: '5张以上D，没有4张高花，C单缺，斯普林特，逼局' },
  { bid: '4D', points: '4-8点', description: '6张以上D，加重阻击，点力不高有牌型，不逼叫' },
  { bid: '4H/4S', points: '5-8点', description: '7张以上H/S' },
  { bid: '4NT', points: '18点以上', description: 'D为将牌的罗马关键张问叫' },
  { bid: '5C', points: '13-17点', description: '7张以上C' },
  { bid: '5D', points: '4-8点', description: '7张以上D' }
]

// 1D—1H后开叫方的再叫数据
const oneDiamondOneHeartRebidFull = [
  { rebid: '1S', points: '12-17点', description: '4张S，不逼叫' },
  { rebid: '1NT', points: '12-14点', description: '无4张高花；未叫花色可无止张' },
  { rebid: '2C', points: '12-17点', description: '5张以上D＋4张C，不逼叫' },
  { rebid: '2D', points: '12-15点', description: '6张以上D，无4张高花，不逼叫' },
  { rebid: '2H', points: '12-15点', description: '4张H或3张H有单缺，不逼叫' },
  { rebid: '2S', points: '18-21点', description: '5张以上D＋4张S，跳叫新花逼局' },
  { rebid: '2NT', points: '18-19点', description: '可能有4张S，不逼叫' },
  { rebid: '3C', points: '18-21点', description: '5张以上D＋4张C，跳叫新花逼局' },
  { rebid: '3D', points: '16-18点', description: '6张以上D，无4张高花，邀叫' },
  { rebid: '3H', points: '15-17点', description: '4张H，邀叫' },
  { rebid: '3S/4C', points: '18-21点', description: '4张H，S/C单缺，斯普林特，逼局' },
  { rebid: '3NT', points: '16-18点', description: '坚固的6张以上D，未叫花色有止' },
  { rebid: '4D', points: '16-21点', description: '6张以上D＋4张H，逼局' },
  { rebid: '4H', points: '18-21点', description: '4张H' }
]

// 1D—1H—1S后应叫方的再叫数据
const oneDiamondOneHeartOneSpadeRebid = [
  { rebid: 'Pass', points: '6-7点', description: '3~4张S，愿意打4－3配合将牌' },
  { rebid: '1NT', points: '6-10点', description: '无4张S，不逼叫' },
  { rebid: '2C', points: '12点以上', description: '第四花色逼局，与C无关' },
  { rebid: '2D', points: '6-9点', description: '4张以上D，无4张S，不逼叫' },
  { rebid: '2H', points: '6-9点', description: '6张H，不逼叫' },
  { rebid: '2S', points: '8-9点', description: '4张S，不逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型，高花无配合，邀叫' },
  { rebid: '3C', points: '10-11点', description: '5张以上H＋5张以上C，邀叫' },
  { rebid: '3D', points: '10-11点', description: '4张以上D，邀叫' },
  { rebid: '3H', points: '10-11点', description: '6张以上H，邀叫' },
  { rebid: '3S', points: '10-11点', description: '4张S，邀叫' },
  { rebid: '3NT', points: '13-15点', description: '止叫' },
  { rebid: '4C/4D', points: '13点以上', description: '4张S，C/D单缺，斯普林特，逼局' },
  { rebid: '4H', points: '10-12点', description: '7张以上H，止叫' },
  { rebid: '4S', points: '12-15点', description: '4张S，止叫' }
]

// 1D—1H—2C后应叫方的再叫数据
const oneDiamondOneHeartTwoClubRebid = [
  { rebid: 'Pass', points: '6-9点', description: 'C长于D，没有成局的可能' },
  { rebid: '2D', points: '6-9点', description: '4~5张H，D长于C，不逼叫' },
  { rebid: '2H', points: '6-9点', description: '6张以上H，不逼叫' },
  { rebid: '2S', points: '12点以上', description: '第四花色逼局，与S无关' },
  { rebid: '2NT', points: '11-12点', description: '均型牌，邀叫' },
  { rebid: '3C', points: '8-10点', description: '4张以上C，不逼叫' },
  { rebid: '3D', points: '10-11点', description: '3张以上D，邀叫' },
  { rebid: '3H', points: '10-11点', description: '6张以上H，邀叫' },
  { rebid: '3S', points: '12点以上', description: '4张以上C，斯普林特，逼局' },
  { rebid: '3NT', points: '12-17点', description: '止叫' },
  { rebid: '4C', points: '12点以上', description: '4张以上C，逼局' },
  { rebid: '4D', points: '12点以上', description: '4张以上D，逼局' }
]

// 1D—1H—2D后应叫方的再叫数据
const oneDiamondOneHeartTwoDiamondRebid = [
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2H', points: '6-9点', description: '6张以上H，不逼叫' },
  { rebid: '2S', points: '12点以上', description: '新高花逼局，与S无关' },
  { rebid: '2NT', points: '11-12点', description: '均型牌，邀叫' },
  { rebid: '3C', points: '12点以上', description: '3张以上C，逼局' },
  { rebid: '3D', points: '10-11点', description: '3张以上D，邀叫' },
  { rebid: '3H', points: '10-11点', description: '6张以上H，邀叫' },
  { rebid: '3S', points: '12点以上', description: '4张以上D，斯普林特，逼局' },
  { rebid: '3NT', points: '12-17点', description: '止叫' },
  { rebid: '4C', points: '12点以上', description: '4张以上D，斯普林特，逼局' },
  { rebid: '4D', points: '13点以上', description: '3张以上D，满贯兴趣' }
]

// 1D—1H—2H后应叫方的再叫数据
const oneDiamondOneHeartTwoHeartRebid = [
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2S', points: '10点以上', description: '5张H↑，3张S↑，帮张邀叫' },
  { rebid: '2NT', points: '10点以上', description: '2NT重询高花，请描述牌情' },
  { rebid: '3C/3D', points: '10点以上', description: '5张H↑，3张C/D↑，帮张邀叫' },
  { rebid: '3H', points: '10-12点', description: '5张以上H，邀叫' },
  { rebid: '3NT', points: '12-15点', description: '3-4-3-3牌型，示选' },
  { rebid: '3S', points: '13点以上', description: '5张以上H，斯普林特，逼局' },
  { rebid: '4C/4D', points: '13点以上', description: '5张以上H，斯普林特，逼局' },
  { rebid: '4H', points: '12-15点', description: '5张以上H，止叫' }
]

// 1D—1H—2H—2NT后再叫数据
const oneDiamondOneHeartTwoHeartTwoNTRebid = [
  { rebid: '3C', points: '12-14点', description: '3张H，5张D，4张C，不逼叫' },
  { rebid: '3D', points: '12-13点', description: '4张H，5张D，逼叫' },
  { rebid: '3H', points: '12-13点', description: '4张H，不逼叫' },
  { rebid: '3S', points: '14-15点', description: '4张H，S单缺，逼局' },
  { rebid: '3NT', points: '14-15点', description: '4张H，均型，3NT/4H示选' },
  { rebid: '4C', points: '14-15点', description: '4张H，C单缺，逼局' },
  { rebid: '4D', points: '14-15点', description: '4张H，好的5张D，逼局' },
  { rebid: '4H', points: '14-15点', description: '4张H，止叫' }
]

// 1D—1S后开叫方的再叫数据
const oneDiamondOneSpadeRebidFull = [
  { rebid: '1NT', points: '12-14点', description: '未叫花色可无止张，不逼叫' },
  { rebid: '2C', points: '12-17点', description: '5张以上D＋4张以上C，不逼叫' },
  { rebid: '2D', points: '12-15点', description: '6张以上D，不逼叫' },
  { rebid: '2H', points: '16-21点', description: '5张以上D＋4张H，逆叫，逼叫一轮' },
  { rebid: '2S', points: '12-15点', description: '4张S，或3张S有单缺，不逼叫' },
  { rebid: '2NT', points: '18-19点', description: '跳叫2NT，可能有4张H，不逼叫' },
  { rebid: '3C', points: '18-21点', description: '跳叫新花，至少好的5－4套，逼局' },
  { rebid: '3D', points: '16-18点', description: '6张以上D，无4张高花，不逼叫' },
  { rebid: '3H', points: '18-21点', description: '4张S，所叫花色H单缺，斯普林特，逼叫' },
  { rebid: '3S', points: '16-18点', description: '4张S，邀叫' },
  { rebid: '3NT', points: '16-18点', description: '坚固的6张以上D，未叫花色有止张' },
  { rebid: '4C', points: '18-21点', description: '4张S，所叫花色C单缺，斯普林特，逼叫' },
  { rebid: '4D', points: '16-21点', description: '6张以上D＋4张S，逼局' },
  { rebid: '4S', points: '18-21点', description: '4张S' }
]

// 1D—1S—2C后应叫方的再叫数据
const oneDiamondOneSpadeeTwoClubRebid = [
  { rebid: 'Pass', points: '6-9点', description: 'C长于D，没有成局的可能' },
  { rebid: '2D', points: '6-9点', description: '4~5张S，D长于C，不逼叫' },
  { rebid: '2H', points: '12点以上', description: '第四花色逼局，与H无关' },
  { rebid: '2S', points: '6-9点', description: '6张以上S，不逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型牌，邀叫' },
  { rebid: '3C', points: '8-10点', description: '4张以上C，不逼叫' },
  { rebid: '3D', points: '10-11点', description: '3张以上D，邀叫' },
  { rebid: '3H', points: '10-11点', description: '5张S↑＋5张H↑，邀叫' },
  { rebid: '3S', points: '10-11点', description: '6张以上S，邀叫' },
  { rebid: '3NT', points: '12-17点', description: '止叫' },
  { rebid: '4C', points: '12点以上', description: '4张以上C，逼局' },
  { rebid: '4D', points: '12点以上', description: '4张以上D，逼局' }
]

// 1D—1S—2D后应叫方的再叫数据
const oneDiamondOneSpadeTwoDiamondRebid = [
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2H', points: '12点以上', description: '新高花逼局，与H无关' },
  { rebid: '2S', points: '6-9点', description: '6张以上S，不逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型牌，邀叫' },
  { rebid: '3C', points: '12点以上', description: '3张以上C，逼局' },
  { rebid: '3D', points: '10-11点', description: '3张以上D，邀叫' },
  { rebid: '3H', points: '10-11点', description: '5张S↑＋5张H↑，邀叫' },
  { rebid: '3S', points: '10-11点', description: '6张以上S，邀叫' },
  { rebid: '3NT', points: '12-17点', description: '止叫' },
  { rebid: '4C', points: '12点以上', description: '4张以上D，斯普林特，逼局' },
  { rebid: '4D', points: '13点以上', description: '3张以上D，满贯兴趣' },
  { rebid: '4H', points: '10-11点', description: '6张以上S＋5张以上H' }
]

// 1D—1S—2S后应叫方的再叫数据
const oneDiamondOneSpadeeTwoSpadeRebid = [
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2NT', points: '10点以上', description: '2NT重询高花，请描述牌情' },
  { rebid: '3C/3D', points: '10点以上', description: '5张S↑，3张C/D↑，帮张邀叫' },
  { rebid: '3H', points: '10点以上', description: '5张S↑，3张H↑，帮张邀叫' },
  { rebid: '3S', points: '10-11点', description: '5张以上S，邀叫' },
  { rebid: '3NT', points: '12-15点', description: '4-3-3-3牌型，示选' },
  { rebid: '4C/4D', points: '13点以上', description: '5张以上S，斯普林特，逼局' },
  { rebid: '4H', points: '13点以上', description: '5张以上S，斯普林特，逼局' },
  { rebid: '4S', points: '12-15点', description: '5张以上S，止叫' }
]

// 1D—1S—2S—2NT后再叫数据
const oneDiamondOneSpadeeTwoSpadeTwoNTRebid = [
  { rebid: '3C', points: '12-14点', description: '3张S，5张D，4张C，不逼叫' },
  { rebid: '3D', points: '12-13点', description: '4张S，5张D，逼叫' },
  { rebid: '3H', points: '12-14点', description: '3张S，5张D，4张H，不逼叫' },
  { rebid: '3S', points: '12-13点', description: '4张S，不逼叫' },
  { rebid: '3NT', points: '14-15点', description: '4张S，均型，3NT/4S示选' },
  { rebid: '4C/4H', points: '14-15点', description: '4张S，C/H单缺，逼局' },
  { rebid: '4D', points: '14-15点', description: '4张S，好的5张D，逼局' },
  { rebid: '4S', points: '14-15点', description: '4张S，止叫' }
]

// 1D—1H—1NT后的应叫数据
const oneDiamondOneHeartOneNTResponses = [
  { bid: 'Pass', points: '6—9点', description: '不符合其他叫品' },
  { bid: '2C', points: '6—12点', description: '要求同伴叫2♦️；后续Pass=4张以上♦️，示弱；10—12点时后续选择自然叫品，邀叫' },
  { bid: '2D', points: '13点以上', description: '多数进局牌起步叫品，与♦️无关，逼局' },
  { bid: '2H', points: '6—9点', description: '6张以上♥️，不逼叫' },
  { bid: '2S', points: '13点以上', description: '5张♥️＋4张♠️，逼局' },
  { bid: '2NT', points: '6—9点', description: '要求同伴叫3♣️；后续Pass=6张以上♣️，示弱；10—12点时后续叫3♦️=5张♦️＋5张♥️，邀叫' },
  { bid: '3C/3D', points: '13点以上', description: '5张♥️＋5张♣️/♦️，逼局' },
  { bid: '3H', points: '13点以上', description: '半坚固的6张以上♥️，逼局' },
  { bid: '3NT', points: '13—17点', description: '不满足其他进局条件，止叫' },
  { bid: '4NT', points: '18—19点', description: '满贯邀叫' }
]

// 1D—1H—1NT—2C—2D后的应叫数据
const oneDiamondOneHeartOneNTTwoClubTwoDiamondResponses = [
  { bid: 'Pass', points: '6—9点', description: '4张以上♦️' },
  { bid: '2H', points: '10—12点', description: '好的5张以上♥️，邀叫' },
  { bid: '2S', points: '10—12点', description: '5张♥️＋4张♠️，邀叫' },
  { bid: '2NT', points: '10—12点', description: '均型牌，邀叫' },
  { bid: '3C/3D', points: '10—12点', description: '5张以上♣️/♦️，邀叫' },
  { bid: '3H', points: '10—12点', description: '好的6张以上♥️，邀叫' }
]

// 1D—1H—1NT—2D后开叫方的再叫数据
const oneDiamondOneHeartOneNTTwoDiamondRebid = [
  { rebid: '2H', points: '12—14点', description: '3张♥️' },
  { rebid: '2S', points: '12点以上', description: '3张♠️，3-1-4-5牌型' },
  { rebid: '2NT', points: '12—14点', description: '没有3张♥️，均型牌' },
  { rebid: '3C', points: '12—14点', description: '4张♣️，2-2-5-4牌型' },
  { rebid: '3D', points: '12—14点', description: '5张以上♦️' }
]

// 1D—1S—1NT后的应叫数据
const oneDiamondOneSpadeOneNTResponses = [
  { bid: 'Pass', points: '6—9点', description: '不符合其他叫品' },
  { bid: '2C', points: '6—12点', description: '要求同伴叫2♦️；后续Pass=4张以上♦️，示弱；10—12点时后续选择自然叫品，邀叫' },
  { bid: '2D', points: '13点以上', description: '多数进局牌起步叫品，与♦️无关，逼局' },
  { bid: '2H', points: '6—9点', description: '5张♠️＋4张以上♥️，不逼叫' },
  { bid: '2S', points: '6—9点', description: '6张以上♠️，不逼叫' },
  { bid: '2NT', points: '6—9点', description: '要求同伴叫3♣️；后续Pass=6张以上♣️，示弱；10—12点时后续叫3♦️=5张♦️＋5张♠️，邀叫' },
  { bid: '3m/3H', points: '13点以上', description: '5张以上♠️＋5张以上♣️/♦️/♥️，逼局' },
  { bid: '3S', points: '13点以上', description: '半坚固的6张以上♠️，逼局' },
  { bid: '3NT', points: '13—17点', description: '不满足其他进局条件，止叫' },
  { bid: '4NT', points: '18—19点', description: '满贯邀叫' }
]

// 1D—1S—1NT—2C—2D后的应叫数据
const oneDiamondOneSpadeOneNTTwoClubTwoDiamondResponses = [
  { bid: 'Pass', points: '6—9点', description: '4张以上♦️' },
  { bid: '2H', points: '10—12点', description: '5张♠️＋4张♥️，邀叫' },
  { bid: '2S', points: '10—12点', description: '好的5张以上♠️，邀叫' },
  { bid: '2NT', points: '10—12点', description: '均型牌，邀叫' },
  { bid: '3m/3H', points: '10—12点', description: '5张以上♣️/♦️/♥️，邀叫' },
  { bid: '3S', points: '10—12点', description: '好的6张以上♠️，邀叫' }
]

// 1D—1S—1NT—2D后开叫方的再叫数据
const oneDiamondOneSpadeOneNTTwoDiamondRebid = [
  { rebid: '2H', points: '12—14点', description: '4张♥️' },
  { rebid: '2S', points: '12点以上', description: '3张♠️' },
  { rebid: '2NT', points: '12—14点', description: '无4张♥️，无3张♠️，均型牌' },
  { rebid: '3C', points: '12—14点', description: '4张♣️，2-2-5-4牌型' },
  { rebid: '3D', points: '12—14点', description: '5张以上♦️' }
]

// 1D—1H—2D—2S后的再叫数据
const oneDiamondOneHeartTwoDiamondTwoSpadeRebid = [
  { rebid: '2NT', points: '12—15点', description: '6张♦️，♣️有止张，无3张♥️' },
  { rebid: '3C', points: '12—15点', description: '6张♦️＋4张♣️，无3张♥️' },
  { rebid: '3D', points: '12—15点', description: '6张♦️，不符合其他叫品' },
  { rebid: '3H', points: '12—15点', description: '6张♦️＋3张♥️' }
]

// 1D—1S—2D—2H后的再叫数据
const oneDiamondOneSpadeeTwoDiamondTwoHeartRebid = [
  { rebid: '2S', points: '12—15点', description: '6张♦️＋3张♠️' },
  { rebid: '2NT', points: '12—15点', description: '6张♦️，♣️有止张，无3张♠️' },
  { rebid: '3C', points: '12—15点', description: '6张♦️＋4张♣️，无3张♠️' },
  { rebid: '3D', points: '12—15点', description: '6张♦️，不符合其他叫品' },
  { rebid: '3H', points: '12—15点', description: '6张♦️＋4张♥️' }
]

// 1D—1NT后开叫方的再叫数据
const oneDiamondOneNTRebid = [
  { rebid: 'Pass', points: '12—14点', description: '不符合其他叫品' },
  { rebid: '2C', points: '12—17点', description: '4张以上♦️＋4张以上♣️，不逼叫' },
  { rebid: '2D', points: '12—15点', description: '5张以上♦️，不逼叫' },
  { rebid: '2H/2S', points: '16—21点', description: '5张以上♦️＋4张♥️/♠️，逆叫，逼叫' },
  { rebid: '2NT', points: '16—18点', description: '不符合1NT开叫，邀叫' },
  { rebid: '3C', points: '18—21点', description: '4张以上♣️，跳叫新花逼局' },
  { rebid: '3D', points: '16—18点', description: '6张以上♦️，无4张高花，邀叫' },
  { rebid: '3H/3S', points: '16—21点', description: '6张以上♦️＋5张♥️/♠️，逼局' },
  { rebid: '3NT', points: '19—21点', description: '止叫' }
]

// 1D—1NT—2C后应叫方的再叫数据
const oneDiamondOneNTTwoClubResponses = [
  { bid: 'Pass', points: '6—7点', description: '♣️长于♦️，不符合其他叫品' },
  { bid: '2D', points: '6—7点', description: '♦️长于或等于♣️，不逼叫' },
  { bid: '2NT', points: '9—10点', description: '均型牌，邀叫' },
  { bid: '3C', points: '8—10点', description: '4张以上♣️，不逼叫' },
  { bid: '3D', points: '8—10点', description: '4张以上♦️，不逼叫' }
]

// 六、1D在二盖一应叫后
// 1D—2C后开叫方的再叫数据
const oneDiamondTwoClubRebid = [
  { rebid: '2D', points: '12—21点', description: '5张以上♦️；6张以上♦️时，可以有4张高花' },
  { rebid: '2H/2S', points: '12—21点', description: '5张以上♦️＋4张♥️/♠️' },
  { rebid: '2NT', points: '12—14点', description: '均型，没有5张以上♦️；或18—19点，同伴叫3NT后加叫4NT' },
  { rebid: '3C', points: '12—21点', description: '4张以上♣️，或3张♣️带大牌' },
  { rebid: '3D', points: '15—21点', description: '半坚固的6张以上♦️' },
  { rebid: '3H/3S', points: '12—21点', description: '4张以上♣️，所叫花色♥️/♠️单缺，斯普林特' },
  { rebid: '3NT', points: '12—13点', description: '4-4-4-1牌型，♣️单张' },
  { rebid: '4C', points: '14点以上', description: '5张以上♦️＋5张以上♣️' }
]

// 1D—2C—2D后应叫方的再叫数据
const oneDiamondTwoClubTwoDiamondRebid = [
  { rebid: '2H', points: '12点以上', description: '5张以上♣️＋4张♥️' },
  { rebid: '2S', points: '12点以上', description: '5张以上♣️＋4张♠️' },
  { rebid: '2NT', points: '16点以上', description: '等待叫' },
  { rebid: '3C', points: '12点以上', description: '好的6张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '5张以上♣️＋3张以上♦️' },
  { rebid: '3H', points: '12点以上', description: '5张以上♣️＋4张♦️，斯普林特' },
  { rebid: '3S', points: '12点以上', description: '5张以上♣️＋4张♦️，斯普林特' },
  { rebid: '3NT', points: '12—15点', description: '通常3-3-2-5牌型' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上♣️' }
]

// 1D—2C—2H后应叫方的再叫数据
const oneDiamondTwoClubTwoHeartRebid = [
  { rebid: '2S', points: '12点以上', description: '5张以上♣️＋4张♠️' },
  { rebid: '2NT', points: '16点以上', description: '等待叫' },
  { rebid: '3C', points: '12点以上', description: '好的6张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '5张以上♣️＋3张以上♦️' },
  { rebid: '3H', points: '15点以上', description: '5张以上♣️＋4张♥️' },
  { rebid: '3S', points: '12点以上', description: '5张以上♣️＋4张♥️，斯普林特' },
  { rebid: '3NT', points: '12—14点', description: '通常4-3-1-5牌型' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上♣️' },
  { rebid: '4H', points: '12—14点', description: '5张以上♣️＋4张♥️' }
]

// 1D—2C—2S后应叫方的再叫数据
const oneDiamondTwoClubTwoSpadeRebid = [
  { rebid: '2NT', points: '16点以上', description: '等待叫' },
  { rebid: '3C', points: '12点以上', description: '好的6张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '5张以上♣️＋3张以上♦️' },
  { rebid: '3H', points: '12点以上', description: '6张以上♣️＋5张♥️' },
  { rebid: '3S', points: '15点以上', description: '5张以上♣️＋4张♠️' },
  { rebid: '3NT', points: '12—14点', description: '通常3-4-1-5牌型' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上♣️' },
  { rebid: '4H', points: '12点以上', description: '5张以上♣️＋4张♠️，斯普林特' },
  { rebid: '4S', points: '12—14点', description: '5张以上♣️＋4张♠️' }
]

// 1D—2C—2NT后应叫方的再叫数据
const oneDiamondTwoClubTwoNTRebid = [
  { rebid: '3C', points: '12点以上', description: '好的6张以上♣️' },
  { rebid: '3D', points: '12点以上', description: '5张以上♣️＋4张以上♦️' },
  { rebid: '3H', points: '12点以上', description: '5张以上♣️＋4张♥️' },
  { rebid: '3S', points: '12点以上', description: '5张以上♣️＋4张♠️' },
  { rebid: '3NT', points: '12—14点', description: '进局止叫' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上♣️' },
  { rebid: '4NT', points: '18—19点', description: '满贯邀叫' }
]

// 1D—2C—3C后应叫方的再叫数据
const oneDiamondTwoClubThreeClubRebid = [
  { rebid: '3D', points: '12点以上', description: '5张以上♣️＋4张以上♦️' },
  { rebid: '3H/3S', points: '12点以上', description: '♥️/♠️有止张，另♠️/♥️无止张' },
  { rebid: '3NT', points: '12—14点', description: '♥️/♠️都有止张，止叫' },
  { rebid: '4C', points: '18点以上', description: '6张以上♣️，满贯兴趣' },
  { rebid: '4D', points: '14—16点', description: '6张以上♣️，斯普林特' },
  { rebid: '4H/4S', points: '14—16点', description: '6张以上♣️，斯普林特' }
]

// 1D—2C—3D后应叫方的再叫数据
const oneDiamondTwoClubThreeDiamondRebid = [
  { rebid: '3H', points: '12点以上', description: '♥️有止张，♠️无止张' },
  { rebid: '3S', points: '12点以上', description: '♠️有止张，♥️无止张' },
  { rebid: '3NT', points: '12—14点', description: '♥️/♠️都有止张，止叫' },
  { rebid: '4C', points: '16点以上', description: '半坚固的7张以上♣️' },
  { rebid: '4D', points: '16点以上', description: '3张以上♦️' },
  { rebid: '4H/4S', points: '14—16点', description: '3张以上♦️，♥️/♠️单缺，斯普林特' }
]

// 七、低花反加叫
// 1D—2D后开叫方的再叫数据
const oneDiamondTwoDiamondRebid = [
  { rebid: '2H', points: '12—21点', description: '5张♦️＋4张♥️，非均型；或4-4-4-1牌型，逼叫' },
  { rebid: '2S', points: '12—21点', description: '5张♦️＋4张♠️，非均型，逼叫' },
  { rebid: '2NT', points: '12—14点', description: '均型，可以有4张高花，逼叫；或者18—19点，均型，可以有4张高花；应叫人如果叫3NT就叫4NT邀请满贯' },
  { rebid: '3C', points: '12点以上', description: '5张以上♦️＋4张以上♣️，非均型，逼叫' },
  { rebid: '3D', points: '12—13点', description: '4张以上♦️，高花有单缺，不逼叫' },
  { rebid: '3H', points: '14点以上', description: '4张以上♦️，♥️单缺，斯普林特，逼局' },
  { rebid: '3S', points: '14点以上', description: '4张以上♦️，♠️单缺，斯普林特，逼局' },
  { rebid: '4C', points: '16点以上', description: '4张以上♦️，♣️单缺，斯普林特，逼局' }
]

// 1D—2D—2H后应叫方的再叫数据
const oneDiamondTwoDiamondTwoHeartRebid = [
  { rebid: '2S', points: '10点以上', description: '♠️有止张或4张，逼局' },
  { rebid: '2NT', points: '13点以上', description: '♣️/♠️均有止张，逼局' },
  { rebid: '3C', points: '12点以上', description: '♣️有止张或4张，♠️无止，逼局' },
  { rebid: '3D', points: '10—12点', description: '5张♦️↑，无4张高花，不逼叫' },
  { rebid: '3H', points: '14点以上', description: '4张♥️，2-4-5-2型，高限，逼局' },
  { rebid: '3S', points: '13点以上', description: '5张♦️↑＋4张♥️，斯普林特，逼局' },
  { rebid: '4C', points: '13点以上', description: '5张♦️↑＋4张♥️，斯普林特，逼局' },
  { rebid: '4D', points: '10—12点', description: '5张♦️↑，高花无废点，邀叫' },
  { rebid: '4H', points: '12—13点', description: '4张♥️，2-4-5-2型，低限' }
]

// 1D—2D—2S后应叫方的再叫数据
const oneDiamondTwoDiamondTwoSpadeRebid = [
  { rebid: '2NT', points: '13点以上', description: '♣️和♥️均有止张，逼局' },
  { rebid: '3C', points: '12点以上', description: '♣️有止张或4张，♥️无止，逼局' },
  { rebid: '3D', points: '10—12点', description: '5张以上♦️，无4张M，不逼叫' },
  { rebid: '3H', points: '13点以上', description: '♥️有止张，♣️无止张，逼局' },
  { rebid: '3S', points: '14点以上', description: '4张♠️，4-2-5-2型，高限，逼局' },
  { rebid: '4C', points: '13点以上', description: '5张♦️↑＋4张♠️，斯普林特，逼局' },
  { rebid: '4D', points: '10—12点', description: '5张♦️↑，高花无废点，邀叫' },
  { rebid: '4H', points: '13点以上', description: '5张♦️↑＋4张♠️，斯普林特，逼局' },
  { rebid: '4S', points: '12—13点', description: '4张♠️，4-2-5-2型，低限' }
]

// 1D—2D—2NT后应叫方的再叫数据
const oneDiamondTwoDiamondTwoNTRebid = [
  { rebid: '3C', points: '13点以上', description: '4张♣️，高花有单缺，逼局' },
  { rebid: '3D', points: '10—12点', description: '5张以上♦️，无4张M，不逼叫' },
  { rebid: '3H', points: '13点以上', description: '5张♦️↑＋4张♥️，逼局' },
  { rebid: '3S', points: '13点以上', description: '5张♦️↑＋4张♠️，逼局' },
  { rebid: '3NT', points: '12—15点', description: '没有4张高花，止叫' },
  { rebid: '4C', points: '16点以上', description: '5张♦️↑，斯普林特，强烈满贯兴趣' },
  { rebid: '4D', points: '10—12点', description: '5张♦️↑，未叫花色有单缺，邀叫' },
  { rebid: '4H', points: '16点以上', description: '5张♦️↑，斯普林特，强烈满贯兴趣' },
  { rebid: '4S', points: '16点以上', description: '5张♦️↑，斯普林特，强烈满贯兴趣' },
  { rebid: '4NT', points: '18—19点', description: '4张♦️↑，无4张高花，满贯邀叫' }
]

// 1D—2D—3C后应叫方的再叫数据
const oneDiamondTwoDiamondThreeClubRebid = [
  { rebid: '3D', points: '10—11点', description: '5张以上♦️，无4张M，不逼叫' },
  { rebid: '3H', points: '11点以上', description: '♥️有止，♠️无止，寻求3NT逼局' },
  { rebid: '3S', points: '11点以上', description: '♠️有止，♥️无止，寻求3NT逼局' },
  { rebid: '3NT', points: '11—15点', description: '高花均有止张，止叫' },
  { rebid: '4C', points: '10—12点', description: '4张♣️↑，高花无止或只有A' },
  { rebid: '4D', points: '10—12点', description: '4张♦️↑，高花无止或只有A' },
  { rebid: '4H', points: '16点以上', description: '5张♦️↑，斯普林特，强烈满贯兴趣' },
  { rebid: '4S', points: '16点以上', description: '5张♦️↑，斯普林特，强烈满贯兴趣' }
]

// 八、应叫人跳叫
// 1D—2H后开叫方的再叫数据
const oneDiamondTwoHeartRebid = [
  { rebid: 'Pass', points: '12点以上', description: '不符合其他叫品' },
  { rebid: '2S', points: '16—21点', description: '6张以上♦️＋4张♠️↑，♥️单缺，不逼叫' },
  { rebid: '2NT', points: '15—21点', description: '问单缺；2张以上♥️，逼叫' },
  { rebid: '3C', points: '15—18点', description: '5张♦️↑＋5张♣️↑，♥️单缺，不逼叫' },
  { rebid: '3D', points: '12—18点', description: '半坚固的6张以上♦️，♥️单缺，不逼叫' },
  { rebid: '3H', points: '12—15点', description: '3张以上♥️，不逼叫' },
  { rebid: '3NT', points: '18—19点', description: '坚固的6张以上♦️，未叫花色有止张' },
  { rebid: '4H', points: '15—21点', description: '3~4张♥️，止叫' }
]

// 1D—2H—2NT后应叫方的再叫数据
const oneDiamondTwoHeartTwoNTRebid = [
  { rebid: '3C', points: '4—5点', description: '♣️单缺，低限，逼叫' },
  { rebid: '3D', points: '4—5点', description: '♦️单缺，低限，逼叫' },
  { rebid: '3H', points: '4—5点', description: '无单缺，低限，不逼叫' },
  { rebid: '3S', points: '4—5点', description: '♠️单缺，低限，逼叫' },
  { rebid: '3NT', points: '6—7点', description: '无单缺，高限，止叫' },
  { rebid: '4C', points: '6—7点', description: '♣️单缺，高限，逼叫' },
  { rebid: '4D', points: '6—7点', description: '♦️单缺，高限，逼叫' },
  { rebid: '4H', points: '6—7点', description: '♠️单缺，高限，不逼叫' }
]

// 1D—2S后开叫方的再叫数据
const oneDiamondTwoSpadeRebid = [
  { rebid: 'Pass', points: '12点以上', description: '不符合其他叫品' },
  { rebid: '2NT', points: '15—21点', description: '问单缺；2张以上♠️，逼叫' },
  { rebid: '3C', points: '15—18点', description: '5张♦️↑＋5张♣️↑，♠️单缺，不逼叫' },
  { rebid: '3D', points: '12—18点', description: '半坚固的6张以上♦️，♠️单缺，不逼叫' },
  { rebid: '3H', points: '16—21点', description: '6张以上♦️＋5张♥️，♠️单缺，逼叫一轮' },
  { rebid: '3S', points: '12—15点', description: '3张以上♠️，不逼叫' },
  { rebid: '3NT', points: '18—19点', description: '坚固的6张以上♦️，未叫花色有止张' },
  { rebid: '4S', points: '15—21点', description: '3~4张♠️，止叫' }
]

// 1D—2S—2NT后应叫方的再叫数据
const oneDiamondTwoSpadeTwoNTRebid = [
  { rebid: '3C', points: '4—5点', description: '♣️单缺，低限，逼叫' },
  { rebid: '3D', points: '4—5点', description: '♦️单缺，低限，逼叫' },
  { rebid: '3H', points: '4—5点', description: '♥️单缺，低限，逼叫' },
  { rebid: '3S', points: '4—5点', description: '无单缺，低限，不逼叫' },
  { rebid: '3NT', points: '6—7点', description: '无单缺，高限，止叫' },
  { rebid: '4C', points: '6—7点', description: '♣️单缺，高限，逼叫' },
  { rebid: '4D', points: '6—7点', description: '♦️单缺，高限，逼叫' },
  { rebid: '4H', points: '6—7点', description: '♥️单缺，高限，逼叫' }
]

// 1D—2NT后开叫方的再叫数据
const oneDiamondTwoNTRebid = [
  { rebid: 'Pass', points: '12—13点', description: '低限，不接受邀请' },
  { rebid: '3C', points: '12—13点', description: '5张以上♦️＋4张以上♣️，不逼叫' },
  { rebid: '3D', points: '12—13点', description: '5~6张♦️，不逼叫' },
  { rebid: '3H/3S', points: '15点以上', description: '所叫花色♥️/♠️单缺，逼局' },
  { rebid: '3NT', points: '14—19点', description: '进局止叫' },
  { rebid: '4C', points: '14—16点', description: '5张♦️＋5张♣️，邀叫' },
  { rebid: '4D', points: '12—13点', description: '7张以上♦️，不逼叫' },
  { rebid: '4H/4S', points: '14—16点', description: '6张♦️＋5张♥️/♠️，逼局' },
  { rebid: '5C', points: '14—16点', description: '6张♦️＋5张♣️' },
  { rebid: '5D', points: '14—16点', description: '7张以上♦️，止叫' }
]

// 1D—3C后开叫方的再叫数据
const oneDiamondThreeClubRebid = [
  { rebid: 'Pass', points: '12—13点', description: '成局无望' },
  { rebid: '3D', points: '12—15点', description: '6张以上♦️，3张以下♣️，不逼叫' },
  { rebid: '3H', points: '14—16点', description: '♥️有止，♠️无止，寻求3NT' },
  { rebid: '3S', points: '14—16点', description: '♠️有止，♥️无止，寻求3NT' },
  { rebid: '3NT', points: '14—18点', description: '高花均有止张，止叫' },
  { rebid: '4C', points: '12—13点', description: '3张以上♣️，高花有单缺，邀叫' },
  { rebid: '4H', points: '14点以上', description: '3张以上♣️，♥️单缺，逼局' },
  { rebid: '4S', points: '14点以上', description: '3张以上♣️，♠️单缺，逼局' }
]

// 1D—3D后开叫方的再叫数据
const oneDiamondThreeDiamondRebid = [
  { rebid: 'Pass', points: '12—17点', description: '成局无望' },
  { rebid: '3H', points: '18—21点', description: '♥️有止张，逼叫' },
  { rebid: '3S', points: '18—21点', description: '♠️有止张，逼叫' },
  { rebid: '3NT', points: '18—21点', description: '未叫花色有止张' },
  { rebid: '4D', points: '16—18点', description: '4张以上♦️，邀叫' }
]

// 1D—3H/3S后开叫方的再叫数据
const oneDiamondThreeHeartSpadeRebid = [
  { rebid: '3S', points: '12—15点', description: '♥️有止张，♠️有止张' },
  { rebid: '3NT', points: '12—15点', description: '♥️/♠️有好止张，未叫花色有止张' },
  { rebid: '4C', points: '16点以上', description: '扣叫，满贯兴趣' },
  { rebid: '4D', points: '16点以上', description: '4张以上♦️，满贯兴趣' },
  { rebid: '4H/4S', points: '16点以上', description: '扣叫，满贯兴趣' },
  { rebid: '5D', points: '12—15点', description: '4张以上♦️，止叫' }
]

// 九、开叫人逆叫
// 1D—1S—2H后应叫方的再叫数据
const oneDiamondOneSpadeReverseRebid = [
  { rebid: '2S', points: '6—7点', description: '6张以上♠️，弱牌，不逼叫' },
  { rebid: '2NT', points: '6点以上', description: '不保证♣️止张，可能弱牌，逼叫' },
  { rebid: '3C', points: '8点以上', description: '♣️没有止张，逼局' },
  { rebid: '3D', points: '8点以上', description: '3张以上♦️，逼局' },
  { rebid: '3H', points: '10点以上', description: '4张以上♥️，逼局' },
  { rebid: '3S', points: '8点以上', description: '6张以上♠️，逼局' },
  { rebid: '3NT', points: '8—11点', description: '♣️有止张，止叫' },
  { rebid: '4C', points: '11点以上', description: '4张以上♥️，♣️单缺，逼局' },
  { rebid: '4D', points: '11点以上', description: '4张以上♦️，逼局' },
  { rebid: '4H', points: '7—9点', description: '4张以上♥️，止叫' }
]

// 1D—1S—2H—2NT后开叫方的再叫数据
const oneDiamondOneSpadeReverseTwoNTRebid = [
  { rebid: '3C', points: '16—18点', description: '5张以上♦️＋4张♥️＋3~4张♣️' },
  { rebid: '3D', points: '19—21点', description: '5张以上♦️＋4张♥️' },
  { rebid: '3H', points: '15—17点', description: '6张以上♦️＋5张♥️，不逼叫' },
  { rebid: '3S', points: '19—21点', description: '5张♦️↑＋4张♥️＋3张♠️，逼局' },
  { rebid: '3NT', points: '19—21点', description: '♣️有止张，止叫' }
]

// 1D—1NT—2H后应叫方的再叫数据
const oneDiamondOneNTReverseHeartRebid = [
  { rebid: '2S', points: '6—10点', description: '♠️有止张，♣️无止张，逼叫' },
  { rebid: '2NT', points: '6—7点', description: '未叫花色均有止张，不逼叫' },
  { rebid: '3C', points: '8—10点', description: '♣️有止张，♠️无止张，逼叫' },
  { rebid: '3D', points: '6—7点', description: '3张以上♦️，不逼叫' },
  { rebid: '3H', points: '8—10点', description: '3张♥️，♣️/♠️无止张，不逼叫' },
  { rebid: '3NT', points: '8—10点', description: '未叫花色均有止张，止叫' },
  { rebid: '4D', points: '8—10点', description: '3张以上♦️，邀叫' }
]

// 1D—1NT—2S后应叫方的再叫数据
const oneDiamondOneNTReverseSpadeRebid = [
  { rebid: '2NT', points: '6—7点', description: '未叫花色均有止张，不逼叫' },
  { rebid: '3C', points: '8—10点', description: '♣️有止张，♥️无止张，逼叫' },
  { rebid: '3D', points: '6—7点', description: '3张以上♦️，不逼叫' },
  { rebid: '3H', points: '8—10点', description: '♥️有止张，♣️无止张，逼叫' },
  { rebid: '3S', points: '8—10点', description: '3张♠️，♣️/♥️无止张，不逼叫' },
  { rebid: '3NT', points: '8—10点', description: '未叫花色均有止张，止叫' },
  { rebid: '4D', points: '8—10点', description: '3张以上♦️，邀叫' }
]

// 十、开叫人跳叫
// 1D—1H—2NT后应叫方的再叫数据
const oneDiamondOneHeartJumpTwoNTRebid = [
  { rebid: 'Pass', points: '6—7点', description: '最低限，3-4-3-3牌型' },
  { rebid: '3C', points: '6点以上', description: '重询；5张♥️或4张♣️↑，逼局' },
  { rebid: '3D', points: '10点以上', description: '4张♥️＋4张以上♦️，满贯兴趣' },
  { rebid: '3H', points: '6点以上', description: '6张以上♥️，逼局' },
  { rebid: '3S', points: '6点以上', description: '4张♥️＋4张♠️，逼局' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4D', points: '11点以上', description: '4张♥️＋5张以上♦️，满贯兴趣' },
  { rebid: '4NT', points: '12—14点', description: '满贯邀叫' }
]

// 1D—1H—2NT—3C后开叫方的再叫数据
const oneDiamondOneHeartJumpTwoNTThreeClubRebid = [
  { rebid: '3D', points: '18—19点', description: '5张♦️，无3张♥️，无4张♠️' },
  { rebid: '3H', points: '18—19点', description: '3张♥️' },
  { rebid: '3S', points: '18—19点', description: '4张♠️，无3张♥️' },
  { rebid: '3NT', points: '18—19点', description: '无5张♦️，无3张♥️，无4张♠️' }
]

// 1D—1S—2NT后应叫方的再叫数据
const oneDiamondOneSpadeJumpTwoNTRebid = [
  { rebid: 'Pass', points: '6—7点', description: '最低限，4-3-3-3牌型' },
  { rebid: '3C', points: '6点以上', description: '重询；5张♠️或4张♣️↑，逼局' },
  { rebid: '3D', points: '10点以上', description: '4张♠️＋4张以上♦️，满贯兴趣' },
  { rebid: '3H', points: '6点以上', description: '5张♠️＋5张♥️，逼局' },
  { rebid: '3S', points: '6点以上', description: '6张以上♠️，逼局' },
  { rebid: '3NT', points: '6—11点', description: '止叫' },
  { rebid: '4D', points: '11点以上', description: '4张♠️＋5张以上♦️，满贯兴趣' },
  { rebid: '4NT', points: '12—14点', description: '满贯邀叫' }
]

// 1D—1S—2NT—3C后开叫方的再叫数据
const oneDiamondOneSpadeJumpTwoNTThreeClubRebid = [
  { rebid: '3D', points: '18—19点', description: '5张♦️，无3张♠️，无4张♥️' },
  { rebid: '3H', points: '18—19点', description: '4张♥️，可能有3张♠️' },
  { rebid: '3S', points: '18—19点', description: '3张♠️，无4张♥️' },
  { rebid: '3NT', points: '18—19点', description: '无5张♦️，无3张♠️，无4张♥️' }
]

// 1D—1H—2S后应叫方的再叫数据
const oneDiamondOneHeartJumpTwoSpadeRebid = [
  { rebid: '2NT', points: '6—7点', description: '示弱；或≥8点，♣️有止张' },
  { rebid: '3C', points: '8点以上', description: '♣️没有止张，等待叫' },
  { rebid: '3D', points: '8点以上', description: '3张以上♦️' },
  { rebid: '3H', points: '8点以上', description: '6张以上♥️' },
  { rebid: '3S', points: '6点以上', description: '4张♠️' },
  { rebid: '4C', points: '10点以上', description: '4张以上♦️，♣️单缺' },
  { rebid: '4D', points: '10点以上', description: '4张以上♦️' }
]

// 1D—1H—3C后应叫方的再叫数据
const oneDiamondOneHeartJumpThreeClubRebid = [
  { rebid: '3D', points: '6—9点', description: '3张以上♦️' },
  { rebid: '3H', points: '6点以上', description: '好的5张以上♥️' },
  { rebid: '3S', points: '6点以上', description: '♠️没有止张，等待叫' },
  { rebid: '3NT', points: '6—11点', description: '♠️有止张，止叫' },
  { rebid: '4C', points: '10点以上', description: '4张以上♣️' },
  { rebid: '4D', points: '10点以上', description: '3张以上♦️' },
  { rebid: '4S', points: '10点以上', description: '4张以上♣️，♠️单缺' }
]

// 1D—1S—3C后应叫方的再叫数据
const oneDiamondOneSpadeJumpThreeClubRebid = [
  { rebid: '3D', points: '6—9点', description: '3张以上♦️' },
  { rebid: '3H', points: '6点以上', description: '♥️没有止张，等待叫' },
  { rebid: '3S', points: '6点以上', description: '好的5张以上♠️' },
  { rebid: '3NT', points: '6—11点', description: '♥️有止张，止叫' },
  { rebid: '4C', points: '10点以上', description: '4张以上♣️' },
  { rebid: '4D', points: '10点以上', description: '3张以上♦️' },
  { rebid: '4H', points: '10点以上', description: '4张以上♣️，♥️单缺' }
]

// 1D—1NT—3C后应叫方的再叫数据
const oneDiamondOneNTJumpThreeClubRebid = [
  { rebid: '3D', points: '6—10点', description: '3张以上♦️' },
  { rebid: '3H', points: '6—10点', description: '♥️有止张，♠️没有止张' },
  { rebid: '3S', points: '6—10点', description: '♠️有止张，♥️没有止张' },
  { rebid: '3NT', points: '6—10点', description: '♥️/♠️有止张，止叫' },
  { rebid: '4C', points: '8—10点', description: '5张♣️↑，3控以上，满贯兴趣' },
  { rebid: '4H', points: '8—10点', description: '4张♦️↑＋4张♣️↑，♥️单缺' },
  { rebid: '4S', points: '8—10点', description: '4张♦️↑＋4张♣️↑，♠️单缺' }
]

// 1D—1H—3D后应叫方的再叫数据
const oneDiamondOneHeartJumpThreeDiamondRebid = [
  { rebid: 'Pass', points: '6—7点', description: '没有成局的可能' },
  { rebid: '3H', points: '8点以上', description: '6张以上♥️，逼叫' },
  { rebid: '3S', points: '8点以上', description: '5张♥️＋3张以上♠️，逼叫' },
  { rebid: '3NT', points: '6—11点', description: '自然叫，要打3NT' },
  { rebid: '4C', points: '12点以上', description: '3张以上♦️，扣叫，满贯兴趣' },
  { rebid: '4D', points: '12点以上', description: '3张以上♦️，满贯兴趣' },
  { rebid: '4H', points: '6—7点', description: '7张以上♥️' },
  { rebid: '4S', points: '12点以上', description: '3张以上♦️，♠️单缺' },
  { rebid: '5D', points: '8—11点', description: '3张以上♦️，止叫' }
]

// 1D—1H—3H后应叫方的再叫数据
const oneDiamondOneHeartJumpThreeHeartRebid = [
  { rebid: 'Pass', points: '6—7点', description: '没有成局的可能' },
  { rebid: '3S', points: '12点以上', description: '♠️有控制，有满贯兴趣' },
  { rebid: '3NT', points: '8—14点', description: '均型，未叫花色有止张，示选' },
  { rebid: '4C', points: '12点以上', description: '♣️有控制，♠️无控制，满贯兴趣' },
  { rebid: '4D', points: '12点以上', description: '♦️有控制，♠️/♣️无控制，满贯兴趣' },
  { rebid: '4H', points: '8—11点', description: '4张以上♥️，止叫' }
]

// 1D—1S—3D后应叫方的再叫数据
const oneDiamondOneSpadeJumpThreeDiamondRebid = [
  { rebid: 'Pass', points: '6—7点', description: '没有成局的可能' },
  { rebid: '3H', points: '8点以上', description: '5张♠️＋3张以上♥️，逼叫' },
  { rebid: '3S', points: '8点以上', description: '6张以上♠️，逼叫' },
  { rebid: '3NT', points: '6—11点', description: '自然叫，要打3NT' },
  { rebid: '4C', points: '12点以上', description: '3张以上♦️，扣叫，满贯兴趣' },
  { rebid: '4D', points: '12点以上', description: '3张以上♦️，满贯兴趣' },
  { rebid: '4H', points: '12点以上', description: '3张以上♦️，♥️单缺' },
  { rebid: '4S', points: '6—7点', description: '7张以上♠️' }
]

// 1D—1S—3S后应叫方的再叫数据
const oneDiamondOneSpadeJumpThreeSpadeRebid = [
  { rebid: 'Pass', points: '6—7点', description: '没有成局的可能' },
  { rebid: '3NT', points: '8—14点', description: '均型，未叫花色有止张，示选' },
  { rebid: '4C', points: '12点以上', description: '♣️有控制，满贯兴趣' },
  { rebid: '4D', points: '12点以上', description: '♦️有控制，♣️无控制，满贯兴趣' },
  { rebid: '4H', points: '12点以上', description: '♥️有控制，♣️/♦️无控制，满贯兴趣' },
  { rebid: '4S', points: '8—11点', description: '4张以上♠️，止叫' }
]

// 1D—1NT—3D后应叫方的再叫数据
const oneDiamondOneNTJumpThreeDiamondRebid = [
  { rebid: 'Pass', points: '6—7点', description: '没有成局的可能' },
  { rebid: '3H', points: '8点以上', description: '♥️有止张，♠️没有止张' },
  { rebid: '3S', points: '8点以上', description: '♠️有止张，♥️没有止张' },
  { rebid: '3NT', points: '6—11点', description: '♥️/♠️有止张，止叫' },
  { rebid: '4C', points: '8—9点', description: '7张以上♣️，通常♦️单缺，不逼叫' },
  { rebid: '4D', points: '8—9点', description: '3张以上♦️，邀叫' },
  { rebid: '5D', points: '10—11点', description: '4张以上♦️' }
]

// 十一、1D在敌方干扰后的叫牌
// 1D被敌方加倍后应叫方的再叫数据
const oneDiamondDoubledResponses = [
  { bid: 'Pass', points: '0—10点', description: '不符合其他叫品' },
  { bid: '××', points: '11点以上', description: '通常是可以惩罚对方的均型牌' },
  { bid: '1H', points: '6点以上', description: '4张以上♥️，保持原意；或强牌不适合惩罚敌方，逼叫' },
  { bid: '1S', points: '6点以上', description: '4张以上♠️，保持原意；或强牌不适合惩罚敌方，逼叫' },
  { bid: '1NT', points: '6—10点', description: '没有4张高花，不逼叫' },
  { bid: '2C', points: '8—11点', description: '6张以上♣️，不逼叫' },
  { bid: '2D', points: '6—10点', description: '4张以上♦️，没有4张高花，不是低花反加叫，不逼叫' },
  { bid: '2H', points: '4—7点', description: '6张以上♥️，阻击叫' },
  { bid: '2S', points: '4—7点', description: '6张以上♠️，阻击叫' },
  { bid: '2NT', points: '11点以上', description: '5张以上♦️，逼叫；乔丹约定叫' },
  { bid: '3C', points: '8—11点', description: '5张♦️＋4张以上♣️有2张大牌，配合显示叫' },
  { bid: '3D', points: '4—8点', description: '5张以上♦️，6—8点时通常有单缺（否则叫1NT），阻击叫' },
  { bid: '3H', points: '4—8点', description: '7张以上♥️，阻击叫' },
  { bid: '3S', points: '4—8点', description: '7张以上♠️，阻击叫' },
  { bid: '3NT', points: '12—15点', description: '没有4张高花套，止叫' }
]

// 1D—(1H)后应叫方的再叫数据
const oneDiamondOneHeartInterferenceResponses = [
  { bid: 'Pass', points: '0—5点', description: '不够应叫点力；或8点以上，有♥️长套的埋伏性不叫' },
  { bid: '×', points: '6点以上', description: '4张♠️' },
  { bid: '1S', points: '6点以上', description: '5张以上♠️，逼叫' },
  { bid: '1NT', points: '6—10点', description: '♥️有止张，没有4张♠️，不逼叫' },
  { bid: '2C', points: '10点以上', description: '5张以上♣️，逼叫' },
  { bid: '2D', points: '6—10点', description: '4张以上♦️，没有4张♠️，不是低花反加叫，不逼叫' },
  { bid: '2H', points: '10点以上', description: '扣叫，4张以上♦️，限制性加叫，逼叫' },
  { bid: '2S', points: '4—6点', description: '6张以上♠️；阻击叫' },
  { bid: '2NT', points: '11—12点', description: '♥️有止张，没有4张♠️，邀叫' },
  { bid: '3C', points: '6—8点', description: '6张以上♣️，阻击叫' },
  { bid: '3D', points: '4—8点', description: '5张以上♦️，阻击叫，通常没有4张♠️' },
  { bid: '3H/3S', points: '12点以上', description: '5张以上♦️，♥️/♠️单缺，斯普林特，逼局' },
  { bid: '3NT', points: '12—15点', description: '♥️有止张，没有4张♠️，止叫' }
]

// 1D—(1S)后应叫方的再叫数据
const oneDiamondOneSpadeInterferenceResponses = [
  { bid: 'Pass', points: '0—5点', description: '不够应叫点力；或8点以上，有♠️长套的埋伏性不叫' },
  { bid: '×', points: '6点以上', description: '4张♥️；或6—9点，5张以上♥️' },
  { bid: '1NT', points: '6—10点', description: '♠️有止张，没有4张♥️，不逼叫' },
  { bid: '2C', points: '10点以上', description: '5张以上♣️，逼叫' },
  { bid: '2D', points: '6—10点', description: '4张以上♦️，没有4张♥️，不是低花反加叫，不逼叫' },
  { bid: '2H', points: '10点以上', description: '5张以上♥️，逼叫' },
  { bid: '2S', points: '10点以上', description: '扣叫，4张以上♦️，限制性加叫，逼叫' },
  { bid: '2NT', points: '11—12点', description: '♠️有止张，没有4张♥️，邀叫' },
  { bid: '3C', points: '6—8点', description: '6张以上♣️，阻击叫' },
  { bid: '3D', points: '4—8点', description: '5张以上♦️，阻击叫，通常没有4张♥️' },
  { bid: '3H', points: '6—8点', description: '6张以上♥️，阻击叫' },
  { bid: '3S/4C', points: '12点以上', description: '5张以上♦️，♠️/♣️单缺，斯普林特，逼局' },
  { bid: '3NT', points: '12—15点', description: '♠️有止张，没有4张♥️，止叫' }
]

// 1D—(2C)后应叫方的再叫数据
const oneDiamondTwoClubInterferenceResponses = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '8点以上', description: '技术性加倍，高花至少4－3，且不符合其他自然叫' },
  { bid: '2D', points: '6—9点', description: '4张以上♦️，不逼叫' },
  { bid: '2H', points: '10点以上', description: '5张以上♥️，逼叫' },
  { bid: '2S', points: '10点以上', description: '5张以上♠️，逼叫' },
  { bid: '2NT', points: '11—12点', description: '♣️有止张，没有4张高花，邀叫' },
  { bid: '3C', points: '10点以上', description: '扣叫，4张以上♦️，限制性加叫，逼叫' },
  { bid: '3D', points: '4—8点', description: '5张以上♦️，阻击叫' },
  { bid: '3H/3S', points: '6—8点', description: '6张以上♥️，阻击叫' },
  { bid: '3NT', points: '12—15点', description: '♣️有止张，止叫' }
]

// 1D—(3C)后特别约定
const oneDiamondThreeClubInterferenceSpecial = [
  { bid: '4C', points: '7点以上', description: '5张以上♥️＋5张以上♠️，逼局' }
]

// 1D—(1NT)后应叫方的再叫数据
const oneDiamondOneNTInterferenceResponses = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '9点以上', description: '均型或非均型牌，惩罚性。（如果同伴低限，也可改叫）' },
  { bid: '2C', points: '8—11点', description: '5－4以上双高花；兰迪约定叫' },
  { bid: '2D', points: '6—9点', description: '4~5张以上♦️，不逼叫' },
  { bid: '2H/2S', points: '6—11点', description: '5~6张以上♥️/♠️，不逼叫' }
]

// 1D—(2D)迈克尔斯扣叫后应叫方的再叫数据
const oneDiamondTwoDiamondMichaelsResponses = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '9点以上', description: '至少可以惩罚1个高花' },
  { bid: '2H', points: '10点以上', description: '5张以上♣️，逼叫' },
  { bid: '2S', points: '10点以上', description: '4张以上♦️，♦️的限制性加叫，逼叫' },
  { bid: '2NT', points: '11—12点', description: '高花均有止张，邀叫' },
  { bid: '3C', points: '6—9点', description: '6张以上♣️，不逼叫' },
  { bid: '3D', points: '6—9点', description: '5张以上♦️，不逼叫' },
  { bid: '3H/3S', points: '12点以上', description: '5张以上♦️，♥️/♠️单缺，斯普林特，逼局' },
  { bid: '3NT', points: '12—15点', description: '高花均有止张，止叫' }
]

// 1D—(2NT)不寻常2NT争叫后应叫方的再叫数据
const oneDiamondTwoNTUnusualResponses = [
  { bid: 'Pass', points: '0—8点', description: '不符合其他叫品' },
  { bid: '×', points: '9点以上', description: '至少可以惩罚♣️/♥️中的一套' },
  { bid: '3C', points: '10点以上', description: '4张以上♦️，逼叫' },
  { bid: '3D', points: '6—9点', description: '4张以上♦️，不逼叫' },
  { bid: '3H', points: '11点以上', description: '5张以上♠️，逼叫' },
  { bid: '3S', points: '6—10点', description: '6张以上♠️，不逼叫' },
  { bid: '3NT', points: '12—15点', description: '♣️和♥️均有止张，止叫' }
]

// 支持性加倍数据
const supportDoubleData = [
  { situation: '1D/1C—(/)—1H/1S—(×)', rebid: '××', points: '12—21点', description: '3张♥️/♠️；支持性再加倍' },
  { situation: '1D/1C—(/)—1H/1S—(×)', rebid: '2H/2S', points: '12—14点', description: '4张♥️/♠️，不逼叫' },
  { situation: '1D/1C—(/)—1H—(1S/1NT/2C/2D)', rebid: '×', points: '12—21点', description: '3张♥️/♠️；支持性加倍' },
  { situation: '1D/1C—(/)—1S—(1NT/2C/2D/2H)', rebid: '2H/2S', points: '12—14点', description: '4张♥️/♠️，不逼叫' },
  { situation: '1D/1C—(/)—1H—(2S/2NT/3C)', rebid: '×', points: '14—15点', description: '3张♥️/♠️有大牌，支持性加倍' },
  { situation: '1D/1C—(/)—1S—(2NT/3C/3H)', rebid: '3H/3S', points: '14—17点', description: '4张♥️/♠️' }
]
</script>

<style scoped>
.bridge-card {
  @apply bg-white rounded-lg shadow-md p-6 mb-6;
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