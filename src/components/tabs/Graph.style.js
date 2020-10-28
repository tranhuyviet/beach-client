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
    chartContainer: {
        maxHeight: 300,
        position: 'relative',
    },
    hideTrial: {
        backgroundColor: theme.palette.common.white,
        height: 20,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    timeSelectContainer: {
        marginBottom: 24,
    },
    timeSelectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    timeSelect: {
        // padding: '4px 8px',
        background: theme.palette.common.white,
    },
    selected: {
        background: theme.palette.common.white,
    },
}));
