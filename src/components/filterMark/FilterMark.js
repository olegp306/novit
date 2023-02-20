import React from 'react'

export default function FilterMark({ label, value, ...rest }) {
    return (
        <>
            <span style={{ position: "absolute", left: "10", fontSize: "12px", color: "white" }}>
                {label}
            </span>
            <span
                style={{ margin: "5px", padding: "5px 10px", borderRadius: "15px", backgroundColor: "darkgray", color: "white" }}
                {...rest}>
                {value}
            </span>
        </>
    )
}
