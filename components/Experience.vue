<template>
  <div class="experience py-3">
    <h2 class="py-4">{{ $t("sections.experience") }}</h2>
    <div class="container">
      <b-row>
        <b-col
          v-for="(titulo, index) in titulos"
          :key="index"
          sm="12"
          md="6"
          class="py-4"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6" class="my-auto">
                <b-card-img-lazy
                  :src="titulo.imagen"
                  :alt="$t(`${titulo.ref}.title`)"
                  class="p-2 rounded-0"
                ></b-card-img-lazy>
              </b-col>
              <b-col md="6" class="my-auto">
                <b-card-body :title="$t(`${titulo.ref}.title`)">
                  <b-card-text>
                    <div style="font-style: italic">
                      {{ $t(`${titulo.ref}.subtitle`) }}
                    </div>
                    <br />
                    {{ $t(`${titulo.ref}.dates`) }}
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
          ref: "experience.gowtech",
          imagen: "https://gow.tech/content/images/2020/08/logo-1.png",
        },
        {
          ref: "experience.displaynote",
          imagen: "https://www.displaynote.com/images/logo.svg",
        },
      ],
    };
  },
};
</script>

<style>
.experience {
  text-align: center;
}
</style>
