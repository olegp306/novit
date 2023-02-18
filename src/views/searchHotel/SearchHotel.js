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
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import { FloatingLabel } from 'react-bootstrap';
import AutoComplete from '../../components/autoComplete/AutoComplete';


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

    price,
    onChangePrice,
    period,
    onChangePeriod,

    stars,
    hotelCategoryOptions,
    onChangeStars,

    food,
    onChangeFood,

    hotelOptions,
    hotel,
    onChangeHotel
}) {
    const filterBy = () => true;
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
                        <Select name="destinationCity" label="Linn"
                            options={destinationCityOptions}
                            value={destinationCity}
                            onChange={onChangeDestinationCity}
                            addChooseAllOption={{ value: "--Kõik--", label: "--Kõik--" }}
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
                        <Select
                            name="stars"
                            value={stars}
                            onChange={onChangeStars}
                            label="Hotelli kategooria"
                            options={hotelCategoryOptions}

                        />
                    </div>
                    <div class="col">
                        <Select name="food" value={food} onChange={onChangeFood} label="Toitlustus:" options={foodOptions} />
                    </div>
                </div>
                {/* 
                <Form.Group>
                    <Form.Label>{"Hotelli nimi:"}</Form.Label>
                    <Form.Control as="input" value={hotel} onChange={e => { onChangeHotel(e.target.value) }} autocomplete="on"
                        renderItem={hotelOptions && hotelOptions.map(o => <option onClick={() => onChangeHotel(o?.label || o)} value={o?.value || o}>{o?.label || o}</option>)}
                    >
                    </Form.Control>
                    <Form.Text className="text-muted">{""}</Form.Text>
                </Form.Group> */}
                <AutoComplete
                    value={hotel}
                    label={"Hotelli nimi:"}
                    searchParams={{ country: destinationCountry, city: destinationCity, stars, hotel_name: hotel }}
                    onChange={onChangeHotel}
                />

                              {/* <Input as="select" name="hotel" value={hotel} label="Hotelli nimi:" options={hotelOptions} onChange={onChangeHotel} /> */}

                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        OTSI REISI
                    </Button>

                </div>

            </div>
        </Form >
    )
}
