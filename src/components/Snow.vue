<template>
  <section>
    <div class="snow">
      <Snowf v-bind:color="sendColor" :amount="50" :size="3" :speed="0.5" :wind="0" :opacity="0.8" :swing="1" :image="null" :zIndex="null" :resize="true"/>
    </div>
  </section>
</template>

<script>

import Snowf from 'vue-snowf'

export default {
  props: ['sendColor'],
  data() {
    return {
      nowColor: '#0f00f0'
    }
  },
  components: {
    Snowf
  }
}
</script>

<style>
</style>