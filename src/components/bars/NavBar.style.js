import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    navbar: {
        height: 50,
        backgroundColor: `${theme.palette.primary.main}!important`,
        color: `${theme.palette.common.white}!important`,
    },
    logoContainer: {
        paddingLeft: 16,
    },
    logoIcon: {
        marginRight: 8,
        fontSize: '32px!important',
    },
    logoText: {
        fontSize: '16px!important',
        fontWeight: 'bold!important',
        letterSpacing: '2px!important',
    },
}));
