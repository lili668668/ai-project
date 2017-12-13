<template>
<div>
  <h1 class="text-center banner">
    加入規則
  </h1>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell"></div>
      <div class="mdc-layout-grid__cell">
        <form action="/api/bingo/add" method="post">
          <div class="mdc-form-field">
            <div class="mdc-text-field">
              <input type="text" name="fact" class="mdc-text-field__input" id="fact">
              <label for="fact" class="mdc-text-field__label">請輸入 Fact</label>
              <div class="mdc-text-field__bottom-line"></div>
            </div>
          </div>
        </form>
      </div>
      <div class="mdc-layout-grid__cell"></div>
    </div>
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
