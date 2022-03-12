import GoogleMapReact from 'google-map-react'

import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import useStyles from '../styles'
import consts from '../../../consts.json'

const GoogleMaps = props => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('min-width:600px');

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAPZrvbAuA90pNbRSAdCtbtuQmX1Dh56Oc' }}
            defaultCenter={props.coordinates}
            center={props.coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            // options={''}
            onChange={(e) => {
                props.setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
            }}
            onChildClick={(child) => props.setChildClicked(child)}
        >
            {props.places?.map((place, i) => (
                <div
                    key={i}
                    className={classes.markerContainer}
                    lat={place.latitude ? Number(place.latitude) : 0}
                    lng={place.longitude ? Number(place.longitude) : 0}
                >
                    {
                        isDesktop === false ? (
                            <LocationOnOutlinedIcon color='primary' fontSize='large' />
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.pointer} variant='subtitle2' gutterBottom>
                                    {place.name}
                                </Typography>
                                <img
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : consts.phoro_image_url}
                                    alt={place.name}
                                />
                                <Rating size='small' value={place.rating ? Number(place.rating) : 0} readOnly />
                            </Paper>
                        )
                    }
                </div>
            ))}
        </GoogleMapReact>
    )
}

export default GoogleMaps