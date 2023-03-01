import React from 'react'
import { Table } from 'react-bootstrap'


const columns =
    [
        { value: "country", label: "Riik" },
        { value: "city", label: "Linn" },
        { value: "hotel_name", label: "Hotell - Kategooria" },
        { value: "room_pansion", label: "Toitlustus" },
        { value: "duration", label: "Ööde arv" },
        { value: "price", label: "Hind" },
        { value: "checkprice", label: "checkprice" },
        { value: "room_type", label: "Toatüüp" },

        { value: "URLcheapestOffer", label: "URL (kõige odavam pakkumine)", type: "link" },
        { value: "URLofferWithPriceAndDates", label: " URL (kuupäev + ööde arv)", type: "link" },
        { value: "ReisUrl", label: "Reis URL", type: "link" },
        { value: "agency", label: "Reisikorraldaja" },

    ]

export default function Offers({ tableData, departureDate }) {
    if (!tableData.length > 0) {
        return <>her</>
    }
    <a href="/hotell?hotel_id=63c4054fe0b325031384c4ad">Kleopatra Aytur Suit Otel</a>

    const prepareTableData = (data) =>
        data.map(({ hotel_id, reis_id, duration, ...rest }) => ({
            URLcheapestOffer: `https://novit.ee/hotell/?hotel_id=${hotel_id}`,
            URLofferWithPriceAndDates: `https://novit.ee/hotell/?hotel_id=${hotel_id}&departure_date=${departureDate}&duration=${duration}`,
            ReisUrl: `https://novit.ee/otsing/paring/?reis_id=${reis_id}`,
            ...rest
        }))


    const priparedData = prepareTableData(tableData);

    const renderCellByType = ({ value, type }) => {
        switch (type) {
            case 'link':
                return (<a href={value}>link</a>);
            default:
                return value;
        }
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {/* {Object.keys(priparedData[0]).map(key => <th>{key}</th>)} */}
                    {columns.map(c => <th>{c.label}</th>)}
                </tr>
            </thead>
            <tbody>

                {priparedData.map(row =>
                    <tr>
                        {/* {Object.keys(row).map(key => <td>{row[key]}</td>)} */}
                        {columns.map(c =>
                            <td>{renderCellByType({ value: row[c.value], type: c.type })}</td>
                        )}

                    </tr>
                )}

            </tbody>
        </Table>
    )
}
