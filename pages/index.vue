<template>
<div>
    <div style="min-height: 80vh;">
      <template v-if="show === 'Yes'" v-for="log in logs">
        <me-chat-frame v-if="log.name === 'me'" :text="log.content"></me-chat-frame>
        <chatbot-chat-frame v-if="log.name === 'chatbot'" :text="log.content">
        </chatbot-chat-frame>
      </template>
      <template v-else>
        <div></div>
      </template>
    </div>
    <div id="push">
      <form>
          <input id="talk" autocomplete="off" ref="msg" /><button id="sub" @click.prevent="send_message()"><img src="~assets/img/send12.png" alt="Send" /></button>
       </form>
     </div>
</div>
</template>

<script>
import MeChatFrame from '~/components/me-chat-frame.vue'
import ChatbotChatFrame from '~/components/chatbot-chat-frame.vue'

export default {
  props: {
    logs: { type: Array, default: function () { return [] } },
    show: { type: String, default: 'Yes' }
  },
  methods: {
    send_message: function () {
      if (this.$refs.msg.value.trim() === '') {
        return
      }
      this.show = 'No'
      var log = {
        name: 'me',
        content: this.$refs.msg.value.trim()
      }
      this.logs.push(log)
      this.$nextTick(function () {
        this.$refs.msg.value = ''
        this.show = 'Yes'
        this.$socket.emit('send_message', log)
      })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.logs.push({name: 'chatbot', content: '如果需要推薦，適合領養的動物，請輸入「我需要幫助」。<br/>如果不需要幫助，可以在上方「<a href="/animals">動物一覽</a>」找尋想要的浪浪'})
    })
  },
  sockets: {
    push_message: function (pack) {
      if (pack.content === '') {
        return
      }
      this.show = 'No'
      this.logs.push(pack)
      this.$nextTick(function () {
        this.show = 'Yes'
      })
    }
  },
  components: {
    MeChatFrame,
    ChatbotChatFrame
  }
}
</script>

<style>
#push {
  bottom: 0%;
  background-color: white;
  width: 100%;
  padding-bottom: 2%;
}
#talk {
  display: inline-block;
  position: relative;
  margin-right: 10px;
  border-color: blue;
  border-radius: 5px;
  left: 5%;
  width: 80%;
  height: 12%;
  resize: none;
}
#sub {
  display: inline-block;
  position: relative;
  left: 5%;
  font-size: X-large;
  color: white;
  background-color: #6A7FF6;
  border-radius: 5px;
}
#sub img {
  max-width: 80px;
  max-height: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
