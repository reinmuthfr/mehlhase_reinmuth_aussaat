import Layout from '../components/Layout';
import firebase from 'firebase/app';
import 'firebase/database';

export default function contact() {
  return <Layout title="DIY-Kalender"></Layout>;
}

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCQaRqODoztBVgJBmMtXYTFoQk8QphDRTM',
  authDomain: 'plant-calendar-193cd.firebaseapp.com',
  databaseURL:
    'https://plant-calendar-193cd-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'plant-calendar-193cd',
  storageBucket: 'plant-calendar-193cd.appspot.com',
  messagingSenderId: '846687206415',
  appId: '1:846687206415:web:72c08af19afcc97031377a',
  measurementId: 'G-6D05Q498M8',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function writeUserPlant(userId, newPlant) {
  database.ref(`users/${userId}/plants`).set({
    plant: newPlant,
  });
}

writeUserPlant(11, { plantName: 'neue Pflanze' });
