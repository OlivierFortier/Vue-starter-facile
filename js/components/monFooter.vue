<template>
  <footer>
    <h1>je suis un footer</h1>
  </footer>
</template>

<script lang="text/babel">
export default {
     // nom du composant qui sera utilisé dans le html
    name: "mon-footer",
//a l'intérieur du tag de script vous pouvez écrire du javascript normal, faire des calculs
//des variables, aller cherchers les données dans le cms, dans le backend, etc

}
</script>

// le css "scoped" fait que tout le css qui est dans ce fichier ne va s'appliquer qu'a ce fichier uniquement,
// sans affecter les autres
<style scoped>
footer {
  border: 1px solid red;
  display: flex;
  justify-content: center;
}
</style>
