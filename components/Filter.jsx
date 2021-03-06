import { getSelectValues } from '@/library/helpers';
//Komponente zum Setzen und Anwenden bzw. Zurücksetzen von Filtern für den Pflanzenkalender
export default function Filter({
  setMonthIndoor,
  setMonthOutdoor,
  setPerennial,
  setHarvest1,
  setHarvest2,
  setPlantType,
}) {
  return (
    <div className="filter-flex">
      <div>
        <label htmlFor="selectmonthindoor">Aussaatmonat Haus:</label>
        <br />
        <select
          id="selectmonthindoor"
          name="selectmonthindoor"
          size="12"
          multiple
          onChange={(e) =>
            setMonthIndoor(
              getSelectValues(e.target).map((ele) => parseInt(ele))
            )
          }
        >
          <option value="0">Januar</option>
          <option value="2">Februar</option>
          <option value="4">März</option>
          <option value="6">April</option>
          <option value="8">Mai</option>
          <option value="10">Juni</option>
          <option value="12">Juli</option>
          <option value="14">August</option>
          <option value="16">September</option>
          <option value="18">Oktober</option>
          <option value="20">November</option>
          <option value="22">Dezember</option>
        </select>
      </div>

      <div>
        <label htmlFor="selectmonthoutdoor">Aussaatmonat Freiland:</label>
        <br />
        <select
          id="selectmonthoutdoor"
          name="selectmonthoutdoor"
          size="12"
          multiple
          onChange={(e) =>
            setMonthOutdoor(
              getSelectValues(e.target).map((ele) => parseInt(ele))
            )
          }
        >
          <option value="0">Januar</option>
          <option value="2">Februar</option>
          <option value="4">März</option>
          <option value="6">April</option>
          <option value="8">Mai</option>
          <option value="10">Juni</option>
          <option value="12">Juli</option>
          <option value="14">August</option>
          <option value="16">September</option>
          <option value="18">Oktober</option>
          <option value="20">November</option>
          <option value="22">Dezember</option>
        </select>
      </div>

      <div className="kind-perennial">
        <div>
          <label htmlFor="selectplanttype">Art der Pflanze:</label>
          <br />
          <select
            id="selectplanttype"
            name="selectplanttype"
            size="3"
            multiple
            onChange={(e) =>
              setPlantType(
                getSelectValues(e.target).map((ele) => parseInt(ele))
              )
            }
          >
            <option value="1">Gemüse</option>
            <option value="2">Kräuter</option>
            <option value="3">Salat</option>
          </select>
        </div>

        <div className="perennial">
          <label htmlFor="perennial">mehrjährig</label>
          <input
            type="checkbox"
            name="perennial"
            id="perennial"
            onClick={() => {
              setPerennial((perennial) => !perennial);
            }}
          />
          &nbsp;
          <br />
          <label htmlFor="harvest1">Ernte ab 1. Jahr</label>
          <input
            type="checkbox"
            name="harvest1"
            id="harvest1"
            onClick={() => {
              setHarvest1((harvest1) => !harvest1);
            }}
          />
          &nbsp;
          <br />
          <label htmlFor="harvest2">Ernte ab 2. Jahr</label>
          <input
            type="checkbox"
            name="checkbox"
            id="harvest2"
            onClick={() => {
              setHarvest2((harvest2) => !harvest2);
            }}
          />
          &nbsp;
        </div>
      </div>

      <div>
        <table>
          <caption>Legende</caption>
          <thead></thead>
          <tbody>
            <tr>
              <td className="backgroundindoor">&nbsp;</td>
              <td>Aussaat im Haus</td>
            </tr>
            <tr>
              <td className="backgroundoutdoor">&nbsp;</td>
              <td>Aussaat ins Freiland</td>
            </tr>
            <tr>
              <td className="backgroundharvest">&nbsp;</td>
              <td>Erntezeit</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}
