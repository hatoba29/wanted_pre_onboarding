import { useState } from "react";

const Toggle = () => {
  const [isOn, setOn] = useState(false);

  const update = (e) => {
    const toggleBg = e.currentTarget;
    const toggleBtn = e.currentTarget.firstElementChild;

    setOn(!isOn);
    toggleBg.classList.toggle("on");
    toggleBtn.classList.toggle("on");
  };

  return (
    <div id="toggle" className="view">
      <div className="toggle-bg" onClick={update}>
        <div className="toggle-btn" />
      </div>
      <div className="display">Toggle Switch {isOn ? "ON" : "OFF"}</div>
    </div>
  );
};

export default Toggle;
