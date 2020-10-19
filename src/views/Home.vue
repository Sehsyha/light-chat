<template>
  <div>
    <h1>Bienvenue sur Licha !</h1>
    <p>
      Chattez simplement avec une personne de votre choix, de manière chiffrée et sécurisée.
    </p>
    <v-tabs
      v-model="tab"
      grow
    >
      <v-tab key="signup">S'inscrire</v-tab>
      <v-tab key="login">Se connecter</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item key="signup"><Signup /></v-tab-item>
      <v-tab-item key="login"><Login /></v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

@Component({
  components: {
    Login,
    Signup
  }
})
export default class Home extends Vue {
  public tab: number | null = null
  public items = new Map<string, Vue>();
}
</script>
