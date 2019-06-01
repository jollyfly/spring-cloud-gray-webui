<template>
  <el-menu
    class="gray-menu-aside"
    :default-active="activeIndex"
    :router="true"
    @select="select"
  >
    <el-menu-item
      index="instance"
      route="/instance/all"
    >
      <i class="el-icon-menu" />
      <span slot="title">实例管理</span>
    </el-menu-item>
    <el-menu-item index="decision">
      <i class="el-icon-menu" />
      <span slot="title">灰度规则配置</span>
    </el-menu-item>
    <el-menu-item
      index="service"
      route="/service"
    >
      <i class="el-icon-menu" />
      <span slot="title">服务管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu" />
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu" />
      <span slot="title">导航二</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'

@Component
export default class MenuAside extends Vue {
  get activeIndex() {
    return AppModule.mainMenu.activeIndex
  }

  private select(index: string) {
    AppModule.setMainMenu({ activeIndex: index })
  }
}
</script>

<style lang="stylus" scoped>
.gray-menu-aside
  height 100%
</style>
