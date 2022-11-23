import firebaseConfigs from "../../firebase_configs";
import 'firebase/compat/firestore';

import firebase from "firebase/compat/app";

export default function BannerViewModel() {
  const getDb = () => {
    firebase.initializeApp(firebaseConfigs[0].config)
    firebase.initializeApp(firebaseConfigs[1].config, firebaseConfigs[1].slug)
    const db = firebase.firestore();
    return db;
  }

  const getData = async () => {
    let arrayData = [];
    for(let i = 0; i < firebaseConfigs.length; i++) {
      const db = getDb(i);
      const collection = firebaseConfigs[i].collection;
      const data = await db[i].collection(collection).limit(1).get();
      arrayData.push(data.docs[0].data());
    }
    return arrayData;
  } 


  return {
    getData,
  };
}
