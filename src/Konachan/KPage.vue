<template>
  <div class="row">
    <div v-for="item in meta" class="col-sm-3" style="margin-bottom: 10px">
      <div class="card">
        <img class="zoom" :src="item.preview_url" alt="" height="auto"/>
        <div class="card-body">
          <h3 class="card-title">
            <a :href="item.source">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24"
                   viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
              作者：{{ item.author }}
            </a></h3>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <div class="pagination" style="margin-top: 10px;justify-content:center;">
        <a class="btn" :href="'/konachan/page/'+(this.$route.params.page-1)">上一页</a>
        <a class="btn" style="margin-left: 5px;margin-right: 5px"
           :href="'/#/page/'+this.$route.params.page">当前页面：{{ this.$route.params.page }}</a>
        <a class="btn" :href="'/konachan/page/'+(Number(this.$route.params.page)+1)">下一页</a>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  data() {
    return {
      meta: [{"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
        {"author": "加载中...", "preview_url": "https://cdn.jsdelivr.net/gh/AkaraChen/image@main/lazy.gif"},
      ],
    }
  },
  mounted() {
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
</style>
