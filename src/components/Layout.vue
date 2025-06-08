<template>
  <el-container class="min-h-screen">
    <!-- 顶部导航栏 -->
    <el-header class="bg-bridge-blue text-white shadow-md">
      <div class="container mx-auto flex items-center justify-between h-full">
        <h1 class="text-2xl font-bold">新睿桥牌二盖一体系</h1>
        <el-menu mode="horizontal" class="bg-transparent border-none" :ellipsis="false">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">开叫</el-menu-item>
          <el-menu-item index="3">应叫</el-menu-item>
          <el-menu-item index="4">防守叫牌</el-menu-item>
        </el-menu>
      </div>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="280px" class="bg-white shadow-md">
        <el-menu class="h-full border-r-0">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Document /></el-icon>
              <span>开叫体系</span>
            </template>
            <el-menu-item index="1-1">1C 开叫</el-menu-item>
            <el-menu-item index="1-2">1D 开叫</el-menu-item>
            <el-menu-item index="1-3">1H/1S 开叫</el-menu-item>
            <el-menu-item index="1-4">1NT 开叫</el-menu-item>
            <el-menu-item index="1-5">2C 开叫</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><ChatDotRound /></el-icon>
              <span>应叫体系</span>
            </template>
            <el-menu-item index="2-1" @click="$router.push('/club-responses')">1梅花开叫后的应叫</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push('/diamond-responses')">1方块开叫后的应叫</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push('/major-responses')">1红心/1黑桃开叫后的应叫</el-menu-item>
            <el-menu-item index="2-4" @click="$router.push('/notrump-responses')">1NT开叫后的应叫</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><Tickets /></el-icon>
              <span>防守叫牌</span>
            </template>
            <el-menu-item index="3-1">技术性加倍</el-menu-item>
            <el-menu-item index="3-2">争叫</el-menu-item>
            <el-menu-item index="3-3">扣叫</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <!-- 主要内容区 -->
      <el-main class="bg-gray-50">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { Document, ChatDotRound, Tickets } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-header {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
}

.el-aside {
  border-right: 1px solid #e5e7eb;
}

:deep(.el-menu) {
  border-right: none;
}

:deep(.el-menu--horizontal) {
  border-bottom: none;
}

:deep(.el-menu-item.is-active) {
  color: #f6ad55;
}

:deep(.el-menu-item:hover) {
  color: #f6ad55;
}
</style> 