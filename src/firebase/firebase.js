import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB9G9JDC6g7-es52CuQ1IqENGrUtGmizSc",
  authDomain: "viavillate-54604.firebaseapp.com",
  projectId: "viavillate-54604",
  storageBucket: "viavillate-54604.appspot.com",
  messagingSenderId: "287549588443",
  appId: "1:287549588443:web:9515aaf96a91155b371dfe",
  measurementId: "G-VVTHN7V4LM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {db,app}
