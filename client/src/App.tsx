import "./App.css";

//libs
import { Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/auth/Register/Register";
import { Login } from "./pages/auth/Login/Login";
import { Home } from "./pages/home/Home";
import { useAuth } from "./contexts/authContext";
import { useTheme } from "./contexts/themeContext";
import { CreatePost } from "./pages/createPost/CreatePost";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/about/About";
import { PostContent } from "./pages/PostDetails/PostDetails";

function App() {
  const { token } = useAuth();
  const { active } = useTheme();

  return (
    <div className={active ? "dark" : ""}>
      <div className={active ? "dark:bg-gray-800 px-6 py-8 text-white ring shadow-xl ring-gray-900/5" : ""}>
        <Navbar />
        <Routes>
          <Route path="/register" element={!token ? <Register /> : <Navigate to={"/"} />}/>
          <Route path="/login" element={!token ? <Login /> : <Navigate to={"/"} />}/>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:slug" element={<PostContent />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
