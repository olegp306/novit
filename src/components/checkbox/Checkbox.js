import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Checkbox = ({ name, label, value, className, onChange, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Check
        name={name}
      />
    </Form.Group>
  )

};

export default Checkbox;
