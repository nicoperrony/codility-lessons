function solution(A, B, K) {
  let firstIsDivisible = A % K === 0 ? 1 : 0;
  return Math.floor(B / K) - Math.floor(A / K) + firstIsDivisible;
}
