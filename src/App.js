import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import NoPage from "./NoPage";
import Heart from "./Heart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/no" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
