const Modal = () => {
  const update = (e) => {
    const className = e.currentTarget.className;
    const modalBg = document.querySelector(".modal-bg");
    const modalWindow = document.querySelector(".modal-window");

    if (className === "open-btn") {
      modalBg.classList.add("active");
      modalWindow.classList.add("active");
    } else if (className === "close-btn") {
      modalBg.classList.remove("active");
      modalWindow.classList.remove("active");
    }
  };

  return (
    <div id="modal" className="view">
      <div className="open-btn" onClick={update}>
        Open Modal
      </div>
      <div className="modal-bg" />
      <div className="modal-window">
        <div className="close-btn" onClick={update}>
          ╳
        </div>
        <div className="display">HELLO CODESTATES!</div>
      </div>
    </div>
  );
};

export default Modal;
