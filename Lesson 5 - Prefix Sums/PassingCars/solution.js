function solution(A) {
  let count = 0;
  let nbFromEast = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] == 0) {
      nbFromEast++;
    }

    if (A[i] == 1) {
      count += nbFromEast;

      if (count > 1000000000) {
        return -1;
      }
    }
  }

  return count;
}
