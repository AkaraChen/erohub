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
      <div class="btn-list pagination" style="margin-top: 10px;justify-content:center;">
        <a class="btn btn-pill" :class="{disabled:disablePrev}" @click="prev">Prev</a>
        <div class="pagination">
          <div v-for="item in pagination">
        <span style="margin-left: 3px;margin-right: 3px" class="avatar rounded-circle"
              :class="{'bg-blue-lt':item.active,hideInPhone:item.class}">
          <p v-if="item.active"> {{ item.id }} </p>
          <router-link v-else :to="'/konachan/page/'+item.id">{{ item.id }}</router-link>
        </span>
          </div>
        </div>
        <a class="btn btn-pill" @click="next">Next</a>
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
  components: {Icon},
  data() {
    return {
      meta: '',
      haveRead: true
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
  methods: {
    read() {
      Cookies.set('KonaRead', 'True')
    },
    prev() {
      this.$router.push('/konachan/page/' + (Number(this.$route.params.page) - 1))
    },
    next() {
      this.$router.push('/konachan/page/' + (Number(this.$route.params.page) + 1))
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

@media (max-width: 767px) {
  .hideInPhone {
    display: none !important;
  }
}
</style>
