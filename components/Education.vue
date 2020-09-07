<template>
  <div class="education">
    <h2 class="py-4">{{$t("sections.education")}}</h2>
    <div class="container">
      <b-row>
        <b-col
          v-for="(titulo, index) in titulos"
          :key="index"
          sm="12"
          md="6"
          class="my-4"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6" class="my-auto">
                <b-card-img-lazy
                  :src="titulo.imagen"
                  :alt="$t(`${titulo.ref}.title`)"
                  class="rounded-0"
                ></b-card-img-lazy>
              </b-col>
              <b-col md="6" class="my-auto">
                <b-card-body :title="$t(`${titulo.ref}.title`)">
                  <b-card-text>
                    <div style="font-style: italic">{{$t(`${titulo.ref}.subtitle`)}}</div>
                    <br />
                    {{$t(`${titulo.ref}.dates`)}}
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
          ref: "education.cs",
          imagen:
            "https://edit.um.es/campusdigital/files/2018/11/Logo-UMU1.jpg",
        },
        {
          ref: "education.en",
          imagen:
            "https://www.observatoriorh.com/wp-content/uploads/2017/11/logo-cambridge.jpg",
        },
        {
          ref: "education.fr",
          imagen: "https://afburgos.com/media/2015/12/alliance-francaise.png",
        },
      ],
    };
  },
};
</script>

<style>
.education {
  left: 0;
  bottom: 0;
  text-align: center;
}
</style>
