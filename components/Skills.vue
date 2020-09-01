<template>
  <div class="skills py-3">
    <h2>Habilidades</h2>
    <div class="container mt-4">
      <b-row>
        <b-col v-for="(habilidad, index) in habilidades" :key="index" sm="12" md="6" class="my-2">
          <b-row>
            <b-col cols="2">{{habilidad.nombre}}</b-col>
            <b-col cols="10">
              <b-progress :value="habilidad.porcentaje" :max="max" animated class="mt-1"></b-progress>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 100,
      habilidades: [
        {
          nombre: "Java",
          porcentaje: 10,
        },
        {
          nombre: "JavaScript",
          porcentaje: 10,
        },
        {
          nombre: "C/C++",
          porcentaje: 10,
        },
        {
          nombre: "Node.js",
          porcentaje: 10,
        },
        {
          nombre: "Vue",
          porcentaje: 10,
        },
        {
          nombre: "Git",
          porcentaje: 10,
        },
      ],
    };
  },
};
</script>

<style>
.skills {
  background-color: rgb(245, 245, 245);
  text-align: center;
}
</style>
