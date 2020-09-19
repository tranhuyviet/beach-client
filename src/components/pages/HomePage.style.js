import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    homepage: {
        width: '100vw',
        height: 'calc(100vh - 50px - 55px)',

        // height: window.innerHeight,
        // marginTop: 50,
        position: 'relative',
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        color: theme.palette.common.white,
    },
}));
