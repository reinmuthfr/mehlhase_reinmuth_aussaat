import firebase from 'firebase/app';
import 'firebase/database';

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

//firebase.initializeApp(firebaseConfig);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const database = firebase.database();

/* function writeUserPlant(userId, plantName, newPlant) {
  database.ref(`users/${userId}/plants_object`).set({
    plantName: newPlant,
  });
} */

function writeUserPlant(userId, newPlant) {
  database
    .ref(`users/${userId}/plants_object/${newPlant.plantName}`)
    .set(newPlant);
}

writeUserPlant(11, {
  plantName: 'A-Test-Kümmel',
  latinPlantName: 'Carum carvi',
  plantType: 2,
  propagationIndoor: [-1],
  propagationOutdoor: [4, 5, 6],
  harvest: [12, 13, 14, 15, 16],
  harvestYear: 2,
  perennial: true,
});

/* function getUserIdPath(userId) {
  return database.ref(`users/${userId}/plants`);
} */

export default function EditPlant() {
  return <div>Edit Plant</div>;
}
