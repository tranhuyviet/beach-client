import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '16px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 16,
        // color: theme.palette.grey['800'],
        color: theme.palette.primary.main,
        letterSpacing: 1,
    },
    graphImg: {
        width: '100%',
        height: 180,
    },
}));
