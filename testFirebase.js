// testFirebase.js

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration (तुझं firebaseConfig copy कर)
const firebaseConfig = {
  apiKey: "AIzaSyAhWXQg6VYvz8JcrPu42Y__oGkARfi0x1U",
  authDomain: "bikeroom-765b8.firebaseapp.com",
  projectId: "bikeroom-765b8",
  storageBucket: "bikeroom-765b8.appspot.com",
  messagingSenderId: "505548164349",
  appId: "1:505548164349:web:6f1111e3b71f5643ca0294",
  measurementId: "G-WB24G6NS7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized ✅");

// Initialize Firestore
const db = getFirestore(app);
console.log("Firestore ready ✅");

// Try reading a test collection
async function testFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "testCollection"));
    console.log("Connected! Number of docs in testCollection:", querySnapshot.size);
  } catch (error) {
    console.error("Error connecting to Firestore:", error.message);
  }
}

testFirestore();