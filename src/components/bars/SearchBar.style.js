import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    searchbar: {
        height: 60,
        paddingLeft: 16,
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: theme.palette.primary.main,
        position: 'absolute',

        zIndex: 10001,
        width: '100%',
    },
    searchInputContainer: {
        width: '100%',
        position: 'relative',
    },
    searchInput: {
        width: '100%',
        height: 36,
        paddingLeft: 12,
        borderColor: theme.palette.grey['600'],
        border: '1px solid',
        outline: 'none',
        borderRadius: 50,
    },
    searchIcon: {
        position: 'absolute',
        right: 10,
        top: 6,
        color: theme.palette.grey['600'],
    },
}));
