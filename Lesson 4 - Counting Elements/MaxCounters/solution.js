function solution(N, A) {
  let maxCounter = 0;
  let lastMaxCounter = 0;
  let counters = Array(N).fill(0);

  A.forEach(operation => {
    if (operation >= 1 && operation <= N) {
      let counter = counters[operation - 1];
      if (counter < lastMaxCounter) {
        counter = lastMaxCounter;
      }

      counters[operation - 1] = ++counter;

      if (maxCounter < counter) {
        maxCounter = counter;
      }
    } else if (operation == N + 1) {
      lastMaxCounter = maxCounter;
    }
  });

  return counters.map(counter =>
    counter < lastMaxCounter ? lastMaxCounter : counter
  );
}
