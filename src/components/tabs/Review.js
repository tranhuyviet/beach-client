import React, { useState } from 'react';
import { useStyles } from './Review.style';
import { Paper, Grid, Button } from '@material-ui/core';

import ReviewCard from '../shared/ReviewCard';
import ReviewForm from '../forms/ReviewForm';

import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';

const Review = () => {
    const classes = useStyles();
    const [reviewFormOpen, setReviewFormOpen] = useState(false);

    const handleReviewFormClose = () => {
        setReviewFormOpen(false);
    };
    return (
        <>
            <Paper className={classes.reviewCardContainer} component="span" elevation={0} square>
                <ReviewCard
                    component="span"
                    name="Viet Tran"
                    content="Nice place"
                    time="13 minutes"
                    avatar="https://res.cloudinary.com/dzaxf70c4/image/upload/v1592381151/jqoyecsjkjtxxshaxhqt.jpg"
                />
                <ReviewCard
                    component="span"
                    name="Heli Korhonen"
                    content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    time="1 hour"
                />
                <ReviewCard
                    component="span"
                    name="Mikko Romo"
                    content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    time="2 hours"
                />
                <ReviewCard
                    component="span"
                    name="Juho Huhtanen"
                    content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    time="3 hours"
                />
                <ReviewCard
                    component="span"
                    name="Ville Tuomi"
                    content="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    time="4 hours"
                />
                <ReviewCard
                    component="span"
                    name="Viet Tran"
                    content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    time="5 hours"
                    avatar="https://res.cloudinary.com/dzaxf70c4/image/upload/v1592381151/jqoyecsjkjtxxshaxhqt.jpg"
                />
            </Paper>
            <Grid container justify="center" component="span" className={classes.actionContainer}>
                <Button
                    startIcon={<AddCommentOutlinedIcon />}
                    variant="outlined"
                    color="primary"
                    onClick={() => setReviewFormOpen(true)}
                >
                    Add Review
                </Button>
            </Grid>
            <ReviewForm
                reviewFormOpen={reviewFormOpen}
                handleReviewFormClose={handleReviewFormClose}
            />
        </>
    );
};

export default Review;
