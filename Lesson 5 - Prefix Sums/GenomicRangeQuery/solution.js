function solution(S, P, Q) {
  return P.map((startIndex, i) => {
    const endIndex = Q[i] + 1;

    let nucleotides = S.slice(startIndex, endIndex);

    if (nucleotides.indexOf("A") > -1) {
      return 1;
    } else if (nucleotides.indexOf("C") > -1) {
      return 2;
    } else if (nucleotides.indexOf("G") > -1) {
      return 3;
    } else {
      return 4;
    }
  });
}
