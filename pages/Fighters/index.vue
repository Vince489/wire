<template>

  <div class="container p-8">
    <div class="p-2">
      <h2>Search and Sort features coming soon...</h2>
    </div>
    <div class="p-2">
      <h3 class="font-bold">
        Boxer Records are updated weekly and posted on Mondays.
      </h3>
      <h2 class="pt-2 font-semibold">
        Expect to see the results of bouts conducted by midnight on Fridays to be posted by the following Monday.
      </h2>
    </div>
  </div>
  
  

  <div class="container mt-10 justify-center gap-6 flex flex-wrap">
    <div v-for="g in gamers">
      <Fighter2 :gamer="g" />
    </div>
  </div>

</template>

<script setup>

// fetch the gamer
const { data: gamers } = await useFetch('https://interactive-production.up.railway.app/gamers')
</script>

<style scoped>

</style>