import { createNewSortInstance } from "fast-sort";

export const filterByName = (arrayParam, nameParam) =>
  arrayParam.filter((e) => e.name.toLowerCase().includes(nameParam));

const naturalSort = createNewSortInstance({
  comparer: new Intl.Collator(undefined, { numeric: true }).compare,
});

export const order = (order, array) => {
  if (order.sort === "ASC") {
    return naturalSort(array).asc((e) => Number(e[order.column]) || 0);
  } else {
    return naturalSort(array).desc((e) => Number(e[order.column]) || 0);
  }
};
