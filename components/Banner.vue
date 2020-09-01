<template>
  <div class="banner py-5">
    <b-container>
      <b-row class="text-center">
        <b-col sm="12" md="6">
          <b-row>
            <b-col cols="12" class="my-2">
              <h1>{{perfil.nombre}}</h1>
            </b-col>
            <b-col cols="12" class="my-2">{{perfil.descripcion}}</b-col>
            <b-col cols="12" class="text-center mt-3">
              <a href="https://www.linkedin.com/in/mgonzalezg9/" class="mx-2">
                <b-img height="40" src="@/assets/images/linkedin.png" />
              </a>
              <a href="https://twitter.com/mgonzalezg9" class="mx-2">
                <b-img rounded height="40" src="@/assets/images/twitter.png" />
              </a>
              <a href="https://github.com/mrblacknuel" class="mx-2">
                <b-img height="40" src="@/assets/images/github.png" />
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="6">
          <b-img rounded="circle" height="275" src="@/assets/images/perfil.jpeg"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perfil: {
        nombre: "Manuel González García",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        redes: [
          {
            imagen: "@/assets/images/linkedin.png",
            link: "https://www.linkedin.com/in/mgonzalezg9/",
          },
          {
            imagen: "@/assets/images/twitter.png",
            link: "https://twitter.com/mgonzalezg9",
          },
          {
            imagen: "@/assets/images/github.png",
            link: "https://github.com/mrblacknuel",
          },
        ],
      },
    };
  },
};
</script>

<style>
.banner {
  background-color: aquamarine;
  left: 0;
  bottom: 0;
  text-align: center;
}
</style>
