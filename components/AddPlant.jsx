import { useState, useMemo } from 'react';

export default function AddPlant({ plants, setPlants }) {
  const [plantName, setPlantName] = useState('');
  const [latinPlantName, setLatinPlantName] = useState('');
  const [plantType, setPlantType] = useState(1);
  const [propagationIndoor, setPropagationIndoor] = useState([-1]);
  const [propagationOutdoor, setPropagationOutdoor] = useState([-1]);
  const [harvest, setHarvest] = useState([-1]);
  const [harvestYear, setHarvestYear] = useState(1);
  const [perennial, setPerennial] = useState(false);

  const newPlant = useMemo(() => {
    let plant = {
      plantName: plantName,
      latinPlantName: latinPlantName,
      plantType: plantType,
      propagationIndoor: propagationIndoor,
      propagationOutdoor: propagationOutdoor,
      harvest: harvest,
      harvestYear: harvestYear,
      perennial: perennial,
    };
    return plant;
  }, [
    plantName,
    latinPlantName,
    plantType,
    propagationIndoor,
    propagationOutdoor,
    harvest,
    harvestYear,
    perennial,
  ]);

  return (
    <>
      <tr className="add-plant">
        <td className="plant-name">
          <input
            type="text"
            id="plant-name"
            placeholder="Deutscher Name"
            onChange={(e) => setPlantName(e.target.value)}
          ></input>
        </td>
        {Array.from(Array(24).keys()).map((key) => (
          <td key={key}>
            <input
              type="checkbox"
              className="diy-checkbox"
              onClick={() => {
                let newPiD = propagationIndoor.slice();
                if (propagationIndoor.includes(key)) {
                  newPiD = newPiD.filter((ele) => ele !== key);
                } else {
                  newPiD.push(key);
                }
                setPropagationIndoor(newPiD);
              }}
            ></input>
          </td>
        ))}
        <td rowSpan="3" className="center">
          <input
            type="checkbox"
            className="diy-checkbox"
            onClick={() => setPerennial(!perennial)}
          ></input>
        </td>
        <td rowSpan="3" className="center">
          <input
            type="checkbox"
            className="diy-checkbox"
            onClick={() => setHarvestYear((harvestYear + 1) % 2 ? 1 : 2)}
          ></input>
        </td>
        <td rowSpan="3" colSpan="2" className="center">
          {' '}
          <button
            onClick={() => {
              let newPlants = plants.filter(
                (plant) => plant.plantName !== plantName
              );
              newPlants.push(newPlant);
              setPlants(
                newPlants.sort((a, b) => a.plantName.localeCompare(b.plantName))
              );
            }}
          >
            Hinzufügen / Ändern
          </button>
        </td>
      </tr>
      <tr className="add-plant">
        <td className="plant-name smaller italic">
          <input
            type="text"
            id="latin-plant-name"
            placeholder="Lateinischer Name"
            onChange={(e) => setLatinPlantName(e.target.value)}
          ></input>
        </td>
        {Array.from(Array(24).keys()).map((key) => (
          <td key={key}>
            <input
              type="checkbox"
              className="diy-checkbox"
              onClick={() => {
                let newPoD = propagationOutdoor.slice();
                if (propagationOutdoor.includes(key)) {
                  newPoD = newPoD.filter((ele) => ele !== key);
                } else {
                  newPoD.push(key);
                }
                setPropagationOutdoor(newPoD);
              }}
            ></input>
          </td>
        ))}
      </tr>
      <tr className="add-plant">
        <td className="plant-name smaller">
          {' '}
          <select
            id="selectplanttype"
            name="selectplanttype"
            onChange={(e) => setPlantType(parseInt(e.target.value))}
          >
            <option value="1">Gemüse</option>
            <option value="2">Kräuter</option>
            <option value="3">Salat</option>
          </select>
        </td>
        {Array.from(Array(24).keys()).map((key) => (
          <td key={key}>
            <input
              type="checkbox"
              className="diy-checkbox"
              onClick={() => {
                let newHarv = harvest.slice();
                if (harvest.includes(key)) {
                  newHarv = newHarv.filter((ele) => ele !== key);
                } else {
                  newHarv.push(key);
                }
                setHarvest(newHarv);
              }}
            ></input>
          </td>
        ))}
      </tr>
    </>
  );
}
