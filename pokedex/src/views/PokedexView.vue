<template>
  <section class="">
    <h1>Pokedex</h1>

    <div class="">
        <input type="text" placeholder="Pikachu" v-model="pokemon">
        <button @click="buscar(this.pokemon)">Buscar</button>
    </div>

    <div v-if="obtenerPokemon.name">
        <img :src="obtenerPokemon.image" alt="">
        <h1>{{ obtenerPokemon.name }}</h1>
        <h1>{{ obtenerPokemon.stats }}</h1>
        <h1>{{ obtenerPokemon.abilities }}</h1>
        <h1>{{ obtenerPokemon.types }}</h1>
        <button @click="agregarFavoritos(obtenerPokemon)">Añadir a favoritos</button>
    </div>

    <button @click="perfil">Perfil</button>


    
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
            favoritos:[]
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