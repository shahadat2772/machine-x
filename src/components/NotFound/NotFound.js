import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <p className="mainErrorText">Whoops it's a 404 Error!</p>
      <p className="errorText">
        The page you are searching <br /> was not found
      </p>
    </div>
  );
};

export default NotFound;
