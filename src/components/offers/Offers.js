import React from 'react'
import { Table } from 'react-bootstrap'
import CheckPrice from './components/CheckPrice'


const columns =
    [
        { value: "country", label: "Riik" },
        { value: "city", label: "Linn" },
        { value: "hotel_name", label: "Hotell - Kategooria" },
        { value: "room_pansion", label: "Toitlustus" },
        { value: "duration", label: "Ööde arv" },
        { value: "price", label: "Hind" },

        { value: "checkprice", label: "checkprice", type: "checkprice" },
        { value: "room_type", label: "Toatüüp" },

        { value: "URLcheapestOffer", label: "URL (kõige odavam pakkumine)", type: "link" },
        { value: "URLofferWithPriceAndDates", label: " URL (kuupäev + ööde arv)", type: "link" },
        { value: "ReisUrl", label: "Reis URL", type: "link" },
        { value: "agency", label: "Reisikorraldaja" },

    ]

export default function Offers({ tableData, departureDate, adults, children }) {


    if (!tableData.length > 0) {
        return <>no data found</>
    }

    const prepareTableData = (data) =>
        data.map(({ hotel_id, reis_id, duration, ...rest }) => ({
            URLcheapestOffer: `https://novit.ee/hotell/?hotel_id=${hotel_id}`,
            URLofferWithPriceAndDates: `https://novit.ee/hotell/?hotel_id=${hotel_id}&departure_date=${departureDate}&duration=${duration}`,
            ReisUrl: `https://novit.ee/otsing/paring/?reis_id=${reis_id}`,
            checkprice: { reis_id, adults, children },
            ...rest

        }))


    const priparedData = prepareTableData(tableData);

    const renderCellByType = ({ value, type }) => {
        switch (type) {
            case 'link':
                return (<a href={value}>link</a>);
            case 'checkprice':
                return (<CheckPrice reis_id={value.reis_id} />);
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
