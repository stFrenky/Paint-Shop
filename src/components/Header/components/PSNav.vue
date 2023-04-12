<template>
  <nav class="ps-nav">
    <a
      class="ps-nav__link"
      href="#"
    >Продукты</a>
    <a
      class="ps-nav__link"
      href="#"
    >Цвета</a>
    <a
      class="ps-nav__link"
      href="#"
    >Вдохновение</a>
    <a
      class="ps-nav__link"
      href="#"
    >Советы</a>
    <a
      class="ps-nav__link"
      href="#"
    >Найти магазин</a>
  </nav>
</template>

<style lang='scss'>
.ps-nav {
  display: flex;
  column-gap: 24px;

  &__link {
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1F2020;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap
  }
}
</style>
