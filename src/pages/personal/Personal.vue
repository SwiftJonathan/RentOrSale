<template>
  <div class="personal">
    <WelcomeMessage />
    <Types />
  </div>
</template>

<script>
  import WelcomeMessage from '../firstPage/components/WelcomeMessage'
  import Types from './components/Types'
    export default {
        name: "Personal",
      components: {
        Types, WelcomeMessage
      }
    }
</script>

<style scoped>

</style>
