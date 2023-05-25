import React, { useState } from "react";
import "./Main.css";
import Block from "./block/Block";

const Main = () => {
  const initialDataMock = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [
        {
          title: "Backlog",
          issues: [],
        },
        {
          title: "Ready",
          issues: [],
        },
        {
          title: "In Progress",
          issues: [],
        },
        {
          title: "Finished",
          issues: [],
        },
      ];

  const [dataMock, setDataMock] = useState(initialDataMock);

  const addIssue = (name) => {
    const newDataMock = [...dataMock];
    newDataMock[0].issues.push({
      id: Math.trunc(Math.random() * 9999),
      name: name,
      description: "This task has no description",
    });
    updateData(newDataMock);
  };

  const moveIssue = (blockId, issueId) => {
    const newDataMock = [...dataMock];
    newDataMock[blockId - 1].issues.forEach((issue, index) => {
      if (issue.id == issueId) {
        newDataMock[blockId].issues.push(issue);
        newDataMock[blockId - 1].issues.splice(index, 1);
        updateData(newDataMock);
      }
    });
  };

  const updateData = (newData) => {
    setDataMock(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <main>
      {dataMock.map((block, index) => (
        <Block
          key={index}
          title={block.title}
          id={index}
          issues={block.issues}
          addCard={index === 0 ? addIssue : moveIssue}
          prevIssues={index > 0 ? dataMock[index - 1].issues : []}
        />
      ))}
    </main>
  );
};

export default Main;
