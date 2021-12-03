<template>
  <div id=" app">
    <h1>{{ restaurantName }}</h1>
    <h5>{{ email }}</h5>
  </div>
  <MenuList
    v-for="item in simpleMenu"
    :key="item.name"
    :name="item.name"
    :image="item.image"
    :inStock="item.inStock"
    :quantity="item.quantity"
    :addtoshopping="addtoshopping"
    :shoppingcart="shoppingcart"
  />
</template>

<script>
import MenuList from "./components/MenuList.vue";
import croissant from "./assets/croissant.jpg"
import eclair from './assets/eclair.jpg'
import baguette from './assets/baguette.jpeg'
export default {
  name: "App",
  components: {
    MenuList,
  },
  data() {
    return {
      address: "18 avenue du Beurre, Paris, France",
      email: "hello@cafewithavue.bakery",
      phone: "01 88 88 88 88",
      restaurantName: "La belle vue",
      simpleMenu: [
        {
          name: "Croissant",
          image: {
            source: croissant,
            alt: "Un croissant",
          },
          inStock: true,
          quantity: 12,
        },
        {
          name: "Baguette de pain",
          image: {
            source: baguette,
            alt: "Quatre baguettes de pain",
          },
          inStock: true,
          quantity: 5,
        },
        {
          name: "Éclair",
          image: {
            source: eclair,
            alt: "Éclair au chocolat",
          },
          inStock: false,
          quantity: 10,
        },
      ],
      shoppingcart: 0,
    };
  },
  methods: {
        addtoshopping(quantity) {
          this.shoppingcart += quantity;
          console.log(this.shoppingcart);
        },
}}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
