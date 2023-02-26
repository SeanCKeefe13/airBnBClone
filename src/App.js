import React from 'react'
import data from './data'
import Header from './components/Header'
import Card from './components/Card'

export default function App(){
    const cards = data.map(info => {
        return ( 
            <Card
                data = {info}
            />
        )
    })
    return(
        <div className='container'>
            <Header />
            <section>
                {cards}
            </section>
        </div>
    )
}
