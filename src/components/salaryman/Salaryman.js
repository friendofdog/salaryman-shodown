import React from "react";

import "./Salaryman.css";

const Salaryman = (props) => {
  const {
    player,
    user
  } = props;

  const visible = user === player.id;

  return (
    <div className="salaryman">
      <div>
        {player.name}<br />
        {player.title}<br />
        {player.company}
      </div>
      <div>
        CP: {player.cp}
      </div>
      <table>
        <tbody>
          {Object.values(player.stats).map((stat, index) => {
            return (
              <tr key={index}>
                <td>{stat.name}</td>
                <td>{visible ? stat.val : "??"}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Salaryman;
