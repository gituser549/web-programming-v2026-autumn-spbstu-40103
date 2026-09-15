export function sortByFrequency(arr) {
  const freqByElem = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (freqByElem.has(arr[i])) {
      freqByElem.set(arr[i], freqByElem.get(arr[i]) + 1);
    } else {
      freqByElem.set(arr[i], 1);
    }
  }

  arr.sort((a, b) => freqByElem.get(b) - freqByElem.get(a));

  return arr;
}
