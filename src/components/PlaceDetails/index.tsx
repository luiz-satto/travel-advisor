import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';

import Awards from './Awards';
import Cuisine from './Cuisine';
import Address from './Address';

import useStyles from './styles';
import Phone from './Phone';

interface IProps {
    place: any
}

const PlaceDetails: React.FC<IProps> = props => {

    const classes = useStyles();
    const PLACE_PHOTO_IMAGE_URL = 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg';

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={props.place.photo
                    ? props.place.photo.images.large.url
                    : PLACE_PHOTO_IMAGE_URL
                }
                title={props.place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{props.place.name}</Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography gutterBottom variant='subtitle1'>{props.place.price_level}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography gutterBottom variant='subtitle1'>{props.place.ranking}</Typography>
                </Box>
                <Awards awards={props.place?.awards} />
                <Cuisine cuisines={props.place?.cuisine} />
                <Address address={props.place?.address} />
                <Phone phone={props.place?.phone} />
                <CardActions>
                    <Button size='small' color='primary' onClick={() => window.open(props.place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size='small' color='primary' onClick={() => window.open(props.place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails;