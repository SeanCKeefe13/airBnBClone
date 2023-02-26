import React from 'react'

export default function Card(props){
    console.log(props)
    return (
        <div className='card'>
            <img src={props.data.imageUrl} className='image'/>
            <div className='info'>
                <p className='location'>
                    <i className="bi bi-geo-alt-fill marker"></i>{props.data.location.toUpperCase()}
                    <a href={props.data.googleMapsUrl} className='map-link'>View on Google Maps</a>
                </p>
                <h1 className='card--title'>{props.data.title}</h1>
                <h3 className='dates'>{props.data.startDate} - {props.data.endDate}</h3>
                <p className='desc'>{props.data.description}</p>
            </div>
        </div>
    )
}