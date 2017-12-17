<template>
<div class="frame-right">
  <div class="me"><p v-html='text'></p></div>
</div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.frame-right {
  text-align: right;
}
.me {
  display: inline-block;
  margin: 1% 2% 1% 3%;
  padding: 1%;
  border-radius: 5px;
  background-color: #7CCF7D;
  color: white;
  font-size: medium;
  max-width: 30%;
  text-align: left;
}
</style>
