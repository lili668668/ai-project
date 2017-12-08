<template>
<div>
  <h1 class="text-center banner">
    {{ data.animal.name }}
  </h1>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <p>id: {{ data.animal.id }}</p>
      <p>名字: {{ data.animal.name }}</p>
      <p>種類: {{ data.animal.type }}</p>
      <p>性別: {{ data.animal.sex }}</p>
      <p>體型: {{ data.animal.build }}</p>
      <p>年紀: {{ data.animal.age }}</p>
      <p>晶片編號: {{ data.animal.chip_num }}</p>
      <p>是否絕育: {{ data.animal.is_sterilization }}</p>
      <p>毛色: {{ data.animal.hair_type }}</p>
      <p>是否可以跟小孩相處: {{ data.animal.children_anlong }}</p>
      <p>是否可以跟其他動物相處: {{ data.animal.animal_anlong }}</p>
      <p>位置: {{ data.animal.resettlement }}</p>
      <p>描述: {{ data.animal.note }}</p>
      <p>聯絡電話: {{ data.animal.contact_phone }}</p>
      <p>聯絡Email: {{ data.animal.contact_email }}</p>
    </div>
    <div class="col"></div>
  </div>
</div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/animals/' + params.id)
      .then((res) => {
        return { data: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Animal not found' })
      })
  },
  head () {
    return {
      title: `${this.data.animal.name || 'AI Project'}`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
