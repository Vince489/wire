<template>
  <div class="card text-center">
    <p>{{ gamer._id }}</p>
    <p>{{ gamer.firstName }}</p>
    <img :src="gamer.img" alt="fighter image">
    <p>{{ gamer.wins }}</p>
    <p>{{ gamer.draws }}</p>
    <p>{{ gamer.balance }}</p>
    <nuxt-link :to="`/fighters/${gamer._id}`">
      <p class="btn my-"></p>
    </nuxt-link>   
      
  </div>
</template>

<script setup>
const { gamers } = defineProps(['gamer'])
  const { _id } = useRoute().params
  const uri = 'https://interactive-production.up.railway.app/gamers/' + _id 

  // fetch fighters
  const { data: gamer } = await useFetch(uri, { key: _id })
  
</script>

<style scoped>

</style>