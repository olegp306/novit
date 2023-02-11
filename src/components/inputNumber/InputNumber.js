import React, { useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'

export default function InputNumber({ name, label, value, onChange, children, ...rest }) {
    return (
        // <Form.Group>
        <>
            {/* <Form.Label className="mb-1">{label}</Form.Label> */}
            <div style={{ display: 'flex', flexDirection: 'row', width: "150px" }}>
                <Button
                    onClick={() => onChange(value - 1)}
                    variant="outline-primary" style={{
                        borderRadius: '3px 0 0 3px',
                        borderRight: 'none',
                        transition: 'background-color .3s ease-out',
                        width: '40px',
                        border: '1px solid #ced4da',
                        // border: '1px solid #D9E0EA'
                    }}>-</Button>
                <input name={name} value={value} {...rest}
                    style={{
                        width: '50px',
                        borderRadius: '0',
                        borderLeft: 'none',
                        borderRight: 'none',
                        borderTop: 'solid 1px #ced4da',
                        borderBottom: 'solid 1px #ced4da',
                        textAlign: 'center'

                    }}
                />
                <Button
                    onClick={() => onChange(value + 1)}
                    variant="outline-primary"
                    style={{
                        borderRadius: '0 3px 3px 0',
                        borderLeft: 'none',
                        transition: 'background-color .3s ease-out',
                        width: '40px',
                        border: '1px solid #ced4da',

                        // border: '1px solid #D9E0EA'
                    }}
                >+</Button>
                {children}
            </div>
        </>
        // </Form.Group >
    )
}
