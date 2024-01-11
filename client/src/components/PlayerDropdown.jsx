
export default function PlayerDropdown (props) {

  return (
    <div>
      {props.showDropdown && (
        <div className="dropdown">
          {props.footballers.map((player) => (
            <div className="dropdown-item" onClick={() => props.selectFootballer("helell")} key={player.id}>
              <img src={player.image} alt={player.name} />
              {player.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}