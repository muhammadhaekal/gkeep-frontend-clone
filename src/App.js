import React, { Component } from "react";
import "./App.css";
import Header from "./components/large/Header";
import LeftNavbar from "./components/large/LeftNavbar";
import InputOption from "./components/small/InputOption";
import ThumbnailList from "./components/large/ThumbnailList";
import InputNote from "./components/medium/InputNote";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <LeftNavbar />
          <div>
            <InputNote />
            <InputOption />
            <ThumbnailList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
