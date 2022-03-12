import React from 'react'

import GoogleMaps from './GoogleMaps'
import useStyles from './styles'

interface IProps {
    setCoordinates: any,
    setBounds: any,
    setChildClicked: any,
    coordinates: any,
    places: any[],
}

const Map: React.FC<IProps> = props => {
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMaps {...props} />
        </div>
    )
}

export default Map
