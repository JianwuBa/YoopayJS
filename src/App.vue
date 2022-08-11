<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  //keep-alive 在App.vue中使用keep-alive标签，表示缓存所有页面
  //按条件缓存，使用include，exclude判断是否缓存
}
</script>

<style>

</style>