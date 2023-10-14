import { useState } from "react";
import "./App.css";
import SuperheroesList from "./SuperheroesList";

function App() {
  return (
    <div className="App">
      <h1>Superheroes</h1>
      <SuperheroesList />
    </div>
  );
}

export default App;
