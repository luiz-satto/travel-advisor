import React, { useState, Fragment } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, Select, FormControl } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails';

import useStyles from './styles';

interface IProps {
    places: any[],
    isLoading: any,
    elRefs: any,
    childClicked: any,
}

const List: React.FC<IProps> = props => {
    const classes = useStyles()

    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants, Hotels & Attractions arround you</Typography>
            {props.isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <Fragment>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e: any) => setType(e.target.value)}>
                            <MenuItem value='restaurants'>Restaurants</MenuItem>
                            <MenuItem value='hotels'>Hotels</MenuItem>
                            <MenuItem value='attractions'>Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e: any) => setRating(e.target.value)}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3.0</MenuItem>
                            <MenuItem value={4}>Above 4.0</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {props.places?.map((place, i) => (
                            <Grid item key={i} xs={12}>
                                <PlaceDetails
                                    place={place}
                                    refProp={props.elRefs[i]}
                                    selected={Number(props.childClicked) === i}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Fragment>
            )}
        </div>
    )
}

export default List;
