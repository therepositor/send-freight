import React from 'react'

const CardThree = () => {
    return (
        <div className='card card-three'>
            <div className='top'>
                <span className='cargo-details'>
                    <h3>Cargo Details</h3>
                </span>
                <span className='checkbox-container'>
                    <span className='switch-container'>
                    <span className='circle'></span>
                       
                    </span>
                    <span className='strong'> <strong>Dangerous Cargo</strong> (ex. Chemicals, Battery)</span>
                </span>
            </div>
            <div className='middle'>
                <button type='button'>Total Dimensions</button>
                <button type='button'>Package Details</button>
            </div>
            <form className='bottom'>
                <div className='input-container'>
                <label htmlFor='total-volume'>Total Volume</label>
                <input type='number' id='total-volume' placeholder='cbm' />
                </div>
                <div className='input-container'>
                <label htmlFor='total-weight'>Total Weight</label>
                <input type='number' id='total-weight' placeholder='Kg' />
                </div>
                
                
            </form>
        </div>
    )
}

export default CardThree
