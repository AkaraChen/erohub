<template>
  <div>
    <div v-if="haveRead" class="alert alert-info alert-dismissible" role="alert">
      <div class="d-flex">
        <div>
          <Icon class="alert-icon" icon="info-circle"/>
        </div>
        <div>
          <h4 class="alert-title">本页面内容来自“Konachan”</h4>
          <div class="text-muted">点击文章标题,即可自动重定向到源地址</div>
        </div>
      </div>
      <a class="btn-close" @click="read" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
    <div class="row">
      <div v-for="item in meta" class="col-md-4 col-lg-3 col-sm-6" style="margin-bottom: 10px">
        <div class="card">
          <img class="zoom" :src="item.preview_url" alt="" height="auto"/>
          <div class="card-body">
            <h3 class="card-title">
              <a :href="'https://konachan.net/post/show/' + item.id" target="_blank">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24"
                       height="24"
                       viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                       stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  </svg>
                  作者：{{ item.author }}
                </p>
              </a></h3>
          </div>
        </div>
      </div>
      <div class="btn-list pagination" style="margin-top: 10px;justify-content:center;">
        <router-link class="btn btn-white btn-pill" :to="'/konachan/page/'+(this.$route.params.page-1)">Prev</router-link>
        <span class="avatar bg-blue-lt rounded-circle" style="margin-right: 5px;margin-left: 5px">{{ this.$route.params.page }}</span>
        <router-link class="btn btn-white btn-pill" :to="'/konachan/page/'+(Number(this.$route.params.page)+1)">Next</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Cookies from "js-cookie";
import Icon from "../components/Icon";


export default {
  components:{Icon},
  data() {
    return {
      meta: '',
      haveRead: true
    }
  },
  methods: {
    read() {
      Cookies.set('KonaRead', 'True')
    }
  },
  created() {
    if (Cookies.get('KonaRead')) {
      this.haveRead = undefined
    }
    const data = []
    for (let i = 1; i <= 12; i++) {
      data.push({
        "author": "加载中...",
        "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"
      });
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
