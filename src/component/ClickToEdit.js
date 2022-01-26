import { useState } from "react";

const ClickToEdit = () => {
  const [userData, setData] = useState({
    name: "김코딩",
    age: "20",
  });

  const update = (e) => {
    const className = e.currentTarget.className;
    const value = e.currentTarget.value;

    setData({
      ...userData,
      [className]: value,
    });
  };

  return (
    <div id="click-to-edit" className="view">
      <div className="input">
        <span>이름</span>
        <input className="name" defaultValue={userData.name} onBlur={update} />
      </div>
      <div className="input">
        <span>나이</span>
        <input
          className="age"
          defaultValue={userData.age}
          onBlur={update}
          type="number"
        />
      </div>
      <div className="display">
        {`이름 ${userData.name} 나이 ${userData.age}`}
      </div>
    </div>
  );
};

export default ClickToEdit;
