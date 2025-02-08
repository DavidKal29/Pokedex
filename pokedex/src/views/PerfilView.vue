<template>
  <section class="p-[15px] flex flex-col justify-start items-center h-full bg-blue-700 gap-[20px]">
    <img src="https://pipedream.com/s.v0/app_mvNhzR/logo/orig" alt="">
    <div v-if="obtenerPokemons" class="flex flex-col justify-center items-center gap-[20px]">
      <div class="p-[20px] flex flex-col justify-center items-center bg-white rounded w-[40vh] h-[50vh] gap-[1px]" v-for="(obtenerPokemon,index) in obtenerPokemons" :key="index">
        <img class="w-[40%]" :src="obtenerPokemon.image" alt="">
        <div class="flex flex-col justify-center items-center gap-[10px]">
            <h1 class="font-bold text-blue-500 text-[25px]">{{ obtenerPokemon.name }}</h1>
            <ul class="flex justify-center items-center gap-[5px]">
                <li class="rounded text-white font-bold py-[5px] px-[10px]" :style="{'backgroundColor':colores[tipo]}" v-for="(tipo,index) in obtenerPokemon.types" :key="index">{{ tipo }}</li>
            </ul>
            <h3 class="font-bold text-blue-600 text-[20px] ">Habilidades</h3>
            <ul class="flex justify-center items-center gap-[5px]">
                <li class="text-yellow-500 tex-[18px] font-bold " v-for="(habilidad,index) in obtenerPokemon.abilities" :key="index">{{ habilidad }}</li>
            </ul>
        </div>
    </div>

    </div>

    <div v-else>
      <h1>No has añadido ningun pokemon</h1>
    </div>

    <button class="rounded bg-blue-500 text-yellow-300 font-bold py-[8px] px-[16px]" @click="pokedex">Pokedex</button>
  </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    name:'PerfilView',
    data(){
      return {
        colores:{
                normal: '#A8A77A',
                fire: '#EE8130',
                water: '#6390F0',
                electric: '#F7D02C',
                grass: '#7AC74C',
                ice: '#96D9D6',
                fighting: '#C22E28',
                poison: '#A33FAA',
                ground: '#E2BF65',
                flying: '#A98FF3',
                psychic: '#F95587',
                bug: '#A6B91A',
                rock: '#B6A136',
                ghost: '#735797',
                dragon: '#6F35FC',
                dark: '#705746',
                steel: '#B7B7CE',
                fairy: '#D685AD'
            }
      }
    },
    computed:{
      ...mapGetters(['GET_FAVORITOS']),
      obtenerPokemons(){
        return this.GET_FAVORITOS
      }
    },
    methods:{
      ...mapActions(['setearFavoritos']),
      async refrescarFavoritos(){
        return await this.setearFavoritos()
      },
      pokedex(){
        this.$router.push('/pokedex')
      }
    },
    mounted(){
      this.refrescarFavoritos()
    }

}
</script>

<style>

</style>