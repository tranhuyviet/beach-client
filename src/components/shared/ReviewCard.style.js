import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    name: {
        fontWeight: 'bold',
    },
    iconTimeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    time: {
        color: theme.palette.grey['600'],
        fontSize: 14,
    },
}));
