<template>
    <div class="bridge-card">
        <h2 class="bridge-title">第十章 防守叫牌</h2>

        <!-- 一、防守叫牌要点 -->
        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 text-bridge-blue">一、防守叫牌要点：</h3>
            <div class="text-sm text-left space-y-2 mb-6">
                <p><strong>1、敌方开叫，我方争叫：</strong></p>
                <div class="ml-4 space-y-1">
                    <p>1阶花色争叫——7点以上，好的5张以上套。</p>
                    <p>2阶花色争叫——11点以上，好的5张以上套。</p>
                    <p>花色跳争叫——6—10点，好的6张以上套，阻击叫。</p>
                </div>

                <p><strong>2、</strong>争叫人的同伴应叫新花色不逼叫；扣叫表示10点以上，对同伴的争叫花色有支持，逼叫；扣叫后出新花为自然叫，逼叫。</p>

                <p><strong>3、</strong>在竞叫中争叫使用技术性加倍、惩罚性加倍和应叫性加倍。</p>

                <p><strong>4、</strong>敌方开叫1NT后，我方争叫2♣️为兰迪约定叫——表示5－4以上双高花；其他为自然叫。</p>

                <p><strong>5、</strong>敌方花色开叫后，我方使用迈克尔斯扣叫和不寻常2NT；4阶关煞叫后，4NT是双套牌。</p>

                <p><strong>6、</strong>敌方1阶花色开叫后，我方在平衡位置争叫或加倍比直接位置略低1~2点；争叫1NT为弱无将12~15点；争叫2NT为强无将19~21点。</p>

                <p><strong>7、</strong>敌方精确1♣️开叫，我方使用梅斯约定叫，加倍：表示5－4以上双高花；1NT：表示5－4以上双低花。</p>
            </div>
        </div>

        <!-- 二、对精确1C开叫的争叫及应叫 -->
        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 text-bridge-blue">二、对精确1♣️开叫的争叫及应叫：</h3>

            <!-- 基本争叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（精确1♣️） —— ？</h4>
                <el-table :data="precisionOneClubOvercalls" border stripe>
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

            <!-- 非跳叫花色争叫后的应叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">1、非跳叫花色争叫后的应叫：</h4>
                <p class="text-sm text-left mb-3">
                    其基本策略是①简单新花为建设性自然叫；②高花争叫后1NT为建设性加叫；③2NT为限制性加叫；④跳加叫为阻击叫；⑤高花争叫后跳叫新花为配合显示叫。⑥双跳新花一般为斯普林特。</p>

                <!-- 1D争叫后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♣️）—1♦️—（/）— ？（同伴1♦️=8—16点，5张以上♦️）</h5>
                    <el-table :data="oneDiamondOvercallResponses" border stripe>
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

                <!-- 1H争叫后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♣️）—1♥️—（/）— ？（同伴1♥️=8—16点，5张以上♥️）</h5>
                    <el-table :data="oneHeartOvercallResponses" border stripe>
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

                <!-- 1S争叫后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♣️）—1♠️—（/）— ？（同伴1♠️=8—16点，5张以上♠️）</h5>
                    <el-table :data="oneSpadeOvercallResponses" border stripe>
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

                <!-- 2C争叫后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♣️）—2♣️—（/）— ？（同伴2♣️=8—16点，5张以上♣️）</h5>
                    <el-table :data="twoClubOvercallResponses" border stripe>
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
            </div>

            <!-- 同伴双套牌争叫后的应叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">2、同伴双套牌争叫后的应叫：</h4>

                <!-- 加倍后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♣️）— ×—（/）— ？（同伴×= 6点以上，双高花5-4以上）</h5>
                    <el-table :data="doubleOvercallResponses" border stripe>
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

                <!-- 1NT后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♣️）— 1NT—（/）— ？（同伴1NT= 6点以上，双低花5-4以上）
                    </h5>
                    <el-table :data="oneNTOvercallResponses" border stripe>
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

                <!-- 2NT后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♣️）— 2NT—（/）— ？（同伴2NT= 8点以上，双低花5-5以上）
                    </h5>
                    <el-table :data="twoNTOvercallResponses" border stripe>
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
            </div>
        </div>

        <!-- 三、对自然1阶花色的争叫及应叫 -->
        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 text-bridge-blue">三、对自然1阶花色的争叫及应叫：</h3>

            <!-- 对自然1C/1D的争叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（自然1♣️/1♦️）— ？</h4>
                <el-table :data="naturalMinorOvercalls" border stripe>
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

            <!-- 对1H的争叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♥️）—— ？</h4>
                <el-table :data="oneHeartNaturalOvercalls" border stripe>
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

            <!-- 对1S的争叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♠️）—— ？</h4>
                <el-table :data="oneSpadeNaturalOvercalls" border stripe>
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

            <!-- 非跳叫花色争叫后的应叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">1、非跳叫花色争叫后的应叫：</h4>
                <p class="text-sm text-left mb-3">其基本策略是—— ①简单新花为建设性自然叫； ②NT为建设性叫牌；③扣叫敌方花色为限制性加叫；④跳加叫为阻击叫；⑤跳扣叫为混合加叫；
                    ⑥跳叫新花为自然邀叫；⑦双跳新花一般为斯普林特。</p>

                <!-- 1D-1H后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♦️）—1♥️—（/）— ？（同伴1♥️=8—16点，5张以上♥️）</h5>
                    <el-table :data="oneDiamondOneHeartResponses" border stripe>
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

                <!-- 1D-1S后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♦️）—1♠️—（/）— ？（同伴1♠️=8—16点，5张以上♠️）</h5>
                    <el-table :data="oneDiamondOneSpadeResponses" border stripe>
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

                <!-- 1D-2C后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♦️）—2♣️—（/）— ？（同伴2♣️=12—16点，5张以上♣️）</h5>
                    <el-table :data="oneDiamondTwoClubResponses" border stripe>
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

                <!-- 1H-2C后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♥️）—2♣️—（/）— ？（同伴2♣️=12—16点，5张以上♣️）</h5>
                    <el-table :data="oneHeartTwoClubResponses" border stripe>
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
            </div>

            <!-- 同伴迈克尔斯扣叫后的应叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">2、同伴迈克尔斯扣叫后的应叫：</h4>

                <!-- 1C-2C后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♣️）—2♣️—（/）—
                        ？（同伴2♣️=7点以上，迈克尔斯扣叫，5张♥️＋5张♠️）</h5>
                    <el-table :data="oneClubTwoClubMichaelsResponses" border stripe>
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

                <!-- 1D-2D后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♦️）—2♦️—（/）—
                        ？（同伴2♦️=7点以上，迈克尔斯扣叫，5张♥️＋5张♠️）</h5>
                    <el-table :data="oneDiamondTwoDiamondMichaelsResponses" border stripe>
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

                <!-- 1H-2H后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♥️）—2♥️—（/）—
                        ？（同伴2♥️=8点以上，迈克尔斯扣叫，5张♠️＋5张低花）</h5>
                    <el-table :data="oneHeartTwoHeartMichaelsResponses" border stripe>
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

                <!-- 2NT问低花后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♥️）—2♥️—（/）—2NT（2NT=12点以上，问低花）（/）——？</h5>
                    <el-table :data="michaelsTwoNTAskResponses" border stripe>
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

                <div class="mb-4">
                    <p class="text-sm text-left mb-3"><strong>注意：</strong>第四家扣叫开叫花色有不同的含义（1♥️）— / —（/）—2♥️；
                        2♥️表示：16点以上，5－5任意双套，或6张以上单套。在同伴应叫最长花色后，扣叫人叫新花为单套牌；继续扣叫为5－5未叫两套。</p>
                    <p class="text-sm text-left mb-3">（1♣️）— / —（1♥️）—2♣️/2♥️； 2♣️/2♥️表示：10点以上，所叫花色为6张以上套的自然叫。</p>
                </div>
            </div>

            <!-- 同伴不寻常2NT争叫后的应叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">3、同伴不寻常2NT争叫后的应叫：</h4>

                <!-- 1D-2NT后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♦️）— 2NT—（/）— ？（同伴2NT=8点以上，5张♥️＋5张♣️）
                    </h5>
                    <el-table :data="oneDiamondTwoNTUnusualResponses" border stripe>
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

                <!-- 1H-2NT后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♥️）— 2NT—（/）— ？（同伴2NT=8点以上，5张♣️＋5张♦️）
                    </h5>
                    <el-table :data="oneHeartTwoNTUnusualResponses" border stripe>
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

                <!-- 平衡位置2NT后的应叫 -->
                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♥️）— / —（1♠️）—
                        2NT（2NT=8点以上，5张♣️＋5张♦️）（/）——？</h5>
                    <el-table :data="balancingTwoNTUnusualResponses" border stripe>
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
            </div>

            <!-- 三明治1NT争叫后的应叫 -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">4、三明治1NT争叫后的应叫：</h4>
                <p class="text-sm text-left mb-3">敌方开叫人和应叫人叫过2门花色，同伴争叫1NT为技术性，表示——7—11点，未叫花色5－4以上，不逼叫。</p>

                <div class="mb-4">
                    <h5 class="text-md font-semibold mb-2 text-bridge-green">（1♣️）—/—（1♥️）—1NT（1NT = 7—11点，未叫花色5－4以上）（/）
                        — ？
                    </h5>
                    <el-table :data="sandwichOneNTResponses" border stripe>
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
            </div>

            <!-- 五、敌方无将开叫后的争叫及应叫 -->
            <div class="mb-8">
                <h3 class="text-xl font-bold mb-4 text-bridge-blue">五、敌方无将开叫后的争叫及应叫：</h3>

                <!-- 对1NT的争叫 -->
                <div class="mb-6">
                    <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1NT）—— ？（敌方1NT=15—17点，均型牌）</h4>
                    <el-table :data="oneNTOpponentOvercalls" border stripe>
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

                <!-- 兰迪约定叫后的应叫 -->
                <div class="mb-6">
                    <h4 class="text-lg font-semibold mb-3 text-bridge-green">兰迪约定叫后的应叫：</h4>

                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">（1NT）—2♣️—（/）—
                            ？（同伴2♣️=8点以上，兰迪约定叫，5—4以上双高花）
                        </h5>
                        <el-table :data="landyTwoClubResponses" border stripe>
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

                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">（1NT）—2♣️—（/）—2NT（2NT=10点以上，问叫）（/）— ？
                        </h5>
                        <el-table :data="landyTwoNTAskResponses" border stripe>
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
                </div>

                <!-- 对2NT的争叫 -->
                <div class="mb-6">
                    <h4 class="text-lg font-semibold mb-3 text-bridge-green">（2NT）—— ？（敌方2NT=20—21点，均型牌）</h4>
                    <el-table :data="twoNTOpponentOvercalls" border stripe>
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

                <!-- 对3NT的争叫 -->
                <div class="mb-6">
                    <h4 class="text-lg font-semibold mb-3 text-bridge-green">（3NT）—— ？（敌方3NT=9—12点，有一个坚固的7张以上低花套）</h4>
                    <el-table :data="threeNTOpponentOvercalls" border stripe>
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
            </div>

            <!-- 六、对敌方2C开叫的争叫 -->
            <div class="mb-8">
                <h3 class="text-xl font-bold mb-4 text-bridge-blue">六、对敌方2♣️开叫的争叫：</h3>

                <!-- 对精确2C的争叫 -->
                <div class="mb-6">
                    <h4 class="text-lg font-semibold mb-3 text-bridge-green">（精确2♣️）— ？（精确2♣️=11—15点，6张以上♣️或5张以上♣️＋4张高花）
                    </h4>
                    <el-table :data="precisionTwoClubOvercalls" border stripe>
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

                <!-- 对自然2C的争叫 -->
                <div class="mb-6">
                    <h4 class="text-lg font-semibold mb-3 text-bridge-green">（自然2♣️）— ？（自然2♣️=22点以上，任意牌型，或18点以上，9个以上赢墩）
                    </h4>
                    <el-table :data="naturalTwoClubOvercalls" border stripe>
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
            </div>

            <!-- 七、对敌方精确2D开叫的争叫 -->
            <div class="mb-8">
                <h3 class="text-xl font-bold mb-4 text-bridge-blue">七、对敌方精确2♦️开叫的争叫：</h3>

                <div class="mb-6">
                    <h4 class="text-lg font-semibold mb-3 text-bridge-green">（精确2♦️）— ？（敌方2♦️=11—14点，4-4-1-4或4-4-0-5牌型）
                    </h4>
                    <el-table :data="precisionTwoDiamondOvercalls" border stripe>
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
            </div>

            <!-- 八、对敌方2阶阻击叫的争叫及莱本索尔约定叫 -->
            <div class="mb-8">
                <h3 class="text-xl font-bold mb-4 text-bridge-blue">八、对敌方2阶阻击叫的争叫及莱本索尔约定叫：</h3>

                <!-- 对敌方2阶阻击叫的争叫 -->
                <div class="mb-6">
                    <h4 class="text-lg font-semibold mb-3 text-bridge-green">1、对敌方2阶阻击叫的争叫</h4>

                    <!-- 对2D的争叫 -->
                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">（2♦️）—— ？（敌方2♦️=6—10点，6张以上♦️，阻击叫）</h5>
                        <el-table :data="twoDiamondPreemptOvercalls" border stripe>
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

                    <!-- 对2H的争叫 -->
                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">（2♥️）—— ？（敌方2♥️=6—10点，6张以上♥️，阻击叫）</h5>
                        <el-table :data="twoHeartPreemptOvercalls" border stripe>
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

                    <!-- 对2S的争叫 -->
                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">（2♠️）—— ？（敌方2♠️=6—10点，6张以上♠️，阻击叫）</h5>
                        <el-table :data="twoSpadePreemptOvercalls" border stripe>
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
                </div>

                <!-- 莱本索尔约定叫 -->
                <div class="mb-6">
                    <h4 class="text-lg font-semibold mb-3 text-bridge-green">2、莱本索尔约定叫</h4>

                    <!-- 2D加倍后的应叫 -->
                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">（2♦️）—×—（/）—
                            ？（同伴×=13点以上，技术性加倍；未叫花色3张以上）</h5>
                        <el-table :data="twoDiamondDoubleResponses" border stripe>
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

                    <!-- 莱本索尔2NT后的应叫 -->
                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">
                            （2♦️）—×—（/）—2NT（2NT=莱本索尔约定叫，要求同伴叫3♣️）（/）—3♣️—（/）— ？</h5>
                        <el-table :data="lebensohl2NTAfter2DResponses" border stripe>
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

                    <!-- 2H加倍后的应叫 -->
                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">（2♥️）—×—（/）—
                            ？（同伴×=13点以上，技术性加倍；未叫花色3张以上）</h5>
                        <el-table :data="twoHeartDoubleResponses" border stripe>
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

                    <!-- 莱本索尔2NT后的应叫(2H) -->
                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">
                            （2♥️）—×—（/）—2NT（2NT=莱本索尔约定叫，要求同伴叫3♣️）（/）—3♣️—（/）— ？</h5>
                        <el-table :data="lebensohl2NTAfter2HResponses" border stripe>
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

                    <!-- 2S加倍后的应叫 -->
                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">（2♠️）—×—（/）—
                            ？（同伴×=13点以上，技术性加倍；未叫花色3张以上）</h5>
                        <el-table :data="twoSpadeDoubleResponses" border stripe>
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

                    <!-- 莱本索尔2NT后的应叫(2S) -->
                    <div class="mb-4">
                        <h5 class="text-md font-semibold mb-2 text-bridge-green">
                            （2♠️）—×—（/）—2NT（2NT=莱本索尔约定叫，要求同伴叫3♣️）（/）—3♣️—（/）— ？</h5>
                        <el-table :data="lebensohl2NTAfter2SResponses" border stripe>
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
                </div>
            </div>
        </div>

        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 text-bridge-blue">九、平衡位置的争叫</h3>
            <!-- （1C）— / —（/）—  ？ -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♣️）— / —（/）— ？</h4>

                <!-- （1C）— / —（/）—  ？ -->
                <div class="mb-4">
                    <el-table :data="balancingOvercalls1C" border stripe>
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
            </div>

            <!-- （1D）— / —（/）—  ？ -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♦️）— / —（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancingOvercalls1D" border stripe>
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
            </div>

            <!-- （1H）— / —（/）—  ？ -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♥️）— / —（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancingOvercalls1H" border stripe>
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
            </div>

            <!-- （1S）— / —（/）—  ？ -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♠️）— / —（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancingOvercalls1S" border stripe>
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
            </div> 
            
            <!-- 平衡位置2阶争叫后的继续叫牌 -->
			<!-- （1D）—/—（/）—2D  （/）— ？-->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♦️）— / —（/）— 2♦️（16点以上，5－5任意双套，或单套强牌，逼叫）（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2DAfter1D" border stripe>
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
            </div>

            <!-- （1D）—/ —（/）—2D  （/）—2H—（/）— ？  -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♦️）— / —（/）— 2♦️（5－5任意双套，或单套强牌） （/）—2♥️—（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2DAfter1D_2H" border stripe>
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
            </div>

            <!-- （1D）—/ —（/）—2D  （/）—2S—（/）— ？  -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♦️）— / —（/）— 2♦️（5－5任意双套，或单套强牌） （/）—2♠️—（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2DAfter1D_2S" border stripe>
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
            </div>

            <!-- （1D）—/ —（/）—2D  （/）—3C—（/）— ？  -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♦️）— / —（/）— 2♦️（5－5任意双套，或单套强牌） （/）—3♣️—（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2DAfter1D_3C" border stripe>
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
            </div>

            <!-- （1H）—/—（/）—2H  （/）— ？-->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♥️）— / —（/）— 2♥️（16点以上，5－5任意双套，或单套强牌，逼叫）（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2HAfter1H" border stripe>
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
            </div>

            <!-- （1H）—/ —（/）—2H  （/）—2S—（/）— ？  -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♥️）— / —（/）— 2♥️（16点以上，5－5任意双套，或单套强牌） （/）—2♠️—（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2HAfter1H_2S" border stripe>
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
            </div>

            <!-- （1H）—/ —（/）—2H  （/）—3C—（/）— ？  -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♥️）— / —（/）— 2♥️（16点以上，5－5任意双套，或单套强牌） （/）—3♣️—（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2HAfter1H_3C" border stripe>
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
            </div>

            <!-- （1H）—/ —（/）—2H  （/）—3D—（/）— ？  -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♥️）— / —（/）— 2♥️（16点以上，5－5任意双套，或单套强牌） （/）—3♦️—（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2HAfter1H_3D" border stripe>
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
            </div>

            <!-- （1S）—/—（/）—2S  （/）— ？-->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♠️）— / —（/）— 2♠️（16点以上，5－5任意双套，或单套强牌，逼叫）（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2SAfter1S" border stripe>
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
            </div>

            <!-- （1S）—/ —（/）—2S  （/）—3C—（/）— ？  -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♠️）— / —（/）— 2♠️（16点以上，5－5任意双套，或单套强牌） （/）—3♣️—（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2SAfter1S_3C" border stripe>
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
            </div>

            <!-- （1S）—/ —（/）—2S  （/）—3D—（/）— ？  -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♠️）— / —（/）— 2♠️（16点以上，5－5任意双套，或单套强牌） （/）—3♦️—（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2SAfter1S_3D" border stripe>
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
            </div>

            <!-- （1S）—/ —（/）—2S  （/）—3H—（/）— ？  -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（1♠️）— / —（/）— 2♠️（16点以上，5－5任意双套，或单套强牌） （/）—3♥️—（/）— ？</h4>
                <div class="mb-4">
                    <el-table :data="balancing2SAfter1S_3H" border stripe>
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
            </div>
        </div>

        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 text-bridge-blue">十、对3NT开叫的防守叫牌</h3>
            <!-- （3NT）—  ？ -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（3NT）— ？</h4>                
                <div class="mb-4">
                    <el-table :data="against3NTOpening" border stripe>
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
            </div>
        </div>

        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 text-bridge-blue">十一、对那米亚茨4♣️/4♦️开叫的防守叫牌</h3>
            <!-- （4C/4D）—  ？ -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（4♣️/4♦️）— ？</h4>                
                <div class="mb-4">
                    <el-table :data="againstNamyats4C4D" border stripe>
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
            </div>
        </div>

        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 text-bridge-blue">十二、对自然4♣️/4♦️开叫的防守叫牌</h3>
            <!-- （4C/4D）—  ？ -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（4♣️/4♦️）— ？</h4>                
                <div class="mb-4">
                    <el-table :data="againstNatural4C4D" border stripe>
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
            </div>
        </div>

        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 text-bridge-blue">十三、对4H/4S开叫的防守叫牌</h3>
            <!-- （4H/4S）—  ？ -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（4♥️/4♠️）— ？</h4>                
                <div class="mb-4">
                    <el-table :data="against4H4S" border stripe>
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
            </div>
        </div>

        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 text-bridge-blue">十二、对自然5♣️/5♦️开叫的防守叫牌</h3>
            <!-- （5C/5D）—  ？ -->
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3 text-bridge-green">（5♣️/5♦️）— ？</h4>                
                <div class="mb-4">
                    <el-table :data="against5C5D" border stripe>
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
        .replace(/×/g, '×')
}

// 点力标签类型
const getPointTagType = (points: string): 'danger' | 'warning' | 'success' | 'info' | 'primary' => {
    if (points.includes('0') || points.includes('1') || points.includes('2') || points.includes('3')) {
        return 'info';
    } else if (points.includes('4') || points.includes('5') || points.includes('6') || points.includes('7')) {
        return 'warning';
    } else if (points.includes('8') || points.includes('9') || points.includes('10') || points.includes('11')) {
        return 'success';
    } else {
        return 'danger';
    }
};

// 对精确1C开叫的争叫数据
const precisionOneClubOvercalls = ref([
    { bid: 'Pass', points: '—', description: '不能进行争叫的一手弱牌；或16点以上，均型好牌。' },
    { bid: '×', points: '6点以上', description: '5－4以上双高花。' },
    { bid: '1D/1H/1S', points: '8—16点', description: '5张以上♦️/♥️/♠️；不逼叫。' },
    { bid: '1NT', points: '6点以上', description: '5－4以上双低花。' },
    { bid: '2C', points: '8—16点', description: '5张以上♣️；不逼叫。' },
    { bid: '2D/2H/2S', points: '6—10点', description: '6张以上♦️/♥️/♠️，阻击叫。' },
    { bid: '2NT', points: '8点以上', description: '5－5以上双低花。' },
    { bid: '3C/3D', points: '8—11点', description: '6~7张以上♣️/♦️，阻击叫。' },
    { bid: '3H/3S', points: '8—11点', description: '6~7张以上♥️/♠️，阻击叫。' },
    { bid: '4C/4D/4H/4S', points: '8—12点', description: '7张以上♣️/♦️/♥️/♠️，7个以上赢墩，阻击叫。' },
    { bid: '5C/5D', points: '8—12点', description: '7张以上♣️/♦️，8个以上赢墩，阻击叫。' }
])

// 1D争叫后的应叫数据
const oneDiamondOvercallResponses = ref([
    { bid: 'Pass', points: '0—8点', description: '不符合下面的叫品。' },
    { bid: '1H/1S', points: '7点以上', description: '5张以上♥️/♠️，不逼叫。' },
    { bid: '1NT', points: '9—14点', description: '3张以下♦️，均型牌。' },
    { bid: '2C', points: '7点以上', description: '5张以上♣️，通常没有♦️支持，不逼叫。' },
    { bid: '2D', points: '7—12点', description: '3张以上♦️，不逼叫。' },
    { bid: '2H/2S', points: '11—13点', description: '6张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '11点以上', description: '4张以上♦️，限制性加叫，逼叫一轮。' },
    { bid: '3C', points: '9—13点', description: '好的6张以上♣️，建设性，不逼叫。' },
    { bid: '3D', points: '4—10点', description: '4张以上♦️，不逼叫。' },
    { bid: '3M/4C', points: '15点以上', description: '4张以上♦️，所叫花色♥️/♠️/♣️单缺，斯普林特，逼局。' },
    { bid: '3NT', points: '15—19点', description: '均型牌。' },
    { bid: '4D', points: '8—11点', description: '5张以上♦️，不逼叫。' },
    { bid: '4H/4S', points: '8—13点', description: '7张以上♥️/♠️，7个以上赢墩。' }
])

// 1H争叫后的应叫数据
const oneHeartOvercallResponses = ref([
    { bid: 'Pass', points: '0—8点', description: '不符合下面的叫品。' },
    { bid: '1S', points: '7点以上', description: '5张以上♠️，通常没有♥️支持，不逼叫。' },
    { bid: '1NT', points: '10点以上', description: '3张♥️，建设性加叫，逼叫一轮。' },
    { bid: '2C/2D', points: '7点以上', description: '5张以上♣️/♦️，通常没有♥️支持，不逼叫。' },
    { bid: '2H', points: '4—9点', description: '3张♥️，不逼叫。' },
    { bid: '2S', points: '11点以上', description: '3~4张♥️，6张以上♠️，配合显示叫，逼叫一轮。' },
    { bid: '2NT', points: '10点以上', description: '4张以上♥️，限制性加叫，逼叫一轮。' },
    { bid: '3C', points: '11点以上', description: '3~4张♥️，6张以上♣️，配合显示叫，逼叫一轮。' },
    { bid: '3D', points: '11点以上', description: '3~4张♥️，6张以上♦️，配合显示叫，逼叫一轮。' },
    { bid: '3H', points: '4—9点', description: '4张以上♥️，不逼叫。' },
    { bid: '3S', points: '14点以上', description: '4张以上♥️，所叫花色♠️单缺，斯普林特，逼局。' },
    { bid: '3NT', points: '15—19点', description: '均型牌。' },
    { bid: '4C/4D', points: '14点以上', description: '4张以上♥️，所叫花色♣️/♦️单缺，斯普林特，逼局。' },
    { bid: '4H', points: '8—13点', description: '5张以上♥️。' }
])

// 1S争叫后的应叫数据
const oneSpadeOvercallResponses = ref([
    { bid: 'Pass', points: '0—8点', description: '不符合下面的叫品。' },
    { bid: '1NT', points: '10点以上', description: '3张♠️，建设性加叫，逼叫一轮。' },
    { bid: '2C', points: '7点以上', description: '5张以上♣️，通常没有♠️支持，不逼叫。' },
    { bid: '2D', points: '7点以上', description: '5张以上♦️，通常没有♠️支持，不逼叫。' },
    { bid: '2H', points: '7点以上', description: '5张以上♥️，通常没有♠️支持，不逼叫。' },
    { bid: '2S', points: '4—9点', description: '3张♠️，不逼叫。' },
    { bid: '2NT', points: '10点以上', description: '4张以上♠️，限制性加叫，逼叫一轮。' },
    { bid: '3C', points: '11点以上', description: '3~4张♠️，6张以上♣️，配合显示叫，逼叫一轮。' },
    { bid: '3D', points: '11点以上', description: '3~4张♠️，6张以上♦️，配合显示叫，逼叫一轮。' },
    { bid: '3H', points: '11点以上', description: '3~4张♠️，6张以上♥️，配合显示叫，逼叫一轮。' },
    { bid: '3S', points: '4—9点', description: '4张以上♠️，不逼叫。' },
    { bid: '3NT', points: '15—19点', description: '均型牌。' },
    { bid: '4C/4D', points: '14点以上', description: '4张以上♠️，所叫花色♣️/♦️单缺，斯普林特，逼局。' },
    { bid: '4H', points: '8—13点', description: '7张以上♥️，7个以上赢墩。' },
    { bid: '4S', points: '8—13点', description: '5张以上♠️。' }
])

// 2C争叫后的应叫数据
const twoClubOvercallResponses = ref([
    { bid: 'Pass', points: '0—10点', description: '不符合下面的叫品。' },
    { bid: '2D', points: '8点以上', description: '6张以上♦️，通常没有♣️支持，不逼叫。' },
    { bid: '2H', points: '8点以上', description: '6张以上♥️，通常没有♣️支持，不逼叫。' },
    { bid: '2S', points: '8点以上', description: '6张以上♠️，通常没有♣️支持，不逼叫。' },
    { bid: '2NT', points: '11点以上', description: '4张以上♣️，限制性加叫，逼叫一轮。' },
    { bid: '3C', points: '8—10点', description: '3张以上♣️，不逼叫。' },
    { bid: '3NT', points: '15—19点', description: '均型牌。' },
    { bid: '4C', points: '7—10点', description: '4张以上♣️，阻击叫。' },
    { bid: '4H', points: '8—13点', description: '7张以上♥️，7个以上赢墩。' },
    { bid: '4S', points: '8—13点', description: '7张以上♠️，7个以上赢墩。' }
])

// 加倍后的应叫数据
const doubleOvercallResponses = ref([
    { bid: 'Pass', points: '0—12点', description: '6张以上♣️。' },
    { bid: '1D', points: '0—12点', description: '6张以上♦️，通常没有高花支持，不逼叫。' },
    { bid: '1H/1S', points: '7点以上', description: '3张以上♥️/♠️，不逼叫。' },
    { bid: '1NT', points: '11—14点', description: '通常没有高花支持，不逼叫。' },
    { bid: '2C', points: '11点以上', description: '3张以上♥️/♠️，高花等长，逼叫一轮。' },
    { bid: '2D', points: '10—15点', description: '好的6张以上♦️，通常没有高花支持，不逼叫。' },
    { bid: '2H/2S', points: '8—10点', description: '4张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '15—17点', description: '通常没有高花支持，不逼叫。' },
    { bid: '3H/3S', points: '7—11点', description: '5张以上♥️/♠️，不逼叫。' },
    { bid: '4H/4S', points: '12点以上', description: '5张以上♥️/♠️，不逼叫。' }
])

// 1NT后的应叫数据
const oneNTOvercallResponses = ref([
    { bid: 'Pass', points: '8点以上', description: '通常没有低花支持，不符合其他叫品。' },
    { bid: '2C/2D', points: '7点以上', description: '3张以上♣️/♦️，不逼叫。' },
    { bid: '2H/2S', points: '6点以上', description: '6张以上♥️/♠️，通常没有低花支持，不逼叫。' },
    { bid: '2NT', points: '15—17点', description: '通常没低花花支持，不逼叫。' },
    { bid: '3C/3D', points: '8—13点', description: '4张以上♣️/♦️，不逼叫。' },
    { bid: '4C/4D', points: '10点以上', description: '6张以上♣️/♦️，不逼叫。' }
])

// 2NT后的应叫数据
const twoNTOvercallResponses = ref([
    { bid: 'Pass', points: '8点以上', description: '通常没有低花支持，不符合其他叫品。' },
    { bid: '3C/3D', points: '0—11点', description: '2张以上♣️/♦️，不逼叫。' },
    { bid: '3H/3S', points: '0—14点', description: '6张以上♥️/♠️，通常没有低花支持，不逼叫。' },
    { bid: '4C/4D', points: '12点以上', description: '4张以上♣️/♦️，不逼叫。' }
])

// 对自然1C/1D的争叫数据
const naturalMinorOvercalls = ref([
    { bid: 'Pass', points: '10点以下', description: '不符合其他叫品。' },
    { bid: '×', points: '12点以上', description: '技术性加倍；保证未叫花色3张以上；或17点以上，加倍出套，强牌；或19—20点，加倍后叫NT。' },
    { bid: '1D/1H/1S', points: '8—16点', description: '5张以上♦️/♥️/♠️，不逼叫。' },
    { bid: '1NT', points: '15—18点', description: '♣️/♦️有止张，均型，不逼叫；后续参考1NT开叫。' },
    { bid: '1D→2C', points: '12—16点', description: '5张以上♣️，不逼叫。' },
    { bid: '2C/2D', points: '7点以上', description: '5－5双高花，迈克尔斯扣叫，不逼叫。' },
    { bid: '2H/2S', points: '6—10点', description: '6张以上♥️/♠️，阻击叫。' },
    { bid: '2NT', points: '8点以上', description: '5张♦️/♣️＋5张♥️，不寻常2NT，不逼叫。' },
    { bid: '3C/3D', points: '6—10点', description: '7张以上♣️/♦️，阻击叫。' },
    { bid: '3H/3S', points: '6—10点', description: '7张以上♥️/♠️，阻击叫。' },
    { bid: '3NT', points: '16点以上', description: '坚固的6张以上♦️/♣️，其他花色有止张。' },
    { bid: '4C/4D', points: '16点以上', description: '5－5双高花，迈克尔斯跳叫，逼局。' },
    { bid: '4H/4S', points: '6—12点', description: '7张以上♥️/♠️，根据局况有7~9个赢墩。' }
])

// 对1H的争叫数据
const oneHeartNaturalOvercalls = ref([
    { bid: 'Pass', points: '10点以下', description: '不符合其他叫品。' },
    { bid: '×', points: '12点以上', description: '技术性加倍，保证未叫花色3张以上；或17点以上，加倍出套，强牌；或19—20点，加倍后叫NT。' },
    { bid: '1S', points: '8点以上', description: '5张以上♠️，不逼叫。' },
    { bid: '1NT', points: '15—18点', description: '♥️有止张，均型，不逼叫；后续参考1NT开叫。' },
    { bid: '2C/2D', points: '12点以上', description: '5张以上♣️/♦️，不逼叫。' },
    { bid: '2H', points: '7点以上', description: '5张♠️＋5张低花，迈克尔斯扣叫。' },
    { bid: '2S', points: '6—10点', description: '6张以上♠️，阻击叫。' },
    { bid: '2NT', points: '8点以上', description: '5张♣️＋5张♦️，不寻常2NT，不逼叫。' },
    { bid: '3C/3D', points: '6—10点', description: '7张以上♣️/♦️，阻击叫。' },
    { bid: '3H', points: '16—21点', description: '坚固的6张以上低花套，问同伴有无♥️止张。' },
    { bid: '3S', points: '6—10点', description: '7张以上♠️，阻击叫。' },
    { bid: '3NT', points: '16点以上', description: '坚固的6张以上低花套，其他花色有止张。' }
])

// 对1S的争叫数据
const oneSpadeNaturalOvercalls = ref([
    { bid: 'Pass', points: '10点以下', description: '不符合其他叫品。' },
    { bid: '×', points: '12点以上', description: '技术性加倍，保证未叫花色3张以上；或17点以上，加倍出套，强牌；或19—20点，加倍后叫NT。' },
    { bid: '1NT', points: '15—18点', description: '♠️有止张，不逼叫；后续参考1NT开叫。' },
    { bid: '2C/2D', points: '12点以上', description: '5张以上♣️/♦️，不逼叫。' },
    { bid: '2H', points: '12点以上', description: '5张以上♥️，不逼叫。' },
    { bid: '2S', points: '7点以上', description: '5张♥️＋5张低花，迈克尔斯扣叫。' },
    { bid: '2NT', points: '8点以上', description: '5张♣️＋5张♦️，不寻常2NT，不逼叫。' },
    { bid: '3C/3D', points: '6—10点', description: '7张以上♣️/♦️，阻击叫。' },
    { bid: '3H', points: '6—10点', description: '7张以上♥️，阻击叫。' },
    { bid: '3S', points: '16—21点', description: '坚固的6张以上低花套，问同伴有无♠️止张。' },
    { bid: '3NT', points: '16点以上', description: '坚固的6张以上低花套，其他花色有止张。' }
])

// 1D-1H后的应叫数据
const oneDiamondOneHeartResponses = ref([
    { bid: 'Pass', points: '0—8点', description: '不符合其他叫品。' },
    { bid: '1S', points: '7—13点', description: '5张以上♠️，没有3张♥️，不逼叫。' },
    { bid: '1NT', points: '9—11点', description: '♦️有止张，没有3张♥️，不逼叫。' },
    { bid: '2C', points: '9—13点', description: '5张以上♣️，不逼叫。' },
    { bid: '2D', points: '11点以上', description: '3张以上♥️，限制性加叫；或14点以上，任意牌型逼叫。' },
    { bid: '2H', points: '6—10点', description: '3张以上♥️，不逼叫。' },
    { bid: '2S/3C', points: '10—13点', description: '6张以上♠️/♣️，邀叫。' },
    { bid: '2NT', points: '12—14点', description: '♦️有止张，没有3张♥️，邀叫。' },
    { bid: '3D', points: '10点以上', description: '4张以上♥️，混合加叫；逼叫。' },
    { bid: '3H', points: '3—7点', description: '4张以上♥️，阻击叫。' },
    { bid: '3S', points: '14点以上', description: '4张以上♥️，所叫花色♠️单缺，斯普林特，逼局。' },
    { bid: '4C/4D', points: '14点以上', description: '4张以上♥️，所叫花色♣️/♦️单缺，斯普林特，逼局。' },
    { bid: '3NT', points: '15—19点', description: '♦️有止张，均型牌。' },
    { bid: '4H', points: '8—13点', description: '5张以上♥️。' }
])

// 1D-1S后的应叫数据
const oneDiamondOneSpadeResponses = ref([
    { bid: 'Pass', points: '0—8点', description: '不符合其他叫品。' },
    { bid: '1NT', points: '9—11点', description: '♦️有止张，没有3张♠️，不逼叫。' },
    { bid: '2C', points: '9—13点', description: '5张以上♣️，不逼叫。' },
    { bid: '2D', points: '11点以上', description: '3张以上♠️，限制性加叫；或14点以上，任意牌型逼叫。' },
    { bid: '2H', points: '9—13点', description: '5张以上♥️，不逼叫。' },
    { bid: '2S', points: '6—10点', description: '3张以上♠️，不逼叫。' },
    { bid: '2NT', points: '12—14点', description: '♦️有止张，没有3张♠️，邀叫。' },
    { bid: '3C/3H', points: '10—13点', description: '6张以上♣️/♥️，邀叫。' },
    { bid: '3D', points: '7—10点', description: '4张以上♠️，混合加叫；逼叫。' },
    { bid: '3S', points: '3—7点', description: '4张以上♠️，阻击叫。' },
    { bid: '3NT', points: '15—19点', description: '♦️有止张，均型牌。' },
    { bid: '4C/4D', points: '14点以上', description: '4张以上♠️，所叫花色♣️/♦️单缺，斯普林特，逼局。' },
    { bid: '4S', points: '8—13点', description: '5张以上♠️。' }
])

// 1D-2C后的应叫数据
const oneDiamondTwoClubResponses = ref([
    { bid: 'Pass', points: '0—8点', description: '不符合下面的叫品。' },
    { bid: '2D', points: '10点以上', description: '3张以上♣️，限制性加叫；或13点以上，任意牌型逼叫。' },
    { bid: '2H/2S', points: '7—11点', description: '5张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '9—11点', description: '♦️有止张，没有3张♣️，邀叫。' },
    { bid: '3C', points: '7—10点', description: '3张以上♣️，不逼叫。' },
    { bid: '3D', points: '12—14点', description: '4张以上♣️，♦️单缺，混合加叫；逼叫。' },
    { bid: '3H/3S', points: '10—12点', description: '6张以上♥️/♠️，邀叫。' },
    { bid: '3NT', points: '12—15点', description: '♦️有止张，均型牌。' },
    { bid: '4C', points: '4—9点', description: '4张以上♣️，阻击叫。' }
])

// 1H-2C后的应叫数据
const oneHeartTwoClubResponses = ref([
    { bid: 'Pass', points: '0—8点', description: '不符合其他叫品。' },
    { bid: '2D/2S', points: '7—11点', description: '5张以上♦️/♠️，通常没有♣️支持，不逼叫。' },
    { bid: '2H', points: '10点以上', description: '3张以上♣️，限制性加叫；或13点以上，任意牌型逼叫。' },
    { bid: '2NT', points: '9—11点', description: '♥️有止张，没有3张♣️，邀叫。' },
    { bid: '3C', points: '7—10点', description: '3张以上♣️，不逼叫。' },
    { bid: '3D/3S', points: '10—12点', description: '6张以上♦️/♠️，邀叫。' },
    { bid: '3H', points: '12点以上', description: '4张以上♣️，♥️单缺，混合加叫；逼叫。' },
    { bid: '3NT', points: '12—15点', description: '♥️有止张，均型牌。' },
    { bid: '4C', points: '4—9点', description: '4张以上♣️，阻击叫。' }
])

// 1C-2C迈克尔斯后的应叫数据
const oneClubTwoClubMichaelsResponses = ref([
    { bid: 'Pass', points: '6—15点', description: '6张以上♣️。' },
    { bid: '2D', points: '6—15点', description: '6张以上♦️，不逼叫。' },
    { bid: '2H/2S', points: '0—10点', description: '2张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '14—18点', description: '♣️有止张，不逼叫。' },
    { bid: '3C', points: '14点以上', description: '3张以上♥️/♠️，逼局。' },
    { bid: '3H/3S', points: '10—13点', description: '3张以上♥️/♠️，邀叫。' },
    { bid: '3NT', points: '15点以上', description: '♣️有止张，止叫。' },
    { bid: '4H/4S', points: '6—14点', description: '4张以上♥️/♠️，有牌型，止叫。' }
])

// 1D-2D迈克尔斯后的应叫数据
const oneDiamondTwoDiamondMichaelsResponses = ref([
    { bid: 'Pass', points: '6—15点', description: '6张以上♦️。' },
    { bid: '2H/2S', points: '0—10点', description: '2张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '14—18点', description: '♦️有止张，不逼叫。' },
    { bid: '3C', points: '6—15点', description: '6张以上♣️，没有高花支持，不逼叫。' },
    { bid: '3D', points: '14点以上', description: '3张以上♥️/♠️，逼局。' },
    { bid: '3H/3S', points: '10—13点', description: '3张以上♥️/♠️，邀叫。' },
    { bid: '3NT', points: '15点以上', description: '♦️有止张，止叫。' },
    { bid: '4H/4S', points: '6—14点', description: '4张以上♥️/♠️，有牌型，止叫。' }
])

// 1H-2H迈克尔斯后的应叫数据
const oneHeartTwoHeartMichaelsResponses = ref([
    { bid: '2S', points: '0—13点', description: '2张以上♠️，不逼叫。' },
    { bid: '2NT', points: '12点以上', description: '问低花，逼叫。' },
    { bid: '3C/3D', points: '6—14点', description: '6张以上♣️/♦️，通常♠️单缺，不逼叫。' },
    { bid: '3H', points: '13点以上', description: '3张以上♠️，逼局。' },
    { bid: '3S', points: '9—12点', description: '3张以上♠️，邀叫。' },
    { bid: '3NT', points: '13—19点', description: '♥️有止张，止叫。' },
    { bid: '4S', points: '6—14点', description: '4张以上♠️，有牌型，止叫。' }
])

// 2NT问低花后的应叫数据
const michaelsTwoNTAskResponses = ref([
    { bid: '3C/3D', points: '8—15点', description: '5张以上♣️/♦️，不逼叫。' },
    { bid: '4C/4D', points: '16—19点', description: '5张以上♣️/♦️，不逼叫。' },
    { bid: '4H', points: '20点以上', description: '5张以上♣️，逼局。' },
    { bid: '4S', points: '20点以上', description: '5张以上♦️，逼局。' }
])

// 1D-2NT不寻常后的应叫数据
const oneDiamondTwoNTUnusualResponses = ref([
    { bid: '3C', points: '0—10点', description: '2张以上♣️，♣️长于♥️，不逼叫。' },
    { bid: '3D', points: '10—12点', description: '3张以上♥️，限制性加叫，逼叫。' },
    { bid: '3H', points: '0—9点', description: '2张以上♥️，♥️长于♣️，不逼叫。' },
    { bid: '3S', points: '0—14点', description: '6张以上♠️，没有♥️/♣️支持，不逼叫。' },
    { bid: '3NT', points: '15点以上', description: '未叫花色有止张，通常没有♥️支持。' },
    { bid: '4C', points: '11—13点', description: '3张以上♣️，邀叫。' },
    { bid: '4H', points: '13—16点', description: '3张以上♥️。' },
    { bid: '4S', points: '15—17点', description: '好的6张以上♠️。' }
])

// 1H-2NT不寻常后的应叫数据
const oneHeartTwoNTUnusualResponses = ref([
    { bid: '3C', points: '0—10点', description: '2张以上♣️，♣️长于♦️，不逼叫。' },
    { bid: '3D', points: '0—10点', description: '2张以上♦️，♦️长于♣️，不逼叫。' },
    { bid: '3H', points: '14点以上', description: '低花有支持，逼叫。' },
    { bid: '3S', points: '0—14点', description: '6张以上♠️，没有低花支持，不逼叫。' },
    { bid: '3NT', points: '15点以上', description: '未叫花色有止张。' },
    { bid: '4C', points: '11—13点', description: '3张以上♣️，邀叫。' },
    { bid: '4D', points: '11—13点', description: '3张以上♦️，邀叫。' },
    { bid: '4S', points: '15—17点', description: '好的6张以上♠️，通常没有4张低花支持。' }
])

// 平衡位置2NT不寻常后的应叫数据
const balancingTwoNTUnusualResponses = ref([
    { bid: '3C', points: '0—13点', description: '2张以上♣️，不逼叫。' },
    { bid: '3D', points: '0—13点', description: '2张以上♦️，不逼叫。' },
    { bid: '3H', points: '15点以上', description: '3张以上♣️/♦️，逼叫。' },
    { bid: '4C', points: '10—14点', description: '3张以上♣️，不逼叫。' },
    { bid: '4D', points: '15点以上', description: '3张以上♦️，不逼叫。' }
])

// 三明治1NT后的应叫数据
const sandwichOneNTResponses = ref([
    { bid: 'Pass', points: '11—14点', description: '♣️和♥️有止张。' },
    { bid: '2C', points: '14点以上', description: '♣️有止张，没有4张♠️，逼叫。' },
    { bid: '2D', points: '0—13点', description: '4张以上♦️，♦️长于♠️，不逼叫。' },
    { bid: '2H', points: '14点以上', description: '♥️有止张，没有4张♠️，逼叫。' },
    { bid: '2S', points: '0—13点', description: '4张以上♠️，♠️长于♦️，不逼叫。' },
    { bid: '2NT', points: '15—16点', description: '♣️和♥️有止张，邀叫。' },
    { bid: '3C/3H', points: '16点以上', description: '4张以上♠️，所叫花色♣️/♥️单缺，逼局。' },
    { bid: '3D/3S', points: '14—16点', description: '4张以上♦️/♠️，不逼叫。' },
    { bid: '4S/5D', points: '16点以上', description: '4张以上♠️/♦️，止叫。' }
])

// 对1NT的争叫数据
const oneNTOpponentOvercalls = ref([
    { bid: '×', points: '15点以上', description: '惩罚性；均型牌时点力要高一些。' },
    { bid: '2C', points: '8点以上', description: '兰迪约定叫，至少5－4以上双高花。' },
    { bid: '2D', points: '8点以上', description: '6张以上♦️。' },
    { bid: '2H', points: '8点以上', description: '6张以上♥️。' },
    { bid: '2S', points: '8点以上', description: '6张以上♠️。' },
    { bid: '2NT', points: '8点以上', description: '不寻常2NT，至少5－5双低花。' },
    { bid: '3C', points: '6—10点', description: '7张以上♣️，阻击叫。' },
    { bid: '3D', points: '6—10点', description: '7张以上♦️，阻击叫。' },
    { bid: '3H', points: '6—10点', description: '7张以上♥️，阻击叫。' },
    { bid: '3S', points: '6—10点', description: '7张以上♠️，阻击叫。' }
])

// 兰迪约定叫后的应叫数据
const landyTwoClubResponses = ref([
    { bid: 'Pass', points: '0—11点', description: '6张以上♣️，高花套最多2张。' },
    { bid: '2D', points: '0点以上', description: '高花等长或3－2，请同伴叫出最长的高花。' },
    { bid: '2H/2S', points: '0—10点', description: '所叫高花3张以上，不逼叫。' },
    { bid: '2NT', points: '10点以上', description: '问叫；通常高花3－2以上。' },
    { bid: '3C', points: '12点以上', description: '6张以上♣️，高花套最多2张，不逼叫。' },
    { bid: '3D', points: '11—12点', description: '6张以上♦️，高花套最多2张，不逼叫。' },
    { bid: '3H/3S', points: '9—11点', description: '所叫高花4张以上，邀叫。' },
    { bid: '3NT', points: '14点以上', description: '高花不配合，止叫。' },
    { bid: '4H/4S', points: '12点以上', description: '所叫高花4张以上，止叫。' }
])

// 兰迪2NT问叫后的应叫数据
const landyTwoNTAskResponses = ref([
    { bid: '3C', points: '8点以上', description: '5张♥️＋4张♠️，逼叫。' },
    { bid: '3D', points: '8点以上', description: '5张♠️＋4张♥️，逼叫。' },
    { bid: '3H', points: '8—11点', description: '5－5双高花，不逼叫。' },
    { bid: '3S', points: '12点以上', description: '5－5双高花，逼局。' }
])

// 对2NT的争叫数据
const twoNTOpponentOvercalls = ref([
    { bid: '3C/3D', points: '8点以上', description: '6张以上♣️/♦️，不逼叫。' },
    { bid: '3H/3S', points: '8点以上', description: '6张以上♥️/♠️，不逼叫。' },
    { bid: '3NT', points: '8点以上', description: '至少5－5双低花，逼叫一轮。' },
    { bid: '4C/4D', points: '10点以上', description: '7张以上♣️/♦️，不逼叫。' },
    { bid: '4H/4S', points: '10点以上', description: '7张以上♥️/♠️。' }
])

// 对3NT的争叫数据
const threeNTOpponentOvercalls = ref([
    { bid: '×', points: '13点以上', description: '惩罚性，通常有快速赢墩。' },
    { bid: '4C', points: '14点以上', description: '至少4－4双高花。' },
    { bid: '4D', points: '13点以上', description: '好的6张以上♦️。' },
    { bid: '4H', points: '13点以上', description: '好的6张以上♥️。' },
    { bid: '4S', points: '13点以上', description: '好的6张以上♠️。' },
    { bid: '5C', points: '14点以上', description: '好的6张以上♣️。' }
])

// 对精确2C的争叫数据
const precisionTwoClubOvercalls = ref([
    { bid: 'Pass', points: '—', description: '不符合下面的叫品。' },
    { bid: '×', points: '12点以上', description: '技术性加倍，未叫花色3张以上；或17点以上，加倍出套，强牌；或20—21点，加倍后叫NT。' },
    { bid: '2D/2M', points: '12—17点', description: '5张以上♦️/♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '16—19点', description: '♣️有止张，均型，不逼叫；后续参考2NT开叫。' },
    { bid: '3C', points: '10点以上', description: '迈克尔斯扣叫，5－5双高花，逼叫。' },
    { bid: '3D/3M', points: '6—10点', description: '6张以上♦️/♥️/♠️，阻击叫。' },
    { bid: '3NT', points: '16点以上', description: '♣️有止张，坚固的6张以上♦️。' },
    { bid: '4C', points: '10点以上', description: '迈克尔斯扣叫，6－6双高花，逼叫。' },
    { bid: '4D/4M', points: '8—12点', description: '7张以上♦️/♥️/♠️，根据局况有7~9个赢墩。' }
])

// 对自然2C的争叫数据
const naturalTwoClubOvercalls = ref([
    { bid: '×', points: '8点以上', description: '5－5双高花套。' },
    { bid: '2D', points: '8点以上', description: '5张以上♦️。' },
    { bid: '2H', points: '8点以上', description: '5张以上♥️。' },
    { bid: '2S', points: '8点以上', description: '5张以上♠️。' },
    { bid: '2NT', points: '8点以上', description: '5－5双低花套。' }
])

// 对精确2D的争叫数据
const precisionTwoDiamondOvercalls = ref([
    { bid: '×', points: '13点以上', description: '均型牌。' },
    { bid: '2H/2S', points: '12—16点', description: '6张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '16—19点', description: '敌方花色有止张，均型，不逼叫。' },
    { bid: '3C/3D', points: '12—16点', description: '6张以上♣️/♦️，不逼叫。' },
    { bid: '3H/3S', points: '7—10点', description: '7张以上♥️/♠️，不逼叫。' },
    { bid: '3NT', points: '16点以上', description: '敌方花色有止张，坚固的6张以上♣️/♦️。' },
    { bid: '4D', points: '7—11点', description: '7张以上♦️，不逼叫。' },
    { bid: '4H/4S', points: '17点以上', description: '7张以上♥️/♠️，8个以上赢墩。' }
])

// 对2D阻击叫的争叫数据
const twoDiamondPreemptOvercalls = ref([
    { bid: '×', points: '13点以上', description: '技术性加倍；未叫花色3张以上。' },
    { bid: '2H/2S', points: '12—17点', description: '5张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '16—18点', description: '♦️有止张，均型，不逼叫。' },
    { bid: '3C', points: '12—17点', description: '6张以上♣️，不逼叫。' },
    { bid: '3D', points: '16—21点', description: '扣叫，问♦️止张，通常持坚固♣️套。' },
    { bid: '3H/3S', points: '16—18点', description: '6张以上♥️/♠️，邀叫。' },
    { bid: '3NT', points: '16—21点', description: '♦️有止张，通常有长套赢墩，止叫。' },
    { bid: '4C', points: '16—18点', description: '6张以上♣️，邀叫。' },
    { bid: '4D', points: '12点以上', description: '5－5以上双高花，逼叫。' },
    { bid: '4H/4S', points: '17点以上', description: '7张以上♥️/♠️，止叫。' }
])

// 对2H阻击叫的争叫数据
const twoHeartPreemptOvercalls = ref([
    { bid: '×', points: '13点以上', description: '技术性加倍；未叫花色3张以上。' },
    { bid: '2S', points: '12—17点', description: '5张以上♠️，不逼叫。' },
    { bid: '2NT', points: '16—18点', description: '♥️有止张，均型牌，不逼叫。' },
    { bid: '3C/3D', points: '12—17点', description: '5张以上♣️/♦️，不逼叫。' },
    { bid: '3H', points: '16—21点', description: '扣叫，问♥️止张，通常有坚固的低花套，逼叫。' },
    { bid: '3S', points: '16—18点', description: '6张以上♠️，邀叫。' },
    { bid: '3NT', points: '16—21点', description: '♥️有止张，通常有长套赢墩。' },
    { bid: '4C/4D', points: '16—18点', description: '6张以上♣️/♦️，邀叫。' },
    { bid: '4H', points: '16点以上', description: '跳扣叫，5－5以上双低花，逼叫。' },
    { bid: '4S', points: '17点以上', description: '7张以上♠️，止叫。' }
])

// 对2S阻击叫的争叫数据
const twoSpadePreemptOvercalls = ref([
    { bid: '×', points: '13点以上', description: '技术性加倍；未叫花色3张以上。' },
    { bid: '2NT', points: '16—18点', description: '♠️有止张，均型牌，不逼叫。' },
    { bid: '3C/3D', points: '12—17点', description: '5张以上♣️/♦️，不逼叫。' },
    { bid: '3H', points: '12—17点', description: '5张以上♥️，不逼叫。' },
    { bid: '3S', points: '16—21点', description: '扣叫，问♠️止张，通常有坚固的低花套，逼叫。' },
    { bid: '3NT', points: '16—21点', description: '♠️有止张，通常有长套赢墩。' },
    { bid: '4C/4D', points: '16—18点', description: '6张以上♣️/♦️，邀叫。' },
    { bid: '4H', points: '17点以上', description: '7张以上♥️，止叫。' },
    { bid: '4S', points: '16点以上', description: '跳扣叫，5－5以上双低花，逼叫。' }
])

// 2D加倍后的应叫数据
const twoDiamondDoubleResponses = ref([
    { bid: 'Pass', points: '8点以上', description: '好的5张以上♦️，把技术性加倍转变为惩罚性。' },
    { bid: '2H/2S', points: '0—7点', description: '4张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '—', description: '莱本索尔约定叫，要求同伴叫3♣️。' },
    { bid: '3C', points: '8点以上', description: '4张以上♣️，不逼叫。' },
    { bid: '3D', points: '11点以上', description: '4－4双高花，逼叫。' },
    { bid: '3H', points: '10点以上', description: '5张以上♥️，逼局。' },
    { bid: '3S', points: '10点以上', description: '5张以上♠️，逼局。' },
    { bid: '3NT', points: '11—16点', description: '♦️有止张，止叫。' },
    { bid: '4C', points: '11点以上', description: '6张以上♣️，逼局。' },
    { bid: '4D', points: '9—13点', description: '5－5以上双高花，逼叫。' },
    { bid: '4H', points: '6—9点', description: '5张以上♥️，止叫。' },
    { bid: '4S', points: '6—9点', description: '5张以上♠️，止叫。' }
])

// 莱本索尔2NT后的应叫数据(2D)
const lebensohl2NTAfter2DResponses = ref([
    { bid: 'Pass', points: '0—7点', description: '4张以上♣️。' },
    { bid: '3D', points: '11点以上', description: '♦️有止张，有4张高花，逼叫。' },
    { bid: '3H', points: '8—10点', description: '4张♥️，不逼叫。' },
    { bid: '3S', points: '8—10点', description: '4张♠️，不逼叫。' },
    { bid: '4D', points: '14点以上', description: '5－5以上双高花，逼叫。' },
    { bid: '4H', points: '10点以上', description: '6张以上♥️，不逼叫。' },
    { bid: '4S', points: '10点以上', description: '6张以上♠️，不逼叫。' }
])

// 2H加倍后的应叫数据
const twoHeartDoubleResponses = ref([
    { bid: 'Pass', points: '8点以上', description: '好的5张以上♥️，把技术性加倍转变为惩罚性。' },
    { bid: '2S', points: '0—7点', description: '4张以上♠️，不逼叫。' },
    { bid: '2NT', points: '—', description: '莱本索尔约定叫，要求同伴叫3♣️。' },
    { bid: '3C', points: '8点以上', description: '4张以上♣️，不逼叫。' },
    { bid: '3D', points: '8点以上', description: '4张以上♦️，不逼叫。' },
    { bid: '3H', points: '11点以上', description: '开始对套，逼叫。' },
    { bid: '3S', points: '10点以上', description: '5张以上♠️，逼局。' },
    { bid: '3NT', points: '11—16点', description: '♥️有止张，止叫。' },
    { bid: '4C', points: '11点以上', description: '6张以上♣️，逼局。' },
    { bid: '4D', points: '11点以上', description: '6张以上♦️，逼局。' },
    { bid: '4H', points: '10—14点', description: '5－5以上双低花，逼叫。' },
    { bid: '4S', points: '6—9点', description: '5张以上♠️，止叫。' }
])

// 莱本索尔2NT后的应叫数据(2H)
const lebensohl2NTAfter2HResponses = ref([
    { bid: 'Pass', points: '0—7点', description: '4张以上♣️。' },
    { bid: '3D', points: '0—7点', description: '4张以上♦️，不逼叫。' },
    { bid: '3H', points: '10点以上', description: '♥️有止张，4张♠️，逼局。' },
    { bid: '3S', points: '8—10点', description: '4张♠️，不逼叫。' },
    { bid: '4C', points: '10点以上', description: '6张以上♣️＋4张♠️，逼局。' },
    { bid: '4D', points: '10点以上', description: '6张以上♦️＋4张♠️，逼局。' },
    { bid: '4H', points: '15点以上', description: '5－5以上双低花，逼叫。' },
    { bid: '4S', points: '10点以上', description: '6张以上♠️，止叫。' }
])

// 2S加倍后的应叫数据
const twoSpadeDoubleResponses = ref([
    { bid: 'Pass', points: '8点以上', description: '好的5张以上♠️，把技术性加倍转变为惩罚性。' },
    { bid: '2NT', points: '—', description: '莱本索尔约定叫，要求同伴叫3♣️。' },
    { bid: '3C', points: '8点以上', description: '4张以上♣️，不逼叫。' },
    { bid: '3D', points: '8点以上', description: '4张以上♦️，不逼叫。' },
    { bid: '3H', points: '8点以上', description: '4张以上♥️，不逼叫。' },
    { bid: '3S', points: '11点以上', description: '开始对套，逼叫。' },
    { bid: '3NT', points: '11—16点', description: '♠️有止张，止叫。' },
    { bid: '4C', points: '11点以上', description: '6张以上♣️，逼局。' },
    { bid: '4D', points: '11点以上', description: '6张以上♦️，逼局。' },
    { bid: '4H', points: '9—14点', description: '5张以上♥️，止叫。' },
    { bid: '4S', points: '10—14点', description: '5－5以上双低花，逼叫。' }
])

// 莱本索尔2NT后的应叫数据(2S)
const lebensohl2NTAfter2SResponses = ref([
    { bid: 'Pass', points: '0—7点', description: '4张以上♣️。' },
    { bid: '3D', points: '0—7点', description: '4张以上♦️，不逼叫。' },
    { bid: '3H', points: '0—7点', description: '4张以上♥️，不逼叫。' },
    { bid: '3S', points: '10点以上', description: '♠️有止张，4张♥️，逼局。' },
    { bid: '4C', points: '10点以上', description: '6张以上♣️＋4张♥️，逼局。' },
    { bid: '4D', points: '10点以上', description: '6张以上♦️＋4张♥️，逼局。' },
    { bid: '4H', points: '10点以上', description: '6张以上♥️，止叫。' },
    { bid: '4S', points: '15点以上', description: '5－5以上双低花，逼叫。' }
])

// 平衡位置争叫数据
const balancingOvercalls1C = ref([
    { bid: 'Pass', points: '——', description: '不符合以下叫品。' },
    { bid: '×', points: '10点以上', description: '技术性加倍，保证未叫花色3张以上；或16点以上，加倍出套；或15—18点，加倍后叫NT。' },
    { bid: '1D/1H/1S', points: '8—15点', description: '5张以上♦️/♥️/♠️，偶尔好的4张套，不逼叫。' },
    { bid: '1NT', points: '11—14点', description: '♣️有止张，均型，不逼叫。' },
    { bid: '2C', points: '16点以上', description: '5－5任意双套，或单套强牌，逼叫。' },
    { bid: '2D', points: '12—15点', description: '6张以上♦️，不逼叫。' },
    { bid: '2H/2S', points: '12—15点', description: '6张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '19—20点', description: '♣️有止张，均型，不逼叫。' },
    { bid: '3C', points: '16—21点', description: '问♣️止张；有坚固的6张以上♦️。' },
    { bid: '3D', points: '16—18点', description: '6张以上♦️，不逼叫。' },
    { bid: '3H/3S', points: '16—18点', description: '6张以上♥️/♠️，不逼叫。' },
    { bid: '3NT', points: '16—21点', description: '其他花色有止张；有坚固的6张以上♦️。' }
]);

const balancingOvercalls1D = ref([
    { bid: 'Pass', points: '——', description: '不符合其他叫品。' },
    { bid: '×', points: '10点以上', description: '技术性加倍，保证未叫花色3张以上；或16点以上，加倍出套；或15—18点，加倍后叫NT。' },
    { bid: '1H/1S', points: '8—15点', description: '5张以上♥️/♠️，偶尔好的4张套，不逼叫。' },
    { bid: '1NT', points: '11—14点', description: '♦️有止张，均型，不逼叫。' },
    { bid: '2C', points: '9—15点', description: '5张以上♣️，不逼叫。' },
    { bid: '2D', points: '16点以上', description: '5－5任意双套，或单套强牌，逼叫。' },
    { bid: '2H/2S', points: '12—15点', description: '6张以上♥️/♠️，不逼叫。' },
    { bid: '2NT', points: '19—20点', description: '♦️有止张，均型，不逼叫。' },
    { bid: '3C', points: '13—16点', description: '6张以上♣️，不逼叫。' },
    { bid: '3D', points: '16—21点', description: '问♦️止张；有坚固的6张以上♣️。' },
    { bid: '3H/3S', points: '16—18点', description: '6张以上♥️/♠️，不逼叫。' },
    { bid: '3NT', points: '16—21点', description: '其他花色有止张；有坚固的6张以上♣️。' }
]);

const balancingOvercalls1H = ref([
    { bid: 'Pass', points: '——', description: '不符合其他叫品。' },
    { bid: '×', points: '10点以上', description: '技术性加倍，保证未叫花色3张以上；或16点以上，加倍出套；或16—18点，加倍后叫NT。' },
    { bid: '1S', points: '8点以上', description: '5张以上♠️，偶尔好的4张套，不逼叫。' },
    { bid: '1NT', points: '12—15点', description: '♥️有止张，均型，不逼叫。' },
    { bid: '2C/2D', points: '12点以上', description: '5张以上♣️/♦️，不逼叫。' },
    { bid: '2H', points: '16点以上', description: '5－5任意双套，或单套强牌，逼叫。' },
    { bid: '2S', points: '12—16点', description: '6张以上♠️，不逼叫。' },
    { bid: '2NT', points: '19—20点', description: '♥️有止张，均型，不逼叫。' },
    { bid: '3C/3D', points: '13—16点', description: '6张以上♣️/♦️，不逼叫。' },
    { bid: '3H', points: '16—21点', description: '问♥️止张；有坚固的6张以上低花套。' },
    { bid: '3S', points: '13—16点', description: '6张以上♠️，不逼叫。' },
    { bid: '3NT', points: '16—21点', description: '其他花色有止张；有坚固的6张以上低花套。' }
]);

const balancingOvercalls1S = ref([
    { bid: 'Pass', points: '——', description: '不符合其他叫品。' },
    { bid: '×', points: '10点以上', description: '技术性加倍，保证未叫花色3张以上；或16点以上，加倍出套；或16—18点，加倍后叫NT。' },
    { bid: '1NT', points: '12—15点', description: '♠️有止张，均型，不逼叫。' },
    { bid: '2C/2D/2H', points: '12点以上', description: '5张以上♣️/♦️/♥️，不逼叫。' },
    { bid: '2S', points: '16点以上', description: '5－5任意双套，或单套强牌，逼叫。' },
    { bid: '2NT', points: '19—20点', description: '♠️有止张，均型，不逼叫。' },
    { bid: '3C/3D', points: '13—16点', description: '6张以上♣️/♦️，不逼叫。' },
    { bid: '3H', points: '13—16点', description: '6张以上♥️，不逼叫。' },
    { bid: '3S', points: '16—21点', description: '问♠️止张；有坚固的6张以上低花套。' },
    { bid: '3NT', points: '16—21点', description: '其他花色有止张；有坚固的6张以上低花套。' }
]);

// 平衡位置2阶争叫后的继续叫牌
const balancing2DAfter1D = ref([
    { bid: '2H', points: '——', description: '4张以上♥️，逼叫一轮。' },
    { bid: '2S', points: '——', description: '4张以上♠️，逼叫一轮。' },
    { bid: '3C', points: '——', description: '4张以上♣️，逼叫一轮。' }
]);

const balancing2DAfter1D_2H = ref([
    { bid: '2S', points: '16点以上', description: '6张以上♠️，逼局。' },
    { bid: '3C', points: '16点以上', description: '6张以上♣️，逼叫一轮。' },
    { bid: '3D', points: '16点以上', description: '5张♣️↑＋5张♠️↑，逼叫一轮。' },
    { bid: '3H', points: '16点以上', description: '5张以上♥️，逼局。' }
]);

const balancing2DAfter1D_2S = ref([
    { bid: '3C', points: '16点↑', description: '6张♣️↑，逼叫一轮。' },
    { bid: '3D', points: '16点↑', description: '5张♣️↑＋5张♥️↑。' },
    { bid: '3H', points: '16点↑', description: '6张♥️↑，逼局。' },
    { bid: '3S', points: '16点↑', description: '5张♠️↑，逼局。' }
]);

const balancing2DAfter1D_3C = ref([
    { bid: '3D', points: '16点↑', description: '5张♥️↑＋5张♠️↑，逼叫一轮。' },
    { bid: '3H/3S', points: '16点↑', description: '6张以上♥️/♠️，逼局。' },
    { bid: '4C', points: '16点↑', description: '5张♣️↑，8~9个赢墩，不逼叫。' },
    { bid: '5C', points: '16点↑', description: '5张♣️↑，10个赢墩。' }
]);

const balancing2HAfter1H = ref([
    { bid: '2S', points: '——', description: '4张以上♠️，逼叫一轮。' },
    { bid: '3C', points: '——', description: '4张以上♣️，逼叫一轮。' },
    { bid: '3D', points: '——', description: '4张以上♦️，逼叫一轮。' }
]);

const balancing2HAfter1H_2S = ref([
    { bid: '3C/3D', points: '16点↑', description: '6张以上♣️/♦️，逼叫一轮。' },
    { bid: '3H', points: '16点↑', description: '5张♣️↑＋5张♦️↑，逼叫一轮。' },
    { bid: '3S', points: '16点↑', description: '5张以上♠️，逼局。' }
]);

const balancing2HAfter1H_3C = ref([
    { bid: '3D', points: '16点↑', description: '6张♦️↑，逼叫。' },
    { bid: '3H', points: '16点↑', description: '5张♦️↑＋5张♠️↑。' },
    { bid: '3S', points: '16点↑', description: '6张♠️↑，逼局。' },
    { bid: '4C', points: '16点↑', description: '5张♣️↑，8~9赢墩。' },
    { bid: '5C', points: '16点↑', description: '5张♣️↑，10个赢墩。' }
]);

const balancing2HAfter1H_3D = ref([
    { bid: '3H', points: '16点↑', description: '5张♣️↑＋5张♠️↑，逼叫一轮。' },
    { bid: '3S', points: '16点↑', description: '6张以上♠️，逼局。' },
    { bid: '4C', points: '16点↑', description: '6张以上♣️，逼局。' },
    { bid: '4D', points: '16点↑', description: '5张♦️↑，8~9个赢墩，不逼叫。' },
    { bid: '5D', points: '16点↑', description: '5张♦️↑，10个赢墩。' }
]);

const balancing2SAfter1S = ref([
    { bid: '3C', points: '——', description: '4张以上♣️，逼叫一轮。' },
    { bid: '3D', points: '——', description: '4张以上♦️，逼叫一轮。' },
    { bid: '3H', points: '——', description: '4张以上♥️，逼叫一轮。' }
]);

const balancing2SAfter1S_3C = ref([
    { bid: '3D', points: '16点↑', description: '6张以上♦️，逼叫一轮。' },
    { bid: '3H', points: '16点↑', description: '6张以上♥️，逼局。' },
    { bid: '3S', points: '16点↑', description: '5张♦️↑＋5张♥️↑，逼叫一轮。' },
    { bid: '4C', points: '16点↑', description: '5张♣️↑，8~9个赢墩，不逼叫。' },
    { bid: '5C', points: '16点↑', description: '5张♣️↑，10个赢墩。' }
]);

const balancing2SAfter1S_3D = ref([
    { bid: '3H', points: '16点↑', description: '6张♥️↑，逼叫。' },
    { bid: '3S', points: '16点↑', description: '5张♣️↑＋5张♥️↑。' },
    { bid: '4C', points: '16点↑', description: '6张♣️↑，逼局。' },
    { bid: '4D', points: '16点↑', description: '5张♦️↑，8~9赢墩。' },
    { bid: '5D', points: '16点↑', description: '5张♦️↑，10个赢墩。' }
]);

const balancing2SAfter1S_3H = ref([
    { bid: '3S', points: '16点', description: '5张♣️↑＋5张♦️↑，逼叫一轮。' },
    { bid: '4C', points: '16点', description: '6张以上♣️，逼局。' },
    { bid: '4D', points: '16点', description: '6张以上♦️，逼局。' },
    { bid: '4H', points: '16点', description: '5张以上♥️。' }
]);

// 对3NT开叫的防守叫牌
const against3NTOpening = ref([
    { bid: '×', points: '16点以上', description: '均型或半均型牌。（要求同伴考虑抢打还是罚放）' },
    { bid: '4C', points: '——', description: '双高花5 5以上套。（请同伴示选）' },
    { bid: '4D/4M', points: '——', description: '实叫，单套型好牌。' },
    { bid: '4NT', points: '——', description: '关键张问叫。（按0-4A；1A；2A；3A答叫）' }
]);

// 对那米亚茨4C/4D开叫的防守叫牌
const againstNamyats4C4D = ref([
    { bid: '×', points: '——', description: '技术性加倍；如先不叫，然后加倍敌方真实花色为惩罚性加倍。' },
    { bid: '扣叫', points: '——', description: '4♣️后叫4♥️或4♦️后叫4♠️；表示＝另一门高花和某一低花5－5套；同伴可叫4NT询求低花配合。' },
    { bid: '4NT', points: '——', description: '双低花至少5－5以上套。（要求同伴示选）' },
    { bid: '4S', points: '——', description: '4♣️不叫敌方叫4♥️后再叫4♠️；表示＝4张♠️和一门较长的低花套。' },
    { bid: '争叫', points: '——', description: '单套型好牌。' }
]);

// 对自然4C/4D开叫的防守叫牌
const againstNatural4C4D = ref([
    { bid: '×', points: '——', description: '技术性加倍；对未叫花色均有支持，如牌型有偏差，应有大牌实力补救。' },
    { bid: '扣叫', points: '——', description: '表示有足够的坐庄实力，不在乎打5阶的双套牌。（强两套高花）' },
    { bid: '争叫', points: '——', description: '单套型好牌。' },
    { bid: '4NT', points: '——', description: '关键张问叫。（按0-4A；1A；2A；3A答叫）' },
    { bid: '跳争叫', points: '——', description: '更强的单套型好牌；至少10个赢墩，有强烈的满贯兴趣。' }
]);

// 对4H/4S开叫的防守叫牌
const against4H4S = ref([
    { bid: '4♥️后×', points: '——', description: '技术性加倍；保证有♠️套支持。' },
    { bid: '4♠️后×', points: '——', description: '技术性加倍；对其它各门花色均有支持。' },
    { bid: '4NT', points: '——', description: '双低花至少5－5以上套；要求同伴示选。' },
    { bid: '争叫', points: '——', description: '单套型好牌。' }
]);

// 对5C/5D开叫的防守叫牌
const against5C5D = ref([
    { bid: '×', points: '——', description: '牌力显示，惩罚性；如同伴有好套则叫出；反之持均型或半均型牌则不叫。' },
    { bid: '5NT', points: '——', description: '极强牌；要求同伴选个花色叫满贯。' },
    { bid: '争叫', points: '——', description: '强单套牌，8.5～9.5个打牌赢墩。' },
    { bid: '扣叫', points: '——', description: '强两套高花。' }
]);
</script>