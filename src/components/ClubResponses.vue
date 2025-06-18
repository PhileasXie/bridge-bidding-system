<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第一章 1♣️开叫及以后的应叫</h2>
    <!-- 一、1C开叫的应叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">一、1C开叫的应叫</h2>
    </div>
    <!-- 1C应叫主表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—? 应叫表</h3>
      <el-table :data="oneClubResponsesFull" style="width: 100%" border>
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
      <h3 class="bridge-subtitle">注意事项（第3~4家开叫1♣️）</h3>
      <div class="prose max-w-none">
        <ul class="list-disc pl-6">
          <li>1♦️：6-11点，保持原意，不逼叫。</li>
          <li>1♥️/1♠️：6-11点，保持原意，不逼叫。</li>
          <li>2♣️：8-11点，4张以上♣️，没有4张高花，不逼叫。</li>
        </ul>
      </div>
    </div>

    <!-- 二、1C在一盖一应叫后 -->
    <div class="mb-8">
      <h2 class="bridge-title">二、1♣️在一盖一应叫后</h2>
    </div>
    <!-- 1C—1D后开叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♦️ 后开叫方的再叫</h3>
      <el-table :data="oneClubOneDiamondRebidFull" style="width: 100%" border>
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

    <!-- 1C—1D—1H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♦️—1♥️ 后应叫方的再叫</h4>
      <el-table :data="oneClubOneDiamondOneHeartRebid" style="width: 100%" border>
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

    <!-- 1C—1D—1S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♦️—1♠️ 后应叫方的再叫</h4>
      <el-table :data="oneClubOneDiamondOneSpadeRebid" style="width: 100%" border>
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

    <!-- 1C—1D—2C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♦️—2♣️ 后应叫方的再叫</h4>
      <el-table :data="oneClubOneDiamondTwoClubRebid" style="width: 100%" border>
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

    <!-- 1C—1D—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♦️—2♦️（12—15点，5张以上♣️＋4张♦️） 后应叫方的再叫</h4>
      <el-table :data="oneClubOneDiamondTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1C—1H后开叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♥️ 后开叫方的再叫</h3>
      <h5>6 —11点，4张以上♥️，或有更长低花；或12点以上，♥️为长套，4-4M叫1♥️，5-5M叫1♠️，逼叫</h5>
      <el-table :data="oneClubOneHeartRebidFull" style="width: 100%" border>
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

    <!-- 1C—1H—1S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♥️—1♠️（12—17点，5张♣️＋4张♠️） 后应叫方的再叫</h4>
      <el-table :data="oneClubOneHeartOneSpadeRebid" style="width: 100%" border>
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

    <!-- 1C—1H—2C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♥️—2♣️（12—15点，6张以上♣️） 后应叫方的再叫</h4>
      <el-table :data="oneClubOneHeartTwoClubRebid" style="width: 100%" border>
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

    <!-- 1C—1H—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♥️—2♥️（12—15点，4张♥️或3张♥️有单缺） 后应叫方的再叫</h4>
      <el-table :data="oneClubOneHeartTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1C—1H—2H-2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♥️—2♥️-2NT（10点以上，重询高花） 后应叫方的再叫</h4>
      <el-table :data="oneClubOneHeartTwoHeartTwoNTRebid" style="width: 100%" border>
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

    <!-- 1C—1S后开叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♠️ 后开叫方的再叫</h3>
      <h5>6 点以上，4张以上♠️</h5>
      <el-table :data="oneClubOneSpadeRebidFull" style="width: 100%" border>
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

    <!-- 1C—1S—2C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♠️—2♣️（12—15点，6张以上♣️） 后应叫方的再叫</h4>
      <el-table :data="oneClubOneSpadeTwoClubRebid" style="width: 100%" border>
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

    <!-- 1C—1S—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♠️—2♠️（12—15点，4张♠️或3张♠️有单缺） 后应叫方的再叫</h4>
      <el-table :data="oneClubOneSpadeTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1C—1S—2S-2NT后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♠️—2♠️-2NT（10点以上，重询高花） 后开叫方的再叫</h4>
      <el-table :data="oneClubOneSpadeTwoSpadeTwoNTRebid" style="width: 100%" border>
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
    <!-- 1C—1D—1NT后应叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♦️—1NT 后应叫方的再叫</h3>
      <h5>12—14点，3张以上♣️，均型，可能有4张高花</h5>
      <el-table :data="oneClubOneDiamondOneNTRebid" style="width: 100%" border>
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

    <!-- 1C—1D—1NT—2C后再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♦️—1NT—2♣️—2♦️ 后再叫</h4>
      <h5>(2♣️=6—12点，重询斯台曼，要求同伴叫2D；示弱或邀叫)</h5>
      <el-table :data="oneClubOneDiamondOneNTTwoClubRebid" style="width: 100%" border>
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

    <!-- 1C—1D—1NT—2D后再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♦️—1NT—2♦️ 后再叫</h4>
      <h5>（2♦️=13点以上，重询斯台曼，逼局）</h5>
      <el-table :data="oneClubOneDiamondOneNTTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1C—1H—1NT后应叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♥️—1NT 后应叫方的再叫</h3>
      <h5>（1NT=12—14点，均型，无4张高花，不保证其他花色止张）</h5>
      <el-table :data="oneClubOneHeartOneNTRebid" style="width: 100%" border>
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

    <!-- 1C—1H—1NT-2C-2D后应叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♥️—1NT—2♣️—2♦️ 后应叫方的再叫</h3>      
      <el-table :data="oneClubOneHeartOneNTTwoClubTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1C—1H—1NT—2D后再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♥️—1NT—2♦️ 后开叫方的再叫</h4>
      <h5>(2♦️=13点以上，重询斯台曼，逼局)</h5>
      <el-table :data="oneClubOneHeartOneNTTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1C—1S—1NT后应叫方的再叫（主表格） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♠️—1NT 后应叫方的再叫</h3>
      <h5>（1NT=12—14点，可能有4张H，不保证其他花色止张）</h5>
      <el-table :data="oneClubOneSpadeOneNTRebid" style="width: 100%" border>
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

    <!-- 1C—1S—1NT-2C-2D后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♠️—1NT—2♣️—2♦️ 后应叫方的再叫</h3>      
      <el-table :data="oneClubOneSpadeOneNTTwoClubTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1C—1S—1NT—2D后再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♠️—1NT—2♦️ 后开叫方的再叫</h4>
      <h5>(2♦️=13点以上，重询斯台曼，逼局)</h5>
      <el-table :data="oneClubOneSpadeOneNTTwoDiamondRebid" style="width: 100%" border>
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


    <!-- 三、新低花逼局 -->
    <div class="mb-8">
      <h2 class="bridge-title">四、新低花逼局</h2>
    </div>
    <!-- 新低花逼局体系 1C—1H—2C—2D—? -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♥️—2♣️—2♦️</h3>
      <h5>（12点以上，新低花逼局，与♦️无关）</h5>
      <el-table :data="oneClubOneHeartTwoClubTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 新低花逼局体系 1C—1S—2C—2D—? -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♠️—2♣️—2♦️</h3>
      <h5>（12点以上，新低花逼局，与♦️无关）</h5>
      <el-table :data="oneClubOneSpadeTwoClubTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 五、1C—1NT后开叫方的再叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">五、1♣️—1NT应叫后</h2>
    </div>
    <!-- 1C—1NT后开叫方的再叫体系 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1NT 后开叫方的再叫</h3>
      <h5>（1NT=6—10点，没有4张高花，但可能有4~5张C）</h5>
      <el-table :data="oneClubOneNTRebid" style="width: 100%" border>
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

    <!-- 六、低花反加叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">六、低花反加叫</h2>
    </div>
    <!-- 1C—2C后开叫方的再叫体系 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—2♣️ 后开叫方的再叫</h3>
      <h5>（2♣️=10点以上，4张以上C，低花反加叫，逼叫）</h5>
      <el-table :data="oneClubTwoClubRebidFull" style="width: 100%" border>
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

    <!-- 1C—2C—2D后应叫方的再叫体系 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—2♣️—2♦️ 后应叫方的再叫</h4>
      <h5>（2♦️=12—21点，5张♣️＋4张♦️；非均型）</h5>
      <el-table :data="oneClubTwoClubTwoDiamondRebidFull" style="width: 100%" border>
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

    <!-- 1C—2C—2H后应叫方的再叫体系 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—2♣️—2♥️ 后应叫方的再叫</h4>
      <h5>（2♥️=12—21点，5张♣️＋4张♥️；或4-4-1-4牌型）</h5>
      <el-table :data="oneClubTwoClubTwoHeartRebidFull" style="width: 100%" border>
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

    <!-- 1C—2C—2S后应叫方的再叫体系 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—2♣️—2♠️ 后应叫方的再叫</h4>
      <h5>（2♠️=12—21点，5张♣️＋4张♠️；非均型）</h5>
      <el-table :data="oneClubTwoClubTwoSpadeRebidFull" style="width: 100%" border>
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

    <!-- 1C—2C—2NT后应叫方的再叫体系 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—2♣️—2NT 后应叫方的再叫</h4>
      <h5>（2NT=12—14点，或18—19点；均型，可能有4张高花）</h5>
      <el-table :data="oneClubTwoClubTwoNTRebidFull" style="width: 100%" border>
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

    <!-- 七、应叫人跳叫 -->
    <div class="mb-8">
      <h2 class="bridge-title">七、应叫人跳叫</h2>
    </div>
    <!-- 1C—2D后开叫方的再叫体系 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—2♦️ 后开叫方的再叫</h3>
      <h5>（2♦️=4-6点，6张以上♦️，阻击叫）</h5>
      <el-table :data="oneClubTwoDiamondRebid" style="width: 100%" border>
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

    <!-- 1C—2D—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—2♦️—2NT 后应叫方的再叫</h4>
      <h5>（2NT=15-21点，问单缺；2张以上♦️）</h5>
      <el-table :data="oneClubTwoDiamondTwoNTRebid" style="width: 100%" border>
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

    <!-- 1C—2H后开叫方的再叫体系 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—2♥️ 后开叫方的再叫</h3>
      <h5>（2♥️=4-6点，6张以上♥️，阻击叫）</h5>
      <el-table :data="oneClubTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1C—2H—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—2♥️—2NT 后应叫方的再叫</h4>
      <h5>（2NT=15-21点，问单缺；2张以上♥️）</h5>
      <el-table :data="oneClubTwoHeartTwoNTRebid" style="width: 100%" border>
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

    <!-- 1C—2S后开叫方的再叫体系 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—2♠️ 后开叫方的再叫</h3>
      <h5>（2♠️=4-6点，6张以上♠️，阻击叫）</h5>
      <el-table :data="oneClubTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1C—2S—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—2♠️—2NT 后应叫方的再叫</h4>
      <h5>（2NT=15-21点，问单缺；2张以上♠️）</h5>
      <el-table :data="oneClubTwoSpadeTwoNTRebid" style="width: 100%" border>
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

    <!-- 1C—2NT后开叫方的再叫体系 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—2NT 后开叫方的再叫）</h3>
      <h5>（2NT=11-12点，无4张M和5张♣️，邀叫</h5>
      <el-table :data="oneClubTwoNTRebidNew" style="width: 100%" border>
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

    <!-- 1C—3C后开叫方的再叫体系 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—3♣️ 后开叫方的再叫</h3>
      <h5>（3♣️=4-8点，5张以上♣️，阻击叫）</h5>
      <el-table :data="oneClubThreeClubRebid" style="width: 100%" border>
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

    <!-- 1C—3D后开叫方的再叫体系（斯普林特） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—3♦️ 后开叫方的再叫</h3>
      <h5>（3♦️=12-15点，5张以上♣️，♦️单缺，斯普林特）</h5>
      <el-table :data="oneClubThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 1C—3H后开叫方的再叫体系（斯普林特） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—3♥️ 后开叫方的再叫</h3>
      <h5>（3♥️=12-15点，5张以上♣️，♥️单缺，斯普林特）</h5>
      <el-table :data="oneClubThreeHeartRebid" style="width: 100%" border>
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

    <!-- 1C—3S后开叫方的再叫体系（斯普林特） -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—3♠️ 后开叫方的再叫</h3>
      <h5>（3♠️=12-15点，5张以上♣️，♠️单缺，斯普林特）</h5>
      <el-table :data="oneClubThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 开叫人逆叫体系 -->
    <div class="mb-8">
      <h2 class="bridge-title">八、开叫人逆叫体系</h2>
    </div>

    <!-- 1C—1H—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♥️—2♦️ 后应叫方的再叫</h3>
      <h5>（2♦️=逆叫，16-21点，5张以上♣️＋4张♦️）</h5>
      <el-table :data="oneClubOneHeartTwoDiamondResponses" style="width: 100%" border>
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

    <!-- 1C—1H—2D—2S后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♥️—2♦️—2♠️ 后开叫方的再叫</h4>
      <h5>（2♠️=6点以上，可能是弱牌，逼叫）</h5>
      <el-table :data="oneClubOneHeartTwoDiamondTwoSpadeRebid" style="width: 100%" border>
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

    <!-- 1C—1S—2D后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♠️—2♦️ 后应叫方的再叫</h3>
      <h5>（2♦️=逆叫，16-21点，5张以上♣️＋4张♦️）</h5>
      <el-table :data="oneClubOneSpadeTwoDiamondResponses" style="width: 100%" border>
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

    <!-- 1C—1S—2D—2H后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♠️—2♦️—2♥️ 后开叫方的再叫</h4>
      <h5>（2♥️=6点以上，可能是弱牌，逼叫）</h5>
      <el-table :data="oneClubOneSpadeTwoDiamondTwoHeartRebid" style="width: 100%" border>
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

    <!-- 1C—1S—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♠️—2♥️ 后应叫方的再叫（2♥️=逆叫，16-21点，5张以上♣️＋4张♥️）</h3>
      <el-table :data="oneClubOneSpadeTwoHeartResponses" style="width: 100%" border>
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

    <!-- 1C—1S—2H—2NT后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♠️—2♥️—2NT 后开叫方的再叫</h4>
      <h5>（2NT≥6点，不保证♦️止张，可能是弱牌）</h5>
      <el-table :data="oneClubOneSpadeTwoHeartTwoNTRebid" style="width: 100%" border>
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

    <!-- 1C—1NT—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1NT—2♥️ 后应叫方的再叫</h3>
      <h5>（2♥️=逆叫，16-21点，5张以上♣️＋4张以上♥️）</h5>
      <el-table :data="oneClubOneNTTwoHeartResponses" style="width: 100%" border>
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

    <!-- 1C—1NT—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1NT—2♠️ 后应叫方的再叫</h3>
      <h5>（2♠️=逆叫，16-21点，5张以上♣️＋4张以上♠️）</h5>
      <el-table :data="oneClubOneNTTwoSpadeResponses" style="width: 100%" border>
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

    <!-- 开叫人跳叫体系 -->
    <div class="mb-8">
      <h2 class="bridge-title">九、开叫人跳叫体系</h2>
    </div>

    <!-- 1C—1D—2H后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♦️—2♥️ 后应叫方的再叫</h3>
      <h5>（跳叫2♥️=18-21点，一般5-4以上套）</h5>
      <el-table :data="oneClubOneDiamondTwoHeartJumpResponses" style="width: 100%" border>
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

    <!-- 1C—1D—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♦️—2♠️ 后应叫方的再叫</h3>
      <h5>（跳叫2♠️=18-21点，一般5-4以上套）</h5>
      <el-table :data="oneClubOneDiamondTwoSpadeJumpResponses" style="width: 100%" border>
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

    <!-- 1C—1H—2S后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♥️—2♠️ 后应叫方的再叫</h3>
      <h5>（跳叫2♠️=18-21点，一般5-4以上套）</h5>
      <el-table :data="oneClubOneHeartTwoSpadeJumpResponses" style="width: 100%" border>
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

    <!-- 1C—1D—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♦️—2NT 后应叫方的再叫</h3>
      <h5>（跳叫2NT=18-19点，可能有4张M）</h5>
      <el-table :data="oneClubOneDiamondTwoNTJumpResponses" style="width: 100%" border>
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

    <!-- 1C—1H—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♥️—2NT 后应叫方的再叫</h3>
      <h5>（跳叫2NT=18-19点，可能有4张♠️）</h5>
      <el-table :data="oneClubOneHeartTwoNTJumpResponses" style="width: 100%" border>
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

    <!-- 1C—1H—2NT—3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♥️—2NT—3♣️ 后开叫方的再叫</h4>
      <h5>（3♣️=6点以上，重询高花）</h5>
      <el-table :data="oneClubOneHeartTwoNTThreeClubRebid" style="width: 100%" border>
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

    <!-- 1C—1S—2NT后应叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1♣️—1♠️—2NT 后应叫方的再叫</h3>
      <h5>（跳叫2NT=18-19点，可能有4张♥️）</h5>
      <el-table :data="oneClubOneSpadeTwoNTJumpResponses" style="width: 100%" border>
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

    <!-- 1C—1S—2NT—3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♠️—2NT—3♣️ 后开叫方的再叫</h4>
      <h5>（3♣️=6点以上，重询高花）</h5>
      <el-table :data="oneClubOneSpadeTwoNTThreeClubRebid" style="width: 100%" border>
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

    <!-- 跳叫原花色3C体系 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">跳叫原花色3♣️体系</h3>
    </div>

    <!-- 1C—1D—3C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♦️—3♣️ 后应叫方的再叫</h4>
      <h5>（跳叫原花色=16-18点，6张以上套，邀叫）</h5>
      <el-table :data="oneClubOneDiamondThreeClubResponses" style="width: 100%" border>
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

    <!-- 1C—1H—3C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♥️—3♣️ 后应叫方的再叫</h4>
      <h5>（跳叫原花色=16-18点，6张以上套，无4张高花）</h5>
      <el-table :data="oneClubOneHeartThreeClubResponses" style="width: 100%" border>
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

    <!-- 1C—1S—3C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♠️—3♣️ 后应叫方的再叫</h4>
      <h5>（跳叫原花色=16-18点，6张以上套，无4张高花）</h5>
      <el-table :data="oneClubOneSpadeThreeClubResponses" style="width: 100%" border>
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

    <!-- 1C—1NT—3C后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1NT—3♣️ 后应叫方的再叫</h4>
      <h5>（跳叫原花色=16-18点，6张以上套，无4张高花）</h5>
      <el-table :data="oneClubOneNTThreeClubResponses" style="width: 100%" border>
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

    <!-- 跳叫支持体系 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">跳叫支持体系</h3>
    </div>

    <!-- 1C—1D—3D后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♦️—3♦️ 后应叫方的再叫</h4>
      <h5>（跳3♦️=16-18点，4张以上♦️，邀叫）</h5>
      <el-table :data="oneClubOneDiamondThreeDiamondResponses" style="width: 100%" border>
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

    <!-- 1C—1H—3H后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♥️—3♥️ 后应叫方的再叫</h4>
      <h5>（跳3♥️=15-17点，4张♥️支持，邀叫）</h5>
      <el-table :data="oneClubOneHeartThreeHeartResponses" style="width: 100%" border>
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

    <!-- 1C—1S—3S后应叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—1♠️—3♠️ 后应叫方的再叫</h4>
      <h5>（跳3♠️=15-17点，4张♠️支持，邀叫）</h5>
      <el-table :data="oneClubOneSpadeThreeSpadeResponses" style="width: 100%" border>
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

    <!-- 敌方干扰后的叫牌体系 -->
    <div class="mb-8">
      <h2 class="bridge-title">十、1♣️在敌方干扰后的叫牌</h2>
    </div>

    <!-- 1C被敌方加倍 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">1. 1♣️被敌方加倍</h3>
      <div class="bridge-card mb-4">
        <h4 class="bridge-subtitle">应叫的基本原则</h4>
        <div class="prose max-w-none">
          <ul class="list-disc pl-6">
            <li>①再加倍是偏重惩罚。</li>
            <li>②没有低花反加叫和斯普林特约定叫。</li>
            <li>③2NT是好的开叫花色加叫（乔丹约定叫）。</li>
            <li>④1阶新花逼叫一轮。</li>
            <li>⑤跳叫新花或跳加叫开叫花色是阻击叫。</li>
          </ul>
        </div>
      </div>
      <h4 class="bridge-subtitle">1♣️—(×)—? </h4>
      <h5>（敌方×=11点以上，一般有双高花）</h5>
      <el-table :data="oneClubDoubleResponses" style="width: 100%" border>
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

    <!-- 1C被敌方花色争叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">2. 1♣️被敌方花色争叫</h3>
      <div class="bridge-card mb-4">
        <h4 class="bridge-subtitle">应叫的基本原则</h4>
        <div class="prose max-w-none">
          <ul class="list-disc pl-6">
            <li>①如果敌方是双套牌，加倍是至少惩罚其中一套；如果是单套，4♥️以下加倍是负加倍。</li>
            <li>②简单1阶新花应叫逼叫一轮；简单2阶花色应叫逼叫一轮；简单3阶花色应叫逼叫进局。</li>
            <li>③跳叫新花或跳加叫开叫花色为阻击叫。</li>
            <li>④扣叫敌方花色是对开叫花色的限制性加叫。</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 1C—(1D)—? -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—(1♦️)—?</h4>
      <el-table :data="oneClubOneDiamondOvercallResponses" style="width: 100%" border>
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

    <!-- 1C—(1H)—? -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—(1♥️)—?</h4>
      <el-table :data="oneClubOneHeartOvercallResponses" style="width: 100%" border>
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

    <!-- 1C—(1S)—? -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1♣️—(1♠️)—?</h4>
      <el-table :data="oneClubOneSpadeOvercallResponses" style="width: 100%" border>
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

    <!-- 特别约定 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">特别约定：1♣️—(2♦️/3♦️)—?</h4>
      <el-table :data="oneClubSpecialConvention" style="width: 100%" border>
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

    <!-- 1C被敌方1NT争叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">3. 1♣️被敌方1NT争叫</h3>
      <h4 class="bridge-subtitle">1♣️—(1NT)—? </h4>
      <h5>（敌方1NT=15-18点，均型牌）</h5>
      <el-table :data="oneClubOneNTOvercallResponses" style="width: 100%" border>
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

    <!-- 1C在敌方迈克尔斯扣叫后 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">4. 1♣️在敌方迈克尔斯扣叫后</h3>
      <h4 class="bridge-subtitle">1♣️—(2♣️)—? </h4>
      <h5>（敌方2♣️=5张♥️+5张♠️）</h5>
      <el-table :data="oneClubMichaelsCueResponses" style="width: 100%" border>
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

    <!-- 1C在敌方不寻常2NT争叫后 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">5. 1♣️在敌方不寻常2NT争叫后</h3>
      <h4 class="bridge-subtitle">1♣️—(2NT)—? </h4>
      <h5>（敌方2NT=5张♦️+5张♥️）</h5>
      <el-table :data="oneClubUnusualTwoNTResponses" style="width: 100%" border>
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

    <!-- 详细说明、要点、问答等 -->
    <div class="bridge-card">
      <h3 class="bridge-subtitle">体系要点 & 常见问答</h3>
      <div class="prose max-w-none">
        <ul class="list-disc pl-6 mb-4">
          <li>应叫需根据自身牌力和花色长度合理选择，避免过度冒险。</li>
          <li>逼叫和阻击叫要结合开叫方的牌型和点力综合判断。</li>
          <li>反加叫和邀叫需注意后续体系衔接。</li>
        </ul>
        <ul class="list-disc pl-6">
          <li>Q: 什么时候选择1NT应叫？<br/>A: 没有4张高花且点力适中时。</li>
          <li>Q: 反加叫和阻击叫的区别？<br/>A: 反加叫为进攻性，阻击叫为扰乱对手。</li>
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

const oneClubResponsesFull = ref([
  { bid: 'Pass', points: '0-5点', description: '4~5张以上C，弱牌' },
  { bid: '1D', points: '6-11点', description: '4张D↑，无4张高花且不适合1NT；或12点以上，5张D↑，D长于H/S，逼叫' },
  { bid: '1H/1S', points: '6-11点', description: '4张H/S↑，或有更长低花；或12点↑，H/S为长套，4-4M叫1H，5-5M叫1S，逼叫' },
  { bid: '1NT', points: '6-10点', description: '没有4张高花，但可能有4~5张C，不逼叫' },
  { bid: '2C', points: '10点以上', description: '4张以上C，低花反加叫，逼叫' },
  { bid: '2D', points: '4-8点', description: '6张以上D，阻击叫' },
  { bid: '2H/2S', points: '4-8点', description: '6张以上H/S，阻击叫' },
  { bid: '2NT', points: '11-12点', description: '没有4张高花和5张以上C，邀叫' },
  { bid: '3C', points: '4-8点', description: '5张以上C，无4张高花，阻击叫；6-8点时通常高花有单缺（否则叫1NT），不逼叫' },
  { bid: '3D', points: '12-15点', description: '5张以上C，没有4张高花，D单缺，斯普林特，逼局' },
  { bid: '3H/3S', points: '12-15点', description: '5张以上C，没有4张高花，H/S单缺，斯普林特，逼局' },
  { bid: '3NT', points: '13-15点', description: '没有4张高花' },
  { bid: '4C', points: '4-8点', description: '6张以上C，加深阻击；通常点力不高有牌型，不逼叫' },
  { bid: '4D/4H/4S', points: '5-8点', description: '7张以上D/H/S套' },
  { bid: '4NT', points: '18点以上', description: 'C为将牌的罗马关键张问叫' },
  { bid: '5C', points: '4-8点', description: '7张以上C；或6张C畸形牌' },
])

const oneClubOneDiamondRebidFull = ref([
  { rebid: '1H', points: '12-17点', description: '5张以上C＋4张H；或4-4-1-4牌型，不逼叫' },
  { rebid: '1S', points: '12-17点', description: '5张以上C＋4张S，不逼叫' },
  { rebid: '1NT', points: '12-14点', description: '3张以上C，均型，可能有4张高花，不逼叫' },
  { rebid: '2C', points: '12-15点', description: '6张以上C，没有4张高花，不逼叫' },
  { rebid: '2D', points: '12-15点', description: '5张以上C＋4张D支持，不逼叫' },
  { rebid: '2H/2S', points: '18-21点', description: '5张以上C＋4张H/S，跳叫新花逼局' },
  { rebid: '2NT', points: '18-19点', description: '3张以上C，可能有4张高花，不逼叫' },
  { rebid: '3C', points: '16-18点', description: '6张以上C，没有4张高花，跳叫原花邀叫' },
  { rebid: '3D', points: '16-18点', description: '5张以上C＋4张D支持，不逼叫' },
  { rebid: '3H/3S', points: '18-21点', description: '5张以上C＋4张D支持，所叫花色H/S单缺，斯普林特，逼局' },
  { rebid: '3NT', points: '16-18点', description: '坚固的6张以上C，高花有止张' },
])

const oneClubOneDiamondOneHeartRebid = ref([
  { rebid: 'Pass', points: '6-7点', description: '3张H，愿意打4-3配合' },
  { rebid: '1S', points: '12点以上', description: '第四花色逼局；与S无关' },
  { rebid: '1NT', points: '6-10点', description: '没有4张高花，不逼叫' },
  { rebid: '2C', points: '6-9点', description: '4张以上C，无高花，不逼叫' },
  { rebid: '2D', points: '6-9点', description: '6张以上D，不逼叫' },
  { rebid: '2H', points: '8-10点', description: '3张H，愿意打4-3配合' },
  { rebid: '2S', points: '12点以上', description: '5张D↑＋4张S，逼局' },
  { rebid: '2NT', points: '11-12点', description: '均型，高花无配合，邀叫' },
  { rebid: '3C', points: '11-12点', description: '4张以上C，邀叫' },
  { rebid: '3D', points: '11-12点', description: '6张以上D，邀叫' },
  { rebid: '3H', points: '15点以上', description: '5张D↑＋4张H，逼局' },
  { rebid: '3S/4C', points: '12点以上', description: '5张D↑＋4张H，斯普林特，逼局' },
  { rebid: '3NT', points: '13-15点', description: '止叫' },
  { rebid: '4D', points: '13点以上', description: '7张以上D，逼局' },
  { rebid: '4H', points: '12-14点', description: '5张D↑＋4张H，止叫' },
])

const oneClubOneDiamondOneSpadeRebid = ref([
  { rebid: 'Pass', points: '6-7点', description: '3张S，愿意打4-3配合' },
  { rebid: '1NT', points: '6-10点', description: '没有4张高花，不逼叫' },
  { rebid: '2C', points: '6-9点', description: '4张以上C，无高花，不逼叫' },
  { rebid: '2D', points: '6-9点', description: '6张以上D，不逼叫' },
  { rebid: '2H', points: '12点以上', description: '第四花色逼局；与H无关' },
  { rebid: '2S', points: '8-10点', description: '3张S，愿意打4-3配合' },
  { rebid: '2NT', points: '11-12点', description: '均型，高花无配合，邀叫' },
  { rebid: '3C', points: '11-12点', description: '4张以上C，邀叫' },
  { rebid: '3D', points: '11-12点', description: '6张以上D，邀叫' },
  { rebid: '3H', points: '12点以上', description: '5张D↑＋4张S，斯普林特，逼局' },
  { rebid: '3S', points: '15点以上', description: '5张D↑＋4张S，逼局' },
  { rebid: '3NT', points: '13-15点', description: '止叫' },
  { rebid: '4D', points: '13点以上', description: '7张以上D，逼局' },
  { rebid: '4S', points: '12-14点', description: '5张D↑＋4张S，止叫' },
])

//1C——1D——2C——？（2C=12—15点，6张以上C）
const oneClubOneDiamondTwoClubRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2D', points: '8-9点', description: '6张以上D，不逼叫' },
  { rebid: '2H', points: '10点以上', description: 'H有止张，邀叫3NT' },
  { rebid: '2S', points: '10点以上', description: 'S有止张，邀叫3NT' },
  { rebid: '2NT', points: '11-12点', description: '均型，高花有止张，邀叫' },
  { rebid: '3C', points: '9-11点', description: '3张以上C，邀叫' },
  { rebid: '3D', points: '11-12点', description: '6张以上D，邀叫' },
  { rebid: '3H', points: '12点以上', description: '4张以上C，SPL，逼局' },
  { rebid: '3S', points: '12点以上', description: '4张以上C，SPL，逼局' },
  { rebid: '3NT', points: '13-15点', description: '止叫' },
  { rebid: '4C', points: '12点以上', description: '3张以上C，逼局' }
])

//1♣️—1♦️—2♦️（12—15点，5张以上♣️＋4张♦️） 后应叫方的再叫
const oneClubOneDiamondTwoDiamondRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2H', points: '10点以上', description: 'H有止张，邀叫3NT' },
  { rebid: '2S', points: '10点以上', description: 'S有止张，邀叫3NT' },
  { rebid: '2NT', points: '11-12点', description: '均型，高花有止张，邀叫' },
  { rebid: '3C', points: '11-12点', description: '4张以上C，邀叫' },
  { rebid: '3D', points: '11-12点', description: '5张以上D，邀叫' },
  { rebid: '3H', points: '12点以上', description: '4张以上D，SPL，逼局' },
  { rebid: '3S', points: '12点以上', description: '4张以上D，SPL，逼局' },
  { rebid: '3NT', points: '13-17点', description: '止叫' }
])

//1♣️—1♥️ 后开叫方的再叫
const oneClubOneHeartRebidFull = ref([
  { rebid: '1S', points: '12-17点', description: '5张C＋4张S，不逼叫' },
  { rebid: '1NT', points: '12-14点', description: '均型，无4张高花，不保证其他花色止张，不逼叫' },
  { rebid: '2C', points: '12-15点', description: '6张以上C，没有4张高花，不逼叫' },
  { rebid: '2D', points: '16-21点', description: '5张以上C＋4张D，逆叫，逼叫' },
  { rebid: '2H', points: '12-15点', description: '4张H，或3张H有单缺，不逼叫' },
  { rebid: '2S', points: '18-21点', description: '好的5张以上C＋4张以上S；跳叫新花逼局' },
  { rebid: '2NT', points: '18-19点', description: '跳叫2NT，可能有4张S，不逼叫' },
  { rebid: '3C', points: '16-18点', description: '6张以上C，无4张高花，跳叫原花邀叫' },
  { rebid: '3D/3S', points: '18-21点', description: '4张H，所叫花色D/S单缺，SPL，逼局' },
  { rebid: '3H', points: '15-17点', description: '4张H，邀叫' },
  { rebid: '3NT', points: '16-18点', description: '坚固的6张以上C，未叫花色有止张' },
  { rebid: '4C', points: '16-21点', description: '6张以上C＋4张H，逼局' },
  { rebid: '4H', points: '18-21点', description: '4张H' }
])

//1♣️—1♥️—1♠️（12—17点，5张♣️＋4张♠️） 后应叫方的再叫
const oneClubOneHeartOneSpadeRebid = ref([
  { rebid: 'Pass', points: '6-7点', description: '3~4张S，愿意打4-3配合' },
  { rebid: '1NT', points: '6-10点', description: '没有4张S，不逼叫' },
  { rebid: '2C', points: '6-9点', description: '4张以上C，无4张S，不逼叫' },
  { rebid: '2D', points: '12点以上', description: '第四花色逼局；与D无关' },
  { rebid: '2H', points: '6-9点', description: '6张H，不逼叫' },
  { rebid: '2S', points: '8-9点', description: '4张S，不逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型，高花无配合，邀叫' },
  { rebid: '3C', points: '10-11点', description: '4张以上C，邀叫' },
  { rebid: '3D', points: '10-11点', description: '5张H＋5张D，邀叫' },
  { rebid: '3H', points: '10-11点', description: '6张以上H，邀叫' },
  { rebid: '3S', points: '10-11点', description: '4张S，邀叫' },
  { rebid: '3NT', points: '13-15点', description: '止叫' },
  { rebid: '4H', points: '10-12点', description: '7张以上H，止叫' },
  { rebid: '4S', points: '12-15点', description: '4张S，止叫' }
])

//1♣️—1♥️—2♣️（12—15点，6张以上C） 后应叫方的再叫
const oneClubOneHeartTwoClubRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2D', points: '12点以上', description: '新低花逼局，与D无关' },
  { rebid: '2H', points: '6-9点', description: '6张以上H，不逼叫' },
  { rebid: '2S', points: '10-12点', description: '5张H＋4张S，逼叫' },
  { rebid: '2NT', points: '11-12点', description: '均型牌，邀叫' },
  { rebid: '3C', points: '9-11点', description: '3张以上C，邀叫' },
  { rebid: '3D', points: '10-11点', description: '5张H＋5张D，邀叫' },
  { rebid: '3H', points: '10-11点', description: '6张以上H，邀叫' },
  { rebid: '3S', points: '12点以上', description: '4张以上C，SPL，逼局' },
  { rebid: '3NT', points: '12-17点', description: '止叫' },
  { rebid: '4C', points: '15点以上', description: '3张以上C，满贯兴趣' },
  { rebid: '4D', points: '12点以上', description: '4张以上C，SPL，逼局' }
])

//1♣️—1♥️—2♥️（12—15点，4张♥️或3张♥️有单缺） 后应叫方的再叫
const oneClubOneHeartTwoHeartRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2S', points: '10点以上', description: '5张H↑，3张S↑，帮张邀叫' },
  { rebid: '2NT', points: '10点以上', description: '重询高花；请同伴描述牌型' },
  { rebid: '3C', points: '10点以上', description: '5张H↑，3张C↑，帮张邀叫' },
  { rebid: '3D', points: '10点以上', description: '5张H↑，3张D↑，帮张邀叫' },
  { rebid: '3H', points: '10-11点', description: '5张以上H，邀叫' },
  { rebid: '3S', points: '13点以上', description: '5张以上H，SPL，逼局' },
  { rebid: '3NT', points: '12-15点', description: '通常3-4-3-3牌型，示选' },
  { rebid: '4C/4D', points: '13点以上', description: '5张以上H，SPL，逼局' },
  { rebid: '4H', points: '12-15点', description: '5张以上H，止叫' }
])

//1♣️—1♥️—2♥️-2NT（2NT=10点以上，重询高花） 后应叫方的再叫
const oneClubOneHeartTwoHeartTwoNTRebid = ref([
  { rebid: '3C', points: '12-13点', description: '4张H，5张C，逼叫' },
  { rebid: '3D', points: '12-15点', description: '3张H，5张C，4张D，不逼叫' },
  { rebid: '3H', points: '12-13点', description: '4张H，不逼叫' },
  { rebid: '3S', points: '14-15点', description: '4张H，S单缺，逼局' },
  { rebid: '3NT', points: '14-15点', description: '4张H，均型，4H/3NT示选' },
  { rebid: '4C', points: '14-15点', description: '4张H，好的5张C，逼局' },
  { rebid: '4D', points: '14-15点', description: '4张H，D单缺，逼局' },
  { rebid: '4H', points: '14-15点', description: '4张H，止叫' }
])

//1D-1S
const oneClubOneSpadeRebidFull = ref([
  { rebid: '1NT', points: '12-14点', description: '可能有4张H，不保证其他花色止张' },
  { rebid: '2C', points: '12-15点', description: '6张以上C，不逼叫' },
  { rebid: '2D', points: '16-21点', description: '5张以上C＋4张D，逆叫，逼叫' },
  { rebid: '2H', points: '16-21点', description: '5张以上C＋4张H，逆叫，逼叫' },
  { rebid: '2S', points: '12-15点', description: '4张S，或3张S有单缺，不逼叫' },
  { rebid: '2NT', points: '18-19点', description: '均型，可能有4张H，不逼叫' },
  { rebid: '3C', points: '16-18点', description: '6张以上C，无4张M，跳叫原花邀叫' },
  { rebid: '3D', points: '18-21点', description: '4张S，D单缺，SPL，逼局' },
  { rebid: '3H', points: '18-21点', description: '4张S，H单缺，SPL，逼局' },
  { rebid: '3S', points: '15-17点', description: '4张S，邀叫' },
  { rebid: '3NT', points: '16-18点', description: '坚固的6张以上C，未叫花色有止张' },
  { rebid: '4C', points: '16-21点', description: '6张以上C＋4张S，逼局' },
  { rebid: '4S', points: '18-21点', description: '4张S' }
])

//1C-1S-2C-? （2C=12—15点，6张以上C）
const oneClubOneSpadeTwoClubRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2D', points: '12点以上', description: '新低花逼局，与D无关' },
  { rebid: '2H', points: '6-9点', description: '5张S＋4张H，不逼叫' },
  { rebid: '2S', points: '6-9点', description: '6张以上S，示弱' },
  { rebid: '2NT', points: '11-12点', description: '均型牌，邀叫' },
  { rebid: '3C', points: '9-11点', description: '3张以上C，邀叫' },
  { rebid: '3D', points: '10-11点', description: '5张S＋5张D，邀叫' },
  { rebid: '3H', points: '10-11点', description: '5张S＋5张H，邀叫' },
  { rebid: '3S', points: '10-11点', description: '6张以上S，邀叫' },
  { rebid: '3NT', points: '12-17点', description: '止叫' },
  { rebid: '4C', points: '15点以上', description: '3张以上C，满贯兴趣' },
  { rebid: '4D', points: '12点以上', description: '4张以上C，SPL，逼局' },
  { rebid: '4H', points: '8-11点', description: '6张S＋5张H，示选' },
  { rebid: '4S', points: '10-13点', description: '7张以上S，止叫' },
  { rebid: '5C', points: '10-14点', description: '4张以上C，止叫' }
])

//1D-1S-2S
const oneClubOneSpadeTwoSpadeRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '没有成局的可能' },
  { rebid: '2NT', points: '10点以上', description: '重询高花；请同伴描述牌型' },
  { rebid: '3C', points: '10点以上', description: '5张S↑，3张C↑，帮张邀叫' },
  { rebid: '3D', points: '10点以上', description: '5张S↑，3张D↑，帮张邀叫' },
  { rebid: '3H', points: '10点以上', description: '5张S↑，3张H↑，帮张邀叫' },
  { rebid: '3S', points: '10-11点', description: '5张以上S，邀叫' },
  { rebid: '3NT', points: '12-15点', description: '通常4-3-3-3牌型，示选' },
  { rebid: '4C/4D', points: '13点以上', description: '5张以上S，SPL，逼局' },
  { rebid: '4H', points: '13点以上', description: '5张以上S，SPL，逼局' },
  { rebid: '4S', points: '12-15点', description: '5张以上S，止叫' }
])

//1D-1S-2S-2NT
const oneClubOneSpadeTwoSpadeTwoNTRebid = ref([
  { rebid: '3C', points: '12-13点', description: '4张S，5张C，逼叫' },
  { rebid: '3D', points: '12-14点', description: '3张S，5张C，4张D，不逼叫' },
  { rebid: '3H', points: '12-14点', description: '3张S，5张C，4张H，不逼叫' },
  { rebid: '3S', points: '12-13点', description: '4张S，不逼叫' },
  { rebid: '3NT', points: '14-15点', description: '4张S，均型，4S/3NT示选' },
  { rebid: '4C', points: '14-15点', description: '4张S，好的5张C，逼局' },
  { rebid: '4D', points: '14-15点', description: '4张S，D单缺，逼局' },
  { rebid: '4H', points: '14-15点', description: '4张S，H单缺，逼局' },
  { rebid: '4S', points: '14-15点', description: '4张S，止叫' }
])

const oneClubOneDiamondOneNTRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '不符合其他叫品' },
  { rebid: '2C', points: '6-9点', description: '要求同伴叫2D；后续Pass = 5张以上D，示弱' },
  { rebid: '2D', points: '10-12点', description: '要求同伴叫2D；后续选择自然叫品，邀叫' },
  { rebid: '2H', points: '13点以上', description: '不符合其他叫品，逼局' },
  { rebid: '2S', points: '13点以上', description: '5张以上D＋4张H，逼局' },
  { rebid: '2NT', points: '13点以上', description: '5张以上D＋4张S，逼局' },
  { rebid: '3C', points: '10-12点', description: '5张D＋4张C，不逼叫' },
  { rebid: '3D', points: '13点以上', description: '5张D＋5张C，逼局' },
  { rebid: '3H', points: '13点以上', description: '6张以上D，逼局' },
  { rebid: '3S', points: '13点以上', description: '5张D＋4张C，H单缺，逼局' },
  { rebid: '3NT', points: '13-17点', description: '不满足其他进局条件，止叫' },
  { rebid: '4NT', points: '18-19点', description: '满贯邀叫' },
])

const oneClubOneDiamondOneNTTwoClubRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '5张以上D，示弱止叫' },
  { rebid: '2NT', points: '10-12点', description: '5张D，均型牌，邀叫' },
  { rebid: '3C', points: '10-12点', description: '5张以上D＋5张C，邀叫' },
  { rebid: '3D', points: '10-12点', description: '好的6张以上D，邀叫' }
])

const oneClubOneDiamondOneNTTwoDiamondRebid = ref([
  { rebid: '2H', points: '12-14点', description: 'H有止张，S无止张' },
  { rebid: '2S', points: '12-14点', description: 'S有止张，H无止张' },
  { rebid: '2NT', points: '12-14点', description: 'S/H均有止张' },
  { rebid: '3C', points: '12-14点', description: '5张以上C' },
  { rebid: '3D', points: '12-14点', description: '带两大牌的3张D' },
])

//1♣️—1♥️—1NT 后应叫方的再叫
const oneClubOneHeartOneNTRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '不符合其他叫品' },
  { rebid: '2C', points: '6-9点', description: '要求同伴叫2D；后续Pass = 5张以上D，示弱' },
  { rebid: '', points: '10-12点', description: '要求同伴叫2D；后续选择自然叫品，邀叫' },
  { rebid: '2D', points: '13点以上', description: '多数进局起步叫品，与D无关，逼局' },
  { rebid: '2H', points: '6-9点', description: '6张以上H，不逼叫' },  
  { rebid: '2S', points: '13点以上', description: '5张H＋4张S，逼局' },  
  { rebid: '2NT', points: '6-9点', description: '要求同伴叫3C；后续Pass = 5张以上C，示弱' },
  { rebid: '', points: '10-12点', description: '要求同伴叫3C；后续叫3D = 5张D＋5张H，邀叫' },  
  { rebid: '3C', points: '13点以上', description: '5张H＋5张C，逼局' },
  { rebid: '3D', points: '13点以上', description: '5张H＋5张D，逼局' },
  { rebid: '3H', points: '13点以上', description: '半坚固的6张以上H，逼局' },  
  { rebid: '3NT', points: '13-17点', description: '不满足其他进局条件，止叫' },
  { rebid: '4NT', points: '18-19点', description: '满贯邀叫' }
])

//1♣️—1♥️—1NT-2♣️-2♦️ 后应叫方的再叫
const oneClubOneHeartOneNTTwoClubTwoDiamondRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '5张以上D' },
  { rebid: '2H', points: '10-12点', description: '好的5张以上H，邀叫' },
  { rebid: '2S', points: '10-12点', description: '5张H＋4张S，邀叫' },
  { rebid: '2NT', points: '10-12点', description: '均型牌，邀叫' },
  { rebid: '3C/3D', points: '10-12点', description: '5张以上C/D，邀叫' },
  { rebid: '3H', points: '10-12点', description: '好的6张以上H，邀叫' }
])

//1♣️—1♥️—1NT-2♦️
const oneClubOneHeartOneNTTwoDiamondRebid = ref([
  { rebid: '2H', points: '12-14点', description: '3张H' },
  { rebid: '2S', points: '12点以上', description: '3张S，3-1-4-5牌型' },
  { rebid: '2NT', points: '12-14点', description: '没有3张H，均型牌' },
  { rebid: '3C', points: '12-14点', description: '5张以上C' },
  { rebid: '3D', points: '12-14点', description: '2-2-4-5牌型' }
])

//1♣️—1♠️—1NT 后应叫方的再叫
const oneClubOneSpadeOneNTRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '不符合其他叫品' },
  { rebid: '2C', points: '6-9点', description: '要求同伴叫2D；后续Pass = 5张以上D，示弱' },
  { rebid: '2D', points: '10-12点', description: '要求同伴叫2D；后续选择自然叫品，邀叫' },
  { rebid: '2H', points: '13点以上', description: '多数进局起步叫品，与D无关，逼局' },
  { rebid: '2S', points: '6-9点', description: '5张S＋4张以上H，不逼叫' },
  { rebid: '2NT', points: '6-9点', description: '6张以上S，不逼叫' },
  { rebid: '3C/3D', points: '6-9点', description: '要求同伴叫3C；后续Pass = 5张以上C，示弱' },
  { rebid: '3H', points: '10-12点', description: '要求同伴叫3C；后续叫3D = 5张D＋5张S，邀叫' },
  { rebid: '3S', points: '13点以上', description: '5张S＋5张C/D，逼局' },
  { rebid: '3NT', points: '13点以上', description: '5张S＋5张H，逼局' },
  { rebid: '4NT', points: '13点以上', description: '半坚固的6张以上S，逼局' },
  { rebid: '4H', points: '13-17点', description: '不满足其他进局条件，止叫' },
  { rebid: '4S', points: '18-19点', description: '满贯邀叫' }
])

//1♣️—1♠️—1NT—2♣️—2♦️ 后应叫方的再叫
const oneClubOneSpadeOneNTTwoClubTwoDiamondRebid = ref([
  { rebid: 'Pass', points: '6-9点', description: '5张以上D' },
  { rebid: '2H', points: '10-12点', description: '5张S＋4张H，邀叫' },
  { rebid: '2S', points: '10-12点', description: '好的5张以上S，邀叫' },
  { rebid: '2NT', points: '10-12点', description: '均型牌，邀叫' },
  { rebid: '3C/3D', points: '10-12点', description: '5张以上C/D，邀叫' },
  { rebid: '3H', points: '10-12点', description: '5张S＋5张H，邀叫' },
  { rebid: '3S', points: '10-12点', description: '好的6张以上S，邀叫' }
])

//1♣️—1♠️—1NT-2♦️
const oneClubOneSpadeOneNTTwoDiamondRebid = ref([
  { rebid: '2H', points: '12-14点', description: '4张H' },
  { rebid: '2S', points: '12点以上', description: '3张S' },
  { rebid: '2NT', points: '12-14点', description: '无4张H，无3张S，均型牌' },
  { rebid: '3C', points: '12-14点', description: '5张以上C' },
  { rebid: '3D', points: '12-14点', description: '2-2-4-5牌型' }
])

const oneClubOneHeartTwoClubTwoDiamondRebid = ref([
  { rebid: '2H', points: '12-15点', description: '6张C＋3张H' },
  { rebid: '2S', points: '12-15点', description: '6张C，无3张H，S有止张' },
  { rebid: '2NT', points: '12-15点', description: '6张C，无3张H，未叫花色有止张' },
  { rebid: '3C', points: '12-15点', description: '6张以上C，不符合其他叫品' },
  { rebid: '3D', points: '12-15点', description: '6张C＋4张D，无3张H' },
  { rebid: '3H', points: '14-15点', description: '7张以上C，无3张H，D单缺' },
  { rebid: '3S', points: '14-15点', description: '7张以上C，无3张H，S单缺' },
])

const oneClubOneSpadeTwoClubTwoDiamondRebid = ref([
  { rebid: '2H', points: '12-15点', description: '6张C＋4张H' },
  { rebid: '2S', points: '12-15点', description: '6张C＋3张S；无4张H' },
  { rebid: '2NT', points: '12-15点', description: '无4张H，无3张S，其他有止' },
  { rebid: '3C', points: '12-15点', description: '6张以上C，不符合其他叫品' },
  { rebid: '3D', points: '12-15点', description: '6张C＋4张D，无3张S' },
  { rebid: '3H', points: '14-15点', description: '7张以上C，无3张S，H单缺' },
  { rebid: '3S', points: '14-15点', description: '7张以上C，无3张S，D单缺' },
])

const oneClubOneNTRebid = ref([
  { rebid: 'Pass', points: '12-14点', description: '不符合其他叫品' },
  { rebid: '2C', points: '12-15点', description: '5张以上C，不逼叫' },
  { rebid: '2D', points: '16-21点', description: '5张以上C＋4张D，逆叫，逼叫' },
  { rebid: '2H', points: '16-21点', description: '5张以上C＋4张H，逆叫，逼叫' },
  { rebid: '2S', points: '16-21点', description: '5张以上C＋4张S，逆叫，逼叫' },
  { rebid: '2NT', points: '16-18点', description: '不适合1NT开叫的牌型，邀叫' },
  { rebid: '3C', points: '16-18点', description: '6张以上C，无4张高花，邀叫' },
  { rebid: '3D', points: '16-21点', description: '6张以上C＋5张以上D，逼局' },
  { rebid: '3H', points: '16-21点', description: '6张以上C＋5张以上H，逼局' },
  { rebid: '3S', points: '16-21点', description: '6张以上C＋5张以上S，逼局' },
  { rebid: '3NT', points: '16-21点', description: '止叫' },
])

const oneClubTwoClubRebidFull = ref([
  { rebid: '2D', points: '12-21点', description: '5张C＋4张D，非均型，逼叫' },
  { rebid: '2H', points: '12-21点', description: '5张C＋4张H；或4-4-1-4牌型，非均型，逼叫' },
  { rebid: '2S', points: '12-21点', description: '5张C＋4张S，非均型，逼叫' },
  { rebid: '2NT', points: '12-14点', description: '均型，可以有4张高花，逼叫' },
  { rebid: '', points: '18-19点', description: '均型，可以有4张高花；应叫人如果叫3NT就叫4NT邀请满贯' },
  { rebid: '3C', points: '12-14点', description: '4张以上C，高花有单缺，不逼叫' },
  { rebid: '3D', points: '14点以上', description: '4张以上C，D单缺，斯普林特，逼局' },
  { rebid: '3H/3S', points: '14点以上', description: '4张以上C，H/S单缺，斯普林特，逼局' },
])

const oneClubTwoClubTwoDiamondRebidFull = ref([
  { rebid: '2H', points: '10点以上', description: 'H有止张，S无止张，逼叫' },
  { rebid: '2S', points: '10点以上', description: 'S有止张，H无止张，逼叫' },
  { rebid: '2NT', points: '13点以上', description: '高花均有止张，逼局' },
  { rebid: '3C', points: '10-12点', description: '5张以上C，不逼叫' },
  { rebid: '3H/3S', points: '13点以上', description: '4张以上C，斯普林特，逼局' },
  { rebid: '4C', points: '10-12点', description: '5张以上C，M无废点，邀叫' },
])

const oneClubTwoClubTwoHeartRebidFull = ref([
  { rebid: '2S', points: '12点以上', description: 'S有止张或4张S，逼局' },
  { rebid: '2NT', points: '13点以上', description: 'D和S均有止张，逼局' },
  { rebid: '3C', points: '10-12点', description: '5张以上C，无4张M，不逼叫' },
  { rebid: '3D', points: '13点以上', description: 'D有止张或4张D，S无止，逼局' },
  { rebid: '3H', points: '14点以上', description: '5张C＋4张H，2-4-2-5型，高限' },
  { rebid: '3S', points: '13点以上', description: '5张C↑＋4张H，斯普林特，逼局' },
  { rebid: '4C', points: '10-12点', description: '5张以上C，M无废点，邀叫' },
  { rebid: '4D', points: '13点以上', description: '5张C↑＋4张H，斯普林特，逼局' },
  { rebid: '4H', points: '12-13点', description: '5张C＋4张H，2-4-2-5型，低限' },
])

const oneClubTwoClubTwoSpadeRebidFull = ref([
  { rebid: '2NT', points: '13点以上', description: 'D和H均有止张，逼局' },
  { rebid: '3C', points: '10-12点', description: '5张以上C，无4张M，不逼叫' },
  { rebid: '3D', points: '13点以上', description: 'D有止或4张D，H无止，逼局' },
  { rebid: '3H', points: '13点以上', description: 'D无止张，H有止张，逼局' },
  { rebid: '3S', points: '14点以上', description: '5张C＋4张S，4-2-2-5，高限' },
  { rebid: '4C', points: '10-12点', description: '5张以上C，M无废点，邀叫' },
  { rebid: '4D', points: '13点以上', description: '5张C↑＋4张S，斯普林特，逼局' },
  { rebid: '4H', points: '13点以上', description: '5张C↑＋4张S，斯普林特，逼局' },
  { rebid: '4S', points: '12-13点', description: '5张C＋4张S，4-2-2-5，低限' },
])

const oneClubTwoClubTwoNTRebidFull = ref([
  { rebid: '3C', points: '10-12点', description: '5张以上C，无4张M，不逼叫' },
  { rebid: '3D', points: '13点以上', description: 'D有止或4张，M有单缺，逼局' },
  { rebid: '3H/3S', points: '13点以上', description: '5张以上C＋4张H/S，逼局' },
  { rebid: '3NT', points: '12-15点', description: '没有4张高花，止叫' },
  { rebid: '4C', points: '10-12点', description: '5张C↑，未叫花色有单缺，邀叫' },
  { rebid: '4D/4H/4S', points: '16点以上', description: '5张C↑，斯普林特，强烈满贯兴趣' },
  { rebid: '4NT', points: '18-19点', description: '4张C↑，无4张高花，满贯邀叫' },
])

const oneClubTwoDiamondRebid = ref([
  { rebid: 'Pass', points: '12点以上', description: '不符合其他叫品' },
  { rebid: '2H', points: '15-21点', description: '6张以上C＋5张H，逼叫' },
  { rebid: '2S', points: '15-21点', description: '6张以上C＋5张S，逼叫' },
  { rebid: '2NT', points: '15-21点', description: '问单缺；2张以上D，逼叫' },
  { rebid: '3C', points: '12-16点', description: '6张以上C，通常D单缺，不逼叫' },
  { rebid: '3D', points: '12-15点', description: '3张以上D支持，不逼叫' },
  { rebid: '3H/3S', points: '16-21点', description: '4张以上D支持，H/S单缺，逼叫' },
  { rebid: '3NT', points: '18-19点', description: '3张D有A，止叫' },
])

const oneClubTwoDiamondTwoNTRebid = ref([
  { rebid: '3C', points: '4-5点', description: 'C单缺，逼叫' },
  { rebid: '3D', points: '4-5点', description: '无单缺，不逼叫' },
  { rebid: '3H', points: '4-5点', description: 'H单缺，逼叫' },
  { rebid: '3S', points: '4-5点', description: 'S单缺，逼叫' },
  { rebid: '3NT', points: '6-7点', description: '无单缺，高限，止叫' },
])

const oneClubTwoHeartRebid = ref([
  { rebid: 'Pass', points: '12点以上', description: '不符合其他叫品' },
  { rebid: '2S', points: '16-21点', description: '6张以上C＋5张S，H单缺，逼叫一轮' },
  { rebid: '2NT', points: '15-21点', description: '问单缺；2张以上H，逼叫' },
  { rebid: '3C', points: '12-18点', description: '半坚固的6张以上C，H单缺，不逼叫' },
  { rebid: '3H', points: '12-15点', description: '3张以上H，不逼叫' },
  { rebid: '3NT', points: '18-19点', description: '坚固的6张以上C，未叫花色有止张' },
  { rebid: '4H', points: '15-21点', description: '3~4张H，止叫' },
])

const oneClubTwoHeartTwoNTRebid = ref([
  { rebid: '3C/3D', points: '4-5点', description: 'C/D单缺，逼叫' },
  { rebid: '3H', points: '4-5点', description: '无单缺，不逼叫' },
  { rebid: '3S', points: '4-5点', description: 'S单缺，逼叫' },
  { rebid: '3NT', points: '6-7点', description: '无单缺，高限，止叫' },
  { rebid: '4C', points: '6-7点', description: 'C单缺，逼叫' },
  { rebid: '4D', points: '6-7点', description: 'D单缺，逼叫' },
  { rebid: '4H', points: '6-7点', description: 'S单缺，不逼叫' },
])

const oneClubTwoSpadeRebid = ref([
  { rebid: 'Pass', points: '12点以上', description: '不符合其他叫品' },
  { rebid: '2NT', points: '15-21点', description: '问单缺；2张以上S，逼叫' },
  { rebid: '3C', points: '12-18点', description: '半坚固的6张以上C，S单缺，不逼叫' },
  { rebid: '3H', points: '16-21点', description: '6张以上C＋5张H，S单缺，逼叫一轮' },
  { rebid: '3S', points: '12-15点', description: '3张以上S，不逼叫' },
  { rebid: '3NT', points: '18-19点', description: '坚固的6张以上C，未叫花色有止张' },
  { rebid: '4S', points: '15-21点', description: '3~4张S，止叫' },
])

const oneClubTwoSpadeTwoNTRebid = ref([
  { rebid: '3C/3D', points: '4-5点', description: 'C/D单缺，逼叫' },
  { rebid: '3H', points: '4-5点', description: 'H单缺，逼叫' },
  { rebid: '3S', points: '4-5点', description: '无单缺，不逼叫' },
  { rebid: '3NT', points: '6-7点', description: '无单缺，高限，止叫' },
  { rebid: '4C', points: '6-7点', description: 'C单缺，逼叫' },
  { rebid: '4D', points: '6-7点', description: 'D单缺，逼叫' },
  { rebid: '4H', points: '6-7点', description: 'H单缺，逼叫' },
])

const oneClubTwoNTRebidNew = ref([
  { rebid: 'Pass', points: '12-13点', description: '低限，不接受邀请' },
  { rebid: '3C', points: '12-13点', description: '5~6张以上C，不逼叫' },
  { rebid: '3D', points: '14-21点', description: '5张以上C＋4张D，逼局' },
  { rebid: '3H/3S', points: '15点以上', description: '好的5张以上C，H/S单缺，逼局' },
  { rebid: '3NT', points: '14-19点', description: '进局止叫' },
  { rebid: '4C', points: '12-15点', description: '7张以上C，不逼叫' },
  { rebid: '4D/4M', points: '14-16点', description: '6张C＋5张D/H/S，逼局' },
  { rebid: '5C', points: '14-16点', description: '6张C，止叫' },
])

const oneClubThreeClubRebid = ref([
  { rebid: 'Pass', points: '12-17点', description: '成局无望' },
  { rebid: '3D', points: '18-21点', description: 'D有止张，逼叫' },
  { rebid: '3H', points: '18-21点', description: 'H有止张，D无止张，逼叫' },
  { rebid: '3S', points: '18-21点', description: 'S有止张，D/H无止张，逼叫' },
  { rebid: '3NT', points: '18-21点', description: '未叫花色有止张' },
  { rebid: '4C', points: '16-18点', description: '4张以上C，邀叫' },
])

const oneClubThreeDiamondRebid = ref([
  { rebid: '3H/3S', points: '12-15点', description: 'D有止张，所叫花色H/S有止张；3S表示H没有止张' },
  { rebid: '3NT', points: '12-15点', description: 'D有好止张，未叫高花有止张' },
  { rebid: '4C', points: '16点以上', description: '4张以上C，满贯兴趣' },
  { rebid: '4D/4M', points: '16点以上', description: '所叫花色为扣叫，满贯兴趣' },
  { rebid: '5C', points: '12-15点', description: '4张以上C，止叫' },
])

const oneClubThreeHeartRebid = ref([
  { rebid: '3S', points: '12-15点', description: 'H有止张，S有止张' },
  { rebid: '3NT', points: '12-15点', description: 'H有好止张，未叫花色有止张' },
  { rebid: '4C', points: '16点以上', description: '4张以上C，满贯兴趣' },
  { rebid: '4D', points: '16点以上', description: '扣叫，满贯兴趣' },
  { rebid: '4H', points: '16点以上', description: '扣叫，满贯兴趣' },
  { rebid: '4S', points: '16点以上', description: '扣叫，满贯兴趣' },
  { rebid: '5C', points: '12-15点', description: '4张以上C，止叫' },
])

const oneClubThreeSpadeRebid = ref([
  { rebid: '3NT', points: '12-15点', description: 'S有好止张，未叫花色有止张' },
  { rebid: '4C', points: '16点以上', description: '4张以上C，满贯兴趣' },
  { rebid: '4D', points: '16点以上', description: '扣叫，满贯兴趣' },
  { rebid: '4H', points: '16点以上', description: '扣叫，满贯兴趣' },
  { rebid: '4S', points: '16点以上', description: '扣叫，满贯兴趣' },
  { rebid: '5C', points: '12-15点', description: '4张以上C，止叫' },
])

// 开叫人逆叫相关数据
const oneClubOneHeartTwoDiamondResponses = ref([
  { rebid: '2H', points: '6-7点', description: '6张以上H，弱牌，不逼叫' },
  { rebid: '2S', points: '6点以上', description: '可能是弱牌，逼叫' },
  { rebid: '2NT', points: '8点以上', description: 'S有止张，逼局' },
  { rebid: '3C', points: '8点以上', description: '3张以上C，逼局' },
  { rebid: '3D', points: '8点以上', description: '4张以上D，逼局' },
  { rebid: '3H', points: '8点以上', description: '6张以上H，逼局' },
  { rebid: '3S', points: '9点以上', description: '4张以上D，斯普林特，逼局' },
  { rebid: '3NT', points: '8-11点', description: 'S有两止，止叫' },
])

const oneClubOneHeartTwoDiamondTwoSpadeRebid = ref([
  { rebid: '2NT', points: '16-18点', description: 'S有止张；应叫3C/3D也不逼叫' },
  { rebid: '3C', points: '16-18点', description: '6张以上C＋4张D，不逼叫' },
  { rebid: '3D', points: '16-18点', description: '6张以上C＋5张D，不逼叫' },
  { rebid: '3H', points: '16-18点', description: '3张H，不逼叫' },
  { rebid: '3S', points: '19-21点', description: 'S无止张，无3张H，逼局' },
  { rebid: '3NT', points: '19-21点', description: 'S有止张，止叫' },
  { rebid: '4C', points: '19-21点', description: '7张以上C＋4张D，逼局' },
  { rebid: '4D', points: '19-21点', description: '6张以上C＋5张D，逼局' },
  { rebid: '4H', points: '19-21点', description: '3张H，止叫' },
])

const oneClubOneSpadeTwoDiamondResponses = ref([
  { rebid: '2H', points: '6点以上', description: '可能是弱牌，逼叫' },
  { rebid: '2S', points: '6-7点', description: '6张以上S，弱牌，不逼叫' },
  { rebid: '2NT', points: '8点以上', description: 'H有止张，逼局' },
  { rebid: '3C', points: '8点以上', description: '3张以上C，逼局' },
  { rebid: '3D', points: '8点以上', description: '4张以上D，逼局' },
  { rebid: '3H', points: '8点以上', description: '5张S＋5张H，逼局' },
  { rebid: '3S', points: '8点以上', description: '6张以上S，逼局' },
  { rebid: '3NT', points: '8-11点', description: 'H有两止，止叫' },
])

const oneClubOneSpadeTwoDiamondTwoHeartRebid = ref([
  { rebid: '2S', points: '16-18点', description: '3张S，不逼叫' },
  { rebid: '2NT', points: '16-18点', description: 'H有止张；应叫3C/3D也不逼叫' },
  { rebid: '3C', points: '16-18点', description: '6张以上C＋4张D，不逼叫' },
  { rebid: '3D', points: '16-18点', description: '6张以上C＋5张D，不逼叫' },
  { rebid: '3H', points: '16-18点', description: 'H无止张，逼叫一轮' },
  { rebid: '3S', points: '19-21点', description: '3张S，逼局' },
  { rebid: '3NT', points: '19-21点', description: 'H有止张，止叫' },
  { rebid: '4C', points: '19-21点', description: '7张以上C＋4张D，逼局' },
  { rebid: '4D', points: '19-21点', description: '6张以上C＋5张D，逼局' },
])

const oneClubOneSpadeTwoHeartResponses = ref([
  { rebid: '2S', points: '6-7点', description: '6张以上S，弱牌，不逼叫' },
  { rebid: '2NT', points: '6点以上', description: '不保证D止张，可能弱牌，逼叫' },
  { rebid: '3C', points: '8点以上', description: '3张以上C，逼局' },
  { rebid: '3D', points: '8点以上', description: 'D没有止张，逼局' },
  { rebid: '3H', points: '10点以上', description: '4张以上H，逼局' },
  { rebid: '3S', points: '8点以上', description: '6张以上S，逼局' },
  { rebid: '3NT', points: '8-11点', description: 'D有止张，止叫' },
  { rebid: '4C', points: '11点以上', description: '4张以上C，D单缺，逼局' },
  { rebid: '4D', points: '11点以上', description: '4张以上H，D单缺，逼局' },
  { rebid: '4H', points: '7-9点', description: '4张以上H，止叫' },
])

const oneClubOneSpadeTwoHeartTwoNTRebid = ref([
  { rebid: '3C', points: '16-18点', description: '6张以上C＋4张H，不逼叫' },
  { rebid: '3D', points: '19-21点', description: 'D没有止张，无3张S，逼局' },
  { rebid: '3H', points: '15-17点', description: '6张以上C＋5张H，不逼叫' },
  { rebid: '3S', points: '19-21点', description: '3张S，逼局' },
  { rebid: '3NT', points: '19-21点', description: 'D有止张，止叫' },
])

const oneClubOneNTTwoHeartResponses = ref([
  { rebid: '2S', points: '6-10点', description: 'S有止张，D无止张，逼叫' },
  { rebid: '2NT', points: '6-7点', description: '未叫花色D/S均有止张，不逼叫' },
  { rebid: '3C', points: '6-7点', description: '3张以上C，不逼叫' },
  { rebid: '3D', points: '8-10点', description: 'D有止张，S无止张，逼叫' },
  { rebid: '3H', points: '8-10点', description: '3张H，D/S无止张，不逼叫' },
  { rebid: '3NT', points: '8-10点', description: '未叫花色D/S均有止张，止叫' },
  { rebid: '4C', points: '8-10点', description: '3张以上C，邀叫' },
])

const oneClubOneNTTwoSpadeResponses = ref([
  { rebid: '2NT', points: '6-7点', description: '未叫花色D/H均有止张，不逼叫' },
  { rebid: '3C', points: '6-7点', description: '3张以上C，不逼叫' },
  { rebid: '3D', points: '8-10点', description: 'D有止张，H无止张，逼叫' },
  { rebid: '3H', points: '8-10点', description: 'H有止张，D无止张，逼叫' },
  { rebid: '3S', points: '8-10点', description: '3张S，D/H无止张，不逼叫' },
  { rebid: '3NT', points: '8-10点', description: '未叫花色D/H均有止张，止叫' },
  { rebid: '4C', points: '8-10点', description: '3张以上C，邀叫' },
])

// 开叫人跳叫相关数据
const oneClubOneDiamondTwoHeartJumpResponses = ref([
  { rebid: '2S', points: '6-7点', description: '示弱，等待叫' },
  { rebid: '2NT', points: '8点以上', description: 'S有止张' },
  { rebid: '3C', points: '8点以上', description: '3张以上C' },
  { rebid: '3D', points: '8点以上', description: '6张以上D，不支持同伴花色' },
  { rebid: '3H', points: '12点以上', description: '5张D↑＋4张H，强满贯兴趣' },
  { rebid: '3S', points: '10点以上', description: '3张以上C，S单缺' },
  { rebid: '4C', points: '10点以上', description: '4张以上C' },
  { rebid: '4D', points: '10点以上', description: '半坚固的6张以上D' },
])

const oneClubOneDiamondTwoSpadeJumpResponses = ref([
  { rebid: '2NT', points: '6-7点', description: '示弱；或8点以上，H有止张' },
  { rebid: '3C', points: '8点以上', description: '3张以上C' },
  { rebid: '3D', points: '8点以上', description: '6张以上D，不支持同伴花色' },
  { rebid: '3H', points: '8点以上', description: 'H无止张，等待叫' },
  { rebid: '3S', points: '12点以上', description: '5张D↑＋4张S，强烈满贯兴趣' },
  { rebid: '4C', points: '10点以上', description: '4张以上C' },
  { rebid: '4D', points: '10点以上', description: '半坚固的6张以上D' },
])

const oneClubOneHeartTwoSpadeJumpResponses = ref([
  { rebid: '2NT', points: '6-7点', description: '示弱；或≥8点，D有止张' },
  { rebid: '3C', points: '8点以上', description: '3张以上C' },
  { rebid: '3D', points: '8点以上', description: 'D无止张，等待叫' },
  { rebid: '3H', points: '8点以上', description: '6张以上H，不支持同伴花色' },
  { rebid: '3S', points: '6点以上', description: '4张S' },
  { rebid: '4C', points: '10点以上', description: '4张以上C' },
  { rebid: '4D', points: '10点以上', description: '4张以上C，D单缺' },
])

const oneClubOneDiamondTwoNTJumpResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '最低限，4~5张D' },
  { rebid: '3C', points: '10点以上', description: '4张以上C，满贯兴趣' },
  { rebid: '3D', points: '10点以上', description: '5张以上D，满贯兴趣' },
  { rebid: '3H', points: '12点以上', description: '5张D↑＋4张H，强满贯兴趣' },
  { rebid: '3S', points: '12点以上', description: '5张D↑＋4张S，强满贯兴趣' },
  { rebid: '3NT', points: '6-11点', description: '止叫' },
  { rebid: '4NT', points: '12-14点', description: '满贯邀叫' },
])

const oneClubOneHeartTwoNTJumpResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '最低限，3-4-3-3牌型' },
  { rebid: '3C', points: '6点以上', description: '3C重询；5张H或4张C↑，逼局' },
  { rebid: '3D', points: '10点以上', description: '5张以上D＋4张H，满贯兴趣' },
  { rebid: '3H', points: '6点以上', description: '6张以上H，逼局' },
  { rebid: '3S', points: '6点以上', description: '4张S＋4张H，逼局' },
  { rebid: '3NT', points: '6-11点', description: '止叫' },
  { rebid: '4C', points: '11点以上', description: '5张以上C＋4张H，满贯兴趣' },
  { rebid: '4NT', points: '12-14点', description: '满贯邀叫' },
])

const oneClubOneHeartTwoNTThreeClubRebid = ref([
  { rebid: '3D', points: '18-19点', description: '5张C，无3张H，无4张S' },
  { rebid: '3H', points: '18-19点', description: '3张H' },
  { rebid: '3S', points: '18-19点', description: '4张S，无3张H' },
])

const oneClubOneSpadeTwoNTJumpResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '最低限，4-3-3-3牌型' },
  { rebid: '3C', points: '6点以上', description: '3C重询；5张S或4张C↑，逼局' },
  { rebid: '3D', points: '10点以上', description: '5张以上D＋4张S，满贯兴趣' },
  { rebid: '3H', points: '6点以上', description: '5张S＋5张H，逼局' },
  { rebid: '3S', points: '6点以上', description: '6张以上S，逼局' },
  { rebid: '3NT', points: '6-11点', description: '止叫' },
  { rebid: '4C', points: '11点以上', description: '5张以上C＋4张S，满贯兴趣' },
  { rebid: '4NT', points: '12-14点', description: '满贯邀叫' },
])

const oneClubOneSpadeTwoNTThreeClubRebid = ref([
  { rebid: '3D', points: '18-19点', description: '5张C，无3张S，无4张H' },
  { rebid: '3H', points: '18-19点', description: '4张H，可能有3张S' },
  { rebid: '3S', points: '18-19点', description: '3张S，无4张H' },
])

// 跳叫原花色3C相关数据
const oneClubOneDiamondThreeClubResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '没有成局可能' },
  { rebid: '3D', points: '8点以上', description: '6张以上D，逼叫' },
  { rebid: '3H', points: '8点以上', description: 'H有止张，S无止张，逼局' },
  { rebid: '3S', points: '8点以上', description: 'S有止张，H无止张，逼局' },
  { rebid: '3NT', points: '6-11点', description: '自然叫，要打3NT' },
  { rebid: '4C', points: '12点以上', description: '3张以上C，满贯兴趣' },
])

const oneClubOneHeartThreeClubResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '没有成局可能' },
  { rebid: '3D', points: '8点以上', description: '3张以上D＋4~5张H，逼叫' },
  { rebid: '3H', points: '8点以上', description: '6张以上H，逼叫' },
  { rebid: '3S', points: '8点以上', description: '3张以上S＋5张H，逼叫' },
  { rebid: '3NT', points: '6-11点', description: '自然叫，要打3NT' },
  { rebid: '4C', points: '12点以上', description: '3张以上C，满贯兴趣' },
  { rebid: '4D/4S', points: '12点以上', description: '3张以上C，D/S单缺，逼局' },
  { rebid: '4H', points: '6-7点', description: '7张以上H，止叫' },
  { rebid: '5C', points: '8-11点', description: '3张以上C，止叫' },
])

const oneClubOneSpadeThreeClubResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '没有成局可能' },
  { rebid: '3D', points: '8点以上', description: '3张以上D＋4~5张S，逼叫' },
  { rebid: '3H', points: '8点以上', description: '3张以上H＋5张S，逼叫' },
  { rebid: '3S', points: '8点以上', description: '6张以上S，逼叫' },
  { rebid: '3NT', points: '6-11点', description: '自然叫，要打3NT' },
  { rebid: '4C', points: '12点以上', description: '3张以上C，满贯兴趣' },
  { rebid: '4D/4H', points: '12点以上', description: '3张以上C，D/H单缺，逼局' },
  { rebid: '4S', points: '6-7点', description: '7张以上S，止叫' },
  { rebid: '5C', points: '8-11点', description: '3张以上C，止叫' },
])

const oneClubOneNTThreeClubResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '没有成局可能' },
  { rebid: '3D', points: '8点以上', description: 'D有止张，逼叫' },
  { rebid: '3H', points: '8点以上', description: 'H有止张，D无止张，逼叫' },
  { rebid: '3S', points: '8点以上', description: 'S有止张，D/H无止张，逼叫' },
  { rebid: '3NT', points: '6-11点', description: '自然叫，要打3NT' },
  { rebid: '4C', points: '8-9点', description: '3张以上C，邀叫' },
  { rebid: '5C', points: '10-11点', description: '4张以上C，止叫' },
])

// 跳叫支持相关数据
const oneClubOneDiamondThreeDiamondResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '没有成局可能' },
  { rebid: '3H', points: '8点以上', description: 'H有止张，S无止张，逼叫' },
  { rebid: '3S', points: '8点以上', description: 'S有止张，H无止张，逼叫' },
  { rebid: '3NT', points: '6-11点', description: '双高花有止张，止叫' },
  { rebid: '4D', points: '8-9点', description: '4张以上D，邀叫' },
  { rebid: '5D', points: '10-11点', description: '4张以上D，止叫' },
])

const oneClubOneHeartThreeHeartResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '没有成局可能' },
  { rebid: '3S', points: '12点以上', description: '扣叫控制，有满贯兴趣' },
  { rebid: '3NT', points: '8-14点', description: '均型，未叫花色有止张' },
  { rebid: '4C/4D', points: '12点以上', description: '扣叫控制，有满贯兴趣' },
  { rebid: '4H', points: '8-11点', description: '4张以上H，止叫' },
])

const oneClubOneSpadeThreeSpadeResponses = ref([
  { rebid: 'Pass', points: '6-7点', description: '没有成局可能' },
  { rebid: '3NT', points: '8-14点', description: '均型，未叫花色有止张' },
  { rebid: '4C', points: '12点以上', description: '扣叫控制，有满贯兴趣' },
  { rebid: '4D', points: '12点以上', description: '扣叫控制，有满贯兴趣' },
  { rebid: '4H', points: '12点以上', description: '扣叫控制，有满贯兴趣' },
  { rebid: '4S', points: '8-11点', description: '4张以上S，止叫' },
])

// 敌方干扰后的叫牌数据
const oneClubDoubleResponses = ref([
  { bid: 'Pass', points: '0-10点', description: '不符合其他叫品' },
  { bid: '××', points: '11点以上', description: '通常是可以惩罚对方的均型牌' },
  { bid: '1D/1M', points: '6点以上', description: '4张以上D/H/S套，保持原意；或强牌不适合惩罚敌方，逼叫' },
  { bid: '1NT', points: '6-10点', description: '没有4张高花，不逼叫' },
  { bid: '2C', points: '6-10点', description: '4张以上C，没有4张高花，不是低花反加叫，不逼叫' },
  { bid: '2D/2M', points: '4-7点', description: '6张以上D/H/S，阻击叫' },
  { bid: '2NT', points: '11点以上', description: '5张以上C，逼叫。乔丹约定叫' },
  { bid: '3C', points: '4-8点', description: '5张以上C；6-8点时通常有单缺（否则叫1NT），阻击叫' },
  { bid: '3D', points: '4-8点', description: '7张以上D，阻击叫' },
  { bid: '3H/3S', points: '4-8点', description: '7张以上H/S，阻击叫' },
  { bid: '3NT', points: '12-15点', description: '没有4张高花套，止叫' },
])

const oneClubOneDiamondOvercallResponses = ref([
  { bid: 'Pass', points: '0-5点', description: '不够应叫点力；或8点以上，有D长套的埋伏性不叫' },
  { bid: '×', points: '6点以上', description: '4张以上H＋4张以上S' },
  { bid: '1H/1S', points: '6点以上', description: '4张以上H/S，逼叫' },
  { bid: '1NT', points: '6-10点', description: 'D有止张，没有4张高花，不逼叫' },
  { bid: '2C', points: '6-10点', description: '4张以上C，没有4张高花，简单加叫，不逼叫' },
  { bid: '2D', points: '10点以上', description: '扣叫，4张以上C，限制性加叫，逼叫' },
  { bid: '2H/2S', points: '4-6点', description: '6张以上H/S；阻击叫' },
  { bid: '2NT', points: '11-12点', description: 'D有止张，没有4张高花，邀叫' },
  { bid: '3C', points: '4-8点', description: '5张以上C，阻击叫' },
  { bid: '3D/3M', points: '12点以上', description: '5张以上C，D/H/S单缺，斯普林特，逼局' },
  { bid: '3NT', points: '12-15点', description: 'D有止张，没有4张高花套，止叫' },
])

const oneClubOneHeartOvercallResponses = ref([
  { bid: 'Pass', points: '0-5点', description: '不够应叫点力；或8点以上，有H长套的埋伏性不叫' },
  { bid: '×', points: '6点以上', description: '4张S' },
  { bid: '1S', points: '6点以上', description: '5张以上S，逼叫' },
  { bid: '1NT', points: '6-10点', description: 'H有止张，没有4张S，不逼叫' },
  { bid: '2C', points: '6-10点', description: '4张以上C，没有4张S，简单加叫，不逼叫' },
  { bid: '2D', points: '10点以上', description: '5张以上D，逼叫' },
  { bid: '2H', points: '10点以上', description: '扣叫，4张以上C，限制性加叫，逼叫' },
  { bid: '2S', points: '4-6点', description: '6张以上S；阻击叫' },
  { bid: '2NT', points: '11-12点', description: 'H有止张，没有4张S，邀叫' },
  { bid: '3C', points: '4-8点', description: '5张以上C，阻击叫' },
  { bid: '3D', points: '6-8点', description: '6张以上D，阻击叫' },
  { bid: '3H/3S', points: '12点以上', description: '5张以上C，H/S单缺，斯普林特，逼局' },
  { bid: '3NT', points: '12-15点', description: 'H有止张，没有4张S，止叫' },
])

const oneClubOneSpadeOvercallResponses = ref([
  { bid: 'Pass', points: '0-5点', description: '不够应叫点力；或8点以上，有S长套的埋伏性不叫' },
  { bid: '×', points: '6点以上', description: '4张H' },
  { bid: '1NT', points: '6-10点', description: 'S有止张，没有4张H，不逼叫' },
  { bid: '2C', points: '6-10点', description: '4张以上C，没有4张H，简单加叫，不逼叫' },
  { bid: '2D', points: '10点以上', description: '5张以上D，逼叫' },
  { bid: '2H', points: '10点以上', description: '5张以上H，逼叫' },
  { bid: '2S', points: '10点以上', description: '扣叫，4张以上C，限制性加叫，逼叫' },
  { bid: '2NT', points: '11-12点', description: 'S有止张，没有4张H，邀叫' },
  { bid: '3C', points: '4-8点', description: '5张以上C，阻击叫' },
  { bid: '3D/3H', points: '6-8点', description: '6张以上D/H，阻击叫' },
  { bid: '3S', points: '12点以上', description: '5张以上C，S单缺，斯普林特，逼局' },
  { bid: '3NT', points: '12-15点', description: 'S有止张，没有4张H，止叫' },
])

const oneClubSpecialConvention = ref([
  { bid: '2D→3D', points: '9-11点', description: '5张H＋5张S，逼叫' },
  { bid: '3D→4D', points: '7点以上', description: '5张以上H＋5张以上S，逼局' },
])

const oneClubOneNTOvercallResponses = ref([
  { bid: 'Pass', points: '0-8点', description: '不符合其他叫品' },
  { bid: '×', points: '9点以上', description: '均型或非均型牌，惩罚性。（如果同伴低限，也可改叫）' },
  { bid: '2C', points: '8-11点', description: '5－4以上双高花；兰迪约定叫' },
  { bid: '2D', points: '6-11点', description: '5~6张以上D，不逼叫' },
  { bid: '2H/2S', points: '6-11点', description: '5~6张以上H/S，不逼叫' },
])

const oneClubMichaelsCueResponses = ref([
  { bid: 'Pass', points: '0-8点', description: '不符合其他叫品' },
  { bid: '×', points: '9点以上', description: '至少可以惩罚1个高花' },
  { bid: '2D', points: '6-9点', description: '5张以上D，不逼叫' },
  { bid: '2H', points: '10点以上', description: '4张以上C，C的限制性加叫，逼叫' },
  { bid: '2S', points: '10点以上', description: '5张以上D，逼叫' },
  { bid: '2NT', points: '11-12点', description: '高花均有止张，邀叫' },
  { bid: '3C', points: '6-9点', description: '5张以上C，不逼叫' },
  { bid: '3H/3S', points: '12点以上', description: '5张以上C，H/S单缺，斯普林特，逼局' },
  { bid: '3NT', points: '12-15点', description: '高花均有止张，止叫' },
])

const oneClubUnusualTwoNTResponses = ref([
  { bid: 'Pass', points: '0-8点', description: '不符合其他叫品' },
  { bid: '×', points: '9点以上', description: '至少可以惩罚D/H中的一套' },
  { bid: '3C', points: '6-9点', description: '5张以上C，不逼叫' },
  { bid: '3D', points: '11点以上', description: '5张以上C，逼叫' },
  { bid: '3H', points: '11点以上', description: '5张以上S，逼叫' },
  { bid: '3S', points: '6-10点', description: '6张以上S，不逼叫' },
  { bid: '3NT', points: '12-15点', description: 'D和H均有止张，止叫' },
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