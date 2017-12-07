<template>
<div>
  <h1 class="text-center banner">
    {{ data['tbody'].name }}
  </h1>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <p v-for="th in data['thead']"
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
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  head () {
    return {
      title: `User: ${this.data['thead'].name} | 'AI Project'`
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
