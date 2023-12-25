<template>
  <div class="main-page">
    <div class="filter-buttons">
      <button @click="showAll">Все покемоны</button>
      <button @click="showCommon">Обычные покемоны</button>
      <button @click="showRare">Редкие покемоны</button>
      <button @click="showEpic">Эпические покемоны</button>
      <button @click="showLegendary">Легендарные покемоны</button>
    </div>
    <div class="pokemon-container">
      <CardPage v-for="pokemon in filteredPokemons" :key="pokemon.id" :item="pokemon" />
    </div>
  </div>
</template>

<script>
import { ALL_POKEMON_DATABASE, COMMON_POKEMON_DATABASE, RARE_POKEMON_DATABASE, EPIC_POKEMON_DATABASE, LEGENDARY_POKEMON_DATABASE } from "@/assets/js/database";
import CardPage from "@/components/item-on-page/CardPage.vue";
import '/src/assets/css/main.css';

export default {
  name: "MainPage",
  components: { CardPage },
  data() {
    return {
      allPokemons: ALL_POKEMON_DATABASE,
      filteredPokemons: ALL_POKEMON_DATABASE,
    };
  },
  methods: {
    showAll() {
      this.filteredPokemons = this.allPokemons;
    },
    showCommon() {
      this.filteredPokemons = COMMON_POKEMON_DATABASE;
    },
    showRare() {
      this.filteredPokemons = RARE_POKEMON_DATABASE;
    },
    showEpic() {
      this.filteredPokemons = EPIC_POKEMON_DATABASE;
    },
    showLegendary() {
      this.filteredPokemons = LEGENDARY_POKEMON_DATABASE;
    },
  },
};
</script>

<style lang="scss">
body {
  background: linear-gradient(to right, #f5f5f5, #e9e9e9);
}

.main-page {
  margin: 0 auto;
  padding: 10px;
  background: linear-gradient(to right, #f5f5f5, #e9e9e9);
}

.filter-buttons {
  display: flex;
  margin-bottom: 20px;
  margin-top: 15px;
  justify-content: flex-end;
}

.filter-buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: cornflowerblue;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.filter-buttons button:hover {
  background-color: black;
}

.pokemon-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
}

@media (max-width: 800px) {
  .pokemon-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
