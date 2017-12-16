<template>
<div>
  <h1 class="text-center banner">
    加入浪浪
  </h1>
  <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
      <form data-toggle="validator" class="form-horizontal" action="/api/animals/add" method="post">
        <div class="form-group row">
          <div class="col-4">
            <label for="name" class="control-label text-right">名字</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="name">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="type" class="control-label text-right">品種</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="type" required>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="sex" class="control-label text-right">性別</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="sex">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="build" class="control-label text-right">體型</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="build">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="age" class="control-label text-right">年紀</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="age">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="chip_num" class="control-label text-right">晶片編號</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="chip_num">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="is_sterilization" class="control-label text-right">是否結紮</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="is_sterilization">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="hair_type" class="control-label text-right">長毛短毛</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="hair_type">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="children_anlong" class="control-label text-right">是否可以跟小孩相處</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="children_anlong">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="animal_anlong" class="control-label text-right">是否可以跟其他動物相處</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="animal_anlong">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="resettlement" class="control-label text-right">位置</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="resettlement">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="note" class="control-label text-right">其他註記</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="note">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="contact_phone" class="control-label text-right">聯絡電話</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="contact_phone" required>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">
            <label for="contact_email" class="control-label text-right">聯絡信箱</label>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" name="contact_email" required>
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
export default {
}
</script>

<style>
</style>
