<template>
  <div>
    <p>Virtron Registered Fighter {{ id }}</p><br>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga, rem eaque temporibus blanditiis expedita sit necessitatibus, odit nemo mollitia explicabo et, aliquam ex debitis adipisci natus fugiat repellat officia!</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
</script>

<style scoped>

</style>