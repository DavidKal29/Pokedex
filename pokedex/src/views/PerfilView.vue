<template>
  <section>
    <h1>Bienvenido a tu perfil</h1>
    <span>Aqui verás a todos los pokemon que añadas a favoritos</span>
    <div v-if="obtenerPokemons">
      <div v-for="(pokemon,index) in obtenerPokemons" :key="index">
        <img :src="pokemon.image" alt="">
        <h2>{{ pokemon.name }}</h2>
        <h3>Tipos</h3>
        <ul>
          <li v-for="(tipo,index) in pokemon.types" :key="index">{{ tipo }}</li>
        </ul>
        <h3>Habilidades</h3>
        <ul>
          <li v-for="(habilidad,index) in pokemon.abilities" :key="index">{{ habilidad }}</li>
        </ul>

      </div>
    </div>

    <div v-else>
      <h1>No has añadido ningun pokemon</h1>
    </div>

    <button @click="pokedex">Pokedex</button>
  </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    name:'PerfilView',
    data(){
      return {
        
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