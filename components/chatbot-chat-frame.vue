<template>
<div class="frame-left">
  <div class="chatbot">{{ text }}</div>
</div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.frame-left {
  text-align: left;
}
.chatbot {
  margin: 1% 2% 1% 3%;
  padding: 1%;
  border-radius: 5px;
  background-color: #9A9AF9;
  color: white;
  font-size: medium;
  max-width: 30%;
}
</style>
