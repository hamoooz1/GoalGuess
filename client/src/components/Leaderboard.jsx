import React, {useState, useEffect} from 'react';
import axios from "axios";

const Leaderboard = (props) => {

  // const [win, setWin] = useState(null);
  // const [lose, setLose] = useState(null);
  const [totalGames, setTotalGames] = useState(0);

  const win = 1;
  const lose = 2;
  console.log(props.user);
  // const user_id = props.user.id;
  const user_id = 1;

  useEffect(() => {
    // console.log("Payload:", {user_id, win, lose});
    axios
      .post("/api/stats", {user_id, win, lose})
      .then((res) => {
        setTotalGames(res.data.stats.totalGames);
      })
      .catch((error) => {
        console.error("Error adding stats:", error);
      });
  }, [win, lose]);

  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Wins</th>
          <th>Lose</th>
          <th>Total games</th>
        </tr>
      </thead>
      <tbody>
        <tr key={user_id}>
          <td>{user_id}</td>
          <td>{win}</td>
          <td>{lose}</td>
          <td>{totalGames}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Leaderboard;