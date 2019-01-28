function solution(X, Y, D) {
  let distance = Y - X;
  let nbJump = Math.ceil(distance / D);

  return nbJump;
}
