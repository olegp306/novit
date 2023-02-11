import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Checkbox = ({ name, label, value, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="mb-1">{label}</Form.Label>
      <Form.Check
        name={name}
        {...rest}
      />
    </Form.Group>
  )

};

export default Checkbox;
