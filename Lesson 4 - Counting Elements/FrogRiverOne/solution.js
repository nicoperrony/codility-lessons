function solution(X, A) {
  let fallenLeaves = {};
  let numberOfLeaves = 0;

  for (let i = 0; i < A.length; i++) {
    const leafPosition = A[i];

    if (leafPosition <= X && !fallenLeaves[leafPosition]) {
      fallenLeaves[leafPosition] = true;
      numberOfLeaves++;
    }
    if (numberOfLeaves == X) {
      return i;
    }
  }

  return -1;
}
