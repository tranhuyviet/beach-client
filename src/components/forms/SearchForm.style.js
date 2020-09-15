import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    dialog: {},
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
    titleOfFilter: {
        borderLeft: '3px solid',
        paddingLeft: 5,
        fontWeight: 'bold',
        borderColor: `${theme.palette.secondary.main}!important`,
    },
}));
