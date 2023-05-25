import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Description from "./components/main/block/Description/Description";

function App() {
  const [activeTasks, setActiveTasks] = useState(0);
  const [finishedTasks, setFinishedTasks] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setActiveTasks(data[0].issues.length);
      setFinishedTasks(data[3].issues.length);
    }
  }, []);

  const updateCounter = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setActiveTasks(data[0].issues.length);
      setFinishedTasks(data[3].issues.length);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main updateCounter={updateCounter} />} />
          <Route path="/tasks" element={<Main />} />
          <Route path="/tasks/:id" element={<Description />} />
        </Routes>
        <Footer activeTasks={activeTasks} finishedTasks={finishedTasks} />
      </BrowserRouter>
    </div>
  );
}

export default App;
