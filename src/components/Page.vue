<template>
  <div class="row">
    <div v-for="item in meta" class="col-sm-3" style="margin-top: 10px">
      <div class="card">
        <img class="zoom" :src="item.thumb" alt="" height="auto"/>
        <div class="card-body">
          <h3 class="card-title">
            <a :href="'/archives/' + item.cid">
              {{ item.title }}
            </a></h3>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <div class="pagination" style="margin-top: 10px;justify-content:center;">
        <a class="btn" :href="'/page/'+(this.$route.params.page-1)">上一页</a>
        <a class="btn" style="margin-left: 5px;margin-right: 5px"
           :href="'/page/'+this.$route.params.page">当前页面：{{ this.$route.params.page }}</a>
        <a class="btn" :href="'/page/'+(Number(this.$route.params.page)+1)">下一页</a>
      </div>
    </nav>
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

</style>


<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  data() {
    return {
      meta: [{"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"title": "加载中", "thumb": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
      ],
    }
  },
  mounted() {
    NProgress.start()
    NProgress.set(0.4)
    axios.get('https://erohub-backend.vercel.app/page/' + this.$route.params.page + '.json')
        .then(response => (this.meta = response.data.data))
        .catch(error => {
          console.log(error)
        });
    document.title = 'Erohub - 第' + this.$route.params.page + '页'
    NProgress.done()
  },
}
</script>
