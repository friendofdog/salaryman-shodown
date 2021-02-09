const getRandStat = (stats) => {
  const keys = Object.keys(stats);
  return stats[keys[ keys.length * Math.random() << 0]];
}

const handleRound = (player1, player2, callback1, callback2, stat) => {
  const [p1score, p2score] = [player1.stats[stat].val, player2.stats[stat].val];
  if (p1score === p2score) return [false, false];
  const loser = p1score < p2score ? player1 : player2;
  const winner = p1score > p2score ? player1 : player2;
  const callback = p1score < p2score ? callback1 : callback2;
  loser.cp -= 1;
  callback(loser);
  return [winner, loser];
}

const updateProps = (player, callback, key, val) => {
  if (salarymanStats.includes(key)) {
    const stat = player.stats[key]
    const prev = stat.val;
    stat.val = parseInt(val);
    player.points = prev > stat.val ? player.points + 1 : player.points - 1;
  } else {
    player[key] = val;
  }
  callback(player);
}

const salarymanStats = [
  "conformity",
  "loyalty",
  "karaoke",
  "mucus",
  "senority",
  "sobriety"
];

export { getRandStat, handleRound, updateProps, salarymanStats };
