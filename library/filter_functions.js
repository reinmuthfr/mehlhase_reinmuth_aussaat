export function filterByPropagationIndoor(plants, monthIndoor) {
  console.log('indoor', plants);
  return plants.filter(({ propagationIndoor }) => {
    return monthIndoor.every((month) => propagationIndoor.includes(month));
  });
}

export function filterByPropagationOutdoor(plants, monthOutdoor) {
  console.log(plants);
  return plants.filter(({ propagationOutdoor }) => {
    return monthOutdoor.every((month) => propagationOutdoor.includes(month));
  });
}

export function filterByPerennial(plants) {
  return plants.filter((plant) => plant.perennial);
}

export function filterByHarvest1(plants) {
  return plants.filter(({ harvestYear }) => harvestYear === 1);
}

export function filterByHarvest2(plants) {
  return plants.filter(({ harvestYear }) => harvestYear === 2);
}

export function filterByPlantType(plants, types) {
  return plants.filter(({ plantType }) => types.includes(plantType));
}
