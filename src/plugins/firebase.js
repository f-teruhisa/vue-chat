import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNF2ZbkSrmPVdtx8rAGrcfV3j_5AomLVc",
  authDomain: "vue-chat-a52ef.firebaseapp.com",
  databaseURL: "https://vue-chat-a52ef.firebaseio.com",
  projectId: "vue-chat-a52ef",
  storageBucket: "vue-chat-a52ef.appspot.com",
  messagingSenderId: "60853095926",
  appId: "1:60853095926:web:9acbad103c71116f"
});

export const db = firebaseApp.firestore();
