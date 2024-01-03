import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import useApplicationData from "./hooks/useApplicationData";
import HowToPlayModal from "./modals/HowToPlayModal";

function App() {
  const appData = useApplicationData();
  return (
    
      <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<Homepage {...appData} />} />
          <Route path="/howtoplay" element={<HowToPlayModal {...appData} />} />
        </Routes>
        </div>
      </Router>
    
  );
}

export default App;
