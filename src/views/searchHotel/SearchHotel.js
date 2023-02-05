import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Checkbox from '../../components/checkbox/Checkbox';
import Input from '../../components/input/Input';
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

            <Input
                name="calendar"
                label="Kuupäev"
                options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
           />

            <Checkbox
                name="isFlex"
                label=" +/- 7 päeva"
            />
            

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
