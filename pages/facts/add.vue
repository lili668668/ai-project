<template>
<div>
  <h1 class="text-center banner">
    加入事實
  </h1>
  <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
      <form data-toggle="validator" class="form-horizontal" action="/api/facts/add" method="post">
        <fact-form v-bind:cnt="1"></fact-form>
        <div class="row">
          <div class="col text-center">
              <span class="pad"><button type="submit" class="btn btn-success" id="submit">加入</button></span>
              <span class="pad"><a href="javascript:window.history.back()" class="btn btn-danger" id="cancel">取消</a></span>
          </div>
        </div>
      </form>
    </div>
    <div class="col-sm"></div>
  </div>
</div>
</template>

<script>
import axios from '~/plugins/axios'
import FactForm from '~/components/fact-form.vue'

export default {
  components: {
    FactForm
  }
}
</script>

<style>
</style>
