<template>
  <Notice name="Safebooru" title="本页面内容来自“Safebooru”" text="点击文章标题,即可自动重定向到源地址"/>
  <div class="row">
    <div v-for="item in meta" class="col-md-4 col-lg-3 col-sm-6" style="margin-bottom: 10px" :key="item">
      <div class="card">
        <img v-if="item.file_url" class="zoom" :src="item.file_url" alt="" height="auto"/>
        <div v-else class="skeleton-image zoom"></div>
        <div class="card-body">
          <h3 class="card-title">
            <a :href="'https://konachan.net/post/show/' + item.id" target="_blank">
              <p v-if="item.id">
                <Icon icon="id"/>
                    {{ item.id }}
              </p>
              <div v-else class="skeleton-heading"></div>
            </a></h3>
        </div>
      </div>
    </div>
    <Pagination param="safebooru"/>
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
    axios.get('https://cdn.jsdelivr.net/gh/AsahiIndustry/Erohub-backend@main/safebooru/' + this.$route.params.page + '.json')
        .then(response => (this.meta = response.data.posts.post))
        .catch(error => {
          console.log(error)
        });
    document.title = 'KonaChan - 第' + this.$route.params.page + '页'
    NProgress.done()
  },
}
</script>
