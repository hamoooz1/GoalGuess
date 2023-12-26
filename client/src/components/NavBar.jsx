import '../styles/navBar.css';
import goalGuessLogo from '../goalGuessLogo.png'

function NavBar() {
  return (
    <nav className='navBar'>
        <a><img src={goalGuessLogo} className='goalGuesslogo'/></a>
      <div>
        <a>How To play</a>
        <a>Leaderboard</a>
      <div className='login-register-btn'>
        <button>login</button>
        <button>register</button>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
