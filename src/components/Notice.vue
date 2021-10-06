<template>
  <div v-if="haveRead" class="alert alert-info alert-dismissible" role="alert">
    <div class="d-flex">
      <div>
        <Icon class="alert-icon" icon="info-circle"/>
      </div>
      <div>
        <h4 class="alert-title" v-html="title"></h4>
        <div class="text-muted" v-html="text"></div>
      </div>
    </div>
    <a class="btn-close" @click="read" data-bs-dismiss="alert" aria-label="close"></a>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import Icon from "@/components/Icon";

export default {
  name: "Notice",
  components: {Icon},
  props: {
    name: String,
    text: String,
    title: String
  },
  data() {
    return {
      meta: '',
      haveRead: true
    }
  },
  methods: {
    read() {
      Cookies.set(this.name + 'Read', 'True')
    }
  },
  created() {
    if (Cookies.get(this.name + 'Read')) {
      this.haveRead = undefined
    }
  },
}
</script>
