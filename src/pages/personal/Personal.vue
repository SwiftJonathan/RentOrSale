<template>
  <div class="personal">
    <WelcomeMessage :SearchOrUser="1" />
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
