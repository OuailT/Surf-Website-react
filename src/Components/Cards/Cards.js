import React from 'react'
import CardItem from '../CardItem/CardItem';
import './Cards.css';



const Cards = () => {
    return (
        <>
        <div className="cards">
            <h1>Dancing for Life Dancing for happiness</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <CardItem 
                       src='images/img-9.jpg'
                       path="/"
                       label="Solo"
                       text="Beautiful Dance from a Ballerina"/>

                       <CardItem 
                       src='images/img-2.jpg'
                       path="/"
                       label="Kid"
                       text="Beautiful Dance from a Ballerina kid"/> 
                    
                    </ul>

                    <ul className="cards__items">
                    <CardItem 
                       src='images/img-3.jpg'
                       path="/"
                       label="choreography"
                       text="Beautiful Dance from a choreography"/> 

                       <CardItem 
                       src='images/img-4.jpg'
                       path="/"
                       label="Solo Stage"
                       text="Beautiful Dance from a Ballerina on the stage"/> 

                      <CardItem 
                       src='images/img-8.jpg'
                       path="/"
                       label="Black"
                       text="Beautiful Dance from a Ballerina in the dark"/>
                    </ul>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Cards
