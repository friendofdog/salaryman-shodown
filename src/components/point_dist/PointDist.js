import React from "react";

import "./PointDist.css";
import kazuhide from "../../img/kazuhide.jpeg";

const PointDist = (props) => {
  const {
    creation,
    player,
    onChange,
    onSubmit,
    redistribute,
    winner,
    user
  } = props;

  const isWinner = winner.id === user;
  const noPoints = player.points <= 0;

  return (
    <div className="point-dist">
      {isWinner ? (
        <div>chotto matte...</div>
      ) : (
        <form onChange={onChange} onSubmit={onSubmit}>
          {creation ? (
            <>
            <table id="personal-info">
              <tbody>
                <tr id="name-field">
                  <td>名前</td>
                  <td colSpan="2">
                    <input id="name" name="name" type="text" />
                  </td>
                  <td id="gender-field">
                    <label>男<input id="gender" name="gender" type="checkbox" value="male" /></label>
                    <label>女<input id="gender" name="gender" type="checkbox" value="female" /></label>
                  </td>
                  <td>
                    <div id="profile-pic">
                      <img alt="kazuhide" src={kazuhide} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>生年月日</td>
                  <td colSpan="4"><input id="dob" name="dob" type="text" /></td>
                </tr>
                <tr>
                  <td>現住所</td>
                  <td colSpan="2">
                    <textarea id="address" name="address" />
                  </td>
                  <td>電話</td>
                  <td>
                    <input id="phone" name="phone" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>連絡先</td>
                  <td colSpan="2"><textarea id="contact" name="contact" /></td>
                  <td>ファックス</td>
                  <td><input id="fax" name="fax" type="text" /></td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th colSpan="2">職歴</th>
                </tr>
                <tr>
                  <th>年</th>
                  <th>月</th>
                  <th>会社名</th>
                  <th>職名</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input id="year" name="year" type="text" placeholder="1980" />
                  </td>
                  <td>
                    <input id="month" name="month" type="text" placeholder="01" />
                  </td>
                  <td>
                    <input id="company" name="company" type="text" placeholder="Company" />
                  </td>
                  <td>
                    <input id="title" name="title" type="text" placeholder="Title" />
                  </td>
                </tr>
              </tbody>
            </table>
            </>
          ) : (
            <div>
              Redistribute points?
            </div>
          )}
          <table id="stats">
            <thead>
              <tr>
                <th colSpan="2">職業訓練歴</th>
              </tr>
              <tr>
                <td>ポイント</td>
                <td>{player.points}</td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(player.stats).map((stat, index) => {
                return (
                  <tr key={index}>
                    <td>{stat[1].name}</td>
                    <td>
                      <input
                        id={stat[0]}
                        name={stat[0]}
                        type="number"
                        min={redistribute && !noPoints ? stat[1].val : "1"}
                        max={noPoints ? stat[1].val : "10"}
                        defaultValue={stat[1].val}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <input type="submit" value="Start" disabled={player.points > 0}/>
        </form>
      )}
    </div>
  );
}

export default PointDist;
