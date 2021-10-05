<template>
  <Navbar
      icon="https://pic.rmb.bdstatic.com/bjh/3d9f808a9d10def8dad85f1ee81d6722.png"
      sticky=true
      :list="[
        {'title':'首页',
        'link':'/',
        'target':'_blank',
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
  }
}
</script>

<style scoped>

</style>
