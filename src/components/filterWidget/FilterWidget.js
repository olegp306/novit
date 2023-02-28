import React from 'react'
import FilterMark from '../filterMark/FilterMark'



export default function FilterWidget({ paramsArr }) {
    paramsArr.map(i =>
        <FilterMark value={i.value} label={i.label} key={i.value} />
    )
    paramsArr.map(i =>
        <span> {i.value}{i.label} </span>
    )
}
