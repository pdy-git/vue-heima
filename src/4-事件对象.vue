<template>
  <div>
    <!-- 1. 事件触发, 无传值, 可以直接获取事件对象是 -->
    <a href="http://www.baidu.com" v-on:click="btn">百度</a>
    <hr />
    <!-- 2. 事件触发, 传值, 需要手动传入$event -->
    <a href="http://www.taobao.com" v-on:click="btn1($event, 5)">淘宝</a>
  </div>
</template>

<script>
export default {
  methods: {
    btn (e) {
      e.preventDefault()
    },
    btn1 (e, value) {
      console.log(value)
      e.preventDefault()
    },
  },
}
</script>
