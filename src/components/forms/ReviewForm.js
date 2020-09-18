import React from 'react';
import { useStyles } from './ReviewForm.style';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    Grid,
    Button,
    TextField,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import SendIcon from '@material-ui/icons/Send';

import Rating from '@material-ui/lab/Rating';

const ReviewForm = ({ reviewFormOpen, handleReviewFormClose }) => {
    const classes = useStyles();
    return (
        <Dialog open={reviewFormOpen} onClose={handleReviewFormClose} className={classes.dialog}>
            <DialogTitle className={classes.dialogTitleContainer}>
                <div className={classes.dialogTitle}>
                    Review
                    <IconButton
                        color="inherit"
                        onClick={handleReviewFormClose}
                        style={{ marginLeft: 'auto!important' }}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent style={{ paddingTop: 16 }}>
                <TextField
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    variant="outlined"
                    size="small"
                    className={classes.textInput}
                />
                <TextField
                    type="text"
                    name="comment"
                    label="Comment"
                    placeholder="Enter your comment"
                    variant="outlined"
                    multiline
                    rows={4}
                    className={classes.textInput}
                />
                <div className={classes.ratingContainer}>
                    <Typography style={{ marginRight: 8 }}>Rating:</Typography>
                    {/* <>
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                    </> */}
                    <Rating value={0} precision={0.5} size="large" name="reviews" />
                </div>
                <Grid container justify="flex-end" className={classes.buttonContainer}>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        startIcon={<SendIcon />}
                        onClick={handleReviewFormClose}
                    >
                        Submit
                    </Button>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default ReviewForm;
