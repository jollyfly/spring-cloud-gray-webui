import { URL } from './api/Api'
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
}
</script>

<style lang="stylus">
  html
  body
  #app
    height 100%
    width 100%
    margin 0
    padding 0
</style>
