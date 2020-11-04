import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    homepage: {
        width: '100vw',
        height: 'calc(100vh - 55px)',

        // height: window.innerHeight,
        marginTop: 50,
        position: 'relative',
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        color: theme.palette.common.white,
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
}));
