import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
