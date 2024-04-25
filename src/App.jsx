import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Lbnote from "./pages/Lbnote";
import Effect from "./pages/Effect";

import { Route, Routes } from "react-router-dom";

function App() {
  const [update, setUpdate] = useState([]);

  const onUpdate = (data) => {
    setUpdate([data, ...update]);
  };
  console.log(update);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home onUpdate={onUpdate} />}></Route>
        <Route path="/2" element={<Lbnote />}></Route>
        <Route path="/3" element={<Effect />}></Route>
      </Routes>
    </>
  );
}

export default App;
