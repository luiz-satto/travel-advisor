import React from 'react'

interface IPlace {
    name: string
}

const PlaceDetails: React.FC<IPlace> = place => {
    return (
        <div>
            <h1>{place.name}</h1>
        </div>
    )
}

export default PlaceDetails
