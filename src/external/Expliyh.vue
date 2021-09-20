<template>
  <div>
    <div class="alert alert-primary" role="alert">
      这个页面的信息全部采集于 Expliyh ，点击后会跳转到 Expliyh 的站点
    </div>
    <div class="row">
      <div v-for="item in meta" class="col-md-4 col-lg-3 col-sm-6" style="margin-bottom: 10px">
        <div class="card">
          <img class="zoom" :src="item.yoast_head_json.og_image[0].url" alt="" height="auto"/>
          <div class="card-body">
            <h3 class="card-title">
              <a :href="item.link" target="_blank">
                <p>{{ item.title.rendered }}</p>
              </a></h3>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <div class="pagination" style="margin-top: 10px;justify-content:center;">
          <a class="btn" :href="'/expliyh/page/'+(this.$route.params.page-1)">上一页</a>
          <a class="btn" style="margin-left: 5px;margin-right: 5px">当前页面：{{ this.$route.params.page }}</a>
          <a class="btn" :href="'/expliyh/page/'+(Number(this.$route.params.page)+1)">下一页</a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  data() {
    return {
      meta: '',
    }
  },
  created() {
    const data = []
    for (let i = 1; i <= 12; i++) {
      data.push({
        "title": {"rendered": "加载中"},
        "yoast_head_json": {"og_image": [{"url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"}]}
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
