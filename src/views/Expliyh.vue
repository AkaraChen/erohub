<template>
  <Notice name="exp" title="本页面内容来自“请叫我旗舰处理器”" text="点击文章标题,即可自动重定向到<a href='https://expli.top'> Expliyh 的站点</a>"/>
  <div class="row">
    <div v-for="item in meta" class="col-md-4 col-lg-3 col-sm-6" style="margin-bottom: 10px">
      <div class="card">
        <img v-if="item.id" class="zoom" :src="item.yoast_head_json.og_image[0].url" alt="" height="auto"/>
        <div v-else class="skeleton-image zoom"></div>
        <div class="card-body">
          <h3 class="card-title">
            <a :href="item.link" target="_blank">
              <p v-if="item.id">{{ item.title.rendered }}</p>
              <div v-else class="skeleton-heading"></div>
            </a></h3>
        </div>
      </div>
    </div>
    <Pagination param="expliyh"/>
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
      data.push({"": '',});
    }
    this.meta = data
    NProgress.start()
    NProgress.set(0.4)
    axios.get('https://www.expli.top/wp-json/wp/v2/posts?categories=24&per_page=12&page=' + this.$route.params.page)
        .then(response => (this.meta = response.data))
        .catch(error => {
          console.log(error)
        });
    document.title = 'Expliyh - 第' + this.$route.params.page + '页'
    NProgress.done()
  },
}
</script>
