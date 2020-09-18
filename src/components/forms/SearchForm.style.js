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
    title: {
        margin: '16px 0 ',
        fontWeight: 'bold',
        borderBottom: '2px solid',
        borderColor: `${theme.palette.primary.main}!important`,
        letterSpacing: 1,
    },
    city: {
        borderRadius: 30,
        margin: '8px 4px ',
    },
    titleOfFilter: {
        borderLeft: '3px solid',
        paddingLeft: 5,
        fontWeight: 'bold',
        borderColor: `${theme.palette.secondary.main}!important`,
    },
    serviceIcon: {
        color: theme.palette.primary.main,
        border: '1px solid',
        fontSize: 35,
        borderRadius: 10,
        margin: '8px 4px',
        padding: 4,
    },
}));
