import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Footer from "./components/NavBar";
import AuthProvider from "./providers/RegistrationProvider";
import { useApplicationData } from "./hooks/useApplicationData";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Homepage />
        <Login />
        {/* <SignUp /> */}
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
