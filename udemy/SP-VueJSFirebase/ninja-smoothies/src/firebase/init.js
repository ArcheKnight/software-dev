import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCVR9lyaDVpwEYvZAfmIFgMZVJos2v3H6s',
  authDomain: 'ninja-smoothies-6b569.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-6b569.firebaseio.com',
  projectId: 'ninja-smoothies-6b569',
  storageBucket: 'ninja-smoothies-6b569.appspot.com',
  messagingSenderId: '893615476717'
};

const firebaseApp = firebase.initializeApp(config);

// export firestore database
export default firebaseApp.firestore();
