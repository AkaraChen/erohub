<template>
  <div id="app">
    <Header/>
    <div class="container" style="margin-top: 10px">
      <router-view :key="$route.params.page"/>
    </div>
  </div>
</template>

<style>

</style>

<script>
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default {
  name: 'App',
  components: {Header, Navbar}
}

</script>

