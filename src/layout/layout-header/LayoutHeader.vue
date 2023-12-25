<template>
  <div class="header">
    <router-link class="item-link-pokestore" to="/">
      <div class="logo">
        <img src="/service/logo.png" alt="Логотип">
      </div>
    </router-link>
    <div class="navbar-menu">
      <router-link class="item-link-rating" to="/rating">
        <img src="/service/ratingIcon.png" alt="Рейтинг">
      </router-link>
      <router-link class="item-link-pokestore" to="/basket">
        <img src="/service/cart.png" alt="Корзина">
      </router-link>
    </div>
  </div>
</template>

<script>
import '/src/assets/css/main.css'
export default {
  name: 'LayoutHeader',
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(to right, #f5f5f5, #e9e9e9);
  text-decoration: none;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: cornflowerblue;
  height: 70px;
  margin: 0;
  padding: 0;
}

.logo {
  height: 65px;
}

.logo img {
  height: 60px;
  margin-top: 3px;
}

.navbar-menu {
  display: flex;
  gap: 20px;
  margin-right: 15px;
}

.navbar-menu img {
  width: 60px;
  height: 60px;
  border-radius: 0;
}
</style>
