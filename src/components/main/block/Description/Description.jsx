import React, { useState } from "react";
import "./Description.css";
import { Link, useLocation } from "react-router-dom";

export default function Description(props) {
  const [description, setDescription] = useState(
    useLocation().state.description
  );
  const id = useLocation().state.id;
  const blockId = useLocation().state.blockId;
  let issues = JSON.parse(localStorage.getItem("data"))[blockId].issues;
  let issueIndex;

  issues.forEach((issue, index) => {
    if (issue.id == id) {
      issueIndex = index;
    }
  });

  const handleInput = (event) => {
    setDescription(event.target.textContent);
    let data = JSON.parse(localStorage.getItem("data"));
    data[blockId].issues[issueIndex].description = event.target.textContent;
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <main className="desc-page">
      <div className="desc">
        <div className="desc-header">
          <h2>{useLocation().state.name}</h2>
          <Link to="/" className="close"></Link>
        </div>
        <p contentEditable="true" onBlur={handleInput}>
          {description}
        </p>
      </div>
    </main>
  );
}
