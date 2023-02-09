import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Checkbox from '../../components/checkbox/Checkbox';
import Select from '../../components/select';
import Calendar from '../../components/calendar/Calendar';
import NumberRange from '../../components/numberRange/NumberRange';

export default function SearchHotel({
    despatureCityOptions,
    countryOptions,
    calendarOptionsOptions,
    foodOptions,
    hotelCategoryOptions
}) {
    return (
        <Form>
            <div class="form">
                <div class="col">
                    <Select name="departureCity"
                        label="Lähtepunkt"
                        options={despatureCityOptions}
                        value={despatureCityOptions[0]}
                        disabled
                    />
                </div>
                <div class="row">
                    <div class="col-6">
                        <Select name="country" label="Sihtriik" options={countryOptions} />
                    </div>
                    <div class="col">
                        <Select
                            name="departureCity"
                            label="Linn"
                            options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <Calendar name="calendar" label="Kuupäev" options={calendarOptionsOptions} />
                    </div>

                    <Checkbox
                        name="isFlex"
                        label=" +/- 7 päeva"
                    />
                </div>


                <NumberRange name="daysQuantity" start={5} end={12} />

                <Select
                    name="hotelCategory"
                    label="Hotelli kategooria"
                    options={hotelCategoryOptions}
                />

                <Select
                    name="food"
                    label="Toitlustus:"
                    options={foodOptions}
                />


                <NumberRange name="pricePerAdult" label="Hind 1 täiskasvanu kohta:"
                />

                <Select
                    name="searchHotelName"
                    label="Hotelli nimi:"
                />

                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        OTSI REISI
                    </Button>

                </div>

            </div>
        </Form>
    )
}
