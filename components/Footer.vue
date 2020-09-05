<template>
  <div>
    <footer class="page-footer second-color font-small blue py-3">
      <div class="mb-0">{{creditos}}</div>
      <div class="footer-copyright text-center py-0 small">
        Código fuente disponible en
        <a :href="fuente">
          Github
          <font-awesome-icon :icon="['fab', 'github']" style="fontSize: '15px'" />
        </a>
      </div>
    </footer>
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
footer {
  /* position: fixed;
  left: 0;
  bottom: 0;
  width: 100%; */
  text-align: center;
}
</style>
