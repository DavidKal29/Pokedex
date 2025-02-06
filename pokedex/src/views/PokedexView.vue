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
        <button @click="añadirFavoritos(obtenerPokemon)">Añadir a favoritos</button>
    </div>
  </section>
</template>

<script>
import {auth} from '../db/firebase.js'
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'PokedexView',
    data(){
        return {
            pokemon:''
        }
    },
    computed:{
        ...mapGetters(['GET_POKEMON']),
        obtenerPokemon(){
            return this.GET_POKEMON
        }
    },
    methods:{
        ...mapActions(['buscarPokemon']),
        buscar(nombre){
            this.buscarPokemon(nombre)
        },
        añadirFavoritos(pokemon){
            console.log('El pokemon en cuestion:',pokemon);
            if (!auth.currentUser) {
                alert('No estas logueado')
                this.$router.push('/login')
            }else{
                alert('Estas logueado')
                this.$router.push('/perfil')
            }
            
        }
    },
    mounted(){
        
        
    }
}
</script>

<style>

</style>