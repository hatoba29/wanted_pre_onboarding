import { useState } from "react";

const Tab = () => {
  const [tab, setTab] = useState("tab-1");
  const article = {
    "tab-1": "Tab menu ONE",
    "tab-2": "Tab menu TWO",
    "tab-3": "Tab menu THREE",
  };

  const update = (e) => {
    const curTab = e.currentTarget;
    const prevTab = document.getElementById(tab);

    prevTab.classList.remove("selected");
    curTab.classList.add("selected");

    setTab(curTab.id);
  };

  return (
    <div id="tab" className="view">
      <div className="tab-list">
        <div id="tab-1" className="tab selected" onClick={update}>
          Tab1
        </div>
        <div id="tab-2" className="tab" onClick={update}>
          Tab2
        </div>
        <div id="tab-3" className="tab" onClick={update}>
          Tab3
        </div>
      </div>
      <div className="display">{article[tab]}</div>
    </div>
  );
};

export default Tab;
