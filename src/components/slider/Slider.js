import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Form } from 'react-bootstrap';

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider({ label, value, onChange }) {
    // const [value, setValue] = React.useState(value);

    const handleChange = (event, newValue) => {
        // setValue(newValue);
        onChange(newValue)
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />

            </Box>
        </Form.Group>
    );
}
