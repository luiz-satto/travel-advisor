import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import Awards from './Awards';
import Cuisine from './Cuisine';
import Address from './Address';
import Phone from './Phone';

interface IProps {
    place: any,
    refProp: any,
    selected: boolean
}

const PlaceDetails: React.FC<IProps> = props => {

    const REACT_APP_PHOTO_IMAGE_URL='https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg';

    if (props.selected) {
        props.refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={props.place.photo
                    ? props.place.photo.images.large.url
                    : REACT_APP_PHOTO_IMAGE_URL
                }
                title={props.place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{props.place.name}</Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Rating value={Number(props.place.rating)} readOnly />
                    <Typography gutterBottom variant='subtitle1'>out of {props.place.num_reviews} reviews</Typography>
                </Box>
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