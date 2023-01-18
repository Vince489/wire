<template>
  <div>
    <div>
    <div class="relative boxer-card-container p-6 mb-6 rounded max-w-xs bg-gray-300">

 <!-- Boxer Name-->   

<div class="boxer-name font-bold pb-4 text-center text-gray-700">
  <h2>Clubber Lang</h2>
</div>

<div class="absolute top-0.5 mt-3 left-0.5 ml-3 bg-[#3672bb] font-semibold text-white px-3 py-2 rounded-full text-sm">80</div>

<div class="w-48 h-60 m-auto">
  <img src="/wing.jpg" alt="me">
</div>

<div>
<!--Gamertag-->
  <div class="boxer-name font-bold py-2 text-center text-gray-700">
    <h3>@WING CHUN175879</h3>
  </div>

  <div class="text-center record gap-1 flex justify-center font-bold text-white">
    
    <div class="wins bg-green-600 py-1 px-6 rounded">
      <p>2</p>
      <span>WINS</span>                 
    </div>

    <div class="losses bg-red-600 p-1 px-6 rounded">
      <p>0</p>
      <span>LOSSES</span>          
    </div>

    <div class="draws bg-blue-400 p-1 px-6 rounded">
      <p>0</p>
      <span>DRAWS</span>          
    </div>

  </div>  

  <div>   
    <div class="font-semibold pt-4 justify-center record flex gap-4">
      <div class="wins text-green-700">
        <p>2<span> KO WINS</span></p>        
      </div>
      <div class="losses text-red-700">
        <p>0<span> KO LOSSES</span></p>
      </div>
    </div>
  </div>

  <div class="pt-4 text-center">
    <p class="font-semibold">Middleweight</p>
    <p>HT- 6' 0", WT- 155 lbs, RCH- 75"</p>
  </div>

  <div class="mt-3 btn2 text-center">View Fighter</div>

</div>
</div>
  </div>
  </div>
</template>

<script setup>
  const { gamer } = defineProps(['gamer'])
</script>

<style scoped>

</style>