import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';


export default function Calendar({ highlightDates, value, onChange, rest }) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Form.Group className="mb-3">
            {value?.toLocaleDateString("en-US")}
            <ReactDatePicker
                selected={value || null}
                onChange={onChange}
                highlightDates={highlightDates || []}
                placeholderText="This highlights a week ago and a week from today"
                inline
                // value={value}
                {...rest}
            />
        </Form.Group>
    );
};

