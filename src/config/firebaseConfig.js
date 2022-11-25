import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAI8iI-3fO703JNjLjJg0NjDiqdMiNOfV0",
  authDomain: "xhipment-auth.firebaseapp.com",
  projectId: "xhipment-auth",
  storageBucket: "xhipment-auth.appspot.com",
  messagingSenderId: "712878911804",
  appId: "1:712878911804:web:52035451cf04466036ee39",
  measurementId: "G-5M5DW4DX5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();