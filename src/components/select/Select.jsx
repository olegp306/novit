import React from "react";
import { Form } from "react-bootstrap";

const Select = ({ label, name, className, options, description, ...rest }) => {
  return (
    <Form.Group className="mb-3" >
      <Form.Label>{label}</Form.Label>
      <Form.Select {...rest}>
        {options && options.map(o => <option value={o.value}>{o.label}</option>)}
      </Form.Select>
      <Form.Text className="text-muted">{description}</Form.Text>
    </Form.Group>
  );
};

export default Select;
