<template>
<div class="container mt-10 justify-center gap-6 flex flex-wrap">
  <div class="relative boxer-card-container p-6 mb-6 rounded max-w-xs bg-gray-300">

    <div class="boxer-name font-bold pb-4 text-center text-gray-700">
      <h2>{{ gamer.firstName }} {{ gamer.lastName }}</h2>
    </div>
    
    <div class="absolute top-0.5 mt-3 left-0.5 ml-3 bg-[#3672bb] font-semibold text-white px-3 py-2 rounded-full text-sm">{{ gamer.ovr }}</div>
    
    <div class="w-48 h-54 m-auto">
      <img src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.30808-6/322961307_551460366653891_708550471661016674_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d8l8xzB2HAwAX_4VQ5I&_nc_ht=scontent.ftpa1-2.fna&oh=00_AfArjuSTVpcmMNko_z2afY_60xJ9ZHs5sWVs283Nj8rI9Q&oe=63CDBF9D" alt="me">
    </div>
    
    <div>  
      <div class="boxer-name font-bold py-2 text-center text-gray-700">
        <h3>{{ gamer.gamerTag }}</h3>
      </div>
    
      <div class="text-center record gap-1 flex justify-center font-bold text-white">      
        <div class="wins bg-green-600 py-1 px-6 rounded">
          <p>{{ gamer.wins }}</p>
          <span>WINS</span>                 
        </div>
    
        <div class="losses bg-red-600 p-1 px-6 rounded">
          <p>{{ gamer.losses }}</p>
          <span>LOSSES</span>          
        </div>
    
        <div class="draws bg-blue-400 p-1 px-6 rounded">
          <p>{{ gamer.draws }}</p>
          <span>DRAWS</span>          
        </div>  
      </div>  
    
      <div>   
        <div class="font-semibold pt-4 justify-center record flex gap-4">
          <div class="wins text-green-700">
            <p>{{ gamer.koWins }} <span> KO WINS</span></p>        
          </div>
          <div class="losses text-red-700">
            <p>{{ gamer.koLosses }} <span>KO LOSSES</span></p>
          </div>
        </div>
      </div>
    
      <div class="pt-4 text-center">
        <p class="font-semibold">{{ gamer.division }}</p>
        <p>HT- {{ gamer.htFt }}' {{ gamer.htIn }}'', WT- {{ gamer.wt }} lbs, RCH- {{ gamer.rch }}"</p>
      </div>
    
      <div class="mt-3 btn2 text-center">View Fighter</div>  
    </div>
  </div>
</div>
</template>

<script setup>
  const { gamer } = defineProps(['gamer'])
</script>

<style scoped>

</style>