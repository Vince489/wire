<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="g in gamers">
      <nuxt-link :to="`/fighters/${g._id}`">{{ g.gamerTag }}</nuxt-link>
    </div>
  </div>

  <div class="container justify-center gap-6 flex flex-wrap ">
    <FighterCard />
  </div>
</template>

<script setup>

// fetch the gamer
const { data: gamers } = await useFetch('https://gamer-api.onrender.com/gamers')
</script>

<style scoped>

</style>