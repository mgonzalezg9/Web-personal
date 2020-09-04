<template>
  <div class="index">
    <Banner id="about" class="my-4 py-5" data-aos="fade-up" />
    <Education id="education" class="secondary-section my-0 py-0" data-aos="fade-up" />
    <hr />
    <Experience id="experience" class="primary-section my-0 py-0" data-aos="fade-up" />
    <hr />
    <Skills id="skills" class="secondary-section my-0" data-aos="fade-up" />
    <hr />
    <Contact id="contact" class="primary-section my-0 py-0" data-aos="fade-up" />
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default {
  components: {
    Banner,
    Education,
    Experience,
    Skills,
    Contact,
  },
};
</script>

<style>
hr {
  margin-top: 0;
  margin-bottom: 0;
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
