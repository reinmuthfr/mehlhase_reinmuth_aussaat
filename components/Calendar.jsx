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
import Filter from './Filter';

export default function Calendar() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [filterReload, triggerFilterReload] = useState(Date.now());
  const [monthIndoor, setMonthIndoor] = useState([]);
  const [monthOutdoor, setMonthOutdoor] = useState([]);
  const [perennial, setPerennial] = useState(false);
  const [harvest1, setHarvest1] = useState(false);
  const [harvest2, setHarvest2] = useState(false);
  const [plantType, setPlantType] = useState([1, 2, 3]);

  useEffect(() => {
    fetchData(setPlants);
  }, []);

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
          id="filterbutton"
          onClick={() => {
            filterAll();
          }}
        >
          Filter anwenden
        </button>
        <button
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
      ></DisplayPlants>
    </div>
  );
}

async function fetchData(setPlants) {
  // const data = await (await fetch(`/data/data.json`)).json();
  const data = await (
    await fetch(
      `https://plant-calendar-193cd-default-rtdb.europe-west1.firebasedatabase.app/plants_object.json`
    )
  ).json();
  console.log({ data });
  const dataArr = [];
  for (const key in data) {
    {
      dataArr.push(data[key]);
    }
  }
  console.log(dataArr);
  setPlants(dataArr.sort((a, b) => a.plantName.localeCompare(b.plantName)));
}
