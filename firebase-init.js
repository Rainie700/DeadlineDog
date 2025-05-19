// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase 設定
const firebaseConfig = {
    apiKey: "AIzaSyCPTN4lYmu9VK0181Uwv0QIxhGwnWU5-oI",
    authDomain: "deadlinedog-2015.firebaseapp.com",
    projectId: "deadlinedog-2015",
    storageBucket: "deadlinedog-2015.firebasestorage.app",
    messagingSenderId: "828092528773",
    appId: "1:828092528773:web:faad661560e8db47a711ec",
    measurementId: "G-DMDRYKLKVW"
};

// 初始化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
