import { useState, useEffect, useCallback } from 'react';
import DisplayPlants from './DisplayPlants';
import Filter from './Filter';

export default function Calendar() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [filterReload, triggerFilterReload] = useState(Date.now());
  const [monthIndoor, setMonthIndoor] = useState([]);

  useEffect(() => {
    fetchData(setPlants);
  }, []);

  useEffect(() => {
    setFilteredPlants(plants);
  }, [plants]);

  const filterByPropagationIndoor = useCallback(() => {
    return plants.filter(({ propagationIndoor }) => {
      return monthIndoor.every((month) => propagationIndoor.includes(month));
    });
  }, [plants, monthIndoor]);

  /*   useEffect(() => {
    if (!applyFilter) {
      setFilteredPlants(plants);
    } else {
      setFilteredPlants(filterByPropagationIndoor(plants, monthIndoor));
    }
  }, [applyFilter, plants, filterByPropagationIndoor, monthIndoor]); */

  function resetFilters() {
    setMonthIndoor([]);
  }

  function filterAll() {
    setFilteredPlants(filterByPropagationIndoor(plants));
  }

  return (
    <div className="calendar">
      <Filter
        key={filterReload}
        monthIndoor={monthIndoor}
        setMonthIndoor={setMonthIndoor}
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
