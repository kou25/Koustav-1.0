import React from "react";

const dxc = ({id}) => (
  <div>
    <img
      className="img_logo"
      alt='logo_number'
      src={id === '1' ? "https://img.icons8.com/bubbles/96/000000/1-circle-c.png" : "https://img.icons8.com/bubbles/90/000000/2-circle.png"}
    />
\
  </div>
);
export default dxc;
