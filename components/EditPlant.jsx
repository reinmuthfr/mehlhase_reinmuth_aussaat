import firebase from 'firebase/app';
import 'firebase/database';
import { useState, useEffect } from 'react';

//Stellt Verbindung zur Datenbank her, Funktionsweise unten in summary-details erläutert
//TODO:Nutzerzugriff an Passwort binden

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

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const database = firebase.database();

function writeUserPlants(userId, plants) {
  if (!userId) {
    return;
  }
  const plantObject = {};
  for (const plant of plants) {
    plantObject[`${plant.plantName}`] = plant;
  }
  database.ref(`users/${userId}/plants_object`).set(plantObject);
}

export default function EditPlant({
  setFetchUserData,
  userId,
  setUserId,
  plants,
}) {
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
      <button className="big-button" onClick={() => setUserId(preUserId)}>
        Nutzernamen senden
      </button>
      <button
        className="big-button"
        onClick={() => {
          writeUserPlants(userId, plants);
        }}
      >
        Pflanzenkalender speichern
      </button>
      <br></br>
      <summary>
        Erst Nutzernamen senden, dann Pflanzenkalender speichern.
        <details>
          Der Nutzername wird an eine Datenbank gesendet. Dann wird ein Eintrag
          angelegt, falls noch keiner existiert, oder der bestehende Eintrag
          geladen. Mit <em>Pflanzenkalendar speichern</em> wird der aktuelle
          Kalender unter dem Nutzernamen gespeichert. Ein bestehender Kalender
          wird überschrieben. Sendet man einen leeren Benutzernamen, wird wieder
          der Standard-Kalender aus der Datenbank geladen.
        </details>
      </summary>
    </div>
  );
}

async function doesUserExist(userId, setUserExists) {
  if (!userId) {
    setUserExists(false);
    return;
  }
  const dbRef = firebase.database().ref();
  dbRef
    .child('users')
    .child(userId)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        setUserExists(true);
      } else {
        setUserExists(false);
      }
    })
    .catch((error) => {
      //TODO:echte Fehlerbehandlung
      console.error(error);
    });
}
