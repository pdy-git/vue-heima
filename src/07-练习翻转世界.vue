<template>
  <div>
    <!-- 1. 变量准备-静态页面铺设 -->
    <h1>{{ msg }}</h1>
    <!-- 2. 绑定点击事件 -->
    <button @click="btn">逆转世界</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: "Hello, World",
    };
  },
  methods: {
    btn () {
      //   let arr = this.msg.split('')
      //   // console.log(arr);
      //   arr.reverse()
      //   // console.log(arr);
      //  let str = arr.join('')
      // //  console.log(str);
      //  this.msg = str

      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>
