import React from "react";

import style from "./Header.module.css";

const Header = ({ headTitle }) => {
  return (
    <div className={style.nav_container}>
      <h1>{headTitle}</h1>
    </div>
  );
};

export default Header;
