import "./App.css";

//libs
import { Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/auth/Register/Register";
import { Login } from "./pages/auth/Login/Login";
import { Home } from "./pages/home/Home";
import { useAuth } from "./contexts/authContext";
import { useTheme } from "./contexts/themeContext";

function App() {
  const { token } = useAuth();
  const { active } = useTheme();

  return (
    <div className={active ? "dark" : ""}>
      <Routes>
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to={"/"} />}
        />
        <Route path="/" element={!token ? <Navigate to="/login" /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
