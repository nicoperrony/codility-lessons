function solution(A) {
  A.sort((a, b) => a - b);

  if (A[0] > 1) return 1;

  for (let i = 0; i < A.length; i++) {
    const element = A[i];

    // Check next element if current is postive & different
    if (element > 0 && A[i + 1] != element) {
      if (i > 0 && A[i - 1] <= 0 && element > 1) {
        return 1;
      }

      if (A[i + 1] != element + 1) {
        return element + 1;
      }
    }
  }

  return 1;
}
