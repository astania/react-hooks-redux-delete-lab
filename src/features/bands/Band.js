import React from 'react'
import { useDispatch } from 'react-redux'
import { bandRemoved } from './bandsSlice'

const Band = ({ band }) => {
    const dispatch = useDispatch()

    const handleDeleteClick = () => {
        dispatch(bandRemoved(band.id))
    }


    return (
        <li>
            <p>
                <span>{band.name}</span>
                <button onClick={handleDeleteClick}>Delete Band</button>
            </p>
        </li>
    )
}

export default Band