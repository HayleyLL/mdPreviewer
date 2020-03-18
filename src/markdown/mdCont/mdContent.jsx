import React from "react";
import "github-markdown-css";
import ReactMarkdown from "react-markdown";
import {
  EditFilled,
  ShrinkOutlined,
  FullscreenOutlined
} from "@ant-design/icons";
import "./mdContent.scss";

const Md = props => {
  const { className, onEnlarge, enlarged } = props;
  return (
    <div className={className}>
      <div className="mdHeader">
        <span>
          <EditFilled />
          <span className="preview">Previewer</span>
        </span>
        <span className="changeMdSize" onClick={onEnlarge}>
          {enlarged === false ? <FullscreenOutlined /> : <ShrinkOutlined />}
        </span>
      </div>
      <div id="preview" className="markdown-body">
        <ReactMarkdown source={props.state.textArea.input}></ReactMarkdown>
      </div>
    </div>
  );
};

export default Md;
