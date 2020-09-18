import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    detailPage: {
        height: 'calc(100vh - 50px)',
        padding: '0 0 16px 0',
        backgroundColor: theme.palette.common.white,
    },
    tabs: {
        textTransform: 'capitalize!important',
    },
    indicator: {
        color: 'red',
    },
    name: {
        fontWeight: 'bold',
        fontSize: '24px',
    },
    groupContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'center',
    },
    tempIcon: {
        fontSize: '40px',
        marginRight: 8,
        color: theme.palette.primary.main,
    },
    tempText: {
        fontSize: '30px',
    },
    starIcon: {
        color: theme.palette.warning.main,
    },
    // serviceContainer: {
    //     border: '1px solid',
    //     borderColor: theme.palette.grey['600'],
    //     padding: '8px 16px',
    // },
    serviceIcon: {
        fontSize: '30px',
        color: theme.palette.grey['600'],
        marginRight: 16,
    },
    // INFOMATION TAB
    infoImage: {
        width: '100%',
        maxHeight: 300,
    },
    infoIcon: {
        fontSize: '50px',
        color: theme.palette.primary.main,
    },
    infoTextContainer: {
        paddingLeft: 16,
        borderLeft: '1px solid',
        borderColor: theme.palette.primary.main,
    },

    // REVIEW TAB
    reviewContainer: {
        position: 'relative',
    },
}));
