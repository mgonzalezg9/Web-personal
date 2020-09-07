<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="first-color py-3">
      <b-navbar-brand to="#" class="d-none d-md-block">
        <img src="@/assets/images/logo.png" class="mx-3" height="50" />
        {{$t("profile.name")}}
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav right>
            <b-nav-item v-for="(link, index) in links" :key="index" :to="link.url">{{$t(link.ref)}}</b-nav-item>
            <nuxt-link
              v-for="idioma in idiomasDisponibles"
              :key="idioma.code"
              :to="switchLocalePath(idioma.code)"
            >
              <country-flag :country="idioma.code === 'en' ? 'usa' : idioma.code" size="normal" />
            </nuxt-link>
          </b-navbar-nav>
          <!-- <b-nav-item-dropdown :text="$t('language')" right>
            <b-dropdown-item
              v-for="idioma in idiomasDisponibles"
              :key="idioma.code"
              :to="switchLocalePath(idioma.code)"
              class="text-center"
            >
              <country-flag :country="idioma.code === 'en' ? 'usa' : idioma.code" size="normal" />
            </b-dropdown-item>
          </b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  components: {
    CountryFlag,
  },
  data() {
    return {
      links: [
        {
          nombre: "Sobre mí",
          ref: "sections.about",
          url: "#about",
        },
        {
          nombre: "Educación",
          ref: "sections.education",
          url: "#education",
        },
        {
          nombre: "Experiencia",
          ref: "sections.experience",
          url: "#experience",
        },
        {
          nombre: "Habilidades",
          ref: "sections.skills",
          url: "#skills",
        },
        {
          nombre: "Contacto",
          ref: "sections.contact",
          url: "#contact",
        },
      ],
    };
  },
  computed: {
    idiomasDisponibles() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>