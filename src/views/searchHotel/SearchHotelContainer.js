import React from 'react'
import SearchHotel from './SearchHotel'

export default function SearchHotelContainer() {

    const [despatureCityOptions, setDespatureCityOptions] = useState(null)
    const [countryProposalOptions, setCountryProposalOptions] = useState(null)
    const [calendarOptionsOptions, setCalendarOptions] = useState(null)


    return (
        <SearchHotel
            despatureCityOptions={despatureCityOptions}
            countryProposalOptions={countryProposalOptions}
            calendarOptionsOptions={calendarOptionsOptions}
            foodOptions={foodOptions}
            hotelCategoryOptions={hotelCategoryOptions}
        />
    )
}
