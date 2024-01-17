import React, {useState, useEffect} from 'react';
import axios from "axios";
import '../styles/modals.scss';
import '../styles/leaderboard.scss';
import closeSymbol from "../closeSymbol.svg";

const LeaderboardModal = (props) => {

  const [allUsersStats, setAllUsersStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  // GET stats by all users
  useEffect(() => {
    // console.log("Payload:", {user_id, win, lose});
    axios
      .get("/api/stats/allUsers")
      .then((res) => {

        setAllUsersStats(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
      });
  }, [props.isLeaderboardModalOpen]);
  // console.log('allUsersStats', allUsersStats);

  return (
    <div className='leaderboard modal'>
      <div className="modal-content">
        <h3 className='modal-title'>LEADERBOARD</h3>
        <button className="close-button" onClick={props.closeLeaderboardModal}>
          <img className="close-button-icon" src={closeSymbol} alt="close symbol" />
        </button>
        {isLoading && <h2>LOADING</h2>}
        {!isLoading &&
          <table className='leaderboard__table'>
            <thead className='table__head'>
              <tr>
                <th className='head_name head'>User</th>
                <th className='head_win head'>Wins</th>
                <th className='head_lose head'>Losses</th>
                <th className='head_total head'>Total games</th>
              </tr>
            </thead>
            <tbody>
              {allUsersStats.map((userStats, index) => (
                <tr className="table__row" key={index}>
                  <td className='row_name row'>{userStats.name}</td>
                  <td className='row_win row'>{userStats.win_count}</td>
                  <td className='row_lose row'>{userStats.lose_count}</td>
                  <td className='row_total row'>{userStats.total_games}</td>
                </tr>
              ))}
            </tbody>

          </table>}
      </div>
    </div>
  );
};

export default LeaderboardModal;