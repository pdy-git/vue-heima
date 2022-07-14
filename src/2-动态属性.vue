<template>
  <div>
    <!-- 2. 值 -> 标签原生属性上 -->
    <!-- 语法: v-bind:原生属性名="vue变量" -->
    <!-- 语法: :原生属性名="vue变量" -->
    <!-- <a v-bind:href="hrefUrl">点击去百度</a> -->

    <!-- <img v-bind:src="srcUrl" > -->

    <img src="./assets/logo.png" alt="" />
    <img :src="img1" alt="" />
  </div>
</template>

<script>
// http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg
export default {
  data () {
    return {
      hrefUrl: "https://www.baidu.com/",
      srcUrl:
        "http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg",
      img1: "./assets/logo.png",
    }
  },
}
</script>
