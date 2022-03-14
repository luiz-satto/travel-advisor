import GoogleMapReact from 'google-map-react'

import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import useStyles from '../styles'

const GoogleMaps = props => {
    const classes = useStyles();
    const isMobile = useMediaQuery('min-width:600px');

    const REACT_APP_GOOGLE_MAPS_API_KEY = 'AIzaSyAPZrvbAuA90pNbRSAdCtbtuQmX1Dh56Oc';
    const REACT_APP_PHOTO_IMAGE_URL = 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg';

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS_API_KEY }}
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
                        isMobile ? (
                            <LocationOnOutlinedIcon color='primary' fontSize='large' />
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.pointer} variant='subtitle2' gutterBottom>
                                    {place.name}
                                </Typography>
                                <img
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : REACT_APP_PHOTO_IMAGE_URL}
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