<template>
  <div>
    <v-list dense class="d-flex flex-column">
      <v-list-item v-for="message in messages" :key="message.id" :class="isSameUser(message) && 'justify-end'">
        <v-chip>
          {{ message.text }}
        </v-chip>
      </v-list-item>
    </v-list>
    <v-footer absolute class="secondary">
      <v-text-field v-model="newMessage" block @change="sendMessage" label="Message"/>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

interface Message {
  id: string;
  text: string;
  username: string;
}

@Component
export default class Chat extends Vue {
  public username = 'Kroustille'
  public newMessage = ''
  public messages: Message[] = []

  mounted () {
    this.messages.push({ username: 'Kroustille', text: 'Hello', id: '666' })
    this.messages.push({ username: 'Qiwee', text: 'Salut ça va ?', id: '777' })
    this.messages.push({ username: 'Kroustille', text: 'Yep et toi ?', id: '888' })
  }

  public isSameUser (message: Message) {
    return this.username === message.username
  }

  public sendMessage (text?: string) {
    if (text) {
      this.newMessage = ''
      this.messages.push({ username: this.username, text, id: '111' })
    }
  }
}
</script>
