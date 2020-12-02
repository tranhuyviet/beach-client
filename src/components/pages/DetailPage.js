import React, { useContext, useEffect, useState } from 'react';

import { Grid, Tab, Tabs, Paper, Box, CircularProgress } from '@material-ui/core';
import { useStyles } from './DetailPage.style';

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
import { /*useLazyQuery,*/ useQuery } from '@apollo/client';
import { DataContext } from '../../context/dataContext';
import { getWeatherData } from '../../utils/weatherService';

const weatherLocations = require('../../utils/weatherLocations.json');

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
                    <div>{children}</div>
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

        '&:last-child': {
            borderRight: 'none',
        },
        '&:hover': {
            color: theme.palette.primary.main,
        },
        '&$selected': {
            color: theme.palette.primary.main,

            fontWeight: 'bold',
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

    const [tabValue, setTabValue] = useState(0);
    const { weatherData, setWeatherData } = useContext(DataContext);
    const [weather, setWeather] = useState('');

    useEffect(() => setWeather(''), []);

    const handleTabValueChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const name = props.match.params.name;

    const { loading } = useQuery(GET_BEACHE_BY_NAME_QUERY, {
        variables: { name },
        onCompleted(data) {
            moi(data.getBeach);
            setDataDetail(data.getBeach);
        },
        onError(error) {
            console.log('GET BEACH BY NAME QUERY ERROR', error);
        },
    });

    const moi = (beach) => {
        if (weatherData) {
            filterWeatherData(beach, weatherData);
        } else {
            // Get new weather data if page refresh
            getWeatherData().then((newWeatherData) => {
                setWeatherData(newWeatherData);
                filterWeatherData(beach, newWeatherData);
            });
        }
    };

    const filterWeatherData = (beach, weatherData3) => {
        // Filter JSON locations which matches the beach name
        const filteredLocation = weatherLocations.locations.find(
            (location) => location.beach === beach.name
        );
        // Filter weatherData location which matches the filteredLocation
        const filteredWeatherData = weatherData3.locations.find(
            (location) => location.info.name === filteredLocation.site
        );
        setWeather(filteredWeatherData);
        return;
    };

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
                            <Overview dataDetail={dataDetail} weather={weather} />
                        </TabPanel>

                        {/* INFOMATION  TAB*/}
                        <TabPanel value={tabValue} index={1}>
                            <Info dataDetail={dataDetail} />
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
