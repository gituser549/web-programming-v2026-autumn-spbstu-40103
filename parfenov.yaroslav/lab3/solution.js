export function sortByFrequency(arr) {
  const freqByElem = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (freqByElem.has(arr[i])) {
      freqByElem.set(arr[i], freqByElem.get(arr[i]) + 1);
    } else {
      freqByElem.set(arr[i], 1);
    }
  }

  const keys = Array.from(freqByElem.keys());
  const freqElemPairs = [keys.length]
  for (let i = 0; i < keys.length; i++) {
    freqElemPairs[i] = [freqByElem.get(keys[i]), keys[i]];
  }

  freqElemPairs.sort(
    (a, b) => {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      }

      return 0;
    }
  );

  const sortedArr = new Array(arr.length);
  let slide = 0;
  for (let i = 0; i < freqElemPairs.length; i++) {
    sortedArr.fill(freqElemPairs[i][1], slide, slide + freqElemPairs[i][0]);
    slide += freqElemPairs[i][0];
  }

  return sortedArr;
}
