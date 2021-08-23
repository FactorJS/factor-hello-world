<template>
  <div class="content-layout max-w-7xl m-auto">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>
<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { useMeta } from "@factor/api";

useMeta({
  title: "Hello World",
  meta: [
    {
      name: `description`,
      content: `Factor Hello Worl`,
    },
  ],
});
</script>
<style lang="less">
@import "./style.less";
</style>
