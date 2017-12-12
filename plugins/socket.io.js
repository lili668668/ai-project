import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
let host = process.env.nuxt_HOST || '127.0.0.1'
let port = process.env.nuxt_POST || 3000
let url = 'http://' + host + ':' + port
Vue.use(VueSocketio, socketio())
