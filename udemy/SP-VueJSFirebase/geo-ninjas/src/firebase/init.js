import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBRxI62Bdla_QCNQhxLrbdnV9QlCa0dPtI',
  authDomain: 'dmt-geo-ninjas.firebaseapp.com',
  databaseURL: 'https://dmt-geo-ninjas.firebaseio.com',
  projectId: 'dmt-geo-ninjas',
  storageBucket: '',
  messagingSenderId: '606389410273'
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
