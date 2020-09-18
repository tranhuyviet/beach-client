import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    mainImage: {
        width: '100%',
        maxHeight: 300,
    },
    name: {
        fontWeight: 'bold',
        fontSize: '24px',
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
    tempContainer: {
        marginTop: 8,
    },
    groupContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 16px',
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
        fontSize: '25px',
    },
    tempTextBig: {
        fontSize: 40,
    },
    buttonGroup: {
        marginTop: 16,
    },
    logoButton: {
        height: 40,
        margin: '0 16px',
    },
}));
