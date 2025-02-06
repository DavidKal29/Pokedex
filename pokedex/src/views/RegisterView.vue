<template>
  <section>
    <form @submit.prevent="registrar">
        <div class="">
            <label for="">Email</label>
            <input type="email" placeholder="Tu correo">
        </div>
        <div class="">
            <label for="">Password</label>
            <input type="password" placeholder="Tu contraseña">
        </div>
        <p>¿Ya tienes cuenta? <router-link to="/login">Iniciar Sesión</router-link></p>
        <button class="">Crear cuenta</button>
    </form>
  </section>
</template>

<script>
export default {
    name:'RegisterView'
}
</script>

<style>

</style>