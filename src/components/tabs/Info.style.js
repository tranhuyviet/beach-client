import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    infoIcon: {
        fontSize: '50px',
        color: theme.palette.primary.main,
    },
    infoTextContainer: {
        paddingLeft: 16,
        borderLeft: '1px solid',
        borderColor: theme.palette.primary.main,
    },
}));