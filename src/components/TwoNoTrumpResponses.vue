<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第七章 2NT开叫及以后的应叫</h2>

    <!-- 2NT开叫说明 -->
    <div class="bridge-card mb-8">
      <h3 class="bridge-subtitle">2NT开叫</h3>
      <div class="prose max-w-none">
        <p>20—21点，均型牌，允许有5张高花或5张低花套；允许有单张A或K。</p>
      </div>
    </div>

    <!-- 一、2NT开叫的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">一、2NT开叫的应叫</h3>
      <h4 class="bridge-subtitle">2NT—? 应叫表</h4>
      <el-table :data="twoNTResponses" style="width: 100%" border>
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

    <!-- 二、2NT开叫后的傀儡斯台曼约定叫、雅各比转移叫、低花斯台曼约定叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">二、2NT开叫后的傀儡斯台曼约定叫、雅各比转移叫、低花斯台曼约定叫</h3>
      <h4 class="bridge-subtitle">2NT—3♣️（3♣️=傀儡斯台曼）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeClubResponses" style="width: 100%" border>
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

    <!-- 2NT-3C-3D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♣️—3♦️（3♦️=20—21点，至少有1个4张高花；没有5张高花）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeClubThreeDiamondRebid" style="width: 100%" border>
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

    <!-- 2NT-3C-3D-3H后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♣️—3♦️—3♥️（3♥️=5-9点，4张♠️；或10-12点，4-4双高花）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeClubThreeDiamondThreeHeartRebid" style="width: 100%" border>
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

    <!-- 2NT-3C-3D-3H-3NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♣️—3♦️—3♥️—3NT（3NT=20—21点，4张♥️，没有4张♠️）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeClubThreeDiamondThreeHeartThreeNTRebid" style="width: 100%" border>
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

    <!-- 2NT-3C-3D-3S后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♣️—3♦️—3♠️（3♠️=5点以上，4张♥️；无4张♠️）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeClubThreeDiamondThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 2NT-3C-3D-3S-3NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♣️—3♦️—3♠️—3NT（3NT=20—21点，4张♠️，没有4张♥️）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeClubThreeDiamondThreeSpadeThreeNTRebid" style="width: 100%" border>
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

    <!-- 2NT-3C-3H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♣️—3♥️（3♥️=20—21点，5张♥️）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeClubThreeHeartRebid" style="width: 100%" border>
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

    <!-- 2NT-3C-3S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♣️—3♠️（3♠️=20—21点，5张♠️）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeClubThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 2NT-3C-3NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♣️—3NT（3NT=20—21点，无4张高花）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeClubThreeNTRebid" style="width: 100%" border>
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

    <!-- 雅各比转移叫相关 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♦️（3♦️=雅各比转移叫）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeDiamondResponses" style="width: 100%" border>
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

    <!-- 2NT-3D-3H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♦️—3♥️（3♥️=20—21点，接受转移）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeDiamondThreeHeartRebid" style="width: 100%" border>
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

    <!-- 2NT-3D-3H-3S后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♦️—3♥️—3♠️（3♠️=5点以上，5张以上♥️＋4张以上♠️）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeDiamondThreeHeartThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 2NT-3D-3H-3S-3NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♦️—3♥️—3♠️—3NT（3NT=20—21点，无4张♠️，也无3张♥️）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeDiamondThreeHeartThreeSpadeThreeNTRebid" style="width: 100%" border>
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

    <!-- 2NT-3D-3H-4C后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♦️—3♥️—4♣️（4♣️=8点以上，5张♥️＋4张以上♣️）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeDiamondThreeHeartFourClubRebid" style="width: 100%" border>
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

    <!-- 2NT-3D-3H-4D后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♦️—3♥️—4♦️（4♦️=8点以上，5张♥️＋4张以上♦️）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeDiamondThreeHeartFourDiamondRebid" style="width: 100%" border>
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

    <!-- 2NT-3H后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♥️（3♥️=雅各比转移叫）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeHeartResponses" style="width: 100%" border>
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

    <!-- 2NT-3H-3S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♥️—3♠️（3♠️=20—21点，接受转移）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeHeartThreeSpadeRebid" style="width: 100%" border>
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

    <!-- 2NT-3H-3S-4C后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♥️—3♠️—4♣️（4♣️=8点以上，5张♠️＋4张以上♣️）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeHeartThreeSpadeFourClubRebid" style="width: 100%" border>
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

    <!-- 2NT-3H-3S-4D后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♥️—3♠️—4♦️（4♦️=8点以上，5张♠️＋4张以上♦️）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeHeartThreeSpadeFourDiamondRebid" style="width: 100%" border>
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

    <!-- 2NT-3S后的开叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♠️（3♠️=低花斯台曼，至少5－4低花套）后开叫方的再叫</h4>
      <el-table :data="twoNTThreeSpadeResponses" style="width: 100%" border>
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

    <!-- 2NT-3S-3NT后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♠️—3NT（3NT=20—21点，没有4张低花）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeSpadeThreeNTRebid" style="width: 100%" border>
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

    <!-- 2NT-3S-4C后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♠️—4♣️（4♣️=20—21点，4张以上♣️）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeSpadeFourClubRebid" style="width: 100%" border>
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

    <!-- 2NT-3S-4D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—3♠️—4♦️（4♦️=20—21点，4张以上♦️）后应叫方的再叫</h4>
      <el-table :data="twoNTThreeSpadeFourDiamondRebid" style="width: 100%" border>
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

    <!-- 三、2NT在敌方干扰后的应叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">三、2NT在敌方干扰后的应叫</h3>
      
      <!-- 2NT-(3C)-? -->
      <h4 class="bridge-subtitle">2NT—(3♣️)—? 敌方3♣️干扰后的应叫</h4>
      <el-table :data="twoNTThreeClubInterferenceResponses" style="width: 100%" border>
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

    <!-- 2NT-(3D)-? -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—(3♦️)—? 敌方3♦️干扰后的应叫</h4>
      <el-table :data="twoNTThreeDiamondInterferenceResponses" style="width: 100%" border>
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

    <!-- 2NT-(3H)-? -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—(3♥️)—? 敌方3♥️干扰后的应叫</h4>
      <el-table :data="twoNTThreeHeartInterferenceResponses" style="width: 100%" border>
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

    <!-- 2NT-(3S)-? -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—(3♠️)—? 敌方3♠️干扰后的应叫</h4>
      <el-table :data="twoNTThreeSpadeInterferenceResponses" style="width: 100%" border>
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

    <!-- 2NT-(3C)-X-(Pass)-? -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—(3♣️)—×—(Pass)—? 技术性加倍后开叫方的再叫</h4>
      <el-table :data="twoNTThreeClubDoubleRebid" style="width: 100%" border>
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

    <!-- 2NT-(3D)-X-(Pass)-? -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">2NT—(3♦️)—×—(Pass)—? 技术性加倍后开叫方的再叫</h4>
      <el-table :data="twoNTThreeDiamondDoubleRebid" style="width: 100%" border>
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
    .replace(/♣/g, '♣️')
    .replace(/♦/g, '♦️')
    .replace(/♥/g, '♥️')
    .replace(/♠/g, '♠️')
    .replace(/C/g, '♣️')
    .replace(/D/g, '♦️')
    .replace(/H/g, '♥️')
    .replace(/S/g, '♠️')
    .replace(/NT/g, 'NT')
}

// 根据点力范围获取标签类型
const getPointTagType = (points: string) => {
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

// 2NT开叫的应叫
const twoNTResponses = ref([
  { bid: 'Pass', points: '0—4', description: '0—4点，均型牌' },
  { bid: '3C', points: '5+', description: '5点以上，傀儡斯台曼；问开叫人高花套' },  
  { bid: '3D/3H', points: '3+', description: '3点以上，5张以上H/S；雅各比转移叫' },
  { bid: '3S', points: '5+', description: '5点以上，低花斯台曼；至少5－4低花套' },
  { bid: '3NT', points: '5+', description: '5点以上，没有4张高花，或有3张高花的非均型牌，止叫' },
  { bid: '4C', points: '11+', description: '11点以上，格伯A问叫；有独立的6张以上套。（答叫：0-4A；1A；2A；3A）' },
  { bid: '4D/4H', points: '4—8', description: '4—8点，6张以上H/S；德克萨斯转移叫。（开叫人叫4H/4S后；止叫）' },
  { bid: '', points: '12+', description: '12点以上，6张以上H/S；德克萨斯转移叫。（开叫人叫4H/4S后；4NT关键张问叫）' },
  { bid: '4S', points: '2—7', description: '6－5以上低花套' },
  { bid: '4NT', points: '11—12', description: '11—12点，没有4张高花或5张低花；小满贯邀叫' },
  { bid: '5C/5D', points: '3—6', description: '7张C/D套' },  
  { bid: '5NT', points: '13—14', description: '13—14点，对套，从最低的4张套叫起，逼叫6NT' },
  { bid: '6NT', points: '12—15', description: '12—15点，适合打6NT的牌型，止叫' },
  { bid: '7NT', points: '16+', description: '16点以上，适合打7NT的牌型，止叫' }
])

// 2NT-3C后开叫方的再叫
const twoNTThreeClubResponses = ref([
  { rebid: '3D', points: '20—21', description: '20—21点，至少有1个4张高花；没有5张高花' },
  { rebid: '3H', points: '20—21', description: '20—21点，5张H' },
  { rebid: '3S', points: '20—21', description: '20—21点，5张S' },
  { rebid: '3NT', points: '20—21', description: '20—21点，没有4张或5张高花，可能有5张低花' }
])

// 2NT-3C-3D后应叫方的再叫
const twoNTThreeClubThreeDiamondRebid = ref([
  { rebid: 'Pass', points: '0—3', description: '0—3点，5张以上D' },
  { rebid: '3H', points: '5—9', description: '5—9点，4张S，没有4张H，逼叫' },
  { rebid: '3H', points: '10—12', description: '10—12点，4－4双高花，逼叫，满贯兴趣' },
  { rebid: '3S', points: '5+', description: '5点以上，4张H，没有4张S，逼叫' },
  { rebid: '3NT', points: '5—10', description: '5—10点，进局止叫' },
  { rebid: '4C', points: '8+', description: '8点以上，4－4以上双低花，逼叫' },
  { rebid: '4D', points: '5—9', description: '5—9点，4－4以上双高花，逼叫' },
  { rebid: '4H', points: '13+', description: '13点以上，4－4以上双高花；同伴叫4H/4S后4NT关键张问叫' },
  { rebid: '4S', points: '8+', description: '8点以上，6张以上C；满贯兴趣' },
  { rebid: '4NT', points: '8+', description: '8点以上，6张以上D；满贯兴趣' },
  { rebid: '5NT', points: '11—12', description: '11—12点，没有4张高花，小满贯邀叫' },
  { rebid: '6NT', points: '13—14', description: '13—14点，对套，从最低的4张套叫起，逼叫6NT' }
])

// 2NT-3C-3D-3H后开叫方的再叫
const twoNTThreeClubThreeDiamondThreeHeartRebid = ref([
  { rebid: '3S', points: '20—21', description: '20—21点，4张S，高限，好控制' },
  { rebid: '3NT', points: '20—21', description: '20—21点，4张H，没有4张S' },
  { rebid: '4S', points: '20—21', description: '20—21点，4张S，低限' }
])

// 2NT-3C-3D-3H-3NT后应叫方的再叫
const twoNTThreeClubThreeDiamondThreeHeartThreeNTRebid = ref([
  { rebid: 'Pass', points: '5+', description: '5点以上，不符合下面叫品' },
  { rebid: '4C/4D', points: '8+', description: '8点以上，4张S＋5张C/D↑，满贯兴趣' },
  { rebid: '4H', points: '10—12', description: '10—12点，4张H＋4~5张S，满贯兴趣' },
  { rebid: '4NT', points: '11—12', description: '11—12点，4张S，满贯邀叫' }
])

// 2NT-3C-3D-3S后开叫方的再叫
const twoNTThreeClubThreeDiamondThreeSpadeRebid = ref([
  { rebid: '3NT', points: '20—21', description: '20—21点，4张S，没有4张H' },
  { rebid: '4C/4D', points: '20—21', description: '20—21点，4张H，高限，扣叫' },
  { rebid: '4H', points: '20—21', description: '20—21点，4张H，低限' }
])

// 2NT-3C-3D-3S-3NT后应叫方的再叫
const twoNTThreeClubThreeDiamondThreeSpadeThreeNTRebid = ref([
  { rebid: 'Pass', points: '5+', description: '5点以上，不符合下面的叫品' },
  { rebid: '4C/4D', points: '8+', description: '8点以上，4张H＋5张C/D↑，满贯兴趣' },
  { rebid: '4NT', points: '11—12', description: '11—12点，4张H，满贯邀叫' }
])

// 2NT-3C-3H后应叫方的再叫
const twoNTThreeClubThreeHeartRebid = ref([
  { rebid: 'Pass', points: '0—3', description: '0—3点，C单缺的三套牌；通常有5～6张D，3张以上H' },
  { rebid: '3S', points: '10+', description: '10点以上，3张以上H，满贯兴趣' },
  { rebid: '3NT', points: '5—10', description: '5—10点，进局止叫' },
  { rebid: '4C', points: '8+', description: '8点以上，好的5张C↑，满贯兴趣' },
  { rebid: '4D', points: '8+', description: '8点以上，好的5张D↑，满贯兴趣' },
  { rebid: '4H', points: '5—9', description: '5—9点，3张以上H，止叫' },
  { rebid: '4NT', points: '11—12', description: '11—12点，2张以下H，满贯邀叫' }
])

// 2NT-3C-3S后应叫方的再叫
const twoNTThreeClubThreeSpadeRebid = ref([
  { rebid: 'Pass', points: '0—3', description: '0—3点，C单缺的三套牌；通常有5～6张D，3张以上S' },
  { rebid: '3NT', points: '5—10', description: '5—10点，进局止叫' },
  { rebid: '4C', points: '8+', description: '8点以上，好的5张以上C，满贯兴趣' },
  { rebid: '4D', points: '8+', description: '8点以上，好的5张以上D，满贯兴趣' },
  { rebid: '4H', points: '10+', description: '10点以上，3张以上S，满贯兴趣' },
  { rebid: '4S', points: '5—9', description: '5—9点，3张以上S，止叫' },
  { rebid: '4NT', points: '11—12', description: '11—12点，2张以下S，满贯邀叫' }
])

// 2NT-3C-3NT后应叫方的再叫
const twoNTThreeClubThreeNTRebid = ref([
  { rebid: 'Pass', points: '5-', description: '5点以下，不符合其他叫品' },
  { rebid: '4C', points: '8+', description: '8点以上，好的5张C↑，满贯兴趣' },
  { rebid: '4D', points: '8+', description: '8点以上，好的5张D↑，满贯兴趣' },
  { rebid: '4H', points: '4—8', description: '4—8点，4张H＋6张S；无贯兴趣' },
  { rebid: '4H', points: '12+', description: '12点以上，4张H＋6张S；后问关键张' },
  { rebid: '4S', points: '9—11', description: '9—11点，4张H＋6张S，满贯兴趣' },
  { rebid: '4NT', points: '11—12', description: '11—12点，满贯邀叫' }
])

// 2NT-3D后开叫方的再叫
const twoNTThreeDiamondResponses = ref([
  { rebid: '3H', points: '20—21', description: '20—21点，接受转移' },
  { rebid: '3S', points: '20—21', description: '20—21点，3张以上H，高限扣叫A' },
  { rebid: '4C', points: '20—21', description: '20—21点，3张以上H，高限扣叫A' },
  { rebid: '4D', points: '20—21', description: '20—21点，3张以上H，高限扣叫A' },
  { rebid: '4H', points: '20—21', description: '20—21点，4张H，高限超转移' }
])

// 2NT-3D-3H后应叫方的再叫
const twoNTThreeDiamondThreeHeartRebid = ref([
  { rebid: 'Pass', points: '0—4', description: '0—4点，5张以上H' },
  { rebid: '3S', points: '5+', description: '5点以上，5张H↑＋4张S↑；逼局' },
  { rebid: '3NT', points: '5—10', description: '5—10点，5张H，示选' },
  { rebid: '4C', points: '8+', description: '8点以上，5张H＋4张C↑，逼局' },
  { rebid: '4D', points: '8+', description: '8点以上，5张H＋4张D↑，逼局' },
  { rebid: '4H', points: '9—11', description: '9—11点，6张以上H；满贯兴趣' },
  { rebid: '4NT', points: '10—12', description: '10—12点，5张H，均型，满贯邀叫' }
])

// 2NT-3D-3H-3S后开叫方的再叫
const twoNTThreeDiamondThreeHeartThreeSpadeRebid = ref([
  { rebid: '3NT', points: '20—21', description: '20—21点，无4张S，也无3张H' },
  { rebid: '4C', points: '20—21', description: '20—21点，3张以上H，8控以上，满贯兴趣' },
  { rebid: '4D', points: '20—21', description: '20—21点，4张以上S，8控以上，满贯兴趣' },
  { rebid: '4H', points: '20—21', description: '20—21点，3张以上H，低限止叫' },
  { rebid: '4S', points: '20—21', description: '20—21点，4张以上S，低限止叫' }
])

// 2NT-3D-3H-3S-3NT后应叫方的再叫
const twoNTThreeDiamondThreeHeartThreeSpadeThreeNTRebid = ref([
  { rebid: '4H', points: '9—11', description: '9—11点，6张H＋4张S，满贯兴趣' },
  { rebid: '4S', points: '9—11', description: '9—11点，5张H＋5张S，满贯兴趣' }
])

// 2NT-3D-3H-4C后开叫方的再叫
const twoNTThreeDiamondThreeHeartFourClubRebid = ref([
  { rebid: '4D/4S', points: '20—21', description: '20—21点，4张以上C，扣叫；满贯兴趣' },
  { rebid: '4H', points: '20—21', description: '20—21点，3张以上H，低限止叫' },
  { rebid: '4NT', points: '20—21', description: '20—21点，C和H都不支持，止叫' },
  { rebid: '5C', points: '20—21', description: '20—21点，4张以上C，止叫' }
])

// 2NT-3D-3H-4D后开叫方的再叫
const twoNTThreeDiamondThreeHeartFourDiamondRebid = ref([
  { rebid: '4H', points: '20—21', description: '20—21点，3张以上H，低限止叫' },
  { rebid: '4S/5C', points: '20—21', description: '20—21点，4张以上D，扣叫；满贯兴趣' },
  { rebid: '4NT', points: '20—21', description: '20—21点，D和H都不支持，止叫' },
  { rebid: '5D', points: '20—21', description: '20—21点，4张以上D，止叫' }
])

// 2NT-3H后开叫方的再叫
const twoNTThreeHeartResponses = ref([
  { rebid: '3S', points: '20—21', description: '20—21点，接受转移' },
  { rebid: '4C', points: '20—21', description: '20—21点，3张以上S，高限扣叫A' },
  { rebid: '4D', points: '20—21', description: '20—21点，3张以上S，高限扣叫A' },
  { rebid: '4H', points: '20—21', description: '20—21点，3张以上S，高限扣叫A' },
  { rebid: '4S', points: '20—21', description: '20—21点，4张S，高限超转移' }
])

// 2NT-3H-3S后应叫方的再叫
const twoNTThreeHeartThreeSpadeRebid = ref([
  { rebid: 'Pass', points: '0—4', description: '0—4点，5张以上S' },
  { rebid: '3NT', points: '5—10', description: '5—10点，5张S，均型牌，示选' },
  { rebid: '4C/4D', points: '8+', description: '8点以上，5张S↑＋4张C/D↑，逼局' },
  { rebid: '4H', points: '5—9', description: '5—9点，5－5以上双高花，不逼叫' },
  { rebid: '4S', points: '9—11', description: '9—11点，6张以上S，满贯兴趣' },
  { rebid: '4NT', points: '10—12', description: '10—12点，5张S，均型，满贯邀叫' }
])

// 2NT-3H-3S-4C后开叫方的再叫
const twoNTThreeHeartThreeSpadeFourClubRebid = ref([
  { rebid: '4D', points: '20—21', description: '20—21点，4张以上C，扣叫；满贯兴趣' },
  { rebid: '4H', points: '20—21', description: '20—21点，4张以上C，扣叫；满贯兴趣' },
  { rebid: '4S', points: '20—21', description: '20—21点，3张以上S，低限止叫' },
  { rebid: '4NT', points: '20—21', description: '20—21点，C和S都不支持，止叫' },
  { rebid: '5C', points: '20—21', description: '20—21点，4张以上C，止叫' }
])

// 2NT-3H-3S-4D后开叫方的再叫
const twoNTThreeHeartThreeSpadeFourDiamondRebid = ref([
  { rebid: '4H/5C', points: '20—21', description: '20—21点，4张以上D，扣叫；满贯兴趣' },
  { rebid: '4S', points: '20—21', description: '20—21点，3张以上S，低限止叫' },
  { rebid: '4NT', points: '20—21', description: '20—21点，D和S都不支持，止叫' },
  { rebid: '5D', points: '20—21', description: '20—21点，4张以上D，止叫' }
])

// 2NT-3S后开叫方的再叫
const twoNTThreeSpadeResponses = ref([
  { rebid: '3NT', points: '20—21', description: '20—21点，没有4张低花或套质量差' },
  { rebid: '4C', points: '20—21', description: '20—21点，4张以上C，逼局' },
  { rebid: '4D', points: '20—21', description: '20—21点，4张以上D，逼局' },
  { rebid: '4H', points: '20—21', description: '20—21点，2 3 4 4牌型' },
  { rebid: '4S', points: '20—21', description: '20—21点，3 2 4 4牌型' }
])

// 2NT-3S-3NT后应叫方的再叫
const twoNTThreeSpadeThreeNTRebid = ref([
  { rebid: 'Pass', points: '5—10', description: '5—10点，不符合其他叫品' },
  { rebid: '4C', points: '8+', description: '8点以上，5张C↑＋4张D，逼局' },
  { rebid: '4D', points: '8+', description: '8点以上，5张D↑＋4张C，逼局' },
  { rebid: '4H/4S', points: '6+', description: '6点以上，5－5双低花，H/S单缺' },
  { rebid: '4NT', points: '11—12', description: '11—12点，4－4双低花，满贯邀请' }
])

// 2NT-3S-4C后应叫方的再叫
const twoNTThreeSpadeFourClubRebid = ref([
  { rebid: '4D', points: '8点以上', description: '6张D＋4张C，逼局' },
  { rebid: '4H/4S', points: '8—10点', description: '扣叫，满贯兴趣。' },  
  { rebid: '4NT', points: '11点以上', description: '罗马关键张问叫。' },
  { rebid: '5C', points: '5—7点', description: '4张以上C，止叫。' }
])

// 2NT-3S-4D后应叫方的再叫
const twoNTThreeSpadeFourDiamondRebid = ref([
  { rebid: '4H/4S', points: '8—10点', description: '扣叫，满贯兴趣。' },  
  { rebid: '4NT', points: '11点以上', description: '罗马关键张问叫。' },
  { rebid: '5C', points: '5—7点', description: '6张C＋4张D。' },
  { rebid: '5D', points: '5—7点', description: '4张以上D，止叫。' }
])

// 2NT-(3C)-?的应叫数据
const twoNTThreeClubInterferenceResponses = ref([
  { bid: '×', points: '3+', description: '3点以上，技术性加倍，相当于斯台曼问叫。' },
  { bid: '3D/3H/3S', points: '4+', description: '4点以上，5张以上♦️/♥️/♠️，逼局。' },
  { bid: '3NT', points: '4—9', description: '4—9点，通常没有高花套，止叫。' },
  { bid: '4C', points: '4+', description: '4点以上，扣叫，5－5双高花，逼局。' },
  { bid: '4H/4S', points: '4—9', description: '4—9点，6张以上♥️/♠️，止叫。' },
  { bid: '5D', points: '2—4', description: '2—4点，6张以上♦️，止叫。' }
])

// 2NT-(3D)-?的应叫数据
const twoNTThreeDiamondInterferenceResponses = ref([
  { bid: '×', points: '3+', description: '3点以上，技术性加倍，相当于斯台曼问叫。' },
  { bid: '3H/3S', points: '4+', description: '4点以上，5张以上♥️/♠️，逼局。' },
  { bid: '3NT', points: '4—9', description: '4—9点，通常没有高花套，止叫。' },
  { bid: '4C', points: '5+', description: '5点以上，5张以上♣️，逼局。' },
  { bid: '4D', points: '4+', description: '4点以上，扣叫，5－5双高花，逼局。' },
  { bid: '4H/4S', points: '4—9', description: '4—9点，6张以上♥️/♠️，止叫。' },
  { bid: '5C', points: '2—4', description: '2—4点，6张以上♣️，止叫。' }
])

// 2NT-(3H)-?的应叫数据
const twoNTThreeHeartInterferenceResponses = ref([
  { bid: '×', points: '3+', description: '3点以上，技术性加倍，通常有4张♠️。' },
  { bid: '3S', points: '4+', description: '4点以上，5张以上♠️，逼局。' },
  { bid: '3NT', points: '4—9', description: '4—9点，通常没有4张♠️，止叫。' },
  { bid: '4C/4D', points: '5+', description: '5点以上，5张以上♣️/♦️，逼局。' },
  { bid: '4H', points: '4+', description: '4点以上，扣叫，5—5双低花，逼局。' },
  { bid: '4S', points: '4—9', description: '4—9点，6张以上♠️，止叫。' },
  { bid: '5C/5D', points: '2—4', description: '2—4点，6张以上♣️/♦️，止叫。' }
])

// 2NT-(3S)-?的应叫数据
const twoNTThreeSpadeInterferenceResponses = ref([
  { bid: '×', points: '3+', description: '3点以上，技术性加倍，通常有4张♥️。' },
  { bid: '3NT', points: '4—9', description: '4—9点，通常没有4张♥️，止叫。' },
  { bid: '4C/4D', points: '5+', description: '5点以上，5张以上♣️/♦️，逼局。' },
  { bid: '4H', points: '5+', description: '5点以上，5张以上♥️，逼局。' },
  { bid: '4S', points: '4+', description: '4点以上，扣叫，5—5双低花，逼局。' },
  { bid: '5C/5D', points: '2—4', description: '2—4点，6张以上♣️/♦️，止叫。' }
])

// 2NT-(3C)-X-(Pass)-?开叫方的再叫数据
const twoNTThreeClubDoubleRebid = ref([
  { rebid: 'Pass', points: '20—21', description: '20—21点，♣️有长度，惩罚性。' },
  { rebid: '3D', points: '20—21', description: '20—21点，5张以上♦️，不逼叫。' },
  { rebid: '3H/3S', points: '20—21', description: '20—21点，4张♥️/♠️，通常另一高花没有4张。' },
  { rebid: '3NT', points: '20—21', description: '20—21点，没有4张高花，止叫。' },
  { rebid: '4C', points: '20—21', description: '20—21点，4—4双高花，逼局。' },
  { rebid: '4D', points: '20—21', description: '20—21点，6张♦️，不逼叫。' },
  { rebid: '4H/4S', points: '20—21', description: '20—21点，5张♥️/♠️，另一高花少于4张。' }
])

// 2NT-(3D)-X-(Pass)-?开叫方的再叫数据
const twoNTThreeDiamondDoubleRebid = ref([
  { rebid: 'Pass', points: '20—21', description: '20—21点，♦️有长度，惩罚性。' },
  { rebid: '3H/3S', points: '20—21', description: '20—21点，4张♥️/♠️，通常另一高花没有4张。' },
  { rebid: '3NT', points: '20—21', description: '20—21点，没有4张高花，止叫。' },
  { rebid: '4C', points: '20—21', description: '20—21点，5张以上♣️，不逼叫。' },
  { rebid: '4D', points: '20—21', description: '20—21点，4—4双高花，逼局。' },
  { rebid: '4H/4S', points: '20—21', description: '20—21点，5张♥️/♠️，另一高花少于4张。' }
])
</script>