<template>
  <div class="index">
    <Banner
      id="about"
      class="my-4 py-0"
      data-aos="fade-up"
      data-aos-anchor="#about"
      data-aos-anchor-placement="#about"
    />
    <Education
      id="education"
      class="secondary-section my-0 py-0"
      data-aos="fade-up"
      data-aos-anchor="#education"
      data-aos-anchor-placement="#education"
    />
    <hr />
    <Experience
      id="experience"
      class="primary-section my-0 py-0"
      data-aos="fade-up"
      data-aos-anchor="#experience"
      data-aos-anchor-placement="#experience"
    />
    <hr />
    <Skills
      id="skills"
      class="secondary-section my-0"
      data-aos="fade-up"
      data-aos-anchor="#skills"
      data-aos-anchor-placement="#skills"
    />
    <hr />
    <Contact
      id="contact"
      class="primary-section my-0 py-0"
      data-aos="fade-up"
      data-aos-anchor="#contact"
      data-aos-anchor-placement="#contact"
    />
    <Footer />
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default {
  components: {
    Banner,
    Education,
    Experience,
    Skills,
    Contact,
    Footer,
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
