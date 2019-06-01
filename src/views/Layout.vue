<template>
  <el-container
    class="gray-container"
  >
    <el-aside
      width="180px"
    >
      <menu-aside />
    </el-aside>
    <el-container>
      <el-header height="50px">
        <navbar />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer />
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuAside from '@/components/MenuAside.vue'
import Navbar from '@/components/Navbar.vue'
import GrayTable from '@/components/InstanceMain.vue'

@Component({
  components: {
    GrayTable,
    MenuAside,
    Navbar
  }
})
export default class Layout extends Vue {}
</script>

<style lang="stylus" scoped>
.gray-container
  height: 100%
</style>
