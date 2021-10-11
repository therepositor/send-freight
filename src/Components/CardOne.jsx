import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlane, faShip, faTruck, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const CardOne = () => {
    return (
        <div className='card card-one'>
            <h3>Select a service</h3>
            <ul>
                <li className='active' index={uuidv4()}>
                    <div className='type-of-service'>
                        <span className='type-of-service-text'>Air Freight</span>
                        <span className='type-of-service-icon'>
                            <FontAwesomeIcon
                                style={{
                                    fontSize: '60px',
                                    position: 'absolute',
                                    right: '-10px',
                                    bottom: '0',
                                    transform: 'rotate(-90deg)',
                                    
                                }}
                            icon={faPlane} />
                        </span>
                    </div>
                </li>
                <li index={uuidv4()}>
                    <div className='type-of-service'>
                        <span className='type-of-service-text'>Sea Freight</span>
                        <span className='type-of-service-icon'>
                            <FontAwesomeIcon
                               style={{
                                fontSize: '60px',
                                position: 'absolute',
                                right: '-10px',
                                bottom: '0',
                                opacity: '0.4'
                            }}
                             icon={faShip} />
                        </span>
                    </div>
                </li>
                <li index={uuidv4()}>
                    <div className='type-of-service'>
                        <span className='type-of-service-text'>Inland <br /> (Truck &amp; badge)</span>
                        <span className='type-of-service-icon'>
                            <FontAwesomeIcon 
                                 style={{
                                    fontSize: '60px',
                                    position: 'absolute',
                                    right: '-10px',
                                    bottom: '0',
                                    opacity: '0.4'
                                }}
                            icon={faTruck} />
                        </span>
                    </div>
                </li>
                <li index={uuidv4()}>
                    <div className='type-of-service'>
                        <span className='type-of-service-text'>Customs <br /> Clearance</span>
                        <span className='type-of-service-icon'>
                            <FontAwesomeIcon icon={faUserAstronaut}
                                 style={{
                                    fontSize: '60px',
                                    position: 'absolute',
                                    right: '-10px',
                                    bottom: '0',
                                    opacity: '0.4'
                                }} />
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CardOne
