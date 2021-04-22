const salarymanStats = [
  "conformity",
  "loyalty",
  "karaoke",
  "mucus",
  "senority",
  "sobriety",
];

/*
 * Modal: close
 */

const closeModal = (setModalClosed) => {
  setModalClosed(true);
};

/*
 *  PointDist: change
 */

const handlePointDistChange = (key, val, player, callback, setRedistInit) => {
  setRedistInit(false);

  if (salarymanStats.includes(key)) {
    const stat = player.stats[key];
    const prev = stat.val;
    stat.val = parseInt(val);
    player.points = prev > stat.val ? player.points + 1 : player.points - 1;
  } else {
    player[key] = val;
  }

  callback(player);
};

/*
 *  PointDist: submit
 */

const handlePointDistSubmit = async (
  e,
  socketRef,
  player,
  callback,
  gameInit
) => {
  e.preventDefault();

  await socketRef.current.emit("state", callback, player);

  socketRef.current.emit("state", "setGameInit", gameInit + 1);
};

/*
 *  PointDist: creation
 */

const initialiseGame = (socketRef, gameInit) => {
  if (gameInit >= 2) {
    socketRef.current.emit("state", "setCreation", false);
    socketRef.current.emit("state", "setRedistribute", false);
    socketRef.current.emit("state", "setRound", null);
    socketRef.current.emit("state", "setRoundWinner", null);
  }
};

/*
 *  Round
 */

const getRandStat = (stats) => {
  const keys = Object.keys(stats);
  return stats[keys[(keys.length * Math.random()) << 0]];
};

const roundWinnerLoser = (player1, player2, stat, socketRef) => {
  const [p1score, p2score] = [player1.stats[stat].val, player2.stats[stat].val];

  if (p1score === p2score) return [false, false];

  const loser = p1score < p2score ? player1 : player2;
  const winner = p1score > p2score ? player1 : player2;
  const hook = p1score < p2score ? "setPlayer1" : "setPlayer2";

  loser.cp -= 1;
  socketRef.current.emit("state", hook, loser);

  return [winner, loser];
};

const handleRound = (player1, player2, socketRef) => {
  const stat = getRandStat(salarymanStats);
  const [winner, loser] = roundWinnerLoser(player1, player2, stat, socketRef);

  socketRef.current.emit("state", "setRoundWinner", winner);
  socketRef.current.emit("state", "setRound", stat);

  if (winner && loser) {
    socketRef.current.emit("state", "setRedistInit", true);
    setTimeout(() => {
      if (loser.cp === 0) socketRef.current.emit("state", "setGameover", true);
      else socketRef.current.emit("state", "setRedistribute", true);
    }, 2000);
  }
};

export {
  closeModal,
  handleRound,
  handlePointDistChange,
  handlePointDistSubmit,
  initialiseGame,
};
