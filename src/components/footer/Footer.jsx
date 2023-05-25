import React from "react";
import "./Footer.css";

const Footer = ({ activeTasks, finishedTasks }) => (
  <footer>
    <div className="status">
      <p className="active">Active tasks: {activeTasks}</p>
      <p className="finish">Finished tasks: {finishedTasks}</p>
    </div>
    <p className="copyright">
      Kanban board by <a href="https://github.com/Tanada2016">Author</a>, 2023
    </p>
  </footer>
);
export default Footer;
