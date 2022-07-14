<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>{{ uname }}</h2>
    <h2>{{ obj.age >= 18 ? "成年" : "未成年" }}</h2>
  </div>
</template>

<script>
export default {
  // name: 'App',
  data () {
    return {
      msg: "我是msg展示到页面中",
      obj: {
        uname: "test",
        age: 18,
      },
    }
  },
}
</script>
