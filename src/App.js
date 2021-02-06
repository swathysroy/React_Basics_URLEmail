import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import urlPropType from "url-prop-type";
import emailPropType from 'email-prop-type';

export default function App(props) {
  return (
    <div>
      <h1>{props.url}</h1>
      <p>{props.email}</p>
    </div>
  );
}

App.propTypes = {
  url: urlPropType.isRequired,
  email: emailPropType.isRequired
};

App.defaultProps = {
  url: "https://www.google.com",
  email: "test@gmail.com"
};
