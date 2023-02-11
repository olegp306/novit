import React from "react";
import { Form } from "react-bootstrap";

const Select = ({ label, name, value, onChange, className, options, description, ...rest }) => {
  const onChangeHandler = (city) => {
    console.log("city,city", city)
  }
  return (
    <Form.Group className="mb-3" >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        value={value}
        onChange={e => {
          console.log("e.target.value", e.target.value);
          onChange(e.target.value);
        }}
        {...rest}
      >
        {options && options.map(o => <option onClick={() => onChangeHandler(o?.label || o)} value={o?.value || o}>{o?.label || o}</option>)}
      </Form.Control>
      <Form.Text className="text-muted">{description}</Form.Text>
    </Form.Group>
  );
};

export default Select;
