import AddPlant from './AddPlant';
import Plant from './Plant';

//dient auf der Startseite zur Darstellung der Pflanzen, ist edit true kommen Komponenten zum
// Löschen und Hinzufügen bzw. Überschreiben von Pflanzen hinzu

export default function DisplayPlants({
  filteredPlants,
  plants,
  edit,
  setPlants,
  userId,
}) {
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
              {edit && <th>Löschen</th>}
            </tr>
          </thead>
          <tbody id="divtbody">
            {filteredPlants.map((plant, index) => (
              <Plant
                key={plant.plantName}
                plant={plant}
                index={index}
                edit={edit}
                plants={plants}
                setPlants={setPlants}
                userId={userId}
              ></Plant>
            ))}
            {edit && (
              <AddPlant plants={plants} setPlants={setPlants}></AddPlant>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
