function solution(A) {
  let total = A.reduce((prev, curr) => prev + curr);
  let sum = 0;
  let minScore = Number.MAX_VALUE;

  for (let i = 0; i < A.length - 1; i++) {
    const element = A[i];

    sum += element;

    let score = Math.abs(sum - (total - sum));

    if (score < minScore) {
      minScore = score;
    }
  }

  return minScore;
}
