<script setup>
import PSLogo from './PSLogo.vue';
import PSNav from './PSNav.vue';
import PSContacts from './PSContacts.vue';
import PSWidgets from './PSWidgets.vue';
</script>

<template>
  <header class="ps-header">
    <div class="ps-header__container">
      <div class="ps-header__left">
        <PSLogo />
        <PSNav />
      </div>
      <div class="ps-header__right">
        <PSContacts />
        <PSWidgets />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .ps-header {
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    padding: 40px 65px;
    box-sizing: border-box;

    &__container {
      display: flex;
      max-width: 1790px;
      width: 100%;
      margin: 0 auto;
      justify-content: space-between;
    }

    &__left, &__right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 0 10px;
    }

    &__right {
      justify-content: flex-end;
    }
}
</style>
