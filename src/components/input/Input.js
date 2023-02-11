import React from 'react'
import { Form } from 'react-bootstrap'

export default function Input({ name, label, children, ...rest }) {
    return (
        <Form.Group className="mb-3">
            <Form.Label className="mb-1">{label}</Form.Label>
            <Form.Control name={name} {...rest} />
            {children}
        </Form.Group>
    )
}
