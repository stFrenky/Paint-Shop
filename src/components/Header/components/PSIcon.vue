<script setup lang="ts">
interface Props {
  url: string;
  alt: string;
}

defineProps<Props>();

</script>
<template>
  <img
    class="ps-icon"
    :src="url"
    :alt="alt"
  >
</template>

<style lang='scss'>
  .ps-icon {
      cursor: pointer;
      width: 24px;
      height: 24px;
  }

</style>
