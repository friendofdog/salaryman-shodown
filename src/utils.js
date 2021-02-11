const checkGameover = (loser, socketRef, callback) => {
  if (loser.cp === 0) socketRef.current.emit("state", callback, true);
}

const getRandStat = (stats) => {
  const keys = Object.keys(stats);
  return stats[keys[ keys.length * Math.random() << 0]];
}

const handleRound = (player1, player2, stat, socketRef) => {
  const [p1score, p2score] = [player1.stats[stat].val, player2.stats[stat].val];
  if (p1score === p2score) return [false, false];
  const loser = p1score < p2score ? player1 : player2;
  const winner = p1score > p2score ? player1 : player2;
  const callback = p1score < p2score ? "setPlayer1" : "setPlayer2";
  loser.cp -= 1;
  socketRef.current.emit("state", callback, loser);
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

const verifyInit = async (callback, socketRef) => {
  await socketRef.current.emit(callback, (size) => {
    if (size >= 2) {
      socketRef.current.emit("state", "setCreation", false);
      socketRef.current.emit("state", "setRedistribute", false);
      socketRef.current.emit("state", "setRound", "");
      socketRef.current.emit("state", "setRoundWinner", "");
    }
  });
}

export { checkGameover, getRandStat, handleRound, updateProps, salarymanStats, verifyInit };
