<template>
  <div class="index">
    <Banner id="about" class="my-4 py-0" data-aos="fade-up" />
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

body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  color: #283149;
}

h1 {
  font-size: 40px;
  letter-spacing: 1px;
}

h2 {
  font-size: 40px;
  letter-spacing: 1px;
}

h3 {
  font-size: 30px;
  font-style: italic;
  letter-spacing: 0.5px;
}
</style>
