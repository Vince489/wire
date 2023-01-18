<template>
  <div>
    <p>Virtron Registered Fighter {{ _id }}</p><br>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga, rem eaque temporibus blanditiis expedita sit necessitatibus, odit nemo mollitia explicabo et, aliquam ex debitis adipisci natus fugiat repellat officia!</p>
    
  </div>
</template>

<script setup>
  const { _id } = useRoute().params
  const uri = 'https://gamer-api.onrender.com/gamers' + _id

  // fetch fighters
  const { data: gamer } = await useFetch(uri)
</script>

<style scoped>

</style>