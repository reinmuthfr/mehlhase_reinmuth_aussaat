import Plant from './Plant';

export default function DisplayPlants({ filteredPlants }) {
  console.log(filteredPlants);
  return (
    <div>
      <table id="mytable">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th colSpan="2">Jan</th>
            <th colSpan="2">Feb</th>
            <th colSpan="2">Mar</th>
            <th colSpan="2">Apr</th>
            <th colSpan="2">Mai</th>
            <th colSpan="2">Jun</th>
            <th colSpan="2">Jul</th>
            <th colSpan="2">Aug</th>
            <th colSpan="2">Sep</th>
            <th colSpan="2">Okt</th>
            <th colSpan="2">Nov</th>
            <th colSpan="2">Dez</th>
            <th>mehrjährige Pflanze</th>
            <th>Ernte ab dem 2. Jahr</th>
          </tr>
        </thead>
        <tbody id="divtbody">
          {/* <!-- Platz für dynamischen Content --> */}
          {filteredPlants.map((plant)=><Plant key={plant.plantName} plant={plant}></Plant>)}
        </tbody>
      </table>
    </div>
  );
}
