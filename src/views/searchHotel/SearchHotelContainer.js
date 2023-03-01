import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { fetchCalendar, fetchCities, fetchDestinationCountries, fetchHotels, fetchOffers, testurl } from '../../api'
import FilterMark from '../../components/filterMark/FilterMark'
import FilterWidget from '../../components/filterWidget/FilterWidget'
import Offers from '../../components/offers/Offers'
import { DefaultCity, DefaultCountry, foodOptions, countries, hotelCategoryOptions } from './constans'
import SearchHotel from './SearchHotel'

export default function SearchHotelContainer() {
    const [despatureCityOptions, setDespatureCityOptions] = useState(["Tallinn"])
    const [depatureCity, setDepatureCity] = useState(DefaultCity)


    const [destinationCountryOptions, setDestinationCountryOptions] = useState(countries)
    const [destinationCountry, setDestinationCountry] = useState(DefaultCountry)

    const [destinationCityOptions, setDestinationCityOptions] = useState([])
    const [destinationCity, setDestinationCity] = useState("--Kõik--")

    const [calendarOptions, setCalendarOptions] = useState(null)
    const [departureDate, setDepartureDate] = useState(null)


    const [period, setPeriod] = useState([6, 15])
    const [price, setPrice] = useState([50, 5000])

    const [stars, setStars] = useState(6)
    const [food, setFood] = useState("")

    const [hotelOptions, setHotelOptions] = useState([])
    const [hotel, setHotel] = useState("")

    const [days, setDays] = useState(false)

    const [offers, setOffers] = useState([])



    useEffect(() => {
        fetchDestinationCountries()
            .then(countries => setDestinationCountryOptions(countries.map(i => i.country)))
        return () => {
        }
    }, [])



    useEffect(() => {
        fetchCities({ country: destinationCountry })
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

    useEffect(() => {
        fetchHotels({ country: destinationCountry, city: destinationCity, stars, hotel_name: hotel })
            .then(hotels => setHotelOptions(hotels))
        return () => {
            // second
        }
    }, [hotel])



    const onChangeDestinationCountry = (country) => {
        setDestinationCountry(country)
    }

    const onChangeDestinationCity = (city) => {
        console.log('onChangeDestinationCity')
        setDestinationCity(city)
    }


    const onChangeDepartureDate = (date) => {
        console.log('onChangeDepartureDate')
        setDepartureDate(date)
    }

    const onChangePrice = (price) => {
        console.log('onChangePrice')
        setPrice(price)
    }

    const onChangePeriod = (period) => {
        console.log('onChangePeriod')
        setPeriod(period)
    }

    const onChangeStars = (stars) => {
        console.log('onChangeStars')
        setStars(stars)
    }

    const onChangeFood = (food) => {
        console.log('onChangeFood')
        setFood(food)
    }

    const onChangeHotel = (hotel) => {
        console.log('onChangeHotel', hotel)
        setHotel(hotel)
    }

    const onChangeDays = () => {
        console.log('onChangeDays', !days)
        setDays(!days)
    }

    const getUrlWithParams = () => ({
        departure_city: depatureCity,
        country: destinationCountry,
        city: destinationCity,
        departure_date: departureDate?.toLocaleDateString("en-US"),
        days: days ? "on" : "off",
        period: `${period[0]}-${period[1]}`,
        stars,
        hotel_name: hotel,
        price: `${price[0]}-${price[1]}`,
        // room_pansion,
        limit: 10,
        // unique
    })

    const searchOfferHandler = () => {
        const params = getUrlWithParams()
        fetchOffers(params)
            .then(offers => {
                console.log("offers", offers)
                setHotelOptions(offers)
                // setIsLoading(false);
            })


        fetchOffers(params).then(data => {
            console.log("fetchOffers", data)
            setOffers(data)
        })
    }


    return (
        <>
            {/* // [depatureCity, destinationCountry, destinationCity, price, period, stars, food] */}
            тут
            <FilterWidget paramsArr={Object.keys(getUrlWithParams()).map(key => ({ value: getUrlWithParams()[key], label: key }))} />
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
                onChangeDepartureDate={onChangeDepartureDate}
                departureDate={departureDate}

                days={days}
                onChangeDays={onChangeDays}

                foodOptions={foodOptions}


                price={price}
                onChangePrice={onChangePrice}
                period={period}

                onChangePeriod={onChangePeriod}

                hotelCategoryOptions={hotelCategoryOptions}
                stars={stars}
                onChangeStars={onChangeStars}

                food={food}
                onChangeFood={onChangeFood}

                hotelOptions={hotelOptions}
                hotel={hotel}
                onChangeHotel={onChangeHotel}
            />
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={searchOfferHandler}>
                    OTSI REISI
                </Button>

            </div>

            <h1>offers</h1>
             <Offers tableData={offers} />

        </>
    )
}
