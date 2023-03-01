import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
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
                onChange={(hotel) => onChange(hotel[0].name)}
                value={value}

                options={hotelOptions}
                // options={["AQUAWORLD BELEK", "INNVISTA HOTELS BELEK", "LYKIA WORLD ANTALYA", "SHERWOOD DREAMS RESORT", "LYKIA WORLD LINKS GOLF HOTEL", "CESARS TEMPLE DELUXE HOTEL", "CESARS TEMPLE DE LUXE HOTEL", "AYDINBEY QUEENS PALACE & SPA", "KIRMAN BELAZUR RESORT & SPA", "CRYSTAL PARAISO VERDE RESORT & SPA", "AYDINBEY FAMOUS RESORT", "GREEN MAX HOTEL", "LIMAK ARCADIA SPORT RESORT", "CRYSTAL WATERWORLD RESORT & SPA", "PALOMA GRIDA", "CRYSTAL FAMILY RESORT & SPA", "ORANGE COUNTY BELEK", "IC HOTELS SANTAI FAMILY RESORT", "LIMAK ATLANTIS DE LUXE HOTEL & RESORT", "CRYSTAL TAT BEACH GOLF RESORT & SPA", "PORT NATURE LUXURY RESORT HOTEL & SPA", "KAYA BELEK", "CRYSTAL TAT BEACH GOLF RESORT", "KIRMAN HOTELS BELAZUR RESORT & SPA", "ADORA RESORT"].map(h => ({ name: h }))}
                placeholder="Search for a hotels..."
                renderMenuItemChildren={(option) =>
                    (<span key={option.value}>{option.name} {value}</span>)}
                {...rest}
            />
        </Form.Group>
    )
}
