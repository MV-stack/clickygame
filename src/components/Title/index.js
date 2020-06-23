import React from "react";
import "./style.css";

function title(props) {
  return <h3 className="title">{props.children}</h3>;
}

export default title;