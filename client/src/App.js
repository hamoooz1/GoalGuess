import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import Play from "./pages/Play";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/play"
            element={
              <Play />
            }
           />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
