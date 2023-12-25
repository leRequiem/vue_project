<template>
  <button @click="addToBasket" class="add-to-basket-button">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    pokemon: Object,
  },
  data() {
    return {
      basket: [],
    };
  },
  computed: {
    buttonText() {
      const basketItem = this.basket.find((item) => item.id === this.pokemon.id);
      return basketItem ? `В корзине (${basketItem.quantity})` : "Добавить в корзину";
    },
  },
  methods: {
    addToBasket() {
      const basketItemIndex = this.basket.findIndex((item) => item.id === this.pokemon.id);

      if (basketItemIndex !== -1) {
        this.basket[basketItemIndex].quantity++;
      } else {
        this.basket.push({ id: this.pokemon.id, quantity: 1 });
      }

      localStorage.setItem("basket", JSON.stringify(this.basket));
    },
  },
  created() {
    this.basket = JSON.parse(localStorage.getItem("basket")) || [];
  },
};
</script>

<style lang="scss">
.add-to-basket-button {
  background-color: cornflowerblue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.add-to-basket-button:hover {
  background-color: darkblue;
}
</style>
