import React from 'react'

export default function FilterMark({ label, value, ...rest }) {
    return (
        <span
            style={{ padding: "5px 10px", borderRadius: "15px", backgroundColor: "darkgray", color: "white" }}
            {...rest}>
            {value}
        </span>
    )
}
