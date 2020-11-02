<template>
  <nav>
      <ul>
          <li>cours</li>
          <li>etudiants</li>
          <li>{{who}}</li>
          <li>projets</li>
      </ul>
  </nav>
</template>

<script lang="text/babel">
export default {
    name : "mon-header",
    //si on veut des variables dynamiques, on les mets dans le return comme ici
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