<template>

<div>foo</div>
</template>
<script>

  import Component from 'vue-class-component'
  import Vue from 'vue'

  @Component
  export default class Foo extends Vue {


    created() {
      console.log('foo created');
    }

    beforeRouteEnter () {
      console.error('beforeRouteEnter')
    }
  }
</script>

<style scoped>
</style>