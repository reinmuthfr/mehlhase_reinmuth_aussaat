export function filterByPropagationIndoor(plants, monthIndoor) {
  return plants.filter(({ propagationIndoor }) => {
    return monthIndoor.every((month) => propagationIndoor.includes(month));
  });
}

export function filterByPropagationOutdoor(plants, monthOutdoor) {
  return plants.filter(({ propagationOutdoor }) => {
    return monthOutdoor.every((month) => propagationOutdoor.includes(month));
  });
}
