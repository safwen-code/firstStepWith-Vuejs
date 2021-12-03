<script>
export default {
  name: "MenuList",
  props: [
    "name",
    "image",
    "inStock",
    "quantity",
    "addtoshopping",
    "shoppingcart",
  ],
};
</script>

<template>
  <div class="hello">
    <div class="menu-item">
      <h2>shoppingcart {{ shoppingcart }}</h2>
      <img class="menu-item__image" :src="image.source" :alt="image.alt" />
      <div>
        <h3>{{ name }}</h3>
        <p v-if="inStock">En stock</p>
        <p v-else>En rupture de stock</p>
        <div>
          <label for="add-item-quantity">Quantité : {{ quantity }}</label>
          <input v:model-number="quantity" type="number" />
          <button type="button" v-on:click="addtoshopping(quantity)">add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
