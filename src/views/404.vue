<template>
  <div class="empty">
    <div class="empty-header">404</div>
    <p class="empty-title">哎呀…你找到了一个错误页面</p>
    <p class="empty-subtitle text-muted">
      这里自然是什么都没有的，不妨试试回首页看看？
    </p>
    <div class="empty-action">
      <router-link to="/" class="btn">
        <Icon icon="arrow-left"/>
        回到首页
      </router-link>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "404",
  components: {Icon}
}
</script>

<style scoped>

</style>
