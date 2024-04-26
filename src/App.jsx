import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Lbnote from "./pages/Lbnote";
import Effect from "./pages/Effect";
import Ref from "./pages/Ref";

import { Route, Routes } from "react-router-dom";
import Ref2 from "./pages/Ref2";

function App() {
  const [update, setUpdate] = useState([]);

  const onUpdate = (data) => {
    setUpdate([data, ...update]);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home onUpdate={onUpdate} />}></Route>
        <Route path="/2" element={<Lbnote />}></Route>
        <Route path="/3" element={<Effect />}></Route>
        <Route path="/4" element={<Ref />}></Route>
        <Route path="/4-2" element={<Ref2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
