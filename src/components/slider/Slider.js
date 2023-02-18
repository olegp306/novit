import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Form } from 'react-bootstrap';


export default function RangeSlider({ label, value, onChange, ...rest }) {

    const handleChange = (event, newValue) => {
        onChange(newValue)
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label className="mb-1">{label} <span style={{ fontWeight: '600' }}>from: {value[0]} to: {value[1]} </span></Form.Label>
            <div styles={{ width: '100%' }}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                    {...rest}
                />

            </div>
        </Form.Group>
    );
}
