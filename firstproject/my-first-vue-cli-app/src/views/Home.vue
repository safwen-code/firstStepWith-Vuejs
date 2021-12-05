<template>
  <div class="home">
    <h1>{{ restaurantName }}</h1>
    <h2>shoppingcart {{ shoppingcart }}</h2>
    <div class="menulist">
      <MenuList
        v-for="item in simpleMenu"
        @add-item-quantity="addtoshopping"
        :key="item.name"
        :name="item.name"
        :image="item.image"
        :inStock="item.inStock"
        :quantity="item.quantity"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import MenuList from "../components/MenuList.vue";
export default {
  name: "home",
  components: {
    MenuList,
  },
  computed: {
    ...mapState({
      shoppingcart: "shoppingcart",
      restaurantName: "restaurantName",
      simpleMenu:"simpleMenu"
    }),
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
