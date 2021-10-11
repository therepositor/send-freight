import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faMapPin } from '@fortawesome/free-solid-svg-icons'
const CardTwo = () => {
    return (
        <div className='card card-two'>
            <div className='information-icon'>
                <FontAwesomeIcon style={{fontSize: '24px', marginRight: '14px', opacity: 0.8}} icon={faInfoCircle} />
            </div>
            <div className='import-export-location'>
                <span className='import-export-button'>
                    <button className='import-button' type='button'>Import</button>
                    <button className='export-button' type='button'>Export</button>
                </span>
                <span className='location from-location'>
                    <span className='location-icon'>
                        <FontAwesomeIcon style={{fontSize: '24px', marginRight: '14px', opacity: 0.8}} icon={faMapPin} />
                    </span>
                    <span>
                        <input type='text' id='from-city' placeholder='From City or port' />
                    </span>
                </span>
                <span className='location to-location'>
                    <span className='location-icon'>
                        <FontAwesomeIcon style={{fontSize: '24px', marginRight: '14px', opacity: 0.8}} icon={faMapPin} />
                    </span>
                    <span>
                        <input type='text' id='to-city' placeholder='To City or port' />
                    </span>
                </span>
            </div>
            <div className='date-incoterms-cargo-value-container'>
                <span className='ready-date'>
                    <span className='date-icon'></span>
                    <span>
                        <input type='date' id='ready-date' value='Ready Date' placeholder='Ready Date' />
                    </span>
                </span>
                <span className='incoterms'>
                    <select>
                        <option value='Incoterms'>Incoterms</option>
                    </select>
                </span>
                <span className='total-cargo-value'>
                    <input type='number' id='cargo-value' placeholder='Total cargo Value' />
                </span>
            </div>
        </div>
    )
}

export default CardTwo
