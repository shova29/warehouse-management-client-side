import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignUP from "./Pages/SignIn/SignUp/SignUP";
import SignIn from "./Pages/SignIn/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InventoryDetail from "./Pages/Home/InventoryDetail/InventoryDetail";
import RequireAuth from "./Pages/SignIn/RequireAuth/RequireAuth";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
function App() {
  return (
    <div className="scroll-smooth hover:scroll-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/signup" element={<SignUP></SignUP>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
