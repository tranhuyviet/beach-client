import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    area: {
        padding: 0,
        margin: 0,
        // width: 'calc(100% - 48px)',
        height: 'calc(100vh - 50px - 48px - 48px - 16px)',
        // marginTop: 50,
        // position: 'relative',
        border: '2px solid',
        borderColor: theme.palette.primary.main,
    },
    infoContainer: {
        textAlign: 'center',
    },
    nameInfo: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    serviceIcon: {
        ...theme.share.serviceIcon,
        color: theme.palette.primary.main,
    },
}));
