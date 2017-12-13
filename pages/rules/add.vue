<template>
<div>
  <h1 class="text-center banner">
    加入規則
  </h1>
  <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
      <form data-toggle="validator" class="form-horizontal" action="/api/facts/add" method="post">
        <div class="row">
          如果
        </div>
        <div class="form-group row">
          <label for="if_num" class="col-4 control-label text-right">有幾個前因</label>
          <div class="col-8">
            <input type="number" class="form-control" name="if_num" v-model="if_num" min="1" step="1">
          </div>
        </div>
        <fact-form v-for="n in if_num" :key="n" v-bind:cnt="n"></fact-form>
        <div class="row text-center">
          則
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="describe" class="control-label text-right">描述：</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="describe">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="relation" class="control-label text-right">對象：</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="relation">
          </div>
        </div>
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
    if_num: { type: Number, default: 1 }
  },
  async asyncData () {
    let { data } = await axios.get('/api/animals')
    return { data: data }
  },
  components: {
    FactForm
  }
}
</script>

<style>
.app-fab--absolute {
  position: fixed;
  bottom: 1rem;
  right: 1rem;

}

@media(min-width: 1024px) {
  .app-fab--absolute {
    bottom: 1.5rem;
    right: 1.5rem;
            
  }

}
</style>
