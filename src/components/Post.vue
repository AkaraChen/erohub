<template>
  <div>
    <div class="masonry" v-html="meta.text"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",
  data() {
    return {
      meta: '',
    }
  },
  mounted() {
    axios.get('https://erohub-backend.vercel.app/post/' + this.$route.params.post + '.json')
        .then(response => (this.meta = response.data.data)(document.title = response.data.data.title + ' - Erohub'))
        .catch(error => {
          console.log(error)
        })
  }
}

</script>

<style scoped>

.masonry {
  margin: 20px auto;
  columns: 4;
  column-gap: 30px;
}

.masonry >>> img {
  margin-bottom: 30px;
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .masonry {
    columns: 3;
    column-gap: 20px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .masonry {
    columns: 2;
    column-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .masonry {
    columns: 1;
  }

  .masonry >>> img {
    margin-bottom: 20px;
  }

}
</style>
