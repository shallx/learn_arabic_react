import 'firebase/compat/firestore';

import firebase from "firebase/compat/app";
import firebaseConfigs from '../firebase_configs';
firebase.initializeApp(firebaseConfigs[0].config)
var secondFireApp = firebase.initializeApp(firebaseConfigs[1].config, firebaseConfigs[1].slug)

const dbs = [
    firebase.firestore(),
    secondFireApp.firestore(),
]

export default dbs;