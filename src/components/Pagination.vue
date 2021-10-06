<template>
  <div class="btn-list pagination" style="margin-top: 10px;justify-content:center;">
    <a class="btn btn-pill" :class="{disabled:disablePrev}" @click="prev">Prev</a>
    <div class="pagination">
      <div v-for="item in pagination">
        <span style="margin-left: 3px;margin-right: 3px" class="avatar rounded-circle"
              :class="{'bg-blue-lt':item.active,hideInPhone:item.class}">
          <p v-if="item.active"> {{ item.id }} </p>
          <div v-else>
            <router-link v-if="param" :to="'/'+param+'/page/'+item.id">
            {{ item.id }}
            </router-link>
            <router-link v-else :to="'/page/'+item.id">
              {{ item.id }}
            </router-link>
          </div>
        </span>
      </div>
    </div>
    <a class="btn btn-pill" @click="next">Next</a>
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "Pagination",
  props: {
    param() {
      return inject('param', undefined)
    }
  },
  methods: {
    prev() {
      if (this.param !== undefined) {
        this.$router.push('/' + this.param + '/page/' + (Number(this.$route.params.page) - 1))
      } else {
        this.$router.push('/page/' + (Number(this.$route.params.page) - 1))
      }
    },
    next() {
      if (this.param !== undefined) {
        this.$router.push('/' + this.param + '/page/' + (Number(this.$route.params.page) + 1))
      } else {
        this.$router.push('/page/' + (Number(this.$route.params.page) + 1))
      }
    }
  },
  computed: {
    disablePrev() {
      return Number(this.$route.params.page) === 1;
    },
    pagination() {
      if (Number(this.$route.params.page) === 1) {
        return [
          {"id": this.$route.params.page, "active": "true"},
          {"id": Number(this.$route.params.page) + 1},
          {"id": Number(this.$route.params.page) + 2},
          {"id": Number(this.$route.params.page) + 3, "class": "hideInPhone"},
          {"id": Number(this.$route.params.page) + 4, "class": "hideInPhone"},
        ]
      } else if (Number(this.$route.params.page) === 2) {
        return [
          {"id": Number(this.$route.params.page) - 1},
          {"id": this.$route.params.page, "active": "true"},
          {"id": Number(this.$route.params.page) + 1},
          {"id": Number(this.$route.params.page) + 2, "class": "hideInPhone"},
          {"id": Number(this.$route.params.page) + 3, "class": "hideInPhone"},
        ]
      } else {
        return [
          {"id": Number(this.$route.params.page) - 2, "class": "hideInPhone"},
          {"id": Number(this.$route.params.page) - 1},
          {"id": this.$route.params.page, "active": "true"},
          {"id": Number(this.$route.params.page) + 1},
          {"id": Number(this.$route.params.page) + 2, "class": "hideInPhone"},
        ]
      }
    }
  },
}
</script>

<style scoped>
.pagination {
  margin-bottom: 10px !important;
  justify-content: center !important;
}

@media (max-width: 767px) {
  .hideInPhone {
    display: none !important;
  }
}
</style>
