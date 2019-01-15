import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = props => {
  const { type, name, placeHolder, headline, value, onChange, error } = props;
  return (
    <React.Fragment>
      <div className="form-group" />
      <label htmlFor={name}>{headline}</label>
      <input
        type={type}
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </React.Fragment>
  );
};
TextInputGroup.defaultProps = {
  type: "text"
};

TextInputGroup.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeHolder: propTypes.string.isRequired,
  headline: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  error: propTypes.string
};

export default TextInputGroup;
