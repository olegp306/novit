import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Form } from 'react-bootstrap';

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider({ label, value, onChange, ...rest }) {
    // const [value, setValue] = React.useState(value);

    const handleChange = (event, newValue) => {
        // setValue(newValue);
        onChange(newValue)
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label className="mb-1">{label} <span style={{ fontWeight: '600' }}>from: {value[0]} to: {value[1]} </span></Form.Label>
            <div styles={{ width: '100%' }}>
                <Slider
                    // getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    {...rest}
                />

            </div>
        </Form.Group>
    );
}
