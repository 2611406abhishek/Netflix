import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzhKcUAzPS9ktFVgqdVXOA1lwM6ds_3uo",
  authDomain: "netflix-f88b3.firebaseapp.com",
  projectId: "netflix-f88b3",
  storageBucket: "netflix-f88b3.appspot.com",
  messagingSenderId: "1066162653203",
  appId: "1:1066162653203:web:c75c7c21f2198b586197e6",
  measurementId: "G-0TGY0GE0KY"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);
const storage = getStorage(app);

export default app;



