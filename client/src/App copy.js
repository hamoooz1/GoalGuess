import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useApplicationData } from "./hooks/useApplicationData";

function App() {
  const {
    state,
    setName,
    setEmail,
    setPassword,
    setError,
    handleSignUp,
    handleLogin,
    handleLogout,
  } = useApplicationData();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Homepage state={state} handleLogout={handleLogout} />}
          />
          <Route
            path="/login"
            element={
              <Login
                state={state}
                setEmail={setEmail}
                setPassword={setPassword}
                setError={setError}
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            path="/signUp"
            element={
              <SignUp
                state={state}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setError={setError}
                handleSignUp={handleSignUp}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
