<template>
    <div> main div
        <router-link to="/foo">foo</router-link>
    <router-view></router-view>
    </div>
</template>
<script>
  export default {
    computed: {
      username () {
        // We will see what `params` is shortly
        return this.$route.params.username
      }
    },
    methods: {
      goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    }
  }
</script>