import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Checkbox from '../../components/checkbox/Checkbox';
import Input from '../../components/input/Input';
import Select from '../../components/select';
import Range from '../../components/range';

export default function SearchHotel({ departureCityOptions, countryProposalOptions, calendarOptions }) {
    return (
        <Form>
            <div class="row">
                <div class="col">
                    <Select
                        name="departureCity"
                        label="Lähtepunkt"
                        options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
                    />
                </div>
                <div class="col-6">
                    <Select
                        name="countryProposal"
                        label="Sihtriik"
                        options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
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
                options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]}
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
                options={[
                    { value: 1, label: "1 tärn" },
                    { value: 2, label: "2 tärni" },
                    { value: 3, label: "3 tärni" },
                    { value: 4, label: "4 tärni" },
                    { value: 5, label: "5 tärni" },
                    { value: 6, label: "--Kõik--" },
                ]}
            />

            <Select
                name="food"
                label="Toitlustus:"
                options={[
                    { value: "AI", label: "Kõik hinnas" },
                    { value: "BB", label: "Hommikusöögiga" },
                    { value: "FB", label: "Hommiku-, lõuna ja õhtusöögiga" },
                    { value: "HB", label: "Hommiku- ja õhtusöögiga" },
                    { value: "RO", label: "Söökideta" },
                    { value: "UAI", label: "Kõik hinnas +" },

                ]}
            />
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
        </Form>
    )
}
