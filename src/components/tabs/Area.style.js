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
    markerIcon: {
        margin: 0,
        padding: 0,
        width: 35,
        height: 35,
        cursor: 'pointer',
        '&:hover': {
            width: 40,
            height: 40,
        },
    },
    poperTitle: {
        fontWeight: 'bold',
    },
    divider: {
        width: 100,
        height: 1,
        borderTop: '1px solid',
        borderColor: theme.palette.primary.main,
        margin: '10px 0',
    },
}));
