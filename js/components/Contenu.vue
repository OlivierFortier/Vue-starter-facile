<template>
<!-- a l'intérieur du template, c'est juste du html normal ! -->
  <div class="hello">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga
      accusamus cum, molestiae molestias, sed ducimus ullam excepturi doloribus
      nam temporibus fugiat optio! Quas asperiores cum nisi beatae maxime ipsum?
    </p>
    <carte></carte>
  </div>
</template>

<script>
module.exports = {
  // je déclare le nom du composant
name : "contenu",

  // je déclare les composants que je veux importer a l'intérieur de d'autres composants
  //c'est possible de mettre un composant a l'intérieur d'un composant qui est à l'intérieur d'un composant !
  components : {
    carte : httpVueLoader("/js/components/composants_internes/Carte.vue")
  }

}
</script>

// le css "scoped" fait que tout le css qui est dans ce fichier ne va s'appliquer qu'a ce fichier uniquement,
// sans affecter les autres
<style lang="scss" scoped>
.hello {
  background-color: #ffe;
  height: auto;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2%;

  p {
    color: blue;
  }
}
</style>
