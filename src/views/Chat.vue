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
      <v-text-field v-model="newMessage" block @keyup="handleMessage" label="Message"/>
      <v-btn @click="toggleEmojiPicker">Emoji</v-btn>
      <VEmojiPicker v-show="displayEmojiPicker" @select="selectEmoji" />
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Emoji } from 'v-emoji-picker/lib/models/Emoji'
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
  public displayEmojiPicker = false

  mounted () {
    this.messages.push({ username: 'Kroustille', text: 'Hello', id: '666' })
    this.messages.push({ username: 'Qiwee', text: 'Salut ça va ?', id: '777' })
    this.messages.push({ username: 'Kroustille', text: 'Yep et toi ?', id: '888' })
  }

  public isSameUser (message: Message) {
    return this.username === message.username
  }

  public handleMessage (e: KeyboardEvent) {
    if (e.keyCode === 13 && this.newMessage) {
      const text = this.newMessage
      this.messages.push({ username: this.username, text, id: '111' })
      this.newMessage = ''
      this.displayEmojiPicker = false
    }
  }

  public selectEmoji (emoji: Emoji) {
    this.newMessage += emoji.data
    this.displayEmojiPicker = false
  }

  public toggleEmojiPicker () {
    this.displayEmojiPicker = !this.displayEmojiPicker
  }
}
</script>
