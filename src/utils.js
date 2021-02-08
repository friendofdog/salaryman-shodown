const getRandStat = (stats) => {
  const keys = Object.keys(stats);
  return stats[keys[ keys.length * Math.random() << 0]];
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

export { getRandStat, updateProps, salarymanStats };
