import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;

/* 
a href를 쓰면 상태가 변할 때마다 화면 자체가 리렌더링 됨 -> Link 사용
*/
