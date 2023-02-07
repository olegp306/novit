import React, { useEffect, useState } from 'react'
import { fetchCalendar } from '../../api'
import { DefaultCity, DefaultCountry, foodOptions,countries, hotelCategoryOptions } from './constans'
import SearchHotel from './SearchHotel'

export default function SearchHotelContainer() {
    const [despatureCityOptions, setDespatureCityOptions] = useState(["Tallin"])
    const [countryOptions, setCountryOptions] = useState(countries)
    const [calendarOptions, setCalendarOptions] = useState(null)

    const [depatureCity, setDepatureCity] = useState(DefaultCity)
    const [arrivalCity, setArrivalCity] = useState("")
    const [country, setCountry] = useState(DefaultCountry)


    useEffect(() => {
        const fetchCalendarAsync = async () =>
            await fetchCalendar({
                dcity: depatureCity,
                country: country
            })
        const data = fetchCalendarAsync();
        setCalendarOptions(data);
        return () => {
            // second
        }
    }, [country, depatureCity])




    return (
        <SearchHotel
            despatureCityOptions={despatureCityOptions}
            despatureCity={depatureCity}
            countryOptions={countryOptions}
            country={country}
            calendarOptions={calendarOptions}
            foodOptions={foodOptions}
            hotelCategoryOptions={hotelCategoryOptions}
        />
    )
}
