<script>
import Icon from "./Icon";

export default {
  name: 'Navbar',
  components: {Icon},
  data() {
    return {
      list: [
        {
          'title': '首页',
          'link': '/',
          'icon': 'home'
        },
        {
          'title': 'Konachan',
          'link': '/konachan',
          'icon': 'award',
        },
        {
          'title': 'Expliyh',
          'link': '/expliyh',
          'icon': 'panorama-horizontal',
        }
      ],
      icon: 'https://pic.rmb.bdstatic.com/bjh/3d9f808a9d10def8dad85f1ee81d6722.png',
      sticky: true
    }
  },
  computed: {
    hide() {
      if (navigator.userAgent ===
          'Mozilla/5.0 (Linux; Android 7.1.2; Build/NJH47F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Safari/537.36 ErohubAPP/lingyeSoul'
      ) {
        return undefined
      } else {
        return true
      }
    }
  }
}
</script>

<template>
  <header v-if="hide" class="navbar navbar-expand-md navbar-light d-print-none" :class="{'sticky-top':sticky}">
    <div class="container-xl">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <router-link to="/page/1">
          <img :src="icon" width="110" height="32" alt="Tabler" class="navbar-brand-image">
        </router-link>
      </h1>
      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item dropdown nav-link"></div>
      </div>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="item in list">
              <router-link :target="item.target"
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
