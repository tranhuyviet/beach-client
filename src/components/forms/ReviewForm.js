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

// import StarBorderIcon from '@material-ui/icons/StarBorder';
import SendIcon from '@material-ui/icons/Send';

import Rating from '@material-ui/lab/Rating';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW_MUTATION } from '../../utils/graphql';
import errorParse from '../../utils/errorParse';

const ReviewForm = ({
    reviewFormOpen,
    handleReviewFormClose,
    beachName,
    setDataDetail,
    dataDetail,
}) => {
    const classes = useStyles();

    const initialValues = {
        name: '',
        comment: '',
        rating: 0,
        beachName,
    };

    const { values, handleChange, handleSubmit, handleBlur, errors, setErrors } = useFormik({
        initialValues,
        onSubmit,
        // validationSchema: signupSchema,
    });

    const [createReview] = useMutation(CREATE_REVIEW_MUTATION, {
        update(proxy, result) {
            if (result) {
                setDataDetail({
                    ...dataDetail,
                    ratingAverage: result.data.createReview.ratingAverage,
                    reviews: result.data.createReview.reviews,
                });
                handleReviewFormClose();
            }
        },
        onError(error) {
            console.log('CREATE REVIEW ERROR', error);
            setErrors(errorParse(error));
        },
    });

    function onSubmit(values) {
        createReview({ variables: { ...values, rating: values.rating * 1 } });
    }

    return (
        <Dialog open={reviewFormOpen} onClose={handleReviewFormClose} className={classes.dialog}>
            <DialogTitle className={classes.dialogTitleContainer}>
                <div className={classes.dialogTitle}>
                    Arvostelu
                    <IconButton
                        color="inherit"
                        onClick={handleReviewFormClose}
                        style={{ marginLeft: 'auto!important' }}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent style={{ paddingTop: 24 }}>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        name="name"
                        label="Nimi"
                        placeholder="Syötä nimesi"
                        variant="outlined"
                        size="small"
                        className={classes.textInput}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors && errors.name ? true : false}
                        helperText={errors && errors.name}
                    />
                    <TextField
                        type="text"
                        name="comment"
                        label="Kommentti"
                        placeholder="Syötä kommenttisi"
                        variant="outlined"
                        multiline
                        rows={4}
                        className={classes.textInput}
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors && errors.comment ? true : false}
                        helperText={errors && errors.comment}
                    />
                    <div className={classes.ratingContainer}>
                        <Typography style={{ marginRight: 8 }}>Arvosana:</Typography>

                        <Rating
                            defaultValue={0}
                            value={values.rating * 1}
                            onChange={handleChange}
                            precision={0.5}
                            size="large"
                            name="rating"
                        />
                    </div>
                    {errors && errors.rating && (
                        <Typography className={classes.errorMessage}>{errors.rating}</Typography>
                    )}
                    <Grid container justify="flex-end" className={classes.buttonContainer}>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            startIcon={<SendIcon />}
                            // onClick={handleReviewFormClose}
                        >
                            Lähetä
                        </Button>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ReviewForm;
