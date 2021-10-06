<template>
  <div class="row">
    <div v-for="item in meta" class="col-md-4 col-lg-3 col-sm-6" style="margin-top: 10px">
      <div class="card">
        <img v-if="item.cid" class="zoom" :src="item.thumb" alt="" height="auto"/>
        <div v-else class="skeleton-image zoom"></div>
        <div class="card-body">
          <h3 class="card-title">
            <router-link :to="'/archives/' + item.cid">
              <p v-if="item.cid">{{ item.title }}</p>
              <p v-else>Loading<span class="animated-dots"></span></p>
            </router-link>
          </h3>
        </div>
      </div>
    </div>
    <div class="btn-list pagination" style="margin-top: 10px;justify-content:center;">
      <router-link class="btn btn-pill" :class="{disabled:disablePrev}" :to="'/page/'+(this.$route.params.page-1)">
        Prev
      </router-link>
      <div class="pagination">
        <div v-for="item in pagination">
        <span style="margin-left: 3px;margin-right: 3px" class="avatar rounded-circle"
              :class="{'bg-blue-lt':item.active,hideInPhone:item.class}">
          <p v-if="item.active"> {{ item.id }} </p>
          <router-link v-else :to="'/page/'+item.id">
            {{ item.id }}
          </router-link>
        </span>
        </div>
      </div>
      <router-link class="btn btn-pill" :to="'/page/'+(Number(this.$route.params.page)+1)">Next
      </router-link>
    </div>
  </div>
</template>

<style>
.pagination {
  margin-bottom: 10px !important;
  justify-content: center !important;
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


<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Icon from "../components/Icon";

export default {
  components: {Icon},
  data() {
    return {
      meta: undefined,
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
  created() {
    const data = []
    for (let i = 1; i <= 12; i++) {
      data.push({
        "": "",
      });
    }
    this.meta = data
    NProgress.start()
    NProgress.set(0.4)
    axios.get('https://backend.erohub.org/webpage/' + this.$route.params.page + '.json')
        .then(response => (this.meta = response.data.data))
        .catch(error => {
          console.log(error)
        });
    document.title = 'Erohub - 第' + this.$route.params.page + '页'
    NProgress.done()
  },
}
</script>
