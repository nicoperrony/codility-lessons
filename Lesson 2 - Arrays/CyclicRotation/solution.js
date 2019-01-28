function solution(A, K) {
  let arrRotated = new Array(A.length);

  A.forEach((element, idx, arr) => {
    let newPosition = (idx + K) % arr.length;
    arrRotated.splice(newPosition, 1, element);
  });

  return arrRotated;
}
