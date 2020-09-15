import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/dataContext';
import {
    Grid,
    Tab,
    Tabs,
    Paper,
    Typography,
    Box,
    IconButton,
    Avatar,
    Button,
    Tooltip,
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

import UimarantaImg from '../../assets/images/uimaranta.jpg';
import GraphImg from '../../assets/images/graph.png';

import GoogleMapLogo from '../../assets/images/64px-Google_Maps_icon.svg.png';
import HSLLogo from '../../assets/images/hsl-logo.svg';
import moment from 'moment';

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
                <Tabs
                    indicatorColor="primary"
                    centered
                    textColor="primary"
                    value={tabValue}
                    onChange={handleTabValueChange}
                    classes={{ indicator: classes.indicator }}
                >
                    <Tab
                        label="Overview"
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                    <Tab
                        label="Infomation"
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                    <Tab
                        label="Reviews"
                        classes={{ selected: classes.tabSelected }}
                        className={classes.tab}
                    />
                </Tabs>
                {dataDetail && (
                    <>
                        {/* OVERVIEW TAB */}
                        <TabPanel value={tabValue} index={0}>
                            <Grid container direction="column" component="span" alignItems="center">
                                <Typography component="span" className={classes.name}>
                                    {dataDetail.meta.name}
                                </Typography>
                                <Box className={classes.groupContainer} component="span">
                                    <StarIcon className={classes.starIcon} />
                                    <StarIcon className={classes.starIcon} />
                                    <StarIcon className={classes.starIcon} />
                                    <StarIcon className={classes.starIcon} />
                                    <StarHalfIcon className={classes.starIcon} />
                                </Box>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    alignItems="flex-start"
                                    style={{ width: 'auto' }}
                                    component="span"
                                >
                                    <Box className={classes.groupContainer} component="span">
                                        <WbSunnyIcon className={classes.tempIcon} />
                                        <Typography component="span">
                                            <span className={classes.tempText}>
                                                {
                                                    dataDetail.data[dataDetail.data.length - 1]
                                                        .temp_air
                                                }{' '}
                                                &#8451;{' '}
                                            </span>{' '}
                                        </Typography>
                                    </Box>

                                    <Box className={classes.groupContainer} component="span">
                                        <WavesIcon className={classes.tempIcon} />
                                        <Typography component="span">
                                            <span className={classes.tempText}>
                                                {
                                                    dataDetail.data[dataDetail.data.length - 1]
                                                        .temp_water
                                                }{' '}
                                                &#8451;
                                            </span>{' '}
                                        </Typography>
                                    </Box>
                                    <Box className={classes.groupContainer} component="span">
                                        <UpdateIcon className={classes.tempIcon} />
                                        <Typography
                                            component="span"
                                            style={{
                                                marginLeft: 5,

                                                fontStyle: 'italic',
                                            }}
                                        >
                                            {moment(dataDetail.meta.file_created).fromNow(true)} ago
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Box className={`${classes.groupContainer}`} component="span">
                                    <AccessibleIcon className={classes.serviceIcon} />
                                    <FastfoodIcon className={classes.serviceIcon} />
                                    <WcIcon className={classes.serviceIcon} />
                                    <LocalParkingIcon className={classes.serviceIcon} />
                                </Box>
                                <Box className={classes.groupContainer} component="span">
                                    <img src={GraphImg} alt="graph" className={classes.graphImg} />
                                </Box>
                                <Box className={`${classes.groupContainer}`} component="span">
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        style={{ marginRight: 16 }}
                                    >
                                        Google Map
                                    </Button>
                                    <Button variant="outlined" color="primary">
                                        HSL Routes
                                    </Button>
                                </Box>
                                {/* <Box className={classes.groupContainer}>
                                    <Tooltip title="Open Google Map">
                                        <Avatar src={GoogleMapLogo} variant="square" />
                                    </Tooltip>
                                    <Tooltip title="Open HSL">
                                        <Avatar
                                            src={
                                                'https://upload.wikimedia.org/wikipedia/fi/c/cc/HSL_logo.svg'
                                            }
                                            variant="square"
                                            style={{ height: '40px', width: '80px' }}
                                        />
                                    </Tooltip>
                                </Box> */}
                            </Grid>
                        </TabPanel>

                        {/* INFOMATION  TAB*/}
                        <TabPanel value={tabValue} index={1}>
                            <Grid container direction="column" component="span">
                                <Grid item xs={12} component="span">
                                    <img
                                        src={UimarantaImg}
                                        alt="uimaranta"
                                        className={classes.infoImage}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    container
                                    style={{ marginTop: 16 }}
                                    component="span"
                                >
                                    <Grid
                                        item
                                        xs={3}
                                        container
                                        justify="center"
                                        alignItems="center"
                                        component="span"
                                    >
                                        <AccessTimeIcon className={classes.infoIcon} />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={9}
                                        className={classes.infoTextContainer}
                                        component="span"
                                    >
                                        <Typography
                                            component="span"
                                            style={{ fontWeight: 'bold', fontSize: '20px' }}
                                        >
                                            Aukioloajat:
                                        </Typography>
                                        <br />
                                        <Typography component="span">
                                            Kausi 1.6. - 9.8.2020{' '}
                                        </Typography>
                                        <br />
                                        <Typography component="span">klo 10.00 - 18.00</Typography>
                                        <br />
                                        <Typography component="span">
                                            Uimarantakausi alkaa normaalisti 1.6
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    container
                                    style={{ marginTop: 24 }}
                                    component="span"
                                >
                                    <Grid
                                        item
                                        xs={3}
                                        container
                                        justify="center"
                                        alignItems="center"
                                        component="span"
                                    >
                                        <LocalParkingIcon className={classes.infoIcon} />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={9}
                                        className={classes.infoTextContainer}
                                        component="span"
                                    >
                                        <Typography component="span">
                                            Uimarannan lähettyvillä ei ole esteettömiä autopaikkoja.
                                            Lähin pysäköintialue sijaitsee yli 100 m etäisyydellä.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            Reviews
                        </TabPanel>
                    </>
                )}
            </Grid>
        </Paper>
    );
};

export default DetailPage;
