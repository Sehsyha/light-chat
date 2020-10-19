<template>
  <form>
    <v-text-field label="Nom d'utilisateur"></v-text-field>
    <v-text-field label="Mot de passe" type="password"></v-text-field>
    <v-text-field label="Confirmation du mot de passe" type="password"></v-text-field>
    <v-btn>S'inscrire</v-btn>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Signup extends Vue {

}
</script>

<style>

</style>
