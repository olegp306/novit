import React from 'react'

export default function FilterMark({ label, value, ...rest }) {
    return (
        <div style={{ margin: "2px", padding: "0px 15px 0px 10px", height: "50px", minWidth: "60px", borderRadius: "15px", backgroundColor: "darkgray", color: "white" }}        >
            <span style={{  fontSize: "12px", color: "white" }}>
                {label}
            </span>
            <div style={{ display: "flex", alignItems: "stretch", marginTop:"-5px" }}>
                {value}
            </div>
        </div>
    )
}
