// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/firestore/data-model?hl=pt-br
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJeY2uXsqZeMciVFWEm_4-qn990ZSF6gc",
    authDomain: "firestore-a0e92.firebaseapp.com",
    projectId: "firestore-a0e92",
    storageBucket: "firestore-a0e92.appspot.com",
    messagingSenderId: "316922957929",
    appId: "1:316922957929:web:42c8a6f720570d17bf12f8",
    measurementId: "G-XDT0PF9XST"
  };

// Initialize Firebase
window.fbApp = initializeApp(firebaseConfig);
window.fbDb = getFirestore(fbApp);

console.log(window.fbApp);
console.log(window.fbDb);