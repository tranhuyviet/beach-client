import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footer: {
        height: 55,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.grey['800'],
        color: theme.palette.common.white,
    },
    text: {
        letterSpacing: 1,
    },
}));
