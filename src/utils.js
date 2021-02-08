const getRandStat = (stats) => {
  const keys = Object.keys(stats);
  return stats[keys[ keys.length * Math.random() << 0]];
}

const setStats = (player, callback, key, val) => {
  const stat = player.stats[key]
  const prev = stat.val;
  stat.val = parseInt(val);
  player.points = prev > stat.val ? player.points + 1 : player.points - 1;
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

export { getRandStat, setStats, salarymanStats };
