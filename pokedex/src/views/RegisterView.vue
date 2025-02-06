<template>
  <section>
    <form @submit.prevent="registrar">
        <div class="">
            <label for="">Email</label>
            <input type="email" placeholder="Tu correo" v-model="email">
        </div>
        <div class="">
            <label for="">Password</label>
            <input type="password" placeholder="Tu contraseña" v-model="password">
        </div>
        <p>¿Ya tienes cuenta? <router-link to="/login">Iniciar Sesión</router-link></p>
        <button class="">Crear cuenta</button>
    </form>
  </section>
</template>

<script>
import { createUserWithEmailAndPassword,sendEmailVerification } from 'firebase/auth'
import {auth} from '../db/firebase.js'
export default {
    name:'RegisterView',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async registrar(){
           try {
            const userCredentials=await createUserWithEmailAndPassword(auth,this.email,this.password) 
            sendEmailVerification(userCredentials.user)
            alert('Registrado correctamente')
            this.$router.push('/login')
           } catch (error) {
            alert(error.message)
           }
           
        }
    }
}
</script>

<style>

</style>