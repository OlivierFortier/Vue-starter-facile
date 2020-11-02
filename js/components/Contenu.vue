<template>
  <div class="hello">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga
      accusamus cum, molestiae molestias, sed ducimus ullam excepturi doloribus
      nam temporibus fugiat optio! Quas asperiores cum nisi beatae maxime ipsum?
    </p>
  </div>
</template>

<script lang="text/babel">
export default {
  name : "contenu",
  // vous pouvez completement ignorer la partie script et utiliser
  //vue seulement pour mieux organiser votre code en plusieurs fichiers
  //et bien sur, profiter du css qui est "scoped" a ce fichier uniquement
};
</script>

<style lang="scss" scoped>
.hello {
  background-color: #ffe;
  height: 20vh;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  padding: 0 2%;

  p {
    color: blue;
  }

}
</style>
