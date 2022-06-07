import "./App.css";
import { data } from "./utils/data";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/home.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTransactions } from "./store/transactions/transactions.actions";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("INIT")
    console.dir(data)
    dispatch(setTransactions(data));
  },[]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
