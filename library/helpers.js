// Source: https://www.30secondsofcode.org/js/s/shuffle
export function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

// Hilfsfunktion: Umwandlung der numbers in plantType in lesbare Strings zur Darstellung in der Tabelle
export function getPlantType(plantType) {
  switch (plantType) {
    case 1:
      return 'Gemüse';
    case 2:
      return 'Kräuter';
    case 3:
      return 'Salat';
  }
}

// Hilfsfunktion zur Umwandlung der perennial-Werte in für User verständliche Strings zur Darstellung in der Tabelle
export function getPerennialName(perennialId) {
  switch (perennialId) {
    // falls perennialId den Wert true hat, soll Ja zurückgegeben werden
    case true:
      return 'ja';
    // falls false, dann Nein
    case false:
      return 'nein';
  }
}

// Hilfsfunktion: Umwandlung der numerischen Erntejahr-Werte in für User verständliche Strings zur Darstellung in der Tabelle
export function getHarvestYear(yearId) {
  switch (yearId) {
    case 1:
      return "nein";
    case 2:
      return "ja";
  }
}