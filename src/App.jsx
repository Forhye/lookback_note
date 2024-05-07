import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Lbnote from "./pages/Lbnote";
import Effect from "./pages/Effect";
import Ref from "./pages/Ref";

import { Route, Routes } from "react-router-dom";
import Ref2 from "./pages/Ref2";
import Context from "./pages/Context";
import Memo from "./pages/Memo";

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
        <Route path="/5" element={<Context />}></Route>
        <Route path="/6" element={<Memo />}></Route>
      </Routes>
    </>
  );
}

export default App;
