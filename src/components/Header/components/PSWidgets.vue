<script setup>
import PSIcon from './PSIcon.vue';
</script>

<template>
  <div class="ps-icons">
    <PSIcon
      url="src/assets/icons/search.svg"
      alt="search"
    />
    <PSIcon
      url="src/assets/icons/profile.svg"
      alt="profile"
    />
    <PSIcon
      url="src/assets/icons/heart.svg"
      alt="heart"
    />
    <PSIcon
      url="src/assets/icons/basket.svg"
      alt="basket"
    />
  </div>
</template>

<style lang='scss'>
.ps-icons {
  display: flex;
  column-gap: 25px;
}
</style>
