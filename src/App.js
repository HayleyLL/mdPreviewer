import React, { Component } from "react";
import Md from "./markdown/mdCont/mdContent";
import TextArea from "./markdown/textArea/text";
import { initials } from "./markdown/initData";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: {
        input: initials,
        className: "textContainer",
        enlarged: false
      },
      mdPreview: {
        className: "mdContainer",
        enlarged: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTextClick = this.handleTextClick.bind(this);
    this.handleMdClick = this.handleMdClick.bind(this);
  }

  handleChange({ target }) {
    const state = {
      textArea: {
        input: target.value,
        className: "textContainer",
        enlarged: false
      }
    };
    this.setState(state);
  }

  handleTextClick({ currentTarget }) {
    const { textArea } = this.state;
    const { input } = textArea;
    if (currentTarget.className === "changeTextSize") {
      const state =
        textArea.enlarged === false
          ? {
              textArea: { input, className: "textEnlarged", enlarged: true },
              mdPreview: { className: "noneMd", enlarged: false }
            }
          : {
              textArea: { input, className: "textContainer", enlarged: false },
              mdPreview: { className: "mdContainer", enlarged: false }
            };
      this.setState(state); //state已经是个对象了
    }
  }

  handleMdClick({ currentTarget }) {
    const { textArea, mdPreview } = this.state;
    const { input } = textArea;
    if (currentTarget.className === "changeMdSize") {
      const state =
        mdPreview.enlarged === false
          ? {
              textArea: { input, className: "noneText", enlarged: false },
              mdPreview: { className: "mdEnlarged", enlarged: true }
            }
          : {
              textArea: { input, className: "textContainer", enlarged: false },
              mdPreview: { className: "mdContainer", enlarged: false }
            };
      this.setState(state);
    }
  }

  render() {
    const { handleChange, state, handleTextClick } = this;
    const { textArea, mdPreview } = state;
    return (
      <div className="container">
        <TextArea
          onText={handleChange}
          onEnlarge={handleTextClick}
          state={state}
          className={textArea.className}
          enlarged={textArea.enlarged}
        />
        <Md
          state={state}
          className={mdPreview.className}
          enlarged={mdPreview.enlarged}
          onEnlarge={this.handleMdClick}
        />
      </div>
    );
  }
}

export default App;
