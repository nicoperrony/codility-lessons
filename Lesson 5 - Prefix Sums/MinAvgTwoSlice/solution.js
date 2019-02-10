function solution(A) {
  let minStart = 0;
  let minAvg = Number.MAX_VALUE;

  for (let i = 0; i < A.length - 2; i++) {
    let sliceOf2 = (A[i] + A[i + 1]) / 2;
    let sliceOf3 = (A[i] + A[i + 1] + A[i + 2]) / 3;

    if (sliceOf2 < minAvg) {
      minAvg = sliceOf2;
      minStart = i;
    }

    if (sliceOf3 < minAvg) {
      minAvg = sliceOf3;
      minStart = i;
    }
  }

  let lastMinAvg = (A[A.length - 2] + A[A.length - 1]) / 2;

  if (lastMinAvg < minAvg) {
    minAvg = lastMinAvg;
    minStart = A.length - 2;
  }

  return minStart;
}
