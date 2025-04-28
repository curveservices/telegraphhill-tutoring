import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Button = (props) => {
  const buttonStyles = {
    background: props.background,
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  if (props.link) {
    return (
      <Link
        to={props.link}
        target={props.target}
        role="button"
        tabIndex={0}
        aria-label={`Link to ${props.text}`}
      >
        <button
          className="flat-btn"
          style={buttonStyles}
          onClick={props.onClick}
          type={props.type}
          value={props.value}
        >
          {props.text}
        </button>
      </Link>
    );
  }

  return (
    <button
      className="flat-btn"
      style={buttonStyles}
      onClick={props.onClick}
      type={props.type}
      value={props.value}
      aria-label={props.text}
    >
      {props.text}
    </button>
  );
};

export default Button;
