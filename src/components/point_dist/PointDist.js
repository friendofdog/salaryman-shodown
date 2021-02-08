import React from "react";

import "./PointDist.css";

const PointDist = (props) => {
  const {
    player,
    onChange,
    onSubmit
  } = props;

  const disabled = player.points <= 0;

  return (
    <div className="start">
      <form onChange={onChange} onSubmit={onSubmit}>
        {Object.entries(player.stats).map((stat, index) => {
          return (
            <div key={index}>
              <label>{stat[1].name}</label>
              <input
                id={stat[0]}
                name={stat[0]}
                type="number"
                min="1"
                max={disabled ? stat[1].val : "10"}
                defaultValue="5"
               />
            </div>
          )
        })}
        <input type="submit" value="Start" />
      </form>
    </div>
  );
}

export default PointDist;
