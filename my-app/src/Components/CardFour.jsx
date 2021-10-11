import React from 'react'

const CardFour = () => {
    return (
        <div className='card card-four'>
            <div className='header-text'>
                <h3>Additional Services</h3>
            </div>
            <div className='additional-services-toggle-buttons'>
                <div className='additional-services-toggle-buttons-left'>
                    <div className='switch-container'>
                        <div className='circle'></div>
                       
                    </div>
                    <span>
                        <h3>Export Forwarding</h3> <br />
                        <p>We handle customs clearance and documentation.</p>
                     </span>
                </div>
                <div className='additional-services-toggle-buttons-right'>
                    <div className='switch-container'>
                        <div  className='circle'></div>
                        
                    </div>
                    <span>
                        <h3>Import Customs Clearance</h3> <br />
                        <p>We handle import customs and regulatory requirements.</p>
                     </span>
                </div>
                
            </div>
            <div className='additional-services-toggle-buttons'>
                <div className='additional-services-toggle-buttons-left'>
                        <div className='switch-container'>
                            <div className='circle'></div>
                            
                        </div>
                        <span>
                            <h3>Cargo Insurance</h3> <br />
                            <p>Protect your cargo from logistics risks up to its full value.</p>
                        </span>
                    </div>
                    <div className='additional-services-toggle-buttons-right'>
                        <div className='switch-container'>
                            <div className='circle'></div>
                        </div>
                        <span>
                            <h3>Transport / Delivery</h3> <br />
                            <p>We deliver the cargo to your door step from the ports.</p>
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default CardFour
