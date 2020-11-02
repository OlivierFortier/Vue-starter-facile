<template>
  <nav>
    <ul>
      <li>cours</li>
      <li>etudiants</li>
      <!-- on peut facilement mettre du contenu dynamique dans le html de cette facon,  -->
      <!-- qui provient du tag de script -->
      <li>{{ who }}</li>
      <li>projets</li>
    </ul>
  </nav>
</template>

<script lang="text/babel">
export default {
    // nom du composant qui sera utilisé dans le html
    name : "mon-header",
    //si on veut des variables dynamiques, on les mets dans le return du data comme ici
    //ensuite on peut les utiliser dans le html en haut
    data: function() {
        return {
            who: 'world'
        }
    }
}
</script>

<style scoped>
nav {
  border: 1px solid palegoldenrod;
}

ul {
  display: flex;
  justify-content: space-around;
}
</style>
