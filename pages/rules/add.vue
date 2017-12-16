<template>
<div>
  <h1 class="text-center banner">
    加入規則
  </h1>
  <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
      <form data-toggle="validator" class="form-horizontal" action="/api/rules/add" method="post">
        <div class="row">
          如果
        </div>
        <div class="form-group row">
          <label for="if_num" class="col-4 control-label text-right">有幾個前因</label>
          <div class="col-8">
            <input type="number" class="form-control" name="if_num" v-bind:value="if_num" v-on:input="updateValue($event.target.value)" min="1" max="10" step="1">
          </div>
        </div>
        <template v-if="show === 'Yes'">
          <fact-form v-for="n in parseInt(if_num)" :key="n" v-bind:cnt="n"></fact-form>
        </template>
        <template v-else>
          <div></div>
        </template>
        <div class="row text-center">
          則
        </div>
        <fact-form :cnt="0"></fact-form>
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
  props: {
    if_num: { type: Number, default: 1 },
    show: { type: String, default: 'Yes' }
  },
  methods: {
    updateValue: function (value) {
      this.show = 'No'
      this.$nextTick(function () {
        this.show = 'Yes'
        this.if_num = value
      })
    }
  },
  components: {
    FactForm
  }
}
</script>

<style>
</style>
