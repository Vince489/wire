<template>
  <div class="container mt-10 justify-center gap-6 flex flex-wrap">
    <div v-for="g in gamers">
      <Fighter2 :gamer="g" />
    </div>
  </div>

</template>

<script setup>

// fetch the gamer
const { data: gamers } =  useFetch('https://interactive-production.up.railway.app/gamers')
</script>

<style scoped>

</style>