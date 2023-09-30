import { useState } from "react";
import { PropTypes } from "prop-types";

import "../../assets/css/Checkbox.css";

export default function Checkbox({ id, label, checked }) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleCheck(event) {
    setIsChecked((current) => !current);
  }

  return (
    <div className="checkbox">
      <input type="checkbox" id={id} value={isChecked} onChange={handleCheck} checked={isChecked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

Checkbox.defaultProps = {
  checked: false,
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};
