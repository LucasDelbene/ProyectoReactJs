import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//CONFIGURACION FIREBASE DE MI APP
const firebaseConfig = {
  apiKey: "AIzaSyAF94WI1INgnPWnXVAgIgPKnW57aodoSV8",
  authDomain: "proyectoreactjs-2022.firebaseapp.com",
  projectId: "proyectoreactjs-2022",
  storageBucket: "proyectoreactjs-2022.appspot.com",
  messagingSenderId: "235637266638",
  appId: "1:235637266638:web:83b839b7a69fe1b9a4189f"
};

//INICIA FIREBASE
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);