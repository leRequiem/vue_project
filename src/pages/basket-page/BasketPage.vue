<template>
  <div class="basket-container">
    <h2>Корзина</h2>
    <div v-if="basketItems.length === 0" class="container_empty-basket">Вы еще ничего не добавили в корзину</div>
    <div v-else>
      <div v-for="(item, index) in basketItems" :key="index" class="basket-item">
        <img :src="getPokemonImage(item.id)" :alt="getPokemonName(item.id)" class="basket-item-image">
        <div class="basket-item-details">
          <div class="details-row">
            <p class="basket-item-name">{{ getPokemonName(item.id) }}</p>
          </div>
          <div class="details-row">
            <div class="quantity-controls">
              <button @click="decreaseQuantity(index)" class="quantity-button decrease-button">-</button>
              <p class="basket-item-quantity">Количество: {{ item.quantity }}</p>
              <button @click="increaseQuantity(index)" class="quantity-button increase-button">+</button>
            </div>
          </div>
          <div class="details-row">
            <p class="basket-item-price">Стоимость: {{ calculateItemPrice(item) }}₽</p>
          </div>
        </div>
      </div>
      <p class="basket-total">Итого: {{ calculateTotalPrice() }}₽</p>
      <button @click="buyItems" class="buy-button">Купить</button>
      <button @click="clearBasket" class="clear-cart-button">Очистить корзину</button>
    </div>
  </div>
</template>

<script>
import {ALL_POKEMON_DATABASE} from "@/assets/js/database";
import '/src/assets/css/main.css'

export default {
  data() {
    return {
      basketItems: [],
    };
  },
  methods: {
    getPokemonImage(pokemonId) {
      const pokemon = ALL_POKEMON_DATABASE.find((p) => p.id === pokemonId);
      return pokemon ? `/store-page/${pokemon.img}` : '';
    },
    getPokemonName(pokemonId) {
      const pokemon = ALL_POKEMON_DATABASE.find((p) => p.id === pokemonId);
      return pokemon ? pokemon.name : '';
    },
    calculateItemPrice(item) {
      const pokemon = ALL_POKEMON_DATABASE.find((p) => p.id === item.id);
      return pokemon ? pokemon.price * item.quantity : 0;
    },
    calculateTotalPrice() {
      return this.basketItems.reduce((total, item) => total + this.calculateItemPrice(item), 0);
    },
    decreaseQuantity(index) {
      if (this.basketItems[index].quantity > 1) {
        this.basketItems[index].quantity--;
      } else {
        this.basketItems.splice(index, 1);
      }
      this.updateLocalStorage();
    },
    increaseQuantity(index) {
      this.basketItems[index].quantity++;
      this.updateLocalStorage();
    },
    buyItems() {
      if (window.confirm('Вы уверены, что хотите купить эти товары?')) {
        this.clearBasket();
      }
    },
    clearBasket() {
      this.basketItems = [];
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem("basket", JSON.stringify(this.basketItems));
    },
  },
  created() {
    this.basketItems = JSON.parse(localStorage.getItem("basket")) || [];
  },
};
</script>

<style lang="scss">
body {
  background: linear-gradient(to right, #f5f5f5, #e9e9e9);
  margin: 0;
}

.basket-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.basket-container h2 {
  text-align: center;
  font-size: 32px;
  font-family: sans-serif;
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid;
}

.container_empty-basket {
  text-align: center;
  font-size: 24px;
  margin: 10px 0;
}

.basket-item {
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid;
}

.basket-item-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 30px;
  border-radius: 5px;
  margin-top: 20px;
}

.basket-item-details {
  flex: 1;
}

.basket-item-name {
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
}

.basket-item-quantity,
.basket-item-price {
  font-size: 22px;
}

.basket-total {
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
}

.clear-cart-button {
  background-color: #f44336;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;
}

.clear-cart-button:hover {
  background-color: #d32f2f;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin: 0 10px;
  transition: color 0.3s;
}

.decrease-button {
  color: #d32f2f;
}

.increase-button {
  color: #4caf50;
}

.decrease-button:hover,
.increase-button:hover {
  color: #333;
}

.buy-button {
  background-color: #2196f3;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
  transition: background-color 0.3s;
  margin-right: 10px;
}

.buy-button:hover {
  background-color: #0b7dda;
}

.basket-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.details-row {
  margin-bottom: 10px;
}
</style>
