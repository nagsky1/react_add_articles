// src/js/components/App.js
import React from "react";
import Form from "./Form";
import List from "./List";
const App = () => (
    <>
    <div>
      <h2>Dispalying Articles in React and Redux</h2>
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
      <List/>
    </div>
  </>
);

export default App;