<template>
  <div class="skills py-3">
    <h2 class="py-4">Habilidades</h2>
    <div class="container my-4">
      <b-row>
        <b-col
          v-for="(habilidad, index) in habilidades"
          :key="index"
          sm="12"
          md="6"
          class="my-2 py-3"
        >
          <b-row data-aos="fade-left" data-aos-offset="200">
            <b-col cols="12" sm="3">{{habilidad.nombre}}</b-col>
            <b-col cols="12" sm="9">
              <b-progress
                :value="habilidad.porcentaje"
                :max="max"
                animated
                variant="danger"
                class="mt-1"
              ></b-progress>
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
          porcentaje: 75,
        },
        {
          nombre: "JavaScript",
          porcentaje: 60,
        },
        {
          nombre: "C/C++",
          porcentaje: 60,
        },
        {
          nombre: "Node.js",
          porcentaje: 40,
        },
        {
          nombre: "Vue",
          porcentaje: 70,
        },
        {
          nombre: "Git",
          porcentaje: 60,
        },
      ],
    };
  },
};
</script>

<style>
.skills {
  text-align: center;
}
</style>
