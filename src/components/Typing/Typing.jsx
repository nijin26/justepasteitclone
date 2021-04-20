import React from "react";
import style from "./Typing.module.css";
const Typing = ({ handleInputChange }) => {
  return (
    <div>
      <textarea
        onChange={(e) => handleInputChange(e.target.value)}
        className={style.textarea_container}
      ></textarea>
    </div>
  );
};

export default Typing;
