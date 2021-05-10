import React from "react";

export default function Selector({ onChange, options }) {
  return (
    <select onChange={onChange} style={{ width: "100%"}}>
      <option default />
      {options.map((item) => (
        <option key={item}value={item}>{item}</option>
      ))}
    </select>
  );
}
