import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const ReturnToPreviousPage = () => {
    return (
        <div className='return-to-previous-page'>
            <div className='return-icon'>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className='new-booking'>
                <h3>New Booking</h3>
                <p>Fill in the information below to get a quote or create a new booking</p>
            </div>
        </div>
    )
}

export default ReturnToPreviousPage
