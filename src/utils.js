const salarymanStats = [
  "conformity",
  "loyalty",
  "karaoke",
  "mucus",
  "senority",
  "sobriety"
];

/*
 *  PointDist: change
 */

const handlePointDistChange = (e, state, P1) => {
  updateProps(
    state.user === P1 ? {...state.player1} : {...state.player2},
    state.user === P1 ? state.setPlayer1 : state.setPlayer2,
    e.target.name,
    e.target.value
  );
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

/*
 *  PointDist: submit
 */

const handlePointDistSubmit = async (e, socketRef, state, P1) => {
  e.preventDefault();
  await socketRef.current.emit(
    "state",
    state.user === P1 ? "setPlayer1" : "setPlayer2",
    state.user === P1 ? {...state.player1} : {...state.player2}
  )
  await verifyInit("setGameInit", socketRef);
}

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

/*
 *  Round
 */

const handleRound = (state, socketRef) => {
  const stat = getRandStat(salarymanStats);
  const [winner, loser] = roundWinnerLoser({...state.player1}, {...state.player2}, stat, socketRef);
  socketRef.current.emit("state", "setRoundWinner", winner);
  socketRef.current.emit("state", "setRound", stat);

  if (winner && loser) {
    setTimeout(() => {
      checkGameover(loser, socketRef, "setGameover");
      socketRef.current.emit("state", "setRedistribute", true);
    }, 2000);
  }
}

const checkGameover = (loser, socketRef, callback) => {
  if (loser.cp === 0) socketRef.current.emit("state", callback, true);
}

const getRandStat = (stats) => {
  const keys = Object.keys(stats);
  return stats[keys[ keys.length * Math.random() << 0]];
}

const roundWinnerLoser = (player1, player2, stat, socketRef) => {
  const [p1score, p2score] = [player1.stats[stat].val, player2.stats[stat].val];
  if (p1score === p2score) return [false, false];
  const loser = p1score < p2score ? player1 : player2;
  const winner = p1score > p2score ? player1 : player2;
  const callback = p1score < p2score ? "setPlayer1" : "setPlayer2";
  loser.cp -= 1;
  socketRef.current.emit("state", callback, loser);
  return [winner, loser];
}

export {
  handleRound,
  handlePointDistChange,
  handlePointDistSubmit,
};
