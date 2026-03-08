import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    if (event.clientY <= 0 && typeof onBefore === "function") {
      console.log(event)
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
function App() {
  const begForLife = () => console.log("pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;

//useEffect는 ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate이다
