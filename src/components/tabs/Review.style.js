import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    reviewContainer: {
        position: 'relative',
    },
    reviewCardContainer: {
        position: 'absolute',
        top: 16,
        left: 0,
        paddingLeft: 24,
        paddingRight: 24,
        height: 'calc(100vh - 114px - 50px - 32px )',
        width: '100%',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    actionContainer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        zIndex: 1000,
        background: theme.palette.common.white,
        paddingBottom: 16,
        paddingTop: 16,
    },
}));
