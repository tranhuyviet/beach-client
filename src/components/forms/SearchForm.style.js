import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    dialog: {},
    dialogTitleContainer: {
        padding: '0!important',
        paddingLeft: '16px!important',
        backgroundColor: theme.palette.primary.main,
        width: '100%',
    },
    dialogTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: theme.palette.common.white,
    },
    title: {
        margin: '16px 0 ',
        fontWeight: 'bold',
        borderBottom: '2px solid',
        borderColor: `${theme.palette.primary.main}!important`,
        letterSpacing: 1,
    },
    city: {
        borderRadius: '30px!important',
        margin: '8px 4px ',
    },
    services: {
        borderRadius: '30px!important',
        fontSize: 12,
        padding: '4px 12px',
        marginBottom: '8px',
        marginRight: '8px',
    },
    titleOfFilter: {
        borderLeft: '3px solid',
        paddingLeft: 5,
        fontWeight: 'bold',
        borderColor: `${theme.palette.secondary.main}!important`,
    },
    serviceIcon: {
        // ...theme.share.serviceIcon,
        // color: theme.palette.primary.main,
        // cursor: 'pointer',

        fontSize: 35,
        // borderRadius: 50,
        // margin: '8px 4px',
        // padding: 4,
    },
    iconSelected: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    sliderContainer: {
        width: '100%',
        height: 50,
        padding: '0px 16px',
    },
}));
