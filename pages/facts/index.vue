<template>
<div>
  <h1 class="text-center banner">
   規則們
  </h1>
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
