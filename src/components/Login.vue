<template>
  <form>
    <v-text-field label="Nom d'utilisateur"></v-text-field>
    <v-text-field label="Mot de passe" type="password"></v-text-field>
    <v-btn>Se connecter</v-btn>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Login extends Vue {

}
</script>

<style>

</style>
