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
import RangeSlider from '../../components/slider/Slider';


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
    hotelCategoryOptions,

    price,
    onChangePrice,
    period,
    onChangePeriod
}) {
    return (
        <Form>
            <div class="form">
                <div class="col">
                    <Select name="departureCity" label="Lähtepunkt" options={despatureCityOptions} value={despatureCity}
                        disabled
                    />
                </div>
                <div class="row">
                    <div class="col-6">
                        <Select name="destinationCountry" label="Sihtriik" options={destinationCountryOptions}
                            onChange={onChangeDestinationCountry}
                            value={destinationCountry}
                        />
                    </div>
                    <div class="col">
                        <Select name="destinationCity" label="Linn" options={destinationCityOptions} value={destinationCity}
                            onChange={onChangeDestinationCity}
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Calendar name="calendar" label="Kuupäev" inline highlightDates={calendarOptions} />
                    </div>
                    <div class="col">
                        <RangeSlider value={period} onChange={onChangePeriod} name="period" start={6} end={15} min={1} max={30} marks label={"Ööde arv:"} />
                        <RangeSlider value={price} onChange={onChangePrice} name="price" start={50} end={150} min={0} max={1000} step={100} marks label="Hind 1 täiskasvanu kohta:" />
                        <Checkbox name="isFlex" label=" +/- 7 päeva" />

                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Select name="hotelCategory" label="Hotelli kategooria" options={hotelCategoryOptions} />
                    </div>
                    <div class="col">
                        <Select name="food" label="Toitlustus:" options={foodOptions} />
                    </div>
                </div>



                <Select name="searchHotelName" label="Hotelli nimi:" />

                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        OTSI REISI
                    </Button>

                </div>

            </div>
        </Form >
    )
}
