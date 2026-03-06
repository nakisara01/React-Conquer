import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/movie-detail" exact={true} element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

/*
react route dom v5 버전의 경우, 포함여부(/about이 /를 포함)를 기반으로 경롤를 매칭했기 때문에
exact = {true} 로 정확히 그 주소가 일치 할 때만 보여지도록 해야 했다.
하지만 v6 버전은 가장 정확한 route 만을 인식한다
*/
