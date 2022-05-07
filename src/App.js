import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignUP from "./Pages/SignIn/SignUp/SignUP";
import SignIn from "./Pages/SignIn/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="scroll-smooth hover:scroll-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signup" element={<SignUP></SignUP>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
