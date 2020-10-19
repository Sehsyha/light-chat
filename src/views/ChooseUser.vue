<template>
  <div>
    <h1>Choissisez un utilisateur avec qui converser</h1>
    <form>
      <v-text-field label="Nom d'utilisateur"></v-text-field>
      <v-btn depressed block @click="chooseUser">Choisir</v-btn>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ChooseUser extends Vue {
  public chooseUser () {
    this.$router.push('/wait-on-user')
  }
}
</script>
