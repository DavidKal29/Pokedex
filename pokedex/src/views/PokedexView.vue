<template>
  <section class=" p-[20px] flex flex-col justify-start items-center h-[115vh] bg-blue-700 gap-[20px]">
    <img src="https://pipedream.com/s.v0/app_mvNhzR/logo/orig" alt="">

    <div class="flex justify-center items-center gap-[10px]">
        <input class="rounded text-white placeholder-white font-bold bg-blue-300 py-[8px] px-[16px]" type="text" placeholder="Pikachu" v-model="pokemon">
        <button class="rounded bg-blue-500 text-yellow-300 font-bold py-[8px] px-[16px]" @click="buscar(this.pokemon)">Buscar</button>
    </div>

    <div class="p-[20px] flex flex-col justify-center items-center bg-white rounded w-[40vh] h-[50vh] gap-[1px]" v-if="obtenerPokemon.name">
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
            
            <button class="rounded bg-blue-500 text-yellow-300 font-bold py-[8px] px-[16px]" @click="agregarFavoritos(obtenerPokemon)">Añadir a favoritos</button>
        </div>
    </div>

    <button @click="perfil" class="rounded bg-blue-500 text-yellow-300 font-bold py-[8px] px-[66px]">Perfil</button>


    
  </section>
</template>

<script>
import {auth} from '../db/firebase.js'
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'PokedexView',
    data(){
        return {
            pokemon:'',
            favoritos:[],
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
        ...mapGetters(['GET_POKEMON','GET_FAVORITOS']),
        obtenerPokemon(){
            return this.GET_POKEMON
        }
    },
    methods:{
        ...mapActions(['buscarPokemon','anadirFavoritos']),
        buscar(nombre){
            this.buscarPokemon(nombre)
        },
        async agregarFavoritos(pokemon){
            console.log('El pokemon en cuestion:',pokemon);
            if (!auth.currentUser) {
                alert('No estas logueado')
                this.$router.push('/login')
                return 
            }else{
                alert('Estas logueado')
                await this.anadirFavoritos(pokemon)
                
            }
        },
        perfil(){
            if (!auth.currentUser) {
                alert('No estas logueado')
                this.$router.push('/login')
                return 
            }else{
                this.$router.push('/perfil')
            }
        }
    }
}
</script>

<style>

</style>