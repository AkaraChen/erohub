<template>
      <div v-if="haveRead" class="alert alert-info alert-dismissible" role="alert">
        <div class="d-flex">
          <div>
            <Icon class="alert-icon" icon="info-circle"/>
          </div>
          <div>
            <h4 class="alert-title">本页面内容来自“请叫我旗舰处理器”</h4>
            <div class="text-muted">点击文章标题,即可自动重定向到<a href="https://expli.top"> Expliyh 的站点</a></div>
          </div>
        </div>
        <a class="btn-close" @click="read" data-bs-dismiss="alert" aria-label="close"></a>
      </div>
    <div class="row">
      <div v-for="item in meta" class="col-md-4 col-lg-3 col-sm-6" style="margin-bottom: 10px">
        <div class="card">
          <img v-if="item.id" class="zoom" :src="item.yoast_head_json.og_image[0].url" alt="" height="auto"/>
          <div v-else class="skeleton-image zoom"></div>
          <div class="card-body">
            <h3 class="card-title">
              <a :href="item.link" target="_blank">
                <p v-if="item.id">{{ item.title.rendered }}</p>
                <p v-else>Loading<span class="animated-dots"></span></p>
              </a></h3>
          </div>
        </div>
      </div>
      <div class="btn-list pagination" style="margin-top: 10px;justify-content:center;">
        <router-link class="btn btn-white btn-pill" :to="'/expliyh/page/'+(this.$route.params.page-1)">Prev</router-link>
        <span class="avatar bg-blue-lt rounded-circle" style="margin-right: 5px;margin-left: 5px">{{ this.$route.params.page }}</span>
        <router-link class="btn btn-white btn-pill" :to="'/expliyh/page/'+(Number(this.$route.params.page)+1)">Next</router-link>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Icon from "../components/Icon";
import Cookies from 'js-cookie'

export default {
  components: {Icon},
  data() {
    return {
      meta: '',
      haveRead: true
    }
  },
  methods: {
    read() {
      Cookies.set('expRead', 'True')
    }
  },
  created() {
    if (Cookies.get('expRead')) {
      this.haveRead = undefined
    }
    const data = []
    for (let i = 1; i <= 12; i++) {
      data.push({
        "title": {"rendered": "加载中"},
      });
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

<style scoped>
.pagination {
  margin-bottom: 10px;
}

.zoom {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

p {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
