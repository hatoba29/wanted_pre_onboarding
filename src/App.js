import "./App.scss";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

function App() {
  return (
    <div className="App">
      <h1>원티드 프리온보딩 프론트엔드 코스 선발과제</h1>
      <h2>AutoComplete</h2>
      <AutoComplete />
      <h2>ClickToEdit</h2>
      <ClickToEdit />
      <h2>Modal</h2>
      <Modal />
      <h2>Tab</h2>
      <Tab />
      <h2>Tag</h2>
      <Tag />
      <h2>Toggle</h2>
      <Toggle />
    </div>
  );
}

export default App;
