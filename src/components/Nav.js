import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/login">로그인 화면 가기</Link>
    </div>
  );
}

export default Nav;