import {
  filterByPropagationIndoor,
  filterByPropagationOutdoor,
  filterByPerennial,
  filterByHarvest1,
  filterByHarvest2,
  filterByPlantType,
} from '@/library/filter_functions';
import { useState, useEffect, useMemo } from 'react';
import DisplayPlants from './DisplayPlants';
import EditPlant from './EditPlant';
import Filter from './Filter';

/**
 * Pflanzen sind Objekte, die verschiedenen Pflanzen sind in einem Pflanzen-Objekt zusammengefasst,
 * das auf der Datenbank liegt, für die Darstellung in DisplayPlants wird das Objekt in einen Array
 * umgewandelt.
 * Im Datenbankobjekt ist der key für eine Pflanze jeweils mit ihrem Namen (plantName) identisch.
 */

export default function Calendar({ edit }) {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [filterReload, triggerFilterReload] = useState(Date.now());
  const [monthIndoor, setMonthIndoor] = useState([]);
  const [monthOutdoor, setMonthOutdoor] = useState([]);
  const [perennial, setPerennial] = useState(false);
  const [harvest1, setHarvest1] = useState(false);
  const [harvest2, setHarvest2] = useState(false);
  const [plantType, setPlantType] = useState([1, 2, 3]);
  const [userId, setUserId] = useState('');
  const [fetchUserData, setFetchUserData] = useState(false);

  useEffect(() => {
    fetchData(setPlants, userId, fetchUserData);
  }, [userId, fetchUserData]);

  useEffect(() => {
    setFilteredPlants(plants);
  }, [plants]);

  const preFilteredPlants = useMemo(() => {
    let filterResult = plants;
    filterResult = filterByPropagationIndoor(filterResult, monthIndoor);
    filterResult = filterByPropagationOutdoor(filterResult, monthOutdoor);
    filterResult = !perennial ? filterResult : filterByPerennial(filterResult);
    filterResult = !harvest1 ? filterResult : filterByHarvest1(filterResult);
    filterResult = !harvest2 ? filterResult : filterByHarvest2(filterResult);
    filterResult = filterByPlantType(filterResult, plantType);
    return filterResult;
  }, [
    plants,
    monthIndoor,
    monthOutdoor,
    perennial,
    harvest1,
    harvest2,
    plantType,
  ]);

  function resetFilters() {
    setMonthIndoor([]);
    setMonthOutdoor([]);
    setPerennial(false);
    setHarvest1(false);
    setHarvest2(false);
    setPlantType([1, 2, 3]);
  }

  function filterAll() {
    setFilteredPlants(preFilteredPlants);
  }

  if (!plants.length) {
    return null;
  }

  return (
    <div className="calendar">
      <Filter
        key={filterReload}
        setMonthIndoor={setMonthIndoor}
        setMonthOutdoor={setMonthOutdoor}
        setPerennial={setPerennial}
        setHarvest1={setHarvest1}
        setHarvest2={setHarvest2}
        setPlantType={setPlantType}
      ></Filter>
      <div className="calendar-buttons">
        <button
          className="big-button"
          id="filterbutton"
          onClick={() => {
            filterAll();
          }}
        >
          Filter anwenden
        </button>
        <button
          className="big-button"
          id="resetbutton"
          onClick={() => {
            triggerFilterReload(Date.now());
            resetFilters();
            setFilteredPlants(plants);
          }}
        >
          Filter zurücksetzen
        </button>
      </div>
      <DisplayPlants
        filteredPlants={filteredPlants.filter(
          (plant) => plant.propagationIndoor && plant.propagationOutdoor
        )}
        edit={edit}
        setPlants={setPlants}
        plants={plants}
        userId={userId}
      ></DisplayPlants>
      {edit && (
        <EditPlant
          plants={plants}
          userId={userId}
          setUserId={setUserId}
          setFetchUserData={setFetchUserData}
        ></EditPlant>
      )}
    </div>
  );
}

//Holt Pflanzenobjekt von Datenbank, entweder user-Objekt oder default-Objekt

async function fetchData(setPlants, userId, fetchUserData) {
  let dataArr = [];
  let data = {};
  if (!userId || !fetchUserData) {
    try {
      data = await (
        await fetch(
          `https://plant-calendar-193cd-default-rtdb.europe-west1.firebasedatabase.app/plants_object.json`
        )
      ).json();
    } catch (error) {
      //TODO: echte Fehlerbehandlung, auch unten
      console.log(error);
    }
  } else {
    try {
      data = await (
        await fetch(
          `https://plant-calendar-193cd-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/plants_object.json`
        )
      ).json();
    } catch (error) {
      console.log(error);
    }
  }
  for (const key in data) {
    {
      dataArr.push(data[key]);
    }
  }
  setPlants(dataArr.sort((a, b) => a.plantName.localeCompare(b.plantName)));
}
