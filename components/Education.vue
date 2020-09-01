<template>
  <div class="education py-3">
    <h2>Educación</h2>
    <div class="container">
      <b-row>
        <b-col v-for="(titulo, index) in titulos" :key="index" sm="12" md="6" class="my-2">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img-lazy :src="titulo.imagen" :alt="titulo.nombre" class="rounded-0"></b-card-img-lazy>
              </b-col>
              <b-col md="6">
                <b-card-body :title="titulo.nombre">
                  <b-card-text>
                    {{titulo.institucion}}
                    <br />
                    {{titulo.fechas}}
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulos: [
        {
          nombre: "Ingeniería Informática",
          imagen:
            "https://edit.um.es/campusdigital/files/2018/11/Logo-UMU1.jpg",
          institucion: "Universidad de Murcia",
          fechas: "Sept 2017 - Actualidad",
        },
        {
          nombre: "Cambridge B2 PET",
          imagen:
            "https://www.observatoriorh.com/wp-content/uploads/2017/11/logo-cambridge.jpg",
          institucion: "Cambridge English Language Assesment",
          fechas: "Mayo 2017",
        },
        {
          nombre: "DELF B1",
          imagen: "https://afburgos.com/media/2015/12/alliance-francaise.png",
          institucion: "Allianze Française",
          fechas: "Mayo 2015",
        },
      ],
    };
  },
};
</script>

<style>
.education {
  background-color: rgb(245, 245, 245);
  left: 0;
  bottom: 0;
  text-align: center;
}
</style>
