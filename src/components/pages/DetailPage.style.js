import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    detailPage: {
        height: 'calc(100vh - 50px)',
        padding: 8,
    },
    name: {
        fontWeight: 'bold',
        fontSize: '24px',
    },
    groupContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 24,
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
}));
