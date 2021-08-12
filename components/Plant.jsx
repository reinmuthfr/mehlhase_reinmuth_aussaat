import Link from 'next/link';

import {
  getPlantType,
  getPerennialName,
  getHarvestYear,
} from '@/library/helpers';

export default function Plant({ plant, index, edit, plants, setPlants }) {
  return (
    <>
      <tr className={`${index % 2 === 0 ? `even` : `odd`}`}>
        <td className="plant-name">{plant.plantName}</td>
        {Array.from(Array(24).keys()).map((key) => (
          <td
            key={key}
            className={
              plant.propagationIndoor.includes(key)
                ? `backgroundindoor`
                : undefined
            }
          ></td>
        ))}
        <td rowSpan="3" className="center">
          {getPerennialName(plant.perennial)}
        </td>
        <td rowSpan="3" className="center">
          {getHarvestYear(plant.harvestYear)}
        </td>
        <td rowSpan="3" className="center">
          {' '}
          <Link
            plantName={plant.plantName}
            href={{
              pathname: `/wiki_info/${plant.plantName}`,
              query: { latinName: plant.latinPlantName },
            }}
          >
            <a target="_blank">{plant.plantName}</a>
          </Link>
        </td>
        {edit && (
          <td rowSpan="3">
            <button
              onClick={() => {
                setPlants(plants.filter((ele) => ele !== plant));
              }}
            >
              &times;
            </button>
          </td>
        )}
      </tr>
      <tr className={`${index % 2 === 0 ? `even` : `odd`}`}>
        <td className="plant-name smaller italic">{plant.latinPlantName}</td>
        {Array.from(Array(24).keys()).map((key) => (
          <td
            key={key}
            className={
              plant.propagationOutdoor.includes(key)
                ? `backgroundoutdoor`
                : undefined
            }
          ></td>
        ))}
      </tr>
      <tr className={`${index % 2 === 0 ? `even` : `odd`}`}>
        <td className="plant-name smaller">{getPlantType(plant.plantType)}</td>
        {Array.from(Array(24).keys()).map((key) => (
          <td
            key={key}
            className={
              plant.harvest.includes(key) ? `backgroundharvest` : undefined
            }
          ></td>
        ))}
      </tr>
    </>
  );
}
