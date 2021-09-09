<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container" style="margin-top: 10px">
      <router-view :key="$route.params.page"/>
    </div>
  </div>
</template>

<style>

</style>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {Navbar}
}

</script>

