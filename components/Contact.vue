<template>
  <div class="contact">
    <h2 class="py-4">{{$t("sections.contact")}}</h2>
    <b-button
      href="mailto:mgonzalez4648@gmail.com"
      variant="outline-primary"
      data-aos="zoom-in"
      data-aos-offset="100"
    >{{$t("contact.buttonText")}}</b-button>
    <br class="my-3" />
    <div class="mb-5 pb-4" data-aos="fade-in-up" data-aos-offset="200">
      {{$t("contact.moreInfo")}}
      <a :href="getCV()">CV</a>.
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getCV() {
      return `/cv-${this.$i18n.locale}.jpg`;
    },
  },
};
</script>

<style>
.contact {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
