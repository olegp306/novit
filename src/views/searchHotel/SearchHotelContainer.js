import React, { useEffect, useState } from 'react'
import { fetchCalendar, fetchCity, fetchDestinationCountries, testurl } from '../../api'
import FilterMark from '../../components/filterMark/FilterMark'
import { DefaultCity, DefaultCountry, foodOptions, countries, hotelCategoryOptions } from './constans'
import SearchHotel from './SearchHotel'

export default function SearchHotelContainer() {
    const [despatureCityOptions, setDespatureCityOptions] = useState(["Tallinn"])
    const [depatureCity, setDepatureCity] = useState(DefaultCity)


    const [destinationCountryOptions, setDestinationCountryOptions] = useState(countries)
    const [destinationCountry, setDestinationCountry] = useState(DefaultCountry)

    const [destinationCityOptions, setDestinationCityOptions] = useState([])
    const [destinationCity, setDestinationCity] = useState("Belek")

    const [calendarOptions, setCalendarOptions] = useState(null)
    const [despatureDate, setDespatureDate] = useState(null)

    const [period, setPeriod] = useState([6, 15])
    const [price, setPrice] = useState([50, 150])



    useEffect(() => {
        fetchDestinationCountries()
            .then(countries => setDestinationCountryOptions(countries.map(i => i.country)))
        return () => {
        }
    }, [])



    useEffect(() => {
        fetchCity({ country: destinationCountry })
            .then(cities => setDestinationCityOptions(cities.map(i => i.city)))
        return () => {

        }
    }, [destinationCountry])


    useEffect(() => {
        fetchCalendar({
            country: destinationCountry,
            departure: depatureCity,
            city: destinationCity,
        }).then(data => setCalendarOptions(data.map((d) => {
            const ar = d.split(" ")
            const dateMMDDYYYY = `${ar[1]}.${ar[0]}.${ar[2]}`

            return new Date(dateMMDDYYYY);

        })))
        return () => {
            // second
        }
    }, [destinationCity])


    const onChangeDestinationCountry = (country) => {
        setDestinationCountry(country)
    }

    const onChangeDestinationCity = (city) => {
        console.log('onChangeDestinationCity')
        setDestinationCity(city)
    }

    const onChangePrice = (price) => {
        console.log('onChangePrice')
        setPrice(price)
    }

    const onChangePeriod = (period) => {
        console.log('onChangePeriod')
        setPeriod(period)
    }

    return (
        <>
            {[depatureCity, destinationCountry, destinationCity, price, period]
                .map(i => <FilterMark value={i} label={i} key={i} />)}
            <SearchHotel
                despatureCityOptions={despatureCityOptions}
                despatureCity={depatureCity}

                destinationCountryOptions={destinationCountryOptions}
                destinationCountry={destinationCountry}
                onChangeDestinationCountry={onChangeDestinationCountry}

                destinationCityOptions={destinationCityOptions}
                destinationCity={destinationCity}
                onChangeDestinationCity={onChangeDestinationCity}


                calendarOptions={calendarOptions}
                foodOptions={foodOptions}
                hotelCategoryOptions={hotelCategoryOptions}

                price={price}
                onChangePrice={onChangePrice}
                period={period}
                onChangePeriod={onChangePeriod}
            />
        </>
    )
}
