import React from 'react'
import { Form } from 'react-bootstrap'

export default function Range({ name, label, children, ...rest }) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Range name={name} {...rest} />
            {children}
        </Form.Group>
    )
}

