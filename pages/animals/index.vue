<template>
<div>
  <h1 class="text-center banner">
   動物們
  </h1>
  <div class="row">
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
            <td> {{ td.type }} </td>
            <td> {{ td.sex }} </td>
            <td> {{ td.resettlement }} </td>
            <td> {{ td.contact_phone }} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <a href="/animals/add" class="mdc-fab material-icons app-fab--absolute" aria-label="Add">
    <span class="mdc-fab__icon">
      <img src="~assets/img/ic_add_black_24px.svg" alt="add"/>
    </span>
  </a>
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
