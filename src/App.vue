<template>
  <div class="main-container">
    <layout-header/>
    <router-view></router-view>
    <layout-footer/>
  </div>
</template>

<script>


import LayoutHeader from "@/layout/layout-header/LayoutHeader.vue";
import LayoutFooter from "@/layout/layout-footer/LayoutFooter.vue";

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutFooter,
  }
}
</script>

<style lang="scss">

</style>