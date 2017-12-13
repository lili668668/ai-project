<template>
<div>
  <div class="form-group row">
    <div class="col-4">
      <label :for="'describe_' + cnt" class="control-label text-right">描述：</label>
    </div>
    <div class="col-8">
      <input type="text" class="form-control" :name="'describe_' + cnt">
    </div>
  </div>
  <div class="form-group row">
    <div class="col-4">
      <label :for="'relation_' + cnt" class="control-label text-right">對象：</label>
    </div>
    <div class="col-8">
      <input type="text" class="form-control" :name="'relation_' + cnt">
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    cnt: Number
  }
}
</script>

<style>
</style>
