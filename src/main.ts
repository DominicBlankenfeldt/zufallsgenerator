import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy8QiMJXYuRYxeLbRdtpOaadWNk2p0VR0",
  authDomain: "wegners-weihnachtswichteln.firebaseapp.com",
  projectId: "wegners-weihnachtswichteln",
  storageBucket: "wegners-weihnachtswichteln.appspot.com",
  messagingSenderId: "877242643232",
  appId: "1:877242643232:web:4f67d714b80c2d679d5d45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;

createApp(App).use(router).mount("#app");
