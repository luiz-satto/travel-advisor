import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './styles'
import { ICoordinates } from '../../interfaces/ICoordinates'

interface IProps {
    setCoordinates: any,
    setBounds: any,
    coordinates: ICoordinates
}

const Map: React.FC<IProps> = props => {
    const classes = useStyles()
    const isMobile = useMediaQuery('min-width:600px')

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAPZrvbAuA90pNbRSAdCtbtuQmX1Dh56Oc' }}
                defaultCenter={props.coordinates}
                center={props.coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={ }
                onChange={(e) => {
                    props.setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
            // onChildClick={ }
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
