<template>
  <div class="container">
    <div class="content_pokemon-info">
      <div class="pokemon-info">
        <img :src="getPokemonImage" :alt="selectedPokemon.name" class="pokemon-image">
        <div class="pokemon-text">
          <h2 class="pokemon-name">{{ selectedPokemon.name }}</h2>
          <p :class="`pokemon-rarity ${selectedPokemon.rarity}`">{{ selectedPokemon.rarity }}</p>
          <p>Тип: {{ selectedPokemon.type }}</p>
          <p>Предыдущие эволюции: {{ getPreviousEvolutionsText }}</p>
          <p>Следующие эволюции: {{ getNextEvolutionsText }}</p>
          <p>Описание: {{ selectedPokemon.description }}</p>
          <p>Цена: {{ selectedPokemon.price }}₽</p>
          <AddToCartButton :pokemon="selectedPokemon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ALL_POKEMON_DATABASE } from "@/assets/js/database";
import AddToCartButton from "@/components/basket/AddToBasketButton.vue";
import '/src/assets/css/main.css'

export default {
  name: 'PokemonPage',
  components: { AddToCartButton },
  data() {
    return {
      pokemons: ALL_POKEMON_DATABASE,
      selectedPokemon: {},
    };
  },

  computed: {
    getPokemonImage() {
      return `/store-page/${this.selectedPokemon.img}`;
    },
    getPreviousEvolutionsText() {
      return this.selectedPokemon.previous_evolutions.length
          ? this.selectedPokemon.previous_evolutions.join(", ")
          : "Нет";
    },
    getNextEvolutionsText() {
      return this.selectedPokemon.next_evolutions.length
          ? this.selectedPokemon.next_evolutions.join(", ")
          : "Нет";
    },
  },

  created() {
    const pokemonId = this.$route.params.id;
    this.selectedPokemon = this.pokemons.find((pokemon) => pokemon.id == pokemonId);
  },
};
</script>

<style lang="scss">
$common-color: grey;
$rare-color: cornflowerblue;
$epic-color: #a431a4;
$legendary-color: #ffb700;

.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background: url("/src/assets/img/service/pokemonBackground.jpg") no-repeat;
  background-size: cover;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
}

.content_pokemon-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 60%;
  background-size: cover;
}

.content_pokemon-info img {
  width: 400px;
  object-fit: cover;
  margin-bottom: 20px;
}

.pokemon-text {
  max-width: 45%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pokemon-text h2 {
  font-size: 36px;
  margin: 0;
}

.pokemon-text p {
  font-size: 24px;
  margin-bottom: 5px;
}

.pokemon-text p:last-child {
  margin-bottom: 0;
}

.pokemon-text p.pokemon-rarity {
  font-size: 26px;

  &.Обычный {
    color: $common-color;
  }

  &.Редкий {
    color: $rare-color;
  }

  &.Эпический {
    color: $epic-color;
  }

  &.Легендарный {
    color: $legendary-color;
  }
}

.pokemon-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.pokemon-image {
  object-fit: cover;
  margin-bottom: 20px;
}

.pokemon-text {
  text-align: left;
  width: 60%;
  padding: 0 15px;
}

.pokemon-name {
  font-size: 40px;
  font-family: "Arial Black", sans-serif;
  padding-top: 0;
  margin-top: 5px;

}
</style>
