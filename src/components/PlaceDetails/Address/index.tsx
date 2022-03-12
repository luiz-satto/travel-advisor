import React from 'react'
import { Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import useStyles from '../styles';

interface IProps {
    address: any
}

const Address: React.FC<IProps> = props => {
    const classes = useStyles();

    if (!props) return null;
    if (!props.address) return null;
    return (
        <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
            <LocationOnIcon />
            {props.address}
        </Typography>
    )
}

export default Address
