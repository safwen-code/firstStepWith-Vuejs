import { createStore } from "vuex";

import croissant from "../assets/croissant.jpg";
import eclair from "../assets/eclair.jpg";
import baguette from "../assets/baguette.jpeg";
export default createStore({
  state: {
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
  },
  mutations: {
    ADD_ITEMS_TO_SHOPPING_CART(state, amount) {
      state.shoppingCart += amount;
    },
  },
  actions: {
    updateShoppingCart({ commit }, amount) {
      commit("ADD_ITEMS_TO_SHOPPING_CART", amount);
    },
  },
  modules: {},
  getters: {},
});
