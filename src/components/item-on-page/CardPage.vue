<template>
    <router-link :to="{ name: 'pokemon_data', params: { id: item.id } }" class="container-item" :class="item.rarity">
      <div class="container_img">
        <img class="img" :src="`/store-page/${item.img}`" alt="item-image">
      </div>
      <h2 class="container_name">{{ item.name }}</h2>
      <div class="container_price"> <strong>{{ item.price }}₽</strong></div>
    </router-link>
</template>

<script>
import '/src/assets/css/main.css';
export default {
  name: "ItemForPage",
  props: {
    item: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss">
.container-item {
  margin-left: 10px;
  width: 330px;
  height: 350px;
  margin-bottom: 20px;
  text-decoration: none;
  color: black;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: white;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.container-item:hover {
  box-shadow: 0 2px 2px rgb(0 0 0 / 24%), 0 0 1px rgb(0 0 0 / 32%);
  border-radius: 10px;
  background-color: white;
  transform: scale(1.05);
}

.container_img {
  padding-top: 10px;
  margin: 0 auto;
  width: 180px;
  height: 250px;
  border-radius: 20px;

  .img {
    width: 180px;
  }
}

.container_name {
  margin: 0;
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
}

.container_price {
  text-align: center;
  margin-top: 10px;
  font-size: 24px;
}
</style>
