import "./App.css";

//libs
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/auth/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
