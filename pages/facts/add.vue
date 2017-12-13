<template>
<div>
  <h1 class="text-center banner">
    加入規則
  </h1>
  <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
      <form data-toggle="validator" class="form-horizontal" action="/api/facts/add" method="post">
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

export default {
  async asyncData () {
    let { data } = await axios.get('/api/animals')
    return { data: data }
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
