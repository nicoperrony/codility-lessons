function solution(N) {
  let binary = parseInt(N, 10).toString(2);
  let arrBinary = binary.split("");
  let maxCount = 0;

  arrBinary.reduce((prev, curr, idx, arr) => {
    if (curr == 0) {
      return ++prev;
    } else {
      if (prev > maxCount || idx == arr.length + 1) {
        maxCount = prev;
      }

      return 0;
    }
  }, 0);

  return maxCount;
}
