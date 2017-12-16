<template>
<div>
  <h1 class="text-center banner">
   動物們
  </h1>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <div v-if="data['error']">
        <p><a href="http://data.taipei">台北市開放資料平台</a>目前狀態不穩</p>
        <p>因此僅提供部份資料</p>
      </div>
      <table class="table">
        <thead>
          <th v-for="th in data['thead']">  {{ th }} </th>
        </thead>
        <tbody>
          <tr v-for="td in data['tbody']" :key="td.id">
            <td> <a :href="'/animals/' + td.id"> {{ td.id }} </a> </td>
            <td> {{ td.name }} </td>
            <td> {{ td.type }} </td>
            <td> {{ td.sex }} </td>
            <td> {{ td.resettlement }} </td>
            <td> {{ td.contact_phone }} </td>
            <td> {{ td.contact_email }} </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col"></div>
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
</style>
