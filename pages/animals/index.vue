<template>
<div>
  <h1 class="text-center">
   動物們
  </h1>
  <table class="table">
    <thead>
      <th v-for="th in data['thead']"> {{ th }} </th>
    </thead>
    <tbody>
      <tr v-for="td in data['tbody']" :key="td.id">
        <td> {{ td.id }} </td>
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
