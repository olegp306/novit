import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import InputNumber from '../inputNumber/InputNumber'

export default function NumberRange({ start, end, label }) {

    const [startNum, setStartNum] = useState(start || 1)
    const [endNum, setEndNum] = useState(end || 1)

    const onChangeStartHandler = (value) => {
        setStartNum(value)
        if (value >= end) {
            setEndNum(value + 1)
        }
    }

    const onChangeEndHandler = (value) => {
        setEndNum(value)
    }


    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <div style={{ marginBottom: "0px" }}>from:</div>
                    <InputNumber value={startNum} onChange={onChangeStartHandler} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} >
                    to < InputNumber value={endNum} onChange={onChangeEndHandler} />
            </div>

        </div>
        </Form.Group >
    )
}
