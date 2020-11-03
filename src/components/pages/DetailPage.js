import React, { useContext, useEffect, useState } from 'react';

import {
    Grid,
    Tab,
    Tabs,
    Paper,
    Typography,
    Box,
    Button,
    Divider,
    Tooltip,
    CircularProgress,
} from '@material-ui/core';
import { useStyles } from './DetailPage.style';

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WavesIcon from '@material-ui/icons/Waves';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import UpdateIcon from '@material-ui/icons/Update';
import AccessibleIcon from '@material-ui/icons/Accessible';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WcIcon from '@material-ui/icons/Wc';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';

import UimarantaImg from '../../assets/images/uimaranta.jpg';
import GraphImg from '../../assets/images/graph.png';

// import GoogleMapLogo from '../../assets/images/64px-Google_Maps_icon.svg.png';
// import HSLLogo from '../../assets/images/hsl-logo.svg';
import moment from 'moment';
import ReviewCard from '../shared/ReviewCard';

import ReviewForm from '../forms/ReviewForm';
import { withStyles } from '@material-ui/core/styles';

import Overview from '../tabs/Overview';
import Info from '../tabs/Info';
import Review from '../tabs/Review';
import Graph from '../tabs/Graph';
import Area from '../tabs/Area';

import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { GET_BEACHE_BY_NAME_QUERY } from '../../utils/graphql';
import { useLazyQuery, useQuery } from '@apollo/client';
import { DataContext } from '../../context/dataContext';
import { getAlgaeData } from '../../utils/algaeService';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const AntTabs = withStyles((theme) => ({
    root: {
        padding: 5,
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey['200'],
    },
    indicator: {},
}))(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 60,
        fontWeight: theme.typography.fontWeightRegular,
        padding: '0px 4px',
        // marginRight: theme.spacing(1),
        // borderRight: '1px solid',
        // borderBottom: '1px solid',
        // borderRightColor: theme.palette.grey['400'],
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        '&:last-child': {
            borderRight: 'none',
        },
        '&:hover': {
            color: theme.palette.primary.main,

            // opacity: 1,
        },
        '&$selected': {
            color: theme.palette.primary.main,
            // color: theme.palette.common.white,
            fontWeight: 'bold',
            //  backgroundColor: theme.palette.primary.main,
        },
        // '&:focus': {
        //     color: '#40a9ff',
        // },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const DetailPage = (props) => {
    const classes = useStyles();

    const [dataDetail, setDataDetail] = useState(null);
    // const { dataDetail, setDataDetail } = useContext(DataContext);
    const { algaeData, setAlgaeData } = useContext(DataContext);
    const [tabValue, setTabValue] = useState(0);
    const [algaeSighting, setAlgaeSighting] = useState('');
    useEffect(() => setAlgaeSighting(''), []);

    const handleTabValueChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const name = props.match.params.name;

    const { loading } = useQuery(GET_BEACHE_BY_NAME_QUERY, {
        variables: { name },
        onCompleted(data) {
            getAlgaes(data.getBeach);
            setDataDetail(data.getBeach);
        },
        onError(error) {
            console.log('GET BEACH BY NAME QUERY ERROR', error);
        },
    });

    const getAlgaes = (beach) => {
        if (algaeData) {
            setAlgaeSighting(findAlgae());
        } else {
            // Get algae data if refresh
            getAlgaeData([beach]).then((algaeData) => {
                setAlgaeSighting(algaeData[0]);
            });
        }
    };

    const findAlgae = () => {
        return algaeData.find((match) => match.beach.name === name);
    };

    console.log(dataDetail);

    return (
        <Paper elevation={0} square className={classes.detailPage}>
            <Grid container direction="column" style={{ backgroundColor: 'white' }}>
                <AntTabs
                    indicatorColor="primary"
                    centered
                    textColor="primary"
                    value={tabValue}
                    onChange={handleTabValueChange}
                    // variant="fullWidth"
                    classes={{ indicator: classes.indicator }}
                    // className={classes.tabs}
                >
                    <AntTab
                        // label="Overview"
                        icon={<PageviewOutlinedIcon className={classes.tabIcon} />}
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                    <AntTab
                        // label="Info"
                        icon={<InfoOutlinedIcon className={classes.tabIcon} />}
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                    <AntTab
                        // label="Reviews"
                        icon={<CommentOutlinedIcon className={classes.tabIcon} />}
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                    <AntTab
                        // label="Graph"
                        icon={<AssessmentOutlinedIcon className={classes.tabIcon} />}
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                    <AntTab
                        // label="Area"
                        icon={<RoomOutlinedIcon className={classes.tabIcon} />}
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                </AntTabs>
                {loading && (
                    <Grid container justify="center" alignItems="center" style={{ paddingTop: 24 }}>
                        <CircularProgress />
                    </Grid>
                )}
                {dataDetail && (
                    <>
                        {/* OVERVIEW TAB */}
                        <TabPanel value={tabValue} index={0} style={{ backgroundColor: 'white' }}>
                            <Overview dataDetail={dataDetail} algaeSighting={algaeSighting} />
                        </TabPanel>

                        {/* INFOMATION  TAB*/}
                        <TabPanel value={tabValue} index={1}>
                            <Info />
                        </TabPanel>

                        {/* REVIEWS TAB */}
                        <TabPanel value={tabValue} index={2} className={classes.reviewContainer}>
                            <Review
                                reviews={dataDetail.reviews}
                                beachName={dataDetail.name}
                                setDataDetail={setDataDetail}
                                dataDetail={dataDetail}
                            />
                        </TabPanel>

                        {/* GRAPH TAB */}
                        <TabPanel value={tabValue} index={3}>
                            <Graph data={dataDetail.data} />
                        </TabPanel>

                        {/* AREA TAB */}
                        <TabPanel value={tabValue} index={4}>
                            <Area dataDetail={dataDetail} />
                        </TabPanel>
                    </>
                )}
            </Grid>
        </Paper>
    );
};

export default DetailPage;
