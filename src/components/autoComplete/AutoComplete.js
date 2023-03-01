import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';
import { fetchHotels } from '../../api';

export default function AutoComplete({ value, label, onChange, searchParams, ...rest }) {
    // const [destinationCountry, destinationCity, stars, hotel] = searchParams;
    const [hotelOptions, setHotelOptions] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (searchStr) => {
        setIsLoading(true);

        fetchHotels({ ...searchParams, hotel_name: searchStr })
            .then(hotels => {
                console.log("fetchHotels", hotels)
                // setHotelOptions(hotels)
                // setHotelOptions(hotels.map(h => ({ name: h })))

                setHotelOptions(Object.keys(hotels).map(k => ({ value: k, name: hotels[k] })))
                setIsLoading(false);
            })
    };


    const filterBy = () => true;

    return (
        <Form.Group className="mb-3" >
            <Form.Label>{label}</Form.Label>
            <AsyncTypeahead
                id="async-example"
                filterBy={filterBy}
                isLoading={isLoading}
                labelKey="name"
                minLength={1}
                onSearch={handleSearch}
                onChange={(hotel) => onChange(hotel[0]?.name)}
                value={value}

                options={hotelOptions}
                placeholder="Search for a hotels..."

                 renderMenuItemChildren={(option, props, idx) => (
                     <Highlighter search={props.text}>
                       {option[props.labelKey]}
                     </Highlighter>
                   )}

                // renderMenuItemChildren={(option,props) =>
                // (<Highlighter
                //     search={props?.text}
                //     key={option.value}>{option.name} {value}</Highlighter>)}
                    
                {...rest}
            />
        </Form.Group>
    )
}
