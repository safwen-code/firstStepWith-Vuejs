<script>
export default {
  name: "Contact",
  data() {
    return {
      address: "18 avenue du Beurre, Paris, France",
      email: "hello@cafewithavue.bakery",
      phone: "01 88 88 88 88",
    };
  },
  computed: {},
  methods: {},
};
</script>
<template>
  <h2>Contact</h2>
  <div>
    <p>📧 {{ email }}</p>
    <span>🏠{{ address }}</span> ||
    <span>📱{{ phone }}</span>
  </div>
</template>
