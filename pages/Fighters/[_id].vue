<template>
  <div>
    <p>{{ gamer._id }}</p>
    <p>{{ gamer.wins }}</p>
    <p>{{ gamer.draws }}</p>
    <p>{{ gamer.balance }}</p>   
  </div>
</template>

<script setup>
  const { _id } = useRoute().params
  const uri = 'https://interactive-production.up.railway.app/gamers/' + _id

  // fetch fighters
  const { data: gamer } = await useFetch(uri, { key: _id })
  
</script>

<style scoped>

</style>