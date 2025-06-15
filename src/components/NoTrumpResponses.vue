<template>
  <div class="bridge-card">
    <h2 class="bridge-title">第五章 1NT开叫及以后的应叫</h2>

    <!-- 1NT开叫说明 -->
    <div class="bridge-card mb-8">
      <h3 class="bridge-subtitle">1NT开叫</h3>
      <div class="prose max-w-none">
        <p>15—17点，均型；允许有5张高花或5~6张低花；允许有单张A或K。</p>
      </div>
    </div>

    <!-- 1NT应叫主表格 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">一、1NT开叫的应叫</h3>
      <h4 class="bridge-subtitle">1NT—? 应叫表</h4>
      <el-table :data="oneNTResponsesFull" style="width: 100%" border>
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

    <!-- 二、1NT开叫后斯台曼约定叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">二、1NT开叫后斯台曼约定叫</h3>
      <h4 class="bridge-subtitle">1NT—2♣️后开叫方的再叫</h4>
      <el-table :data="oneNTTwoClubResponses" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2D后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️—2♦️后应叫方的再叫</h4>      
      <el-table :data="oneNTTwoClubTwoDiamondRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>   
    
    <!-- 1NT-2C-2D-3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️—2♦️-3♣️（10点以上，好的5张以上♣️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoClubTwoDiamondThreeClubRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2D-3D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️—2♦️-3♦️（10点以上，好的5张以上♦️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoClubTwoDiamondThreeDiamondRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️—2♥️（15—17点，4张♥️，可能有4张♠️）后应叫方的再叫</h4>      
      <el-table :data="oneNTTwoClubTwoHeartRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2H-3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️—2♥️-3♣️（10点以上，好的5张以上♣️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoClubTwoHeartThreeClubRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2H-3D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️—2♥️-3♦️（10点以上，好的5张以上♦️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoClubTwoHeartThreeDiamondRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️—2♠️（15—17点，4张♠️，无4张♥️）后应叫方的再叫</h4>      
      <el-table :data="oneNTTwoClubTwoSpadeRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2S-3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️—2♠️-3♣️（10点以上，好的5张以上♣️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoClubTwoSpadeThreeClubRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2S-3D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️—2♠️-3♦️（10点以上，好的5张以上♦️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoClubTwoSpadeThreeDiamondRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 三、1NT开叫后斯莫伦约定叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">三、1NT开叫后斯莫伦约定叫</h3>
      <h4 class="bridge-subtitle">1NT—2♣️-2♦️-3♥️（10点以上，4张♥️＋5张♠️，斯莫伦约定叫）后开叫方的再叫</h4>
      <el-table :data="oneNTTwoClubTwoDiamondThreeHeartRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2D-3H-3NT后的再叫 -->
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—2♣️-2♦️-3♥️-3NT（15—17点，无3张♠️）后应叫方的再叫</h4>
      <el-table :data="oneNTTwoClubTwoDiamondThreeHeartThreeNTRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 斯莫伦约定叫：1NT-2C-2D-3S后的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♣️-2♦️-3♠️（10点以上，5张♥️＋4张♠️，斯莫伦约定叫）后开叫方的再叫</h4>
      <el-table :data="oneNTTwoClubTwoDiamondThreeSpadeRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2C-2D-3S-3NT后的再叫 -->
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—2♣️-2♦️-3♠️-3NT（15—17点，无3张♥️）后应叫方的再叫</h4>
      <el-table :data="oneNTTwoClubTwoDiamondThreeSpadeThreeNTRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 四、1NT开叫后雅各比转移叫 -->
    <!-- 1NT—2♦️后开叫方的再叫 -->
    <div class="mb-8">
      <h3 class="bridge-subtitle">四、1NT开叫后雅各比转移叫</h3>
      <h4 class="bridge-subtitle">1NT—2♦️（雅各比转移叫，5张以上♥️）后开叫方的再叫</h4>
      <el-table :data="oneNTTwoDiamondResponses" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2D-2H后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♦️—2♥️（15—17点，接受转移，不逼叫）后应叫方的再叫</h4>      
      <el-table :data="oneNTTwoDiamondTwoHeartRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2D-2H-3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♦️—2♥️-3♣️（10点以上，5张♥️＋4张以上♣️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoDiamondTwoHeartThreeClubRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2D-2H-3D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♦️—2♥️-3♦️（10点以上，5张♥️＋4张以上♦️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoDiamondTwoHeartThreeDiamondRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT—2H后开叫方的再叫 -->
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—2♥️后开叫方的再叫</h4>
      <el-table :data="oneNTTwoHeartResponses" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2H-2S后的应叫方再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♥️—2♠️（15—17点，接受转移，不逼叫）后应叫方的再叫</h4>      
      <el-table :data="oneNTTwoHeartTwoSpadeRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
    <!-- 1NT-2H-2S-3C后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♥️—2♠️-3♣️（10点以上，5张♠️＋4张以上♣️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoHeartTwoSpadeThreeClubRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2H-2S-3D后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♥️—2♠️-3♦️（10点以上，5张♠️＋4张以上♦️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoHeartTwoSpadeThreeDiamondRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2H-2S-3H后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♥️—2♠️-3♥️（10点以上，5张♠️＋5张以上♥️，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoHeartTwoSpadeThreeHeartRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 五、1NT开叫后低花转移叫 -->
    <!-- 1NT—2S（2S=低花转移叫，要求同伴叫3C）后开叫方的再叫 -->
    <!-- 1NT—2S—3C-->
    <div class="mb-8">
      <h3 class="bridge-subtitle">五、1NT开叫后低花转移叫</h3>
      <h4 class="bridge-subtitle">1NT—2♠️（低花转移叫，要求同伴叫3♣️）—3♣️后应叫方的再叫</h4>
      <el-table :data="oneNTTwoSpadeRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2S-3C-3H后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♠️—3♣️-3♥️（10点以上，5－5双低花，♥️单缺，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoSpadeThreeClubThreeHeartRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-2S-3C-3S后开叫方的再叫 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">1NT—2♠️—3♣️-3♠️（10点以上，5－5双低花，♠️单缺，逼局）后开叫方的再叫</h4>      
      <el-table :data="oneNTTwoSpadeThreeClubThreeSpadeRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 六、1NT开叫后跳叫3阶高花 -->
    <!-- 1NT — 3H（3H=10点以上，5－4双低花的5 4 3 1牌型，所叫H为单张，逼局）后开叫方的再叫 -->    
    <div class="mb-8">
      <h3 class="bridge-subtitle">六、1NT开叫后跳叫3阶高花</h3>
      <h4 class="bridge-subtitle">1NT—3♥️（10点以上，5－4双低花的5 4 3 1牌型，所叫♥️为单张，逼局）后开叫方的再叫</h4>
      <el-table :data="oneNTThreeHeartResponses" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT — 3S（3S=10点以上，5－4双低花的5 4 3 1牌型，所叫S为单张，逼局）后开叫方的再叫 -->    
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—3♠️（10点以上，5－4双低花的5 4 3 1牌型，所叫♠️为单张，逼局）后开叫方的再叫</h4>
      <el-table :data="oneNTThreeSpadeResponses" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 七、1NT开叫被干扰后的叫牌 -->
    <!-- 1、1NT在敌方加倍后的应叫 -->    
    <div class="mb-8">
      <h3 class="bridge-subtitle">七、1NT开叫被干扰后的叫牌</h3>
      <h4 class="bridge-subtitle">1、1NT在敌方加倍后的应叫</h4>
      <el-table :data="oneNTDoubledResponses" style="width: 100%" border>
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

    <!-- 1NT-(×)-2NT-3C后的再叫 -->    
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT-(×)-2NT-3♣️后的再叫</h4>
      <el-table :data="oneNTDoubledTwoNTThreeClubRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 2、1NT后约定叫被敌方加倍的再叫 -->    
    <div class="mb-8">      
      <h4 class="bridge-subtitle">2、1NT后约定叫被敌方加倍的再叫</h4>
      <h4 class="bridge-subtitle">1NT—（/）—2♣️—（×）</h4>
      <el-table :data="oneNTStaymanDoubledRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT—（/）—2D—（×） -->    
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—（/）—2♦️—（×）</h4>
      <el-table :data="oneNTJacobyTwoDiamondDoubledRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT—（/）—2H—（×） -->    
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—（/）—2♥️—（×）</h4>
      <el-table :data="oneNTJacobyTwoHeartDoubledRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="再叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 3、1NT在敌方自然花色争叫后的应叫 --> 
    <!-- 1NT—（2♦️）— ？ -->  
    <div class="mb-8">      
      <h4 class="bridge-subtitle">3、1NT在敌方自然花色争叫后的应叫</h4>
      <h4 class="bridge-subtitle">1NT—（2♦️）— ？</h4>
      <el-table :data="oneNTTwoDiamondInterferenceResponses" style="width: 100%" border>
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

    <!-- 1NT—（2♥️）— ？ -->  
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—（2♥️）— ？</h4>
      <el-table :data="oneNTTwoHeartInterferenceResponses" style="width: 100%" border>
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

    <!-- 1NT—（2♠️）— ？ -->  
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—（2♠️）— ？</h4>
      <el-table :data="oneNTTwoSpadeInterferenceResponses" style="width: 100%" border>
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

    <!-- 1NT—（3X）— ？ -->  
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—（3X）— ？</h4>
      <el-table :data="oneNTThreeLevelInterferenceResponses" style="width: 100%" border>
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

    <!-- 4、1NT在敌方双套牌争叫后的应叫 --> 
    <!-- 1NT-(2C兰迪)后的应叫 -->  
    <div class="mb-8">      
      <h4 class="bridge-subtitle">4、1NT在敌方双套牌争叫后的应叫</h4>
      <h4 class="bridge-subtitle">1NT—（2♣️兰迪约定叫，表示5－4以上双高花）— ？</h4>
      <el-table :data="oneNTLandyInterferenceResponses" style="width: 100%" border>
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

    <!-- 1NT-(2NT特殊无将)后的应叫 -->  
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT—（2NT，特殊无将，表示5－5双低花）— ？</h4>
      <el-table :data="oneNTUnusualTwoNTInterferenceResponses" style="width: 100%" border>
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

    <!-- 5、1NT在敌方争叫后的莱本索尔约定叫 -->
    <!-- 莱本索尔约定叫基本结构 -->
    <div class="mb-8">
      <h4 class="bridge-subtitle">5、1NT在敌方争叫后的莱本索尔约定叫</h4> 
      <h4 class="bridge-subtitle">1NT—（2阶花色）— ？应叫</h4>      
      <el-table :data="oneNTLebensohlResponses" style="width: 100%" border>
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

    <!-- 1NT-(2C)-2NT-3C后的再叫 -->
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT-(2♣️)-2NT-3♣️后应叫方的再叫</h4>      
      <el-table :data="oneNTLandyLebensohlRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="应叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="说明">
          <template #default="{ row }">
            <span>{{ suitToEmoji(row.description) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 1NT-(2D/2M)-2NT-3C后的再叫 -->
    <div class="mb-8">      
      <h4 class="bridge-subtitle">1NT-(2♦️/2♥️/2♠️)-2NT-3♣️后应叫方的再叫</h4>      
      <el-table :data="oneNTLebensohlGeneralRebid" style="width: 100%" border>
        <el-table-column prop="rebid" label="应叫" width="120">
          <template #default="{ row }">
            <span class="font-bold text-bridge-blue">{{ suitToEmoji(row.rebid) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="points" label="点力范围" width="120">
          <template #default="{ row }">
            <el-tag :type="getPointTagType(row.points)" effect="plain">{{ row.points }}</el-tag>
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
  if (points.includes('10点以上') || points.includes('11-12') || points.includes('18点以上') || points.includes('18-19') || points.includes('20-21')) return 'success'
  if (points.includes('6-11') || points.includes('6-10') || points.includes('12-14') || points.includes('12-15') || points.includes('13-15') || points.includes('15-17') || points.includes('5-8')) return 'info'
  if (points.includes('0-5') || points.includes('4-8') || points.includes('0-7') || points.includes('6-9')) return 'warning'
  return 'default'
}

// 1NT开叫的应叫（完整版）
const oneNTResponsesFull = [
  { bid: 'Pass', points: '0-7点', description: '不符合其他叫品' },
  { bid: '2C', points: '0-7点', description: 'C单缺的3套牌，高花3-4张；准备Pass开叫人的答叫。' },
  { bid: '', points: '8点以上', description: '有4张高花套。' },
  { bid: '', points: '10点以上', description: '有5张以上低花套；问叫后再叫低花，有满贯兴趣' },
  { bid: '2D/2H', points: '3点以上', description: '雅各比转移叫；转移到5张以上H/S' },
  { bid: '2S', points: '0-6点', description: '低花转移叫，有6张以上低花；开叫人转移到3C，后Pass或叫3D。' },
  { bid: '', points: '10点以上', description: '5-5双低花；开叫人转移到3C，后叫单缺的高花。' },
  { bid: '', points: '14-15点', description: '5422双低花，满贯兴趣；开叫人转移到3C，后叫3NT' },
  { bid: '2NT', points: '8-9点', description: '相对均型牌，无4张高花，邀叫' },
  { bid: '3C/3D', points: '7-8点', description: '好的6张以上C/D，邀叫3NT' },
  { bid: '3H/3S', points: '10点以上', description: '5-4双低花的5431牌型，所叫H/S为单张，逼局' },
  { bid: '3NT', points: '10-14点', description: '通常没有4张高花，止叫' },
  { bid: '4C', points: '14点以上', description: '格伯问A；有独立的6张以上套' },
  { bid: '4D/4H', points: '7-11点', description: '德克萨斯转移叫，6张以上H/S；开叫人叫4H/4S，后止叫。' },
  { bid: '', points: '15点以上', description: '德克萨斯转移叫，6张以上H/S；开叫人叫4H/4S，后4NT关键张问叫' },
  { bid: '4S', points: '10-14点', description: '6-5以上双低花套' },
  { bid: '4NT', points: '15-17点', description: '没有4张高花和5张低花套，小满贯邀叫' },
  { bid: '5C/5D', points: '6-9点', description: '7张C/D，12调整点以上' },
  { bid: '5H/5S', points: '13-16点', description: '6张以上H/S' },
  { bid: '5NT', points: '20-21点', description: '逼叫6NT，邀叫7NT' },
  { bid: '6C~7S', points: '13-16点', description: '8张以上套' },
  { bid: '6NT', points: '17-18点', description: '适合打6NT的牌型，止叫' },
  { bid: '7C~7S', points: '16-19点', description: '9张以上套' },
  { bid: '7NT', points: '22点以上', description: '适合打7NT的牌型' }
]

// 1NT-2C斯台曼问叫的应叫
const oneNTTwoClubResponses = [
  { rebid: '2D', points: '15-17点', description: '无4张高花套' },
  { rebid: '2H', points: '15-17点', description: '有4张H，可能有4张S' },
  { rebid: '2S', points: '15-17点', description: '有4张S' },
  { rebid: '3H', points: '16-17点', description: '5张H' },
  { rebid: '3S', points: '16-17点', description: '5张S' }
]

// 1NT-2C-2D后的再叫
const oneNTTwoClubTwoDiamondRebid = ref([
  { rebid: 'Pass', points: '0-7点', description: '3套牌，C单缺，4张以上D' },
  { rebid: '2H/2S', points: '7-9点', description: '5张H/S+4张S/H，5-4' },
  { rebid: '2NT', points: '8-9点', description: '至少有1个4张高花，邀局' },
  { rebid: '3C/3D', points: '10点以上', description: '好的5张以上C/D，逼局' },
  { rebid: '3H/3S', points: '10点以上', description: '4张H/S+5张S/H，斯莫伦，4-5' },
  { rebid: '3NT', points: '10-14点', description: '止叫' },
  { rebid: '4D', points: '8点以上', description: '转移到6张H，隐含4张S，6-4' },
  { rebid: '4H', points: '8点以上', description: '转移到6张S，隐含4张H，6-4' },
  { rebid: '4NT', points: '15-17点', description: '至少有1个4张高花，邀小满贯' },
  { rebid: '5C/5D', points: '7-11点', description: '6张以上C/D，不适合NT' },
  { rebid: '5NT', points: '20-21点', description: '至少有1个4张高花，邀大满贯' }
])

// 1NT-2C-2D-3C后的再叫
const oneNTTwoClubTwoDiamondThreeClubRebid = ref([
  { rebid: '3D', points: '15-17点', description: '5张以上D，通常C不配合' },
  { rebid: '3H', points: '15-17点', description: 'C配合，H有控制，S控制不定' },
  { rebid: '3S', points: '15-17点', description: 'C配合，S有控制，H无控制' },
  { rebid: '3NT', points: '15-16点', description: 'C不配合，或有配合控制不好的低限牌' },
  { rebid: '4C', points: '16-17点', description: '5张以上C，高限牌' }
])

// 1NT-2C-2D-3D后的再叫
const oneNTTwoClubTwoDiamondThreeDiamondRebid = ref([
  { rebid: '3H', points: '15-17点', description: 'D配合，H有控制，S控制不定' },
  { rebid: '3S', points: '15-17点', description: 'D配合，S有控制，H无控制' },
  { rebid: '3NT', points: '15-16点', description: 'D不配合，或有配合控制不好的牌' },
  { rebid: '4C', points: '15-17点', description: '5张以上C，通常D无配合' },
  { rebid: '4D', points: '16-17点', description: '5张以上D，高限牌' }
])

// 1NT-2C-2H后的再叫
const oneNTTwoClubTwoHeartRebid = ref([
  { rebid: '2S', points: '7-9点', description: '4张S，邀局；有单缺不宜NT' },
  { rebid: '2NT', points: '7-9点', description: '4张S，均型，邀局' },
  { rebid: '3C/3D', points: '10点以上', description: '好的5张以上C/D，逼局' },
  { rebid: '3H', points: '7-9点', description: '4张以上H，邀局' },
  { rebid: '3S', points: '13点以上', description: '4张以上H，满贯兴趣' },
  { rebid: '3NT', points: '10-14点', description: '有4张S，止叫；同伴可叫4S' },
  { rebid: '4C/4D', points: '12点以上', description: '4张以上H，C/D单缺，斯普林特' },
  { rebid: '4H', points: '10-12点', description: '4张以上H，止叫' }
])

// 1NT-2C-2H-3C后的再叫
const oneNTTwoClubTwoHeartThreeClubRebid = ref([
  { rebid: '3D', points: '16-17点', description: '3张C↑，和D控制无关，高限牌' },
  { rebid: '3H', points: '15-17点', description: '5张H' },
  { rebid: '3S', points: '15-16点', description: '4张S+4张H' },
  { rebid: '3NT', points: '15-16点', description: 'C不配合，或有配合控制不好的牌' },
  { rebid: '4C', points: '16-17点', description: '4张以上C，高限牌' }
])

// 1NT-2C-2H-3D后的再叫
const oneNTTwoClubTwoHeartThreeDiamondRebid = ref([
  { rebid: '3H', points: '16-17点', description: '3张D↑，和H控制无关，高限牌' },
  { rebid: '3S', points: '15-17点', description: '4张S+4张H' },
  { rebid: '3NT', points: '15-16点', description: 'D不配合，或有配合控制不好的低限牌' },
  { rebid: '4C', points: '16-17点', description: '4张以上D，扣叫' },
  { rebid: '4D', points: '16-17点', description: '4张以上D，高限牌' }
])

// 1NT-2C-2S后的再叫
const oneNTTwoClubTwoSpadeRebid = ref([
  { rebid: '2NT', points: '7-9点', description: '4张H，均型，邀局' },
  { rebid: '3C/3D', points: '10点以上', description: '好的5张以上C/D，逼局' },
  { rebid: '3H', points: '13点以上', description: '4张以上S，满贯兴趣' },
  { rebid: '3S', points: '7-9点', description: '4张以上S，邀局' },
  { rebid: '3NT', points: '10-14点', description: '有4张H，止叫' },
  { rebid: '4C/4D/4H', points: '12点以上', description: '4张以上S，C/D/H单缺' }
])

// 1NT-2C-2S-3C后的再叫
const oneNTTwoClubTwoSpadeThreeClubRebid = ref([
  { rebid: '3D', points: '16-17点', description: '3张C↑，和D控制无关，高限牌' },
  { rebid: '3H', points: '15-17点', description: '3张以上C，H有控制' },
  { rebid: '3S', points: '15-17点', description: '5张S' },
  { rebid: '3NT', points: '15-16点', description: 'C不配合，或有配合控制不好的低限牌' },
  { rebid: '4C', points: '16-17点', description: '4张以上C，高限牌' }
])

// 1NT-2C-2S-3D后的再叫
const oneNTTwoClubTwoSpadeThreeDiamondRebid = ref([
  { rebid: '3H', points: '15-17点', description: '3张D↑，和H控制无关，高限牌' },
  { rebid: '3S', points: '15-17点', description: '5张S' },
  { rebid: '3NT', points: '15-16点', description: 'D不配合，或有配合控制不好的牌' },
  { rebid: '4C', points: '16-17点', description: '4张以上D，扣叫' },
  { rebid: '4D', points: '16-17点', description: '4张以上D，高限牌' }
])

// 斯莫伦约定叫：1NT-2C-2D-3H后的再叫
const oneNTTwoClubTwoDiamondThreeHeartRebid = ref([
  { rebid: '3S', points: '16-17点', description: '3张S，高限，满贯兴趣' },
  { rebid: '3NT', points: '15-17点', description: '无3张S' },
  { rebid: '4S', points: '15-16点', description: '3张S，低限' }
])

// 1NT-2C-2D-3H-3NT后的再叫
const oneNTTwoClubTwoDiamondThreeHeartThreeNTRebid = ref([
  { rebid: '4C/4D', points: '14点以上', description: '5张S+4张H+3~4张C/D，逼局' },
  { rebid: '4S', points: '12-14点', description: '6张S+4张H，满贯兴趣' },
  { rebid: '4NT', points: '15-17点', description: '5张S+4张H，小满贯邀叫' }
])

// 斯莫伦约定叫：1NT-2C-2D-3S后的再叫
const oneNTTwoClubTwoDiamondThreeSpadeRebid = ref([
  { rebid: '3NT', points: '15-17点', description: '无3张H' },
  { rebid: '4C', points: '16-17点', description: '3张H，高限，满贯兴趣；与C无关' },
  { rebid: '4H', points: '15-16点', description: '3张H，低限' }
])

// 1NT-2C-2D-3S-3NT后的再叫
const oneNTTwoClubTwoDiamondThreeSpadeThreeNTRebid = ref([
  { rebid: '4C/4D', points: '14点以上', description: '5张H+4张S+3~4张C/D，逼局' },
  { rebid: '4H', points: '12-14点', description: '6张H+4张S，满贯兴趣' },
  { rebid: '4NT', points: '15-17点', description: '5张H+4张S，小满贯邀叫' }
])

// 雅各比转移叫：1NT-2D后的应叫
const oneNTTwoDiamondResponses = ref([
  { rebid: '2H', points: '15-17点', description: '接受转移，不逼叫' },
  { rebid: '3H', points: '16-17点', description: '4张H，高限，超转移，不逼叫' },
  { rebid: '4H', points: '16-17点', description: '5张H' }
])

// 1NT-2D-2H后的再叫
const oneNTTwoDiamondTwoHeartRebid = ref([
  { rebid: 'Pass', points: '0-7点', description: '5张以上H' },
  { rebid: '2S', points: '7-8点', description: '5张H+5张S，邀局' },
  { rebid: '2NT', points: '8-9点', description: '5张H，邀局' },
  { rebid: '3C/3D', points: '10点以上', description: '5张H+4张以上C/D，逼局' },
  { rebid: '3H', points: '7-8点', description: '6张以上H，邀局' },
  { rebid: '3NT', points: '10-14点', description: '5张H，止叫' },
  { rebid: '3S/4C/4D', points: '12点以上', description: '6张以上H，S/C/D单缺' },
  { rebid: '4H', points: '12-14点', description: '6张以上H，无单缺，邀小满贯' },
  { rebid: '4NT', points: '15-17点', description: '5张H，5332牌型，邀小满贯' }
])

// 1NT-2D-2H-3C后的再叫
const oneNTTwoDiamondTwoHeartThreeClubRebid = ref([
  { rebid: '3D/3S', points: '15-17点', description: '4张以上C，D/S有控制' },
  { rebid: '3H', points: '16-17点', description: '3张以上H，高限或好控制' },
  { rebid: '3NT', points: '15-17点', description: 'H/C两套均不配合' },
  { rebid: '4C', points: '16-17点', description: '好的4张以上C，满贯兴趣' },
  { rebid: '4H', points: '15-16点', description: '3张以上H，低限止叫' }
])

// 1NT-2D-2H-3D后的再叫
const oneNTTwoDiamondTwoHeartThreeDiamondRebid = ref([
  { rebid: '3H', points: '16-17点', description: '3张以上H，高限或好控制' },
  { rebid: '3S', points: '15-17点', description: '4张以上D，与S控制无关' },
  { rebid: '3NT', points: '15-16点', description: 'H/D两套均不配合' },
  { rebid: '4D', points: '16-17点', description: '好的4张以上D，满贯兴趣' },
  { rebid: '4H', points: '15-16点', description: '3张以上H，低限止叫' }
])

// 雅各比转移叫：1NT-2H后的应叫
const oneNTTwoHeartResponses = ref([
  { rebid: '2S', points: '15-17点', description: '接受转移，不逼叫' },
  { rebid: '3S', points: '16-17点', description: '4张S，高限，超转移，不逼叫' },
  { rebid: '4S', points: '16-17点', description: '5张S' }
])

// 1NT-2H-2S后的再叫
const oneNTTwoHeartTwoSpadeRebid = ref([
  { rebid: 'Pass', points: '0-7点', description: '5张以上S' },
  { rebid: '2NT', points: '8-9点', description: '5张S，邀局' },
  { rebid: '3C/3D', points: '10点以上', description: '5张S+4张以上C/D，逼局' },
  { rebid: '3H', points: '10点以上', description: '5张S+5张H，逼局' },
  { rebid: '3S', points: '7-8点', description: '6张以上S，邀局' },
  { rebid: '3NT', points: '10-14点', description: '5张S，止叫' },
  { rebid: '4m/4H', points: '12点以上', description: '6张以上S，C/D/H单缺，斯普林特' },
  { rebid: '4S', points: '12-14点', description: '6张以上S，无单缺，邀小满贯' },
  { rebid: '4NT', points: '15-17点', description: '5张S，5332型，邀小满贯' }
])

// 1NT-2H-2S-3C后的再叫
const oneNTTwoHeartTwoSpadeThreeClubRebid = ref([
  { rebid: '3D', points: '16-17点', description: '4张以上C，D有控制' },
  { rebid: '3H', points: '16-17点', description: '4张以上C，H有控制' },
  { rebid: '3S', points: '16-17点', description: '3张以上S，高限或好控制' },
  { rebid: '3NT', points: '15-17点', description: 'S/C两套均不配合' },
  { rebid: '4C', points: '16-17点', description: '好的4张以上C，满贯兴趣' },
  { rebid: '4S', points: '15-16点', description: '3张以上S，低限止叫' }
])

// 1NT-2H-2S-3D后的再叫
const oneNTTwoHeartTwoSpadeThreeDiamondRebid = ref([
  { rebid: '3H', points: '16-17点', description: '4张以上D，与H控制无关' },
  { rebid: '3S', points: '16-17点', description: '3张以上S，高限或好控制' },
  { rebid: '3NT', points: '15-17点', description: 'S/D两套均不配合' },
  { rebid: '4D', points: '16-17点', description: '好的4张以上D，满贯兴趣' },
  { rebid: '4S', points: '15-16点', description: '3张以上S，低限止叫' }
])

// 1NT-2H-2S-3H后的再叫
const oneNTTwoHeartTwoSpadeThreeHeartRebid = ref([
  { rebid: '3S', points: '16-17点', description: '3张以上S，高限或好控制' },
  { rebid: '3NT', points: '15-17点', description: 'H/S两套均不配合' },
  { rebid: '4C/4D', points: '16-17点', description: '3张以上H，扣叫花色有控制' },
  { rebid: '4H', points: '15-16点', description: '3张以上H，低限止叫' },
  { rebid: '4S', points: '15-16点', description: '3张以上S，低限止叫' }
])

// 低花转移叫：1NT-2S后的再叫
const oneNTTwoSpadeRebid = ref([
  { rebid: 'Pass', points: '0-6点', description: '6张以上C，止叫' },
  { rebid: '3D', points: '0-6点', description: '6张以上D，止叫' },
  { rebid: '3H/3S', points: '10点以上', description: '5-5双低花，所叫花色H/S单缺，逼局' },
  { rebid: '3NT', points: '14-15点', description: '5422牌型，5-4双低花，满贯兴趣' },
  { rebid: '4NT', points: '16-17点', description: '5422牌型，5-4双低花，强烈满贯兴趣' }
])

// 1NT-2S-3C-3H后的再叫
const oneNTTwoSpadeThreeClubThreeHeartRebid = ref([
  { rebid: '3S', points: '15-17点', description: '5张S，无3张低花配合，逼局' },
  { rebid: '3NT', points: '15-17点', description: '好的H止张，无3张低花，止叫' },
  { rebid: '4C/4D', points: '15-17点', description: '3张C/D↑，高花止张不好，逼局' },
  { rebid: '4NT', points: '15-16点', description: '3-3低花，低限，逼叫，示选' }
])

// 1NT-2S-3C-3S后的再叫
const oneNTTwoSpadeThreeClubThreeSpadeRebid = ref([
  { rebid: '3NT', points: '15-17点', description: '好的S止张，无3张低花，止叫' },
  { rebid: '4C/4D', points: '15-17点', description: '3张C/D↑，高花止张不好，逼局' },
  { rebid: '4H', points: '15-17点', description: '5张H，无3张低花配合' },
  { rebid: '4NT', points: '15-16点', description: '3-3低花，低限，逼叫，示选' }
])

// 跳叫3阶高花：1NT-3H后的应叫
const oneNTThreeHeartResponses = ref([
  { rebid: '3S', points: '15-17点', description: '4张以上S，H止张不好，准备打4-3将牌' },
  { rebid: '3NT', points: '15-17点', description: '好的H止张' },
  { rebid: '4C/4D', points: '15-17点', description: '4张以上C/D，满贯兴趣' },
  { rebid: '4H', points: '16-17点', description: '5张S，S配合的满贯兴趣，H无废点' },
  { rebid: '4S', points: '15-16点', description: '5张S，止叫' },
  { rebid: '4NT', points: '15-17点', description: '要求同伴叫出5张低花，H止张不好' }
])

// 跳叫3阶高花：1NT-3S后的应叫
const oneNTThreeSpadeResponses = ref([
  { rebid: '3NT', points: '15-17点', description: '好的S止张' },
  { rebid: '4C/4D', points: '15-17点', description: '4张以上C/D，满贯兴趣' },
  { rebid: '4H', points: '15-17点', description: '通常5张H，也可能是好的4张H' },
  { rebid: '4S', points: '16-17点', description: '4-4低花套，S无废点' },
  { rebid: '4NT', points: '15-16点', description: '要求同伴叫出5张低花，S止张不好' }
])

// 1NT被敌方加倍后的应叫
const oneNTDoubledResponses = ref([
  { bid: '××', points: '0-4点', description: '要求同伴叫2C；5张以上C；或4张C+另外4张' },
  { bid: '2C', points: '0-6点', description: '5张以上D；转移叫' },
  { bid: '2D', points: '0-6点', description: '5张以上H；转移叫' },
  { bid: '2H', points: '0-6点', description: '5张以上S；转移叫' },
  { bid: '2S', points: '0-6点', description: '5张以上S；要求坐庄' },
  { bid: '2NT', points: '7-10点', description: '要求同伴叫3C；任意5-5以上双套，逼局' },
  { bid: '3C/3D', points: '3-6点', description: '6张以上C/D，阻击叫' },
  { bid: '3H/3S', points: '3-6点', description: '6张以上H/S，阻击叫' },
  { bid: '4D', points: '7-10点', description: '6张以上H，德克萨斯转移叫' },
  { bid: '4H', points: '7-10点', description: '6张以上S，德克萨斯转移叫' }
])

// 1NT-(×)-2NT-3C后的再叫
const oneNTDoubledTwoNTThreeClubRebid = ref([
  { rebid: '3D', points: '7-10点', description: '双低套，5张D+5张C；逼局' },
  { rebid: '3H', points: '7-10点', description: '5张H+5张低花；逼局。开叫人有H支持叫4H；无H支持叫3NT，之后应叫人叫出5张低花' },
  { rebid: '3S', points: '7-10点', description: '5张S+另外5张套；逼局。开叫人有S支持叫4S；无S支持叫3NT，之后应叫人叫出另外5张套' }
])

// 1NT-2C被敌方加倍后的再叫
const oneNTStaymanDoubledRebid = ref([
  { rebid: 'Pass', points: '15-17点', description: '不符合下面的叫品' },
  { rebid: '××', points: '15-17点', description: '好的4张以上C，建议放罚' },
  { rebid: '2D', points: '15-17点', description: '5张以上D，无4张高花，不逼叫' },
  { rebid: '2H/2S', points: '15-17点', description: '4张H/S，不逼叫' },
  { rebid: '3C', points: '16-17点', description: '4张H+4张S，高限，逼叫' }
])

// 1NT-2D被敌方加倍后的再叫
const oneNTJacobyTwoDiamondDoubledRebid = ref([
  { rebid: 'Pass', points: '15-17点', description: '没有3张H' },
  { rebid: '××', points: '15-17点', description: '3张以上H，没有D止张' },
  { rebid: '2H', points: '15-17点', description: '3张以上H，有D止张，不逼叫' },
  { rebid: '3H', points: '16-17点', description: '4张以上H，高限，不逼叫' }
])

// 1NT-2H被敌方加倍后的再叫
const oneNTJacobyTwoHeartDoubledRebid = ref([
  { rebid: 'Pass', points: '15-17点', description: '没有3张S' },
  { rebid: '××', points: '15-17点', description: '3张以上S，没有H止张' },
  { rebid: '2S', points: '15-17点', description: '3张以上S，有H止张，不逼叫' },
  { rebid: '3S', points: '16-17点', description: '4张以上S，高限，不逼叫' }
])

// 1NT-(2D)后的应叫
const oneNTTwoDiamondInterferenceResponses = ref([
  { bid: '×', points: '6点以上', description: '技术性加倍，未叫花色至少3张' },
  { bid: '2H/2S', points: '3-8点', description: '5张以上H/S，不逼叫' },
  { bid: '2NT', points: '3点以上', description: '要求同伴叫3C；莱本索尔约定叫' },
  { bid: '3C', points: '9点以上', description: '5张以上C，逼局' },
  { bid: '3D', points: '9点以上', description: 'Stayman问叫，D没有止张，逼局' },
  { bid: '3H/3S', points: '9点以上', description: '5张以上H/S，逼局' },
  { bid: '3NT', points: '9-15点', description: 'D没有止张，无4张高花' },
  { bid: '4D', points: '7-10点', description: '6张以上H，德克萨斯转移叫' },
  { bid: '4H', points: '7-10点', description: '6张以上S，德克萨斯转移叫' }
])

// 1NT-(2H)后的应叫
const oneNTTwoHeartInterferenceResponses = ref([
  { bid: '×', points: '6点以上', description: '技术性加倍，未叫花色至少3张' },
  { bid: '2S', points: '3-8点', description: '5张以上S，不逼叫' },
  { bid: '2NT', points: '3点以上', description: '要求同伴叫3C；莱本索尔约定叫' },
  { bid: '3C/3D', points: '9点以上', description: '5张以上C/D，逼局' },
  { bid: '3H', points: '9点以上', description: 'Stayman问叫，H没有止张，逼局' },
  { bid: '3S', points: '9点以上', description: '5张以上S，逼局' },
  { bid: '3NT', points: '9-15点', description: 'H没有止张，无4张高花' },
  { bid: '4H', points: '7-10点', description: '6张以上S，德克萨斯转移叫' }
])

// 1NT-(2S)后的应叫
const oneNTTwoSpadeInterferenceResponses = ref([
  { bid: '×', points: '6点以上', description: '技术性加倍，未叫花色至少3张' },
  { bid: '2NT', points: '3点以上', description: '要求同伴叫3C；莱本索尔约定叫' },
  { bid: '3C/3D', points: '9点以上', description: '5张以上C/D，逼局' },
  { bid: '3H', points: '9点以上', description: '5张以上H，逼局' },
  { bid: '3S', points: '9点以上', description: '扣叫，Stayman问叫，S没有止张，逼局' },
  { bid: '3NT', points: '9-15点', description: 'S没有止张，无4张高花' },
  { bid: '4D', points: '7-10点', description: '6张以上H，德克萨斯转移叫' }
])

// 1NT-(3X)后的应叫
const oneNTThreeLevelInterferenceResponses = ref([
  { bid: '×', points: '7点以上', description: '技术性加倍，未叫花色至少3张' },
  { bid: '3/4阶新花', points: '9点以上', description: '5张以上套，逼局' },
  { bid: '3NT', points: '9-14点', description: '进局止叫' },
  { bid: '4阶扣叫低花', points: '5点以上', description: '5-5双高花，逼局' },
  { bid: '4阶扣叫高花', points: '9点以上', description: '5-5双低花，逼局' }
])

// 1NT-(2C兰迪)后的应叫
const oneNTLandyInterferenceResponses = ref([
  { bid: '×', points: '6点以上', description: '至少有一个4张以上高花，能惩罚一门高花' },
  { bid: '2D', points: '4-8点', description: '5张以上D，不逼叫' },
  { bid: '2H', points: '4-8点', description: '5-5双低花套，逼叫' },
  { bid: '2S', points: '9点以上', description: '5-5双低花套，逼局' },
  { bid: '2NT', points: '3点以上', description: '要求同伴叫3C；莱本索尔约定叫' },
  { bid: '3C/3D', points: '9点以上', description: '5张以上C/D，逼局' },
  { bid: '3H/3S', points: '9点以上', description: '5-4低花，所叫H/S单缺，逼局' }
])

// 1NT-(2NT特殊无将)后的应叫
const oneNTUnusualTwoNTInterferenceResponses = ref([
  { bid: '3C', points: '7点以上', description: '5-4高花，逼叫' },
  { bid: '3D', points: '4-7点', description: '5-5高花，逼叫' },
  { bid: '3H/3S', points: '9点以上', description: '5张以上H/S，逼局' },
  { bid: '3NT', points: '9-13点', description: '进局止叫' },
  { bid: '4C', points: '8点以上', description: '5-5高花，逼局' },
  { bid: '4D', points: '7点以上', description: '6张以上H，德克萨斯转移叫；后止叫或关键张问叫' },
  { bid: '4H', points: '7点以上', description: '6张以上S，德克萨斯转移叫；后止叫或关键张问叫' }
])

// 莱本索尔约定叫基本结构
const oneNTLebensohlResponses = ref([
  { bid: 'Pass', points: '0-7点', description: '均型，弱牌' },
  { bid: '2阶花色', points: '0-7点', description: '5张以上套，止叫' },
  { bid: '2NT', points: '3点以上', description: '要求同伴叫3C；莱本索尔约定叫' },
  { bid: '3阶花色', points: '9点以上', description: '5张以上套，逼局' },
  { bid: '3阶扣叫', points: '9点以上', description: 'Stayman问叫，敌花色无止张；有止张时先叫2NT再扣叫' },
  { bid: '3NT', points: '9-15点', description: '敌方所叫花色没有止张；有止张时先叫2NT再叫3NT' }
])

// 1NT-(2C)-2NT-3C后的再叫
const oneNTLandyLebensohlRebid = ref([
  { rebid: 'Pass', points: '3-7点', description: '6张以上C' },
  { rebid: '3D', points: '7-8点', description: '5张以上D，邀叫' },
  { rebid: '3H/3S', points: '9点以上', description: '所叫花色H/S有止张，逼局' },
  { rebid: '3NT', points: '9-15点', description: 'H和S有止张' }
])

// 1NT-(2D/2M)-2NT-3C后的再叫
const oneNTLebensohlGeneralRebid = ref([
  { rebid: 'Pass', points: '3-7点', description: '6张以上C' },
  { rebid: '3阶新花', points: '3-6点/7-8点', description: '低于争叫花色：3-6点，5张以上套，止叫；高于争叫花色：7-8点，5张以上套，邀叫' },
  { rebid: '3阶扣叫', points: '9点以上', description: '斯台曼问叫，敌方所叫花色有止张，逼局' },
  { rebid: '3NT', points: '9-15点', description: '敌方所叫花色有止张' }
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
