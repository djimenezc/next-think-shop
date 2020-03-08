export interface Item {
  name?: string;
  value?: string;
  selected?: boolean;
  editing?: boolean;
}

export interface ItemMap {
  [key: string]: Item;
}

export function convertToMap(items: string) {
  return JSON.parse(items).reduce((map, item) => {
    map[item] = {
      name: item,
      value: item,
      selected: false
    };
    return map;
  }, {});
}

export function convertObjectToArray(map) {
  return Array.from(Object.values(map));
}
