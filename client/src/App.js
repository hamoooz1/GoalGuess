import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
