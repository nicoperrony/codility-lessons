function solution(A) {
  if (A.length == 0) return 0;

  A.sort((a, b) => a - b);

  return A.reduce((count, curr, idx, arr) => {
    if (idx != 0 && arr[idx - 1] != curr) {
      return ++count;
    } else {
      return count;
    }
  }, 1);
}
