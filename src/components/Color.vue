<template>
  <section>
  <div id="example-1">
    <button v-on:click="counter">Add 1</button>
    <p>The button above has been clicked {{ count }} times.</p>
  </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    counter() {
      this.count += 1
    }
  }
}
</script>

<style>
#example-1{
  position: relative;
  z-index: 1;
}
</style>