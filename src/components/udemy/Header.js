import React from "react";

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.subTitle}</p>
  </div>
);

export default Header;
