import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/dataContext';
import { Grid, Tab, Tabs, Paper, Typography, Box, Button, Divider } from '@material-ui/core';
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
        // borderBottom: '1px solid',
        // borderBottomColor: theme.palette.grey['400'],
    },
    indicator: {
        backgroundColor: theme.palette.primary.main,
        // display: 'none',
    },
}))(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        // minWidth: 24,
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
    const { data } = useContext(DataContext);
    const [dataDetail, setDataDetail] = useState(null);
    const [tabValue, setTabValue] = useState(0);

    const handleTabValueChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const name = props.match.params.name;
    useEffect(() => {
        const findedData = data.find((item) => item.meta.name === name);

        if (findedData) {
            setDataDetail(findedData);
        }
    }, [data, name]);

    console.log('datadetail', dataDetail);
    // if (dataDetail) console.log('data', dataDetail.data[dataDetail.data.length - 1].temp_air);
    return (
        <Paper elevation={0} square className={classes.detailPage}>
            <Grid container direction="column">
                <AntTabs
                    indicatorColor="primary"
                    centered
                    textColor="primary"
                    value={tabValue}
                    onChange={handleTabValueChange}
                    // variant="fullWidth"
                    // classes={{ indicator: classes.indicator }}
                    // className={classes.tabs}
                >
                    <AntTab
                        label="Overview"
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />

                    <AntTab
                        label="Info"
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                    <AntTab
                        label="Reviews"
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                    <AntTab
                        label="Graph"
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                    <AntTab
                        label="Area"
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                </AntTabs>
                {dataDetail && (
                    <>
                        {/* OVERVIEW TAB */}
                        <TabPanel value={tabValue} index={0} style={{ backgroundColor: 'white' }}>
                            <Overview dataDetail={dataDetail} />
                        </TabPanel>

                        {/* INFOMATION  TAB*/}
                        <TabPanel value={tabValue} index={1}>
                            <Info />
                        </TabPanel>

                        {/* REVIEWS TAB */}
                        <TabPanel value={tabValue} index={2} className={classes.reviewContainer}>
                            <Review />
                        </TabPanel>

                        {/* GRAPH TAB */}
                        <TabPanel value={tabValue} index={3}>
                            <Graph />
                        </TabPanel>

                        {/* AREA TAB */}
                        <TabPanel value={tabValue} index={4}>
                            <Area meta={dataDetail.meta} />
                        </TabPanel>
                    </>
                )}
            </Grid>
        </Paper>
    );
};

export default DetailPage;
