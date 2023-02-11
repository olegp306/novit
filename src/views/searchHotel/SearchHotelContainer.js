import React, { useEffect, useState } from 'react'
import { fetchCalendar, testurl } from '../../api'
import { DefaultCity, DefaultCountry, foodOptions, countries, hotelCategoryOptions } from './constans'
import SearchHotel from './SearchHotel'

export default function SearchHotelContainer() {
    const [despatureCityOptions, setDespatureCityOptions] = useState(["Tallinn"])
    const [countryOptions, setCountryOptions] = useState(countries)
    const [calendarOptions, setCalendarOptions] = useState(null)

    const [depatureCity, setDepatureCity] = useState(DefaultCity)
    const [arrivalCity, setArrivalCity] = useState("")
    const [country, setCountry] = useState(DefaultCountry)



    // useEffect(() => {
    //     const fetchData = async () => {
    //       const response = await fetch(testurl);
    //       const json = await response.json();

    //       setCalendarOptions(json);
    //     }

    //     fetchData()
    //       .catch(console.error);;
    //   }, [])



    // useEffect(() => {
    //     const fetchCalendarAsync = async () =>
    //         await fetchCalendar({
    //             dcity: depatureCity,
    //             country: country
    //         })
    //     const data = fetchCalendarAsync();
    //     setCalendarOptions(data);
    //     return () => {
    //         // second
    //     }
    // }, [country, depatureCity])

    useEffect(() => {
        fetchCalendar({
            dcity: depatureCity,
            country: country
        }).then(data => setCalendarOptions(data.map((d) => {
            const ar = d.split(" ")
            const dateMMDDYYYY = `${ar[1]}.${ar[0]}.${ar[2]}`
            
            return new Date(dateMMDDYYYY);

        }).slice(0, 4)))
        return () => {
            // second
        }
    }, [country, depatureCity])

    useEffect(() => {
        console.log("calendarOptions", calendarOptions);

        return () => {

        }
    }, [calendarOptions])



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
