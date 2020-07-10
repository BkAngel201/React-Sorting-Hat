import React, { useState } from 'react';

function HouseAssignation(props) {
    const selectHouse = () => {
        return Math.round(props.answerValue/6)
    }
    const [houseInfo, setHouseInfo] = useState(props.houses[selectHouse()-1])

    const style ={
        border: `1px solid ${houseInfo.colors[1]}`,
        backgroundColor: `${houseInfo.colors[0]}`,
        color: `${houseInfo.colors[1]}`
    }
    return (
        <div className="house" style={style}>
            <img src={houseInfo.image} alt="House Banner" />
            <div className="header">
                <h2>{houseInfo.houseName}</h2>
                <p>{houseInfo.values}</p>
            </div>
            <div className="info">
                <p><b>Founder:</b> {houseInfo.founder}</p>
                <p><b>Ghost:</b> {houseInfo.ghost}</p>
                <p><b>Element:</b> {houseInfo.element}</p>
                <p><b>Animal:</b> {houseInfo.animal}</p>
                <p><b>Famous:</b> {houseInfo.famous}</p>
            </div>
            <div className="traits">
                <h3>Traits:</h3>
                {houseInfo.traits.map(item => (
                    <p>{item}</p>
                ))}
            </div>

        </div>
    )
}

export default HouseAssignation
