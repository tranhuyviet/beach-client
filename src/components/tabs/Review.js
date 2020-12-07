import React, { useState } from 'react';
import { useStyles } from './Review.style';
import { Paper, Grid, Button, Typography } from '@material-ui/core';

import ReviewCard from '../shared/ReviewCard';
import ReviewForm from '../forms/ReviewForm';

import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';

const Review = ({ beachName, reviews, setDataDetail, dataDetail }) => {
    const classes = useStyles();

    const [reviewFormOpen, setReviewFormOpen] = useState(false);

    const handleReviewFormClose = () => {
        setReviewFormOpen(false);
    };

    return (
        <>
            <Paper className={classes.reviewCardContainer} component="span" elevation={0} square>
                {reviews.length === 0 && (
                    <Grid container component="span" justify="center">
                        <Typography component="span">
                            Ei arvosteluita. Ole ensimmäinen ja jätä arvostelu!
                        </Typography>
                    </Grid>
                )}
                {reviews &&
                    reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            component="span"
                            name={review.name}
                            comment={review.comment}
                            rating={review.rating}
                            createdAt={review.createdAt}
                        />
                    ))}
            </Paper>
            <Grid container justify="center" component="span" className={classes.actionContainer}>
                <Button
                    startIcon={<AddCommentOutlinedIcon />}
                    variant="outlined"
                    color="primary"
                    onClick={() => setReviewFormOpen(true)}
                >
                    Lisää arvostelu
                </Button>
            </Grid>
            <ReviewForm
                reviewFormOpen={reviewFormOpen}
                handleReviewFormClose={handleReviewFormClose}
                beachName={beachName}
                setDataDetail={setDataDetail}
                dataDetail={dataDetail}
            />
        </>
    );
};

export default Review;
