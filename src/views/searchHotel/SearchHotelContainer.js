import React, { useEffect, useState } from 'react'
import { fetchCalendar, fetchCity, fetchDestinationCountries, testurl } from '../../api'
import { DefaultCity, DefaultCountry, foodOptions, countries, hotelCategoryOptions } from './constans'
import SearchHotel from './SearchHotel'

export default function SearchHotelContainer() {
    const [despatureCityOptions, setDespatureCityOptions] = useState(["Tallinn"])
    const [depatureCity, setDepatureCity] = useState(DefaultCity)


    const [destinationCountryOptions, setDestinationCountryOptions] = useState(countries)
    const [destinationCountry, setDestinationCountry] = useState(DefaultCountry)

    const [destinationCityOptions, setDestinationCityOptions] = useState([])
    const [destinationCity, setDestinationCity] = useState("")

    const [calendarOptions, setCalendarOptions] = useState(null)
    const [despatureDate, setDespatureDate] = useState(null)



    useEffect(() => {
        fetchDestinationCountries()
        .then(countries=>setDestinationCountryOptions(countries.map(i=>i.country)))    
      return () => {        
      }
    }, [])
    


    useEffect(() => {
        fetchCity({ country: destinationCountry })
            .then(cities => setDestinationCityOptions(cities.map(i=>i.city)))
        return () => {

        }
    }, [destinationCountry])


    useEffect(() => {
        fetchCalendar({
            dcity: depatureCity,
            country: destinationCountry
        }).then(data => setCalendarOptions(data.map((d) => {
            const ar = d.split(" ")
            const dateMMDDYYYY = `${ar[1]}.${ar[0]}.${ar[2]}`

            return new Date(dateMMDDYYYY);

        }).slice(0, 4)))
        return () => {
            // second
        }
    }, [destinationCountry, depatureCity])

    
    const onChangeDestinationCountry = (country) => {
        console.log('onChangeCountry')
        setDestinationCountry(country)
    }


    return (
        <SearchHotel
            despatureCityOptions={despatureCityOptions}
            despatureCity={depatureCity}

            destinationCountryOptions={destinationCountryOptions}
            destinationCountry={destinationCountry}
            onChangeDestinationCountry={onChangeDestinationCountry}

            destinationCityOptions={destinationCityOptions}
            destinationCity={destinationCity}



            calendarOptions={calendarOptions}
            foodOptions={foodOptions}
            hotelCategoryOptions={hotelCategoryOptions}
        />
    )
}
