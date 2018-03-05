import React from "react";
import List from "./List";
import Form from "./Form";
import SoundButton from "./SoundButton";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-3 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-3 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className="col-md-3 offset-md-1">
      <h2>Click for sound! Wooooo!</h2>
      <SoundButton />
    </div>
  </div>
);

export default App;
