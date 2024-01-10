import "./App.scss";
import HomeRoute from "./route/HomeRoute";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <HomeRoute />
      </AuthProvider>
    </div>
  );
}

export default App;
