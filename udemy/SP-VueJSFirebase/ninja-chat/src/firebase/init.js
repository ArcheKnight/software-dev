import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyB0awelhoyhAzioNXXPNBesvMKtMhdVSd8',
  authDomain: 'dmt-ninja-chat-vue.firebaseapp.com',
  databaseURL: 'https://dmt-ninja-chat-vue.firebaseio.com',
  projectId: 'dmt-ninja-chat-vue',
  storageBucket: 'dmt-ninja-chat-vue.appspot.com',
  messagingSenderId: '829533461014'
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
