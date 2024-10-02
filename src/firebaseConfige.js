
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnNcnlSIKCZKLbpZI4M8_b5voGvD086Us",
  authDomain: "crud-15eb5.firebaseapp.com",
  projectId: "crud-15eb5",
  storageBucket: "crud-15eb5.appspot.com",
  messagingSenderId: "577971007870",
  appId: "1:577971007870:web:bff67cbce6d22ceaa2432f",
  measurementId: "G-HW29S165GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app