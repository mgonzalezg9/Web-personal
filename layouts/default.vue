<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    return {
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "manuel gonzalez garcia, programmer full stack, full stack developer español, ingenieria informatica umu, displaynote, full stack google, web full stack",
        },
        ...i18nSeo.meta,
      ],
      link: [
        {
          hid: "android-chrome-192x192",
          rel: "android-chrome-192x192",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          hid: "android-chrome-512x512",
          rel: "android-chrome-512x512",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },
        {
          hid: "apple-touch-icon",
          rel: "apple-touch-icon",
          // sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          hid: "favicon-16x16",
          rel: "favicon-16x16",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          hid: "favicon-32x32",
          rel: "favicon-32x32",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        ...i18nSeo.link,
      ],
    };
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
