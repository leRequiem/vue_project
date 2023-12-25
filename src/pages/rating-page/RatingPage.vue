<template>
  <div class="container_rating-page">
    <h1>Топ-10 сильнейших покемонов</h1>
    <div class="rating-item" v-for="(pokemon, index)  in pokemons" :key='index'>
      <div class="rating-place">
        <p><strong>{{ pokemon.id }} место</strong></p>
      </div>
      <div class="rating-container">
        <div class="rating-image">
          <img :src="`/rating-page/${pokemon.img}`"  alt="Иконка">
        </div>
        <div class="rating-info">
          <p>{{ pokemon.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { POKEMON_RATING } from "@/assets/js/database";
import '/src/assets/css/main.css'
export default {
  name: 'RatingPage',
  data() {
    return {
      pokemons: POKEMON_RATING,
      selectedPokemon: {},
    };
  },
}
</script>

<style lang="scss" scoped>
.container_rating-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.rating-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 30px;
  padding: 15px;
  width: 550px;
  background-color: white;
  grid-gap: 20px;
}

.rating-container {
  display: block;
  align-items: center;
  text-align: center;
}

.rating-image {
  display: flex;
  align-items: center;
  text-align: center;
}

.rating-place {
  font-size: 48px;
  align-items: center;
  text-align: center;
  padding: 0;
  margin-right: 100px;
  margin-bottom: 0;
  margin-left: 15px;
}

.rating-image img {
  width: 250px;
  height: 250px;
  object-fit: contain;
  font-size: 24px;
}

.rating-info {
  display: flex;
  flex-direction: column;
}

.rating-info p {
  font-size: 32px;
}
</style>