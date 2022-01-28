import { useEffect, useState } from "react";
import countries from "./countries.json";

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  // filter data by query and update result when query changed
  useEffect(() => {
    const resultList = document.querySelector(".result-list");

    if (query === "") {
      setResult([]);
      resultList.classList.remove("visible");
    } else {
      const re = RegExp(`.*${query}.*`, "gi");
      setResult(countries.filter((v) => v.search(re) !== -1).slice(0, 3));
      resultList.classList.add("visible");
    }
  }, [query]);

  // view first 3 result
  const viewResult = () =>
    result.map((v, i) => {
      return (
        <div className="result" key={i} onClick={select}>
          {v}
        </div>
      );
    });

  const update = (e) => setQuery(e.currentTarget.value);
  const select = (e) => setQuery(e.currentTarget.innerText);
  const reset = () => setQuery("");

  return (
    <div id="auto-complete" className="view">
      <div className="wrapper">
        <div className="search-wrapper">
          <input className="search-box" onInput={update} value={query} />
          <div className="del-btn" onClick={reset}>
            ✚
          </div>
        </div>
        <div className="result-list">{[...viewResult()]}</div>
      </div>
    </div>
  );
};

export default AutoComplete;
