<template>
  <ul>
      <!-- c'est comme ca qu'on fait une boucle avec vue ! super simple et magique ! -->
    <li v-for="chose in liste" :key="chose" >{{chose}}</li>
    <!-- pour chaque chose dans la liste qui est dans la méthode data() plus bas, affiche un li qui contient la chose -->
  </ul>
</template>

<script lang="text/babel">
export default {
  name: "boucle",

//les donnée que je veux utiliser dans ma page, tableaux, objets, variables, sont à l'intérieur du return
  data() {
    return {
      liste: [
        "bon matin !",
        "bon avant-midi !",
        "bonjour !",
        "bon après-midi",
        "bonne soirée !",
        "bonsoir !",
        "bonne nuit !",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
    border: 1px solid yellowgreen;
}

</style>
