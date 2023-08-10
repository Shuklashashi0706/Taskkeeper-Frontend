import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Register from "./pages/register";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />
    </Router>
  );
}
export default App;
