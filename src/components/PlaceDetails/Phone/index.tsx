import React from 'react'
import { Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';

import useStyles from '../styles';

interface IProps {
    phone: any
}

const Phone: React.FC<IProps> = props => {
    const classes = useStyles();

    if (!props) return null;
    if (!props.phone) return null;
    return (
        <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
            <PhoneIcon />
            {props.phone}
        </Typography>
    )
}

export default Phone
