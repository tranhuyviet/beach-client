import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    dialogTitleContainer: {
        padding: 0,
        paddingLeft: 16,
        backgroundColor: theme.palette.primary.main,
        width: '100%',
    },
    dialogTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: theme.palette.common.white,
    },
    textInput: {
        width: '100%',
        marginBottom: '16px!important',
    },
    ratingContainer: {
        display: 'flex',
    },
    buttonContainer: {
        marginTop: 16,
        marginBottom: 8,
    },
}));
