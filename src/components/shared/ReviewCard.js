import React from 'react';
import { useStyles } from './ReviewCard.style';
import { Avatar, Typography, Paper, Grid } from '@material-ui/core';

import StarIcon from '@material-ui/icons/Star';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
import moment from 'moment';
import Rating from '@material-ui/lab/Rating';

const ReviewCard = ({ avatar, name, comment, rating, createdAt }) => {
    const classes = useStyles();
    return (
        <Paper
            elevation={0}
            square
            component="span"
            style={{ display: 'block', marginBottom: '16px' }}
        >
            <Grid container component="span">
                <Grid
                    item
                    xs={2}
                    component="span"
                    container
                    justify="flex-end"
                    style={{ paddingRight: 16 }}
                >
                    <Avatar component="span" src={avatar} />
                </Grid>
                <Grid item xs={10} component="span">
                    <Typography component="span" className={classes.name}>
                        {name}
                    </Typography>
                    <br />
                    <Typography component="span" className={classes.content}>
                        {comment}
                    </Typography>
                    <br />
                    <Paper
                        elevation={0}
                        square
                        component="span"
                        className={classes.iconTimeContainer}
                    >
                        <Grid container component="span" justify="space-between">
                            <Rating value={rating} precision={0.5} readOnly />
                            <Typography component="span" className={classes.time}>
                                {moment(createdAt).fromNow()}
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ReviewCard;
