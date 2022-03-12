import React from 'react'
import { Chip } from '@material-ui/core';

import useStyles from '../styles';

interface IProps {
    cuisines: any
}

const Cuisine: React.FC<IProps> = props => {
    const classes = useStyles();

    if (!props) return null;
    if (!props.cuisines) return null;
    return (
        props?.cuisines?.map((cuisine: any) => (
            <Chip key={cuisine.key} size='small' label={cuisine.name} className={classes.chip} />
        ))
    )
}

export default Cuisine;
