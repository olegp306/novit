import React from 'react'


[depatureCity, destinationCountry, destinationCity, price, period, stars, food]
export default function FilterWidget({ paramsArr }) {
    return (
        <div>
            {
                paramsArr.map(i => <FilterMark value={i.value} label={i.label} key={i.value} />)}

        </div>
    )
}
