export default function Filter() {
    return (
        <div>
                  <div id="divallfilters">
        <div id="divselect">
          <div id="divselectmonthindoor">
            <label htmlFor="selectmonthindoor">Aussaatmonat Haus:</label><br />
            <select
              id="selectmonthindoor"
              name="selectmonthindoor"
              size="12"
              multiple
            >
              <option value="januaryindoor">Januar</option>
              <option value="februaryindoor">Februar</option>
              <option value="marchindoor">März</option>
              <option value="aprilindoor">April</option>
              <option value="mayindoor">Mai</option>
              <option value="juneindoor">Juni</option>
              <option value="julyindoor">Juli</option>
              <option value="augustindoor">August</option>
              <option value="septemberindoor">September</option>
              <option value="octoberindoor">Oktober</option>
              <option value="novemberindoor">November</option>
              <option value="decemberindoor">Dezember</option>
            </select>
          </div>

          <div id="divselectmonthoutdoor">
            <label htmlFor="selectmonthoutdoor">Aussaatmonat Freiland:</label><br />
            <select
              id="selectmonthoutdoor"
              name="selectmonthoutdoor"
              size="12"
              multiple
            >
              <option value="januaryoutdoor">Januar</option>
              <option value="februaryoutdoor">Februar</option>
              <option value="marchoutdoor">März</option>
              <option value="apriloutdoor">April</option>
              <option value="mayoutdoor">Mai</option>
              <option value="juneoutdoor">Juni</option>
              <option value="julyoutdoor">Juli</option>
              <option value="augustoutdoor">August</option>
              <option value="septemberoutdoor">September</option>
              <option value="octoberoutdoor">Oktober</option>
              <option value="novemberoutdoor">November</option>
              <option value="decemberoutdoor">Dezember</option>
            </select>
          </div>

          <div id="divselectplanttype">
            <label htmlFor="selectplanttype">Art der Pflanze:</label><br />
            <select
              id="selectplanttype"
              name="selectplanttype"
              size="3"
              multiple
            >
              <option value="1">Gemüse</option>
              <option value="2">Kräuter</option>
              <option value="3">Salat</option>
            </select>
          </div>
        </div>

        <div id="divcheckboxes">
          <input
            type="checkbox"
            name="checkbox"
            id="perennial"
            value="perennial"
          />&nbsp;<label htmlFor="perennial">mehrjährig</label><br />
          <input
            type="checkbox"
            name="checkbox"
            id="harvest1"
            value="harvest1"
          />&nbsp;<label htmlFor="harvest1">Ernte ab dem 1. Jahr</label><br />
          <input
            type="checkbox"
            name="checkbox"
            id="harvest2"
            value="harvest2"
          />&nbsp;<label htmlFor="harvest2">Ernte ab dem 2. Jahr</label>
        </div>

        <div id="divlegende">
          <table>
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

      <div id="divbuttons">
        <button id="filterbutton">Filter anwenden</button>
        <button id="resetbutton">Filter zurücksetzen</button>
        <button id="download">App herunterladen</button>
      </div>
        </div>
    )
}
