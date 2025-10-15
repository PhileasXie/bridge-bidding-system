<template>
  <el-container class="min-h-screen">
    <!-- 顶部导航栏 -->
    <el-header class="bg-bridge-blue text-white shadow-md">
      <div class="container mx-auto flex items-center justify-between h-full">
        <h1 class="text-2xl font-bold cursor-pointer" @click="$router.push('/')">新睿桥牌二盖一体系</h1>        
      </div>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="280px" class="bg-white shadow-md">
        <el-menu class="h-full border-r-0">
          <el-menu-item index="1" @click="$router.push('/opening')">
            <el-icon><Document /></el-icon>
            <span>开叫体系</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><ChatDotRound /></el-icon>
              <span>应叫体系</span>
            </template>
            <el-menu-item index="2-1" @click="$router.push('/club-responses')">1♣️开叫后的应叫</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push('/diamond-responses')">1♦️开叫后的应叫</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push('/heart-responses')">1♥️开叫后的应叫</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push('/spade-responses')">1♠️开叫后的应叫</el-menu-item>
            <el-menu-item index="2-4" @click="$router.push('/notrump-responses')">1NT开叫后的应叫</el-menu-item>
            <el-menu-item index="2-5" @click="$router.push('/two-club-responses')">2♣️开叫后的应叫</el-menu-item>
            <el-menu-item index="2-6" @click="$router.push('/two-notrump-responses')">2NT开叫后的应叫</el-menu-item>
            <el-menu-item index="2-7" @click="$router.push('/preemptive-opening-bid')">阻击性开叫后的应叫</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2-2" @click="$router.push('/slam-bids')">
            <el-icon><Reading /></el-icon>
            <span>满贯叫牌</span>
          </el-menu-item>          
          <el-menu-item index="3-1" @click="$router.push('/defensive-bidding')">
            <el-icon><Tickets /></el-icon>
            <span>防守叫牌</span>
          </el-menu-item>          
          <el-menu-item index="6-1" @click="$router.push('/opening-lead-and-signals')">
            <el-icon><Ticket /></el-icon>
            <span>防守</span>
          </el-menu-item>          
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

/* 移动端适配 */
@media (max-width: 768px) {
  .el-header {
    padding: 0 10px;
  }
  
  .el-header h1 {
    font-size: 1.2rem;
  }
  
  :deep(.el-menu--horizontal) {
    display: none; /* 隐藏水平菜单 */
  }
  
  .el-aside {
    width: 100% !important;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: auto !important;
    border-top: 1px solid #e5e7eb;
    border-right: none;
  }
  
  :deep(.el-menu) {
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
  }
  
  :deep(.el-sub-menu__title),
  :deep(.el-menu-item) {
    padding: 0 12px;
  }
  
  .el-main {
    padding-bottom: 60px; /* 给底部菜单留空间 */
  }
}

/* 微信浏览器特定样式 */
@media (prefers-color-scheme: dark) {
  /* 适配微信深色模式 */
  .el-header {
    background-color: #1a1a1a !important;
  }
  
  .el-aside {
    background-color: #2d2d2d !important;
    border-top-color: #444;
  }
  
  .el-main {
    background-color: #121212 !important;
  }
}
</style>