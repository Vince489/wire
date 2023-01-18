<template>
  <div class="g">
    <div class="container justify-center gap-6 flex flex-wrap" v-for="g in gamers">
      <Fighter2 :gamer="g" />
    </div>
  </div>
</template>

<script setup>

// fetch the gamer
const { data: gamers } = await useFetch('https://gamer-api.onrender.com/gamers')
</script>

<style scoped>

</style>