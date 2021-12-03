<template>
  <div class="home">
    <h2>shoppingcart {{ shoppingcart }}</h2>
    <div class="menulist">
      <MenuList
        v-for="item in simpleMenu"
        :key="item.name"
        :name="item.name"
        :image="item.image"
        :inStock="item.inStock"
        :quantity="item.quantity"
        :addtoshopping="addtoshopping"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuList from "../components/MenuList.vue";
import croissant from "../assets/croissant.jpg";
import eclair from "../assets/eclair.jpg";
import baguette from "../assets/baguette.jpeg";
export default {
  name: "home",
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
          price: 2.99,
        },
        {
          name: "Baguette de pain",
          image: {
            source: baguette,
            alt: "Quatre baguettes de pain",
          },
          inStock: true,
          quantity: 5,
          price: 55,
        },
        {
          name: "Éclair",
          image: {
            source: eclair,
            alt: "Éclair au chocolat",
          },
          inStock: false,
          quantity: 10,
          price: 10,
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
  },
};
</script>

<style>
.menulist {
  display: flex;
  flex-direction: row;
  margin-left: "10px";
  margin-right: "10px";
  justify-content: center;
  align-items: center;
}
.vuelogo {
  display: inline-flex;
}
h2 {
  color: blue;
  font-size: 15px;
  font-weight: bold;
}
</style>
