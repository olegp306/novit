import React from 'react'
import { Toast } from 'react-bootstrap'

export default function Notificator({ error }) {
    return (
        <Toast position="top-end">
            <Toast.Header>
                <strong className="me-auto">error</strong>
                <small>An error occurred while fetching the data</small>
            </Toast.Header>
            <Toast.Body>{error}</Toast.Body>
        </Toast>
    )
}
