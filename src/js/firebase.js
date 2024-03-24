

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuQ4kjq-K0pRvrxvt1SAzybgMwE2h45nA",
  authDomain: "userfriendweb-fe388.firebaseapp.com",
  projectId: "userfriendweb-fe388",
  storageBucket: "userfriendweb-fe388.appspot.com",
  messagingSenderId: "622926460515",
  appId: "1:622926460515:web:7ef0c7c81b2bed11d36a56",
  measurementId: "G-2ZG8NM5D5X",
  databaseURL: "https://userfriendweb-fe388-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);


var user = ':users/';

const database = getDatabase(app);
const referenciaDados = ref(database, user);


export async function conexao(dados){ 
  set(referenciaDados, dados)
  .then(() => {
    console.log("Dados adicionados com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao adicionar dados:", error);
  });
}




