<template>
  <div class="home-container">
    <div class="hero-section">
      <h1 class="text-3xl font-bold text-center mb-6">新睿桥牌二盖一体系</h1>
      <p class="text-lg text-center mb-8">
        一个全面的桥牌二盖一叫牌体系教学和参考工具
      </p>
      <div class="flex justify-center mb-10">
        <el-button type="primary" size="large" @click="$router.push('/opening')">
          开始学习
        </el-button>
      </div>
    </div>

    <el-divider content-position="center">项目简介</el-divider>
    
    <div class="intro-section mb-10">
      <p class="text-lg mb-4">
        本教程为桥牌爱好者提供详细的叫牌规则、应叫体系和防守策略。通过清晰的表格和说明，帮助您掌握二盖一叫牌体系的各个方面，从基础开叫到高级满贯叫牌技巧。
      </p>
    </div>

    <el-divider content-position="center">教学特点</el-divider>
    
    <div class="features-section mb-10">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" v-for="(feature, index) in features" :key="index">
          <el-card class="feature-card mb-4" shadow="hover">
            <div class="feature-icon text-2xl mb-2">{{ feature.icon }}</div>
            <div class="feature-title font-bold mb-2">{{ feature.title }}</div>
            <div class="feature-desc text-sm">{{ feature.description }}</div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <el-divider content-position="center">学习内容</el-divider>
    
    <div class="modules-section mb-10">
      <el-collapse accordion>
        <el-collapse-item v-for="(module, index) in modules" :key="index" :title="module.title" :name="index">
          <div class="module-content">
            <ul class="list-disc pl-6">
              <li v-for="(item, i) in module.items" :key="i" class="mb-2">
                {{ item }}
              </li>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div class="cta-section text-center mb-10">
      <h3 class="text-xl font-bold mb-4">准备好开始学习了吗？</h3>
      <el-button type="success" size="large" @click="$router.push('/opening')">
        开始学习二盖一体系
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    icon: '📚',
    title: '完整的叫牌体系',
    description: '全面覆盖二盖一叫牌体系的各个方面，从基础开叫到高级满贯叫牌技巧'
  },
  {
    icon: '🎯',
    title: '清晰的叫牌规则',
    description: '提供详细的叫牌规则和说明，帮助您理解每个叫品的含义和使用场景'
  },
  {
    icon: '📊',
    title: '系统的学习内容',
    description: '通过表格形式清晰展示各种叫牌情况，方便查阅和记忆'
  },
  {
    icon: '🔄',
    title: '完整叫牌流程',
    description: '展示完整的叫牌流程，帮助您理解叫牌的逻辑和策略'
  }
])

const modules = ref([
  {
    title: '1. 开叫体系',
    items: [
      '详细的开叫点力范围说明',
      '各种叫品的具体要求',
      '特殊叫品（如阻击叫、赌博性叫品）的使用说明'
    ]
  },
  {
    title: '2. 应叫体系',
    items: [
      '1♣️开叫后的应叫',
      '1♦️开叫后的应叫',
      '1♥️开叫后的应叫（包含详细的一盖一、二盖一、简单加叫等情况）',
      '1♠️开叫后的应叫',
      '1NT开叫后的应叫',
      '2♣️开叫后的应叫',
      '2NT开叫后的应叫',
      '阻击性开叫后的应叫'
    ]
  },
  {
    title: '3. 特殊叫牌约定',
    items: [
      '雅各比2NT',
      '伯根加叫',
      '斯普林特叫品',
      '迈克尔斯扣叫',
      '不寻常2NT'
    ]
  },
  {
    title: '4. 进阶叫牌',
    items: [
      '满贯叫牌技巧',
      '防守叫牌策略',
      '干扰叫后的应对'
    ]
  },
  {
    title: '5. 防守技巧',
    items: [
      '首攻原则与牌张选择',
      '信号系统（姿态信号、张数信号）',
      '史密斯信号',
      '防守无将和有将定约的区别'
    ]
  }
])
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.hero-section {
  padding: 2rem 0;
}

.feature-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2rem;
}

.module-content {
  padding: 1rem 0;
}

@media (max-width: 768px) {
  .home-container {
    padding: 1rem;
  }
}
</style>