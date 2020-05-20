import React from "react";
// import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Welcome to the Faculty of Automation and Computer Science - TUCN</h1>
    <h2>Automation Department</h2>
    <h3>
      Master{"'"}s studies: Applied Informatics in Complex Systems Engineering
      (IAISC)
    </h3>
    <p>
      Buna ziua. React, Redux and React Router for ultra-responsive web apps.
    </p>
    <a
      href={"https://ac.utcluj.ro/index.en.html"}
      className="btn btn-primary btn-lg"
    >
      {/* <Link href="google.com" className="btn btn-primary btn-lg"> */}
      More information
    </a>
  </div>
);

export default HomePage;
