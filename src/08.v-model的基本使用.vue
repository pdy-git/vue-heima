<template>
  <div>
    <!-- v-model:是实现vuejs 变量和表单标签value属性, 双向绑定的指令-->
    <div>
      <span>用户名:</span>
      <!-- <input type="text" v-model="username"> -->
      <input type="text" :value="username" @input="Input" />
    </div>
    <div>
      <span>密码: </span>
      <input type="password" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: "",
    }
  },
  methods: {
    Input (e) {
      console.log(e.target.value)
      this.username = e.target.value
    },
  },
}
</script>
