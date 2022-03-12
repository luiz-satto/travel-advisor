import React from 'react'
import { Box, Typography } from '@material-ui/core'

interface IProps {
    awards: any
}

const Awards: React.FC<IProps> = props => {
    if (!props) return null;
    if (!props.awards) return null;
    return (
        props?.awards?.map((award: any, i: number) => (
            <Box key={i} my={1} display='flex' justifyContent='space-between'>
                <img src={award.images?.small} alt={award.display_name} />
                <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
            </Box>
        ))
    )
}

export default Awards
