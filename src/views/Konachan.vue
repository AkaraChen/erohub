<template>
  <Notice name="kona" title="本页面内容来自“Konachan”" text="点击文章标题,即可自动重定向到源地址"/>
  <div class="row">
    <div v-for="item in meta" class="col-md-4 col-lg-3 col-sm-6" style="margin-bottom: 10px">
      <div class="card">
        <img v-if="item.id" class="zoom" :src="item.preview_url" alt="" height="auto"/>
        <div v-else class="skeleton-image zoom"></div>
        <div class="card-body">
          <h3 class="card-title">
            <a :href="'https://konachan.net/post/show/' + item.id" target="_blank">
              <p v-if="item.id">
                <Icon icon="user"/>
                作者：{{ item.author }}
              </p>
              <p v-else>
                <Icon icon="user"/>
                Loading<span class="animated-dots"></span>
              </p>
            </a></h3>
        </div>
      </div>
    </div>
    <Pagination param="konachan"/>
  </div>
</template>
<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Icon from "../components/Icon";
import Pagination from "@/components/Pagination";
import Notice from "@/components/Notice";


export default {
  components: {Notice, Pagination, Icon},
  data() {
    return {
      meta: '',
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
    axios.get('https://cdn.jsdelivr.net/gh/AkaraChen/Konachan@latest/dist/' + this.$route.params.page + '.json')
        .then(response => (this.meta = response.data))
        .catch(error => {
          console.log(error)
        });
    document.title = 'KonaChan - 第' + this.$route.params.page + '页'
    NProgress.done()
  },
}
</script>
