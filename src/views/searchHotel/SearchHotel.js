import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from '../../components/select';

export default function SearchHotel() {
    return (
        <Form>
            <Select label="departureCity" options={[{ key: 1, value: "one" }, { key: 2, value: "two" }]} />
            <Select label="countryProponsal" options={[{ key: 1, value: "one" }, { key: 2, value: "two" }]} />
            <Select label="areaProponsal" options={[{ key: 1, value: "one" }, { key: 2, value: "two" }]} />


            <Select label="areaProponsal" options={[{ key: 1, value: "one" }, { key: 2, value: "two" }]} />



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
