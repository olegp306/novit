import React from 'react'
import { Table } from 'react-bootstrap'

export default function Offers({ tableData }) {
    if (!tableData.length > 0) {
        return <>her</>
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {Object.keys(tableData[0]).map(key => <th>{key}</th>)}
                </tr>
            </thead>
            <tbody>

                {tableData.map(row =>
                    <tr>
                        {Object.keys(row).map(key => <td>{row[key]}</td>)}
                    </tr>
                )}

            </tbody>
        </Table>
    )
}
