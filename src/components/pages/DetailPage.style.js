import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    detailPage: {
        height: 'calc(100vh - 50px)',
        padding: '0 0 16px 0',
        backgroundColor: theme.palette.common.white,
        maxWidth: 600,
        margin: '0 auto',
    },
    tabs: {
        textTransform: 'capitalize!important',
    },
    tabIcon: {
        fontSize: 30,
    },

    // REVIEW TAB
    reviewContainer: {
        position: 'relative',
    },
}));
