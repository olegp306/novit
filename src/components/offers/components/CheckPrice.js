import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { fetchActualPrice } from '../../../api'
import Spinner from '../../spinner/Spinner'

export default function CheckPrice({ reis_id, adults = 1, children = 0 }) {
    const [isFetching, setIsFetching] = useState(false)
    const [responce, setResponce] = useState("")
    const onClickHandler = async () => {
        const params = {
            reis_id,
            adults,
            children,
            age1: "",
            age2: "",
            age3: ""
        }
        setIsFetching(true)

        const result = await fetchActualPrice(params)
        setResponce(result);
        setIsFetching(false)
    }

    if (isFetching) {
        return <Spinner />
    }

    return (
        responce || <Button size='sm' onClick={onClickHandler}>check</Button>
    )
}
