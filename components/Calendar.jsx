import {
  filterByPropagationIndoor,
  filterByPropagationOutdoor,
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
    return filterResult;
  }, [plants, monthIndoor, monthOutdoor]);
  console.log(preFilteredPlants);

  /*   useEffect(() => {
    if (!applyFilter) {
      setFilteredPlants(plants);
    } else {
      setFilteredPlants(filterByPropagationIndoor(plants, monthIndoor));
    }
  }, [applyFilter, plants, filterByPropagationIndoor, monthIndoor]); */

  function resetFilters() {
    setMonthIndoor([]);
    setMonthOutdoor([]);
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
      <DisplayPlants filteredPlants={filteredPlants}></DisplayPlants>
    </div>
  );
}

async function fetchData(setPlants) {
  const data = await (await fetch(`/data/data.json`)).json();
  setPlants(data.sort((a, b) => a.plantName.localeCompare(b.plantName)));
}
