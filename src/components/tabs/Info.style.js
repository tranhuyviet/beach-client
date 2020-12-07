import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    infoIcon: {
        fontSize: '50px',
        color: theme.palette.primary.main,
    },
    infoTextContainer: {
        paddingLeft: 16,
        borderLeft: '1px solid',
        borderColor: theme.palette.primary.main,
    },
    moreInfoTitle: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: '16px 0px',
    },
    table: {
        borderTop: '1px solid',
        borderLeft: '1px solid',
        borderRight: '1px solid',
        borderColor: theme.palette.primary.main,
    },
    tableHeader: {
        backgroundColor: theme.palette.grey['300'],
    },
    palvelut: {
        paddingLeft: 8,
    },
    kylla: {
        padding: '4px 0',
        height: 33,
        borderLeft: '1px solid',
        borderRight: '1px solid',
        borderColor: theme.palette.primary.main,
    },
}));
