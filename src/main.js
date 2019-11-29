import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/ja";
import "element-ui/lib/theme-chalk/index.css";

import firebase from "firebase";

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

var config = {
  apiKey: "AIzaSyBYMIHRYNn9BtkXqk1X7Z7ykg3I4H1xCeg",
  authDomain: "booklendingservice.firebaseapp.com",
  databaseURL: "https://booklendingservice.firebaseio.com",
  projectId: "booklendingservice",
  storageBucket: "booklendingservice.appspot.com",
  messagingSenderId: "30665753622",
  appId: "1:30665753622:web:ab1b6fe5dc66755fa2e137",
  measurementId: "G-KN3M3NG90S"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
