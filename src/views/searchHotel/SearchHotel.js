import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Checkbox from '../../components/checkbox/Checkbox';
import Input from '../../components/input/Input';
import Select from '../../components/select';
import Range from '../../components/range';
import InputNumber from '../../components/inputNumber/InputNumber';
import Calendar from '../../components/calendar/Calendar';
import NumberRange from '../../components/numberRange/NumberRange';


export default function SearchHotel({
    despatureCityOptions,
    despatureCity,

    destinationCountryOptions,
    destinationCountry,
    onChangeDestinationCountry,

    destinationCityOptions,
    destinationCity,
    onChangeDestinationCity,

    calendarOptions,
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
                        value={despatureCity}
                        disabled
                    />
                </div>
                <div class="row">
                    <div class="col-6">
                        <Select
                            name="destinationCountry"
                            label="Sihtriik"
                            // options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
                            options={destinationCountryOptions}
                            onChange={onChangeDestinationCountry}
                            value={destinationCountry}
                        />
                    </div>
                    <div class="col">
                        <Select
                            name="destinationCity"
                            label="Linn"
                            options={destinationCityOptions}
                            value={destinationCity}
                            onChange={onChangeDestinationCity}
                        />
                    </div>
                </div>

                <div style={{ display: "flex" , justifyContent:"space-between"}}>
                    <Calendar name="calendar" label="Kuupäev" inline highlightDates={calendarOptions} />
                    <Checkbox name="isFlex" label=" +/- 7 päeva" />
                    <NumberRange name="daysQuantity" start={5} end={12} />
                </div>


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
