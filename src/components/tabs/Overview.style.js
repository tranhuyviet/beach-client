import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    mainImage: {
        width: '100%',
        maxHeight: 300,
    },
    name: {
        fontWeight: 'bold',
        fontSize: '24px',
        textAlign: 'center'
    },
    serviceContainer: {
        marginTop: 16,
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderTopColor: theme.palette.primary.main,
        borderBottomColor: theme.palette.primary.main,

        padding: '4px 0',
    },
    serviceIcon: {
        ...theme.share.serviceIcon,
        color: theme.palette.primary.main,
    },
    groupContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 16px',
    },
    tempIcon: {
        fontSize: '24px',
        marginRight: 8,
        color: theme.palette.primary.main,
    },
    tempIconBig: {
        color: theme.palette.warning.light,
        fontSize: 60,
    },
    tempText: {
        fontSize: '24px',
    },
    buttonGroup: {
        marginTop: 16,
    },
    logoButton: {
        height: 40,
        margin: '0 16px',
    },
    algaeContainer: {
        marginTop: '8px'
    },
    algaeHeader: {
        fontWeight: 'bold'
    },
    algaePadding: {
        padding: '4px'
    },
    algaeText: {
        fontSize: '18px'
    },
    routingButton: {
        margin: '8px'
    },
    weatherSymbol: {
        width: '64px',
        height: '64px'
    },
    tableWeatherSymbol: {
        width: '40px',
        height: '40px',
        margin: '-8px'
    },
    heading: {
        fontWeight: 'bold',
    },
    accordionDetails: {
        padding: '0'
    },
    summary: {
        flexGrow: '0'
    },
    windSpeed: {
        width: '40px'
    }
}));
