<template>
  <div class="px-4 py-20 text-center">
    <router-link to="/" class="font-bold text-2xl inline-block">
      <img :src="icon" class="h-24" />
    </router-link>
    <div class="my-6">See README.md for more information.</div>
    <div class="my-6">
      <ElButton to="/alt" btn="primary">Alt Page</ElButton>
    </div>
  </div>
</template>
<script setup>
import ElButton from "@factor/ui/ElButton.vue";
import icon from "../../factorjs.svg";
import { emitEvent, useMeta } from "@factor/api";
</script>
