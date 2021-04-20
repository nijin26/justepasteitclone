import React, { useState } from "react";
import Header from "../Header/Header";
import ShareButton from "../ShareButton/ShareButton";
import Typing from "../Typing/Typing";
import axios from "axios";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import SharePage from "../SharePage/SharePage";

import style from "./App.module.css";

const App = () => {
  const history = useHistory();
  const [shareText, setShareText] = useState("");
  //   const [routeNav, setRouteNav] = useState(false);

  const handleInputChange = (inputValue) => {
    setShareText(inputValue);
    console.log(shareText);
  };

  const onSubmit = (inputValue) => {
    history.push("/test");
    console.log("pressed dude");
    console.log(shareText);
    axios
      .post("http://localhost:2000/add", { content: shareText })
      .then((response) => {
        let id = response.data["_id"];
        console.log(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Header headTitle="JustPasteit" />
      <Switch>
        <Route exact path="/">
          <Typing handleInputChange={handleInputChange} />
        </Route>
        <Route exact path="/test">
          <SharePage />
        </Route>
      </Switch>
      <ShareButton onSubmit={onSubmit} />
    </div>
  );
};

export default withRouter(App);
