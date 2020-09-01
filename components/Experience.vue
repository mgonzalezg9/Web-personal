<template>
  <div class="experience py-3">
    <h2>Experiencia</h2>
    <div class="container">
      <b-row>
        <b-col v-for="(titulo, index) in titulos" :key="index" sm="12" md="6" class="my-2">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img-lazy :src="titulo.imagen" :alt="titulo.nombre" class="p-2 rounded-0"></b-card-img-lazy>
              </b-col>
              <b-col md="6">
                <b-card-body :title="titulo.empresa">
                  <b-card-text>
                    {{titulo.rol}}
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
          rol: "Desarrollador web Full Stack",
          imagen: "https://gow.tech/content/images/2020/08/logo-1.png",
          empresa: "Green Open Ware SL",
          fechas: "Junio - Agosto 2020",
        },
        {
          rol: "Testing automatizado de aplicaciones de escritorio",
          empresa: "DisplayNote LTD",
          imagen: "https://www.displaynote.com/images/logo.svg",
          fechas: "Julio - Agosto 2019",
        },
      ],
    };
  },
};
</script>

<style>
.experience {
  background-color: rgb(250, 250, 250);
  text-align: center;
}
</style>
