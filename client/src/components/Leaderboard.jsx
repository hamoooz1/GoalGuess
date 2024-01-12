import React from 'react';

const Leaderboard = () => {

  const [win, setWin] = useState(null);
  const [lose, setLose] = useState(null);
  // const tableData = [
  //   {id: 1, name: 'John Doe', age: 25},
  //   {id: 2, name: 'Jane Smith', age: 30},
  //   {id: 3, name: 'Bob Johnson', age: 28},
  //   // ... add more data as needed
  // ];

  // const addStats = function(id, win, lose) {
  //   return axios.post("/api/stats", {id, win, lose}).then((res) => {
  //     return res.data;
  //   });
  // };

  return (
    <table>
      <thead>
        <tr>
          <th>UserName</th>
          <th>Wins</th>
          <th>Loose</th>
          <th>Total games</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;