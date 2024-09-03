import React from "react";
import { Navbar } from "./components";
import { Header } from "./containers";

import "./styles/App.css";

const App = () => (
  <div className="gradient-bg">
    <Navbar />
    <Header />
  </div>
);

export default App;
