import React from "react";

import "./PointDist.css";

const PointDist = (props) => {
  const {
    creation,
    player,
    onChange,
    onSubmit,
    redistribute
  } = props;

  const noPoints = player.points <= 0;

  return (
    <div className="start">
      <p>Points remaining: {player.points}</p>
      <form onChange={onChange} onSubmit={onSubmit}>
        {creation ? (
          <>
            <input id="company" name="company" type="text" placeholder="Company" />
            <input id="title" name="title" type="text" placeholder="Title" />
            <input id="name" name="name" type="text" placeholder="Name" />
          </>
        ) : (
          <div>
            Redistribute points?
          </div>
        )}
        {Object.entries(player.stats).map((stat, index) => {
          return (
            <div key={index}>
              <label>{stat[1].name}</label>
              <input
                id={stat[0]}
                name={stat[0]}
                type="number"
                min={redistribute && !noPoints ? stat[1].val : "1"}
                max={noPoints ? stat[1].val : "10"}
                defaultValue={stat[1].val}
               />
            </div>
          )
        })}
        <input type="submit" value="Start" disabled={player.points > 0}/>
      </form>
    </div>
  );
}

export default PointDist;
