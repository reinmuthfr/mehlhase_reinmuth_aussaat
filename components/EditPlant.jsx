import firebase from 'firebase/app';
import 'firebase/database';
import { useState, useEffect } from 'react';

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

export default function EditPlant({ setFetchUserData, userId, setUserId }) {
  const [preUserId, setPreUserId] = useState('');
  const [userExists, setUserExists] = useState(false);
  useEffect(() => {
    doesUserExist(userId, setUserExists);
  }, [userId]);

  useEffect(() => {
    if (userId && userExists) {
      setFetchUserData(true);
    }
  }, [userId, userExists, setFetchUserData]);
  return (
    <div>
      <input
        placeholder="Benutzername"
        onChange={(e) => setPreUserId(e.target.value)}
      ></input>
      <button onClick={() => setUserId(preUserId)}>Nutzernamen senden</button>
    </div>
  );
}

async function doesUserExist(userId, setUserExists) {
  const dbRef = firebase.database().ref();
  dbRef
    .child('users')
    .child(userId)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log('erfolg');
        setUserExists(true);
      } else {
        setUserExists(false);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
