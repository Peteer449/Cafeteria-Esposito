import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, doc } from "firebase/firestore";




const firebaseConfig = {
  apiKey: process.env.REACT_APP_WEATHER_API_KEY,
  authDomain: "viavillate-54604.firebaseapp.com",
  projectId: "viavillate-54604",
  storageBucket: "viavillate-54604.appspot.com",
  messagingSenderId: "287549588443",
  appId: "1:287549588443:web:9515aaf96a91155b371dfe",
  measurementId: "G-VVTHN7V4LM"
};

const updateItem = async (id,newStock) => {
  const item=doc(db,"products",id)
  await updateDoc(item,{stock:newStock})
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {db,app,updateItem}
