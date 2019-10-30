/**
 * transforms the text with first letter to capital
 * @param value
 */
export function capitalize(value: string) {
  let stringArray: Array<string> = value.split(' ');
  stringArray = stringArray.map(
    eachValue => eachValue.charAt(0).toUpperCase() + eachValue.substr(1).toLowerCase(),
  );
  return stringArray.join(' ');
}

/**
 * groups the array based on key and returns the object.
 * @param value => array which need to be grouped
 * @param key => on which parameter basis the array needs to be grouped
 */
export function groupBy(value: Array<any>, key: string) {
  const obj: any = {};
  value.forEach((element) => {
    const objectKey = element[key];
    obj[objectKey] = obj[objectKey] || [];
    obj[objectKey].push(element);
  });
  return obj;
}

/**
 * sort the array of objects based on the key
 * @param value => array to sort
 * @param key
 */
export function orderBy(value: Array<any>, key: string) {
  return value.sort((a, b): number => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}
