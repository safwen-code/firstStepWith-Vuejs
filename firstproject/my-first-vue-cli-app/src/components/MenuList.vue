<script>
export default {
  name: "MenuList",
  props: {
    name: {
      type: String,
    },
    image: {
      type: Object,
    },
    inStock: {
      type: Boolean,
    },
    quantity: { type: Number, default: 1 },
    addtoshopping: { type: Function },
    shoppingcart: { type: Number },
    price: {
      type: Number,
    },
  },

  data() {
    return {
      onSale: false,
    };
  },
  computed: {
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2);
      } else {
        return this.price;
      }
    },
  },
  beforeMount() {
    const today = new Date().getDate();
    if (today % 2 === 1) {
      this.onSale = true;
    }
  },
  methods: {
    updatequantity(quantity) {
      this.$emit("add-item-quantity", quantity);
    },
  },
};
</script>

<template>
  <div class="hello">
    <div class="menu-item">
      <img class="menu-item__image" :src="image.source" :alt="image.alt" />
      <div>
        <h3>{{ name }}</h3>
        <p v-if="inStock">En stock</p>
        <p v-else>En rupture de stock</p>
        <div class="priceInfo">
          <label>price {{ generatedPrice }}</label>
          <label for="add-item-quantity">Quantité : {{ quantity }}</label>
        </div>
        <div class="quantityInfo">
          <input v:model-number="quantity" type="number" />
          <button type="button" v-on:click="updatequantity(quantity)">
            add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.priceInfo {
  margin: 10px 50px 20px 0;
  display: flex;
  justify-content: space-evenly;
}
.quantityInfo {
  margin: 10px 50px 20px 0;
  display: flex;
  justify-content: space-evenly;
  border: solid;
}
.menu-item__image {
  height: 50px;
}
</style>
