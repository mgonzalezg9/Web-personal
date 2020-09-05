<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="first-color py-3">
      <b-navbar-brand to="#" class="d-none d-md-block">
        <img src="@/assets/images/logo.png" class="mx-3" height="50" />
        Manuel González García
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav right>
            <b-nav-item v-for="(link, index) in links" :key="index" :to="link.url">{{link.nombre}}</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown :disabled="true" text="Idioma" right>
            <b-dropdown-item
              v-for="(idioma, index) in idiomas"
              :key="index"
              :to="idioma.url"
            >{{idioma.nombre}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          nombre: "Sobre mí",
          url: "#about",
        },
        {
          nombre: "Educación",
          url: "#education",
        },
        {
          nombre: "Experiencia",
          url: "#experience",
        },
        {
          nombre: "Habilidades",
          url: "#skills",
        },
        {
          nombre: "Contacto",
          url: "#contact",
        },
      ],
      idiomas: [
        {
          nombre: "ES",
          url: "/es",
        },
        {
          nombre: "EN",
          url: "/en",
        },
      ],
    };
  },
};
</script>