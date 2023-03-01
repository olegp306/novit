import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';


export default function Calendar({ highlightDates, value, label, onChange, ...rest }) {
    return (
        <Form.Group className="mb-3" style={{ width: "auto" }}>
            <Form.Label style={{color:"#777b7e"}}>{label}</Form.Label>
            <ReactDatePicker
                id="calendar"
                openToDate={highlightDates?.sort((date1, date2) => date1 - date2)[0]}
                selected={value || null}
                onChange={onChange}
                highlightDates={highlightDates || []}
                // inline
                // placeholderText={label}
                label={label}
                className="form-control"

                {...rest}
            />


        </Form.Group >
    );
};

