import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import AlbumsBoardContainer from "./components/Albums/AlbumsBoardContainer";
import AlbumContainer from "./components/Albums/Album/AlbumContainer";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AlbumsBoardContainer} />
        <Route
          exact
          path="/albums/:albomId/photos"
          component={AlbumContainer}
        />
      </Switch>
    </div>
  );
}

export default App;
