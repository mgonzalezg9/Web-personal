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
            <b-col cols="12" sm="3">
              <font-awesome-icon :icon="habilidad.icono" :style="iconProps" />
            </b-col>
            <b-col cols="12" sm="9" class="my-auto">
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
          icono: ["fab", "java"],
          porcentaje: 75,
        },
        {
          nombre: "Vue",
          icono: ["fab", "vuejs"],
          porcentaje: 70,
        },
        {
          nombre: "JavaScript",
          icono: ["fab", "js-square"],
          porcentaje: 60,
        },
        {
          nombre: "Git",
          icono: ["fab", "git"],
          porcentaje: 60,
        },
        {
          nombre: "Node.js",
          icono: ["fab", "node"],
          porcentaje: 45,
        },
        {
          nombre: "CSS3",
          icono: ["fab", "css3-alt"],
          porcentaje: 30,
        },
      ],
      iconProps: {
        fontSize: "40px",
        color: "#283149",
      },
    };
  },
};
</script>

<style>
.skills {
  text-align: center;
}
</style>
