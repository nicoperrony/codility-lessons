function solution(A) {
  let arrSorted = A.sort();

  return arrSorted.find((element, idx, arr) => {
    if ((idx % 2 == 0 && element != arr[idx + 1]) || idx == arr.length - 1) {
      return true;
    }
  });
}
