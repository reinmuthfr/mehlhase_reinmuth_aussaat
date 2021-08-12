import Layout from '../components/Layout';

export default function contact() {
  return <Layout title="Roll your own"></Layout>;
}

async function fetchDefaultPlants() {
  const curl = `https://plant-calendar-193cd-default-rtdb.europe-west1.firebasedatabase.app/plants_object/Fenchel/.json?print=pretty`;
  const response = await fetch(curl);
  const result = await response.json();
  console.log(result);
}

fetchDefaultPlants();
