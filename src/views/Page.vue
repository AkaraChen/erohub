<template>
  <div class="row">
    <div v-for="item in meta" class="col-md-4 col-lg-3 col-sm-6" style="margin-top: 10px">
      <div class="card">
        <img class="zoom" :src="item.thumb" alt="" height="auto"/>
        <div class="card-body">
          <h3 class="card-title">
            <router-link :to="'/archives/' + item.cid">
              <p>{{ item.title }}</p>
            </router-link>
          </h3>
        </div>
      </div>
    </div>
      <div class="pagination" style="margin-top: 10px;justify-content:center;">
        <router-link class="btn" :to="'/page/'+(this.$route.params.page-1)">上一页</router-link>
        <a class="btn" style="margin-left: 5px;margin-right: 5px">当前页面：{{ this.$route.params.page }}</a>
        <router-link class="btn" :to="'/page/'+(Number(this.$route.params.page)+1)">下一页</router-link>
      </div>
  </div>
</template>

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


<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  data() {
    return {
      meta: ''
    }
  },
  created() {
    const data = []
    for (let i = 1; i <= 12; i++) {
      data.push({
        "title": "加载中...",
        "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"
      });
    }
    this.meta = data
    NProgress.start()
    NProgress.set(0.4)
    axios.get('https://backend.erohub.org/page/'+this.$route.params.page+'.json')
        .then(response => (this.meta = response.data.data))
        .catch(error => {
          console.log(error)
        });
    document.title = 'Erohub - 第' + this.$route.params.page + '页'
    NProgress.done()
  },
}
</script>
