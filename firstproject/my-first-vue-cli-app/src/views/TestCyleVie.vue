<script>
export default {
  name: "TestCyleVie",
  data() {
    return {
      msg: "hello",
    
    };
  },
    beforeCreate() {
        console.log("Je ne suis pas encore  créé");
      },
      created() {
        console.log("Je suis créé !");
      },
      beforeMount() {
        console.log("Je vais bientôt être monté sur le DOM!");
      },
      mounted() {
        console.log("Je suis monté sur le DOM!");
      },
      beforeUnmounted() {
        console.log("Je suis sur le point de disparaître du DOM !");
      },
      unmounted() {
        console.log("Je suis supprimé");
      },
};
</script>
<template>
  <h1>{{ msg }}</h1>
</template>
<style></style>
