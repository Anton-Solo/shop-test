// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLdJopnN9URNZtjnzOzXgLgUx67ZfKeGM",
  authDomain: "shop-39072.firebaseapp.com",
  databaseURL: "https://shop-39072-default-rtdb.firebaseio.com",
  projectId: "shop-39072",
  storageBucket: "shop-39072.appspot.com",
  messagingSenderId: "433532780959",
  appId: "1:433532780959:web:834a6daa4b88397467fdaa",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
