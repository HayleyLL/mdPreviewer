import React, { Component } from "react";
import {
  EditFilled,
  ShrinkOutlined,
  FullscreenOutlined
} from "@ant-design/icons";
import "./text.scss";

class TextArea extends Component {
  render() {
    const { onText, state, onEnlarge, className, enlarged } = this.props;
    return (
      <div className={className}>
        <div className="textHeader">
          <span>
            <EditFilled />
            <span className="edit">Editor</span>
          </span>
          <span onClick={onEnlarge} className="changeTextSize">
            {enlarged === false ? <FullscreenOutlined /> : <ShrinkOutlined />}
          </span>
        </div>
        <textarea
          name=""
          id="editor"
          cols="100"
          rows="10"
          placeholder={state.textArea.input}
          onChange={onText}
        ></textarea>
      </div>
    );
  }
}

export default TextArea;
