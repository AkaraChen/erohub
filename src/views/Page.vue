<template>
  <div class="row">
    <div v-for="item in meta" class="col-md-4 col-lg-3 col-sm-6" style="margin-top: 10px" :key="item">
      <div class="card">
        <img v-if="item.cid" class="zoom" :src="item.thumb" alt=""/>
        <div v-else class="skeleton-image zoom"></div>
        <div class="card-body">
          <h3 class="card-title">
            <router-link :to="'/archives/' + item.cid">
              <p v-if="item.cid">{{ item.title }}</p>
              <div v-else class="skeleton-line skeleton-line-full"></div>
            </router-link>
          </h3>
        </div>
      </div>
    </div>
    <Pagination/>
  </div>
</template>

<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Icon from "../components/Icon";
import Pagination from "@/components/Pagination";

export default {
  components: {Pagination, Icon},
  data() {
    return {
      meta: undefined,
    }
  },
  created() {
    const data = []
    for (let i = 1; i <= 12; i++) {
      data.push({"": "",});
    }
    this.meta = data
    NProgress.start()
    NProgress.set(0.4)
    axios.get('https://cdn.jsdelivr.net/gh/AsahiIndustry/erohub-backend@latest/dist/webpage/' + this.$route.params.page + '.json')
        .then(response => (this.meta = response.data.data))
        .catch(error => {
          console.log(error)
        });
    document.title = 'Erohub - 第' + this.$route.params.page + '页'
    NProgress.done()
  },
}
</script>
