import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';


export default function Calendar({ highlightDates , rest}) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Form.Group className="mb-3">
            <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                highlightDates={highlightDates || []}
                placeholderText="This highlights a week ago and a week from today"
                inline
                {...rest}
            />
        </Form.Group>
    );
};

