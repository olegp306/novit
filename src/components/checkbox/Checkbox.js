import React from "react";
import { Form } from "react-bootstrap";

const Checkbox = ({ name, label, value, onChange, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <div style={{ display: "flex" }}>
        <Form.Check
          onChange={onChange}
          name={name}
          checked={value}
          {...rest}
        />
        <div onClick={onChange} style={{ marginLeft: "5px", cursor:"pointer" }}>{label}</div>
      </div>
    </Form.Group>
  )

};

export default Checkbox;
