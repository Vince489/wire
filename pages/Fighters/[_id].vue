<template>
  <div>
    <p>{{ fighter.gamerTag }}</p>
    <p>{{ fighter.wins }}</p>
    <p>{{ fighter.draws }}</p>
    <p>${{ fighter.balance }}</p>   
  </div>
</template>

<script setup>
  const { _id } = useRoute().params
  const uri = 'https://gamer-api.onrender.com/gamers/' + _id

  // fetch fighters
  const { data: fighter } = await useFetch(uri)
</script>

<style scoped>

</style>