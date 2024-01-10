import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login/login";
import Plan from "./pages/plan/plan";
import User from "./pages/user/user";
import Payment from "./pages/payment/payment";
import Processing from "./pages/processing/processing";
import { useEffect, useState } from "react";
import { StateContext } from "./context";
import Data from "./pages/data/data";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    birthday: "",
    plan: "",
    cardNumber: "",
  });

  useEffect(() => {
    if (!user.email) {
      navigate("/");
    }
  }, [user]);
  return (
    <StateContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="plan" element={<Plan />} />
          <Route path="user" element={<User />} />
          <Route path="payment" element={<Payment />} />
          <Route path="processing" element={<Processing />} />
          <Route path="data" element={<Data />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
