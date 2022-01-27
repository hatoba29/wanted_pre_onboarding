import { useState } from "react";

const Tag = () => {
  const [tags, setTags] = useState([]);
  let curTag = "";

  const update = (e) => {
    // add tag when enter pressed
    if (e.key === "Enter" && curTag !== "") {
      setTags([...tags, curTag]);
      curTag = "";
      e.target.value = "";
    } else {
      setTimeout(() => {
        curTag = e.target.value;
      }, 1);
    }
  };

  const addTag = (i, text) => {
    return (
      <div id={`tag-${i}`} className="tag" key={i} onClick={delTag}>
        <div className="text">{text}</div>
        <div className="del-btn">✚</div>
      </div>
    );
  };

  const delTag = (e) => {
    if (e.target.className === "del-btn") {
      const id = Number(e.currentTarget.id.split("-")[1]);
      setTags([...tags.filter((_, i) => i !== id)]);
    }
  };

  const toggleFocus = (e) => {
    const tagList = document.querySelector(".tag-list");
    tagList.classList.toggle("focused");
  };

  return (
    <div id="tag" className="view">
      <div className="tag-list">
        {tags.map((t, i) => addTag(i, t))}
        <input
          placeholder="Press enter to add tags"
          onKeyDown={update}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
        />
      </div>
    </div>
  );
};

export default Tag;
