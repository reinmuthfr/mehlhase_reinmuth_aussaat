import {
  getPlantType,
  getPerennialName,
  getHarvestYear,
} from '@/library/helpers';

export default function Plant({ plant }) {
  return (
    <>
      <tr>
        <td rowSpan="3">
          {plant.plantName}
          <br />
          <span className="smaller">{getPlantType(plant.plantType)}</span>
        </td>
        {Array.from(Array(24).keys()).map((key) => (
          <td key={key} className={plant.propagationIndoor.includes(key) && `backgroundindoor`}></td>
        ))}
        <td rowSpan="3">{getPerennialName(plant.perennial)}</td>
        <td rowSpan="3">{getHarvestYear(plant.harvestYear)}</td>
      </tr>
      <tr>
        {Array.from(Array(24).keys()).map((key) => (
          <td key={key} className={plant.propagationOutdoor.includes(key) && `backgroundoutdoor`}></td>
        ))}
      </tr>
      <tr>
        {Array.from(Array(24).keys()).map((key) => (
          <td key={key} className={plant.harvest.includes(key) && `backgroundharvest`}></td>
        ))}
      </tr>
    </>
  );
}
