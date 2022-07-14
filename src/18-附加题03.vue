<!-- template必须, 只能有一个根标签, 影响渲染到页面的标签结构 -->
<template>
  <div>欢迎使用vue</div>
</template>

<!-- js相关 -->
<script>
let arr = [{ a: 100 }, { a: 20 }, { a: -10 }];
const sum = arr.reduce((pre, curr) => {
  return pre + curr.a;
}, 0);
console.log(sum);
</script>

<!-- 当前组件的样式, 设置scoped, 可以保证样式只对当前页面有效 -->
<style scoped></style>
