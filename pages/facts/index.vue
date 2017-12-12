<template>
<div>
  <h1 class="text-center banner">
   規則們
  </h1>
  <button class="mdc-fab material-icons" aria-label="Favorite">
    <span class="mdc-fab__icon">
      add
    </span>
  </button>
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
