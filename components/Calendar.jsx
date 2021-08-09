import { useState, useEffect } from 'react';
import DisplayPlants from './DisplayPlants';
import Filter from './Filter';

export default function Calendar() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchData(setPlants);
  }, []);

  return (
    <div className="calendar">
      <Filter></Filter>
      <DisplayPlants filteredPlants={plants}></DisplayPlants>
    </div>
  );
}

async function fetchData(setPlants) {
  const data = await (await fetch(`/data/data.json`)).json();
  setPlants(data);
}
