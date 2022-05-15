export const filterByName = (arrayParam, nameParam) =>
  arrayParam.filter((e) => e.name.toLowerCase().includes(nameParam));
