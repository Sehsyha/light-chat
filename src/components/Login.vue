<template>
  <form>
    <v-text-field label="Nom d'utilisateur"></v-text-field>
    <v-text-field label="Mot de passe" type="password"></v-text-field>
    <v-btn @click="login" depressed block>Se connecter</v-btn>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Login extends Vue {
  public login () {
    this.$router.push('/choose-user')
  }
}
</script>

<style>

</style>
