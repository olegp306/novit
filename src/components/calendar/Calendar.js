import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';


export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Form.Group className="mb-3">
            <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                // highlightDates={["23.02.2023", "22.02.2023", "21.02.2023"].map(d => new Date(d))}
                placeholderText="This highlights a week ago and a week from today"
            />
        </Form.Group>
    );
};

