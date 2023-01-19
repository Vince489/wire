<template>
    <div v-for="g in gamers">
      <Fighter2 :gamer="g" />
    </div>
</template>

<script setup>

// fetch the gamer
const { data: gamers } =  useFetch('https://interactive-production.up.railway.app/gamers')
</script>

<style scoped>

</style>