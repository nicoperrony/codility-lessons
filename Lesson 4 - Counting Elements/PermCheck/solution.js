function solution(A) {
  A.sort((a, b) => a - b);

  if (A[0] != 1) return 0;

  let result = A.every(
    (element, idx, arr) => idx == A.length - 1 || arr[idx + 1] == element + 1
  );

  return result ? 1 : 0;
}
