import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    searchbar: {
        height: 50,
        paddingLeft: 16,
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        zIndex: 1001,
        width: '100%',
    },
    searchInputContainer: {
        width: '100%',
        position: 'relative',
    },
    searchInput: {
        width: '100%',
        height: 30,
        paddingLeft: 12,
        borderColor: theme.palette.grey['600'],
        border: '1px solid',
        outline: 'none',
        borderRadius: 50,
    },
    searchIcon: {
        position: 'absolute',
        right: 8,
        top: 3,
        color: theme.palette.grey['600'],
    },
}));
