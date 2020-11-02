<template>
  <div>
    <h1>Titre de la carte</h1>
    <!-- juste une image normale de unsplash -->
    <img
      src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
      alt=""
    />
  </div>
</template>

<script lang="text/babel">
export default {
  // le nom du composant qui sera utilisé dans le html
    name : "carte"
}
</script>

// pour utiliser sass, il suffit de dire lang="sass" ! plus besoin de "watch sass"
// ou de gosser avec des fichiers .css.map ou des fichiers qui sont pas bien compilés !
<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  height: 10%;

  h1 {
    text-align: center;
  }

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
