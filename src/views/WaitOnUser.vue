<template>
  <div>
    <h1>En attente de l'autre utilisateur</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class WaitOnUser extends Vue {
  mounted () {
    setTimeout(
      () => this.userAccepted(),
      1000
    )
  }

  public userAccepted () {
    this.$router.push('/chat')
  }
}
</script>
