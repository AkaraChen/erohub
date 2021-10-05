<template>
  <header class="navbar navbar-expand-md navbar-light d-print-none" :class="{'sticky-top':sticky}">
    <div class="container-xl">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <a href="/">
          <img :src="icon" width="110" height="32" alt="Tabler" class="navbar-brand-image">
        </a>
      </h1>
      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item dropdown nav-link"></div>
      </div>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="item in list">
              <router-link :class="{ disabled:item.disable}" :target="item.target"
                 class="nav-link" :to="item.link">
                  <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/star -->
                    <Icon :icon="item.icon"/>
                  </span>
                <span class="nav-link-title">{{ item.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Icon from "./Icon";

export default {
  name: 'Navbar',
  components: {Icon},
  props: {
    list: Array,
    icon: String,
    sticky: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
