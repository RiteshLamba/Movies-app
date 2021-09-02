import "./App.css";

import Movies from "./Component/Movies/Movies";

import NavBar from "./Component/Movies/NavBar";
// import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Movies></Movies>
    </div>
  );
}

export default App;
