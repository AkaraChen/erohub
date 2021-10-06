<template>
  <div id="app">
    <Navbar/>
    <div class="container" style="margin-top: 10px">
      <router-view :key="$route.params.page"/>
    </div>
  </div>
</template>

<style>
.zoom {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

p {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {Navbar}
}

</script>

