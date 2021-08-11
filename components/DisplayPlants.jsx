import Plant from './Plant';
//TODO:Titel für Spalte Wikipedia überdenken (wir verlinken ja nicht einfach auf Wikipedia; irgendwo)
// sollte das aber natürlich stehen
export default function DisplayPlants({ filteredPlants }) {
  // console.log(filteredPlants);
  return (
    <div className="plants-display">
      {filteredPlants.length === 0 && (
        <div className="no-results center">
          Leider keine passenden Pflanzen gefunden!
        </div>
      )}
      {filteredPlants.length > 0 && (
        <table id="mytable">
          <thead>
            <tr className="odd">
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
              <th>Ernte ab 2. Jahr</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody id="divtbody">
            {/* <!-- Platz für dynamischen Content --> */}
            {filteredPlants.map((plant, index) => (
              <Plant key={plant.plantName} plant={plant} index={index}></Plant>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
