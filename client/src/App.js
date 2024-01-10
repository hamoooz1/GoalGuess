import "./App.scss";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";

import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Homepage />
      </AuthProvider>
    </div>
  );
}

export default App;
