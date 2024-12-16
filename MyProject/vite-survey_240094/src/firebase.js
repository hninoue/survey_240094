// Firebase SDKのインポート
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyCOBCaYXL8rOyy8Ckw32mibo0GCjjnAGaw",
  authDomain: "survey-240094.firebaseapp.com",
  databaseURL: "https://survey-240094-default-rtdb.firebaseio.com",  // Realtime DatabaseのURL
  projectId: "survey-240094",
  storageBucket: "survey-240094.firebasestorage.app",
  messagingSenderId: "532363065184",
  appId: "1:532363065184:web:9a3f0cf100fb660d2b5005",
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Firebase Realtime Databaseの初期化

// 必要に応じてエクスポート
export { database, ref, get, set };