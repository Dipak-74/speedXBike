import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhWXQg6VYvz8JcrPu42Y__oGkARfi0x1U",
  authDomain: "bikeroom-765b8.firebaseapp.com",
  projectId: "bikeroom-765b8",
  storageBucket: "bikeroom-765b8.appspot.com",
  messagingSenderId: "505548164349",
  appId: "1:505548164349:web:6f1111e3b71f5643ca0294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test function to push one document
async function pushTestDoc() {
  try {
    const colRef = collection(db, "testCollection");

    // Add document
    const docRef = await addDoc(colRef, {
      name: "Dipak",
      bike: "Hero Glamour",
      time: new Date()
    });

    console.log("Document added with ID:", docRef.id);

    // Fetch all documents
    const snapshot = await getDocs(colRef);
    console.log("Total documents in testCollection:", snapshot.size);
  } catch (err) {
    console.error("Firestore error:", err);
  }
}

pushTestDoc();