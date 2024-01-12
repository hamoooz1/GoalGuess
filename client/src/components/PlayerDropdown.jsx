
export default function PlayerDropdown(props) {

  function clickHandler(player) {
    props.selectFootballer(player);
  }

  return (
    <div>
      {props.showDropdown && (
        <div className="dropdown">
          {props.footballers.map((player) => (
            <div
              className="dropdown-item"
              onClick={() => {clickHandler(player)}}
              key={player.id}
            >
              <img src={player.image} alt={player.name} />
              {player.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}