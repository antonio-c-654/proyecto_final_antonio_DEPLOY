<template>
  
  <div class="bg-[#111015] w-full h-full min-h-[100vh] flex flex-col items-center justify-center gap-4 text-white p-4">
    <div class="flex flex-col gap-4">
      <h1 class="md:text-3xl text-xl font-bold text-[#14c458]">Página no encontrada [404]</h1>
      <p class="text-sm md:text-base">No se ha podido encontrar la página que buscabas</p>
    </div>
    <div class="rounded-full w-[70vw] h-[70vw] md:w-[25vw] md:h-[25vw] overflow-hidden my-4">
        <img src="@/assets/tecnical_dif.png" class="w-full h-full">
    </div>
    <router-link to="/">
        <button class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-[#14c458] to-teal-400">Volver a inicio</button>
    </router-link>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>