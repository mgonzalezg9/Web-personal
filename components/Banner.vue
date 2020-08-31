<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      perfil: {
        nombre: "Manuel González García",
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        redes: [
          { imagen: "@/assets/images/linkedin.png", link: "https://www.linkedin.com/in/mgonzalezg9/" },
          { imagen: "@/assets/images/twitter.png", link: "https://twitter.com/mgonzalezg9" },
          { imagen: "@/assets/images/github.png", link: "https://github.com/mrblacknuel" },
        ],
        foto: "",
      },
    };
  },
};
</script>

<style>
</style>
