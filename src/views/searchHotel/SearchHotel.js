import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from '../../components/select';

export default function SearchHotel() {
    return (
        <Form>
            <Select
                name="departureCity"
                label="Lähtepunkt"
                options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
            />
            <Select
                name="countryProponsal"
                label="Sihtriik"
                options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
            />
            <Select
                name="departureCity"
                label="Linn"
                options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
            />
           


            <Select name="areaProponsal" options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]} />



            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
