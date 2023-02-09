import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Checkbox from '../../components/checkbox/Checkbox';
import Input from '../../components/input/Input';
import Select from '../../components/select';
import Range from '../../components/range';
import InputNumber from '../../components/inputNumber/InputNumber';

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
                <div class="row">
                    <div class="col">
                        <Select
                            name="departureCity"
                            label="Lähtepunkt"
                            options={despatureCityOptions}
                        />
                    </div>
                    <div class="col-6">
                        <Select
                            name="country"
                            label="Sihtriik"
                            // options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
                            options={countryOptions}
                        />
                    </div>
                    <div class="col">
                        <Select
                            name="departureCity"
                            label="Linn"
                            options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
                        />
                    </div>
                </div>

                <Input
                    name="calendar"
                    label="Kuupäev"
                    options={calendarOptionsOptions}
                />

                <Checkbox
                    name="isFlex"
                    label=" +/- 7 päeva"
                />

                <Range
                    name="daysQuantity"
                    label="Ööde arv:">
                </Range>

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

                <InputNumber />
                <Range
                    name="pricePerAdult"
                    label="Hind 1 täiskasvanu kohta:"
                >
                </Range>

                <Select
                    name="searchHotelName"
                    label="Hotelli nimi:"
                />


                <Button variant="primary" type="submit">
                    OTSI REISI
                </Button>

            </div>
        </Form>
    )
}
