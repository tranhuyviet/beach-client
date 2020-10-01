import React, { useState, useContext } from 'react';
import { useStyles } from './Review.style';
import { Paper, Grid, Button } from '@material-ui/core';

import ReviewCard from '../shared/ReviewCard';
import ReviewForm from '../forms/ReviewForm';

import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import { DataContext } from '../../context/dataContext';
import { useQuery } from '@apollo/client';
import { GET_BEACHE_BY_NAME_QUERY } from '../../utils/graphql';

const Review = ({ beachName, reviews, setDataDetail, dataDetail }) => {
    const classes = useStyles();

    const [reviewFormOpen, setReviewFormOpen] = useState(false);

    const handleReviewFormClose = () => {
        setReviewFormOpen(false);
    };

    return (
        <>
            <Paper className={classes.reviewCardContainer} component="span" elevation={0} square>
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
                    Add Review
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
