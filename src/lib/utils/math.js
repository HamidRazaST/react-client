function getRandomNumber(max) {
  return Math.floor((Math.random() * max));
}

function getNextRoundRobin(total, current) {
  return (current < total - 1) ? (current + 1) : 0;
}

export { getRandomNumber, getNextRoundRobin };
