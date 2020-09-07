<template>
  <div class="container text-center my-5">
    <font-awesome-icon
      :icon="['fas', 'exclamation-triangle']"
      style="font-size: 100px;"
      class="my-2"
    />
    <div class="my-4">
      <h1 style="font-size: 60px">{{$t("error.code")}}</h1>
      <h1>{{$t("error.message")}}</h1>
    </div>
    <b-button
      @click="$router.go(-1)"
      pill
      variant="outline-danger"
      style="font-size: 20px"
    >{{$t("error.back")}}</b-button>
  </div>
</template>

<script>
export default {
  // layout: "simple",
};
</script>

<style>
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
