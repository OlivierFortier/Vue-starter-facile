Vue.use(httpVueLoader);

//configuration pour utiliser sass, pas obligatoire si vous utilisez juste css
let sass = new Sass();

//configuration de sass, pas besoin d'y toucher c'est juste un copier collé , ca fonctionne tel quel
httpVueLoader.langProcessor.scss = function (scssText) {
  return new Promise(function (resolve, reject) {
    sass.compile(scssText, function (result) {
      if (result.status === 0) resolve(result.text);
      else reject(result);
    });
  });
};

//configuration de babel, encore une fois pas besoin d'y toucher, c'est un copié collé tel quel
httpVueLoader.langProcessor["text/babel"] = function (script) {
  return Babel.transform(script, {
    moduleId: this.name,
    presets: ["es2017", "stage-3"],
    plugins: ["transform-es2015-modules-umd"],
  }).code;
};

//same thing here lmao
httpVueLoader.scriptExportsHandler = function (script) {
  return this.component.script.module.exports.default;
};

//initialisation de vue. la seule chose nécéssaire pour que vue fonctionne !
new Vue({
  el: "#app",
  // il faut que je dise quels composant j'utilise dans ma page et leur url
  components: {
    "mon-header": httpVueLoader("/js/components/MonHeader.vue"),
    "contenu": httpVueLoader("/js/components/Contenu.vue"),
    "mon-footer": httpVueLoader("/js/components/MonFooter.vue"),
  },
});
