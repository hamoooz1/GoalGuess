import "./App.scss";
import HomeRoute from "./route/HomeRoute";
import AuthProvider from "./providers/AuthProvider";
import { ModalProvider } from "./providers/ModalProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ModalProvider>
          <HomeRoute />
        </ModalProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
