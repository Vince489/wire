<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="g in gamers">
        <nuxt-link :to="`/gamers/${g.id}`">Gamertag {{ g.gamerTag }} {{ g.ovr }} OVR  {{ g.firstName }} {{ g.lastName }} {{ g.losses }} ${{ g.balance }} {{ g.wins }} Wins {{ g.losses }} Losses {{ g.draws }} Draws </nuxt-link>
      </div>
    </div>
  </div>  
</template>

<script setup>

// fetch the gamer
const { data: gamers } = await useFetch('https://gamer-api.onrender.com/gamers')
</script>

<style scoped>

</style>