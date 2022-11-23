import firebaseConfigs from "../../firebase_configs";
import 'firebase/compat/firestore';

import firebase from "firebase/compat/app";

export default function BannerViewModel() {
  const getDb = () => {
    const firebaseConfig = firebaseConfigs[0].config;
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    return db;
  }

  const getData = async () => {
    const db = getDb();
    const data = await db.collection("test_collection").get();
    const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log(arrayData)
    return arrayData;
  } 


  return {
    getData,
  };
}
