import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import NoPage from "./NoPage";
import Heart from "./Heart";

function App() {
  return (
      <HashRouter>
      <Routes>
        <Route path="/" element={<Heart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/no" element={<NoPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
