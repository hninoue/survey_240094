// FirebaseのSDKをインポート
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyCOBCaYXL8rOyy8Ckw32mibo0GCjjnAGaw",
  authDomain: "survey-240094.firebaseapp.com",
  databaseURL: "https://survey-240094-default-rtdb.firebaseio.com",
  projectId: "survey-240094",
  storageBucket: "survey-240094.firebasestorage.app",
  messagingSenderId: "532363065184",
  appId: "1:532363065184:web:9a3f0cf100fb660d2b5005",
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };