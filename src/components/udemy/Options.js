import React from "react";
import Option from "./Option";
const Options = (props) => (
  <div>
    {/* Option Component here! */}
    <button onClick={props.removeAll}>Remove all</button>
    {props.options.map((option, i) => (
      <Option key={i} option={option} deleteOneOption={props.deleteOneOption} />
    ))}
  </div>
);

export default Options;
