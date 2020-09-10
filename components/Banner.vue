<template>
  <div class="banner gradient">
    <b-container>
      <b-row class="text-center">
        <b-col md="12" lg="6" class="mx-0" data-aos="zoom-in-up">
          <b-img fluid src="@/assets/images/retrato.png"></b-img>
        </b-col>
        <b-col md="12" lg="6" class="my-auto" data-aos="flip-up">
          <b-row>
            <b-col cols="12" class="my-2">
              <h1>{{$t("profile.name")}}</h1>
            </b-col>
            <b-col cols="12" class="my-2">
              <h3>{{$t("profile.role")}}</h3>
            </b-col>
            <b-col cols="12" class="my-2">
              <h5>{{$t("profile.description")}}</h5>
            </b-col>
            <b-col cols="12" class="text-center my-3">
              <a href="https://www.linkedin.com/in/mgonzalezg9/" class="mx-2">
                <font-awesome-icon :icon="['fab', 'linkedin']" :style="iconProps" />
              </a>
              <a href="https://twitter.com/mgonzalezg9" class="mx-2">
                <font-awesome-icon :icon="['fab', 'twitter']" :style="iconProps" />
              </a>
              <a href="https://github.com/mrblacknuel" class="mx-2">
                <font-awesome-icon :icon="['fab', 'github']" :style="iconProps" />
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      iconProps: {
        color: "white",
        fontSize: "40px",
      },
    };
  },
};
</script>

<style lang="css">
.banner {
  left: 0;
  bottom: 0;
  text-align: center;
}
</style>