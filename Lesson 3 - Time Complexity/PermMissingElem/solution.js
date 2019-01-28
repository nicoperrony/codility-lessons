function solution(A) {
  A.sort((a, b) => a - b);

  if (A[0] != 1) return 1;

  let missingNumber = A.find((element, idx, arr) => {
    if (arr[idx + 1] != element + 1) {
      return true;
    }
  });

  return missingNumber + 1;
}
