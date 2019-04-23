function solution(A) {
  A.sort((a, b) => b - a);

  let N = A.length;
  let max_withoutNegative = A[0] * A[1] * A[2];
  let max_with2Negative = A[N - 1] * A[N - 2] * A[0];

  return Math.max(max_withoutNegative, max_with2Negative);
}
