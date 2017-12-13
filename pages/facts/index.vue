<template>
<div>
  <h1 class="text-center banner">
   規則們
  </h1>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell"></div>
      <div class="mdc-layout-grid__cell">
        <ul class="mdc-list">
          <li class="mdc-list-item" v-for="td in data['tbody']" :key="td.id">
            <span class="mdc-list-item__text">{{ td.describe }}</span>
            <a :href="'/api/facts/delete/' + td.id" class="mdc-button mdc-button--dense mdc-list-item__end-detail">
              刪除
            </a>
          </li>
        </ul>
      </div>
      <div class="mdc-layout-grid__cell"></div>
    </div>
  </div>
  <a href="/facts/add" class="mdc-fab material-icons app-fab--absolute" aria-label="Add">
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
    let { data } = await axios.get('/api/facts')
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
