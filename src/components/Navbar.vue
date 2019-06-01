<template>
  <div class="gray-navbar">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class="gray-navbar-breadcrumb"
    >
      <el-breadcrumb-item
        :to="{path: '/'}"
      >
        首页
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {}
</script>

<style lang="stylus" scoped>
.gray-navbar
  border-bottom 1px solid #ddd
  .gray-navbar-breadcrumb
    height 50px
    line-height 50px
</style>
