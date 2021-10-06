<template>
  <Navbar
      v-if="hide"
      icon="https://pic.rmb.bdstatic.com/bjh/3d9f808a9d10def8dad85f1ee81d6722.png"
      sticky=true
      :list="[
        {'title':'首页',
        'link':'/',
        'icon':'home'
        },
        {'title':'Konachan',
        'link':'/konachan',
        'icon':'award',
        },
        {'title':'Expliyh',
        'link':'/expliyh',
        'icon':'panorama-horizontal',
        }
        ]"
  />
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: "Header",
  components: {
    Navbar
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

<style scoped>
</style>
