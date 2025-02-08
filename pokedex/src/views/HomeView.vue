<template>
  <section class="flex flex-col justify-content items-center h-screen bg-blue-700">
    <div class="flex flex-col gap-[20px] mt-[100px]">
      <img src="https://pipedream.com/s.v0/app_mvNhzR/logo/orig" alt="">
      <button class="rounded bg-blue-500 text-yellow-300 font-bold py-[8px] px-[16px]"><router-link to="/pokedex">Comenzar a buscar</router-link></button>
    </div>
  </section>
</template>

<script>
export default {
    name:'HomeView'
}
</script>

