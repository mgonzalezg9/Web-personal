<template>
  <div class="contact">
    <h2 class="py-4">Contacto</h2>
    <b-button href="mailto:mgonzalez4648@gmail.com" variant="outline-primary">SALUDAR</b-button>
    <br class="my-3" />
    <div class="mb-5 pb-4">
      ¿Quiere saber más sobre mí? Lea mi
      <a href="/cv-es.jpeg">CV</a>.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creditos: "Diseñado y programado por Manuel González García",
      fuente: "https://github.com/mrblacknuel/Web-personal",
    };
  },
};
</script>

<style>
.contact {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(250, 250, 250);
}
</style>
