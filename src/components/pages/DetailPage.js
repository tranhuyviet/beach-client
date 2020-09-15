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
    if (dataDetail) console.log('data', dataDetail.data[dataDetail.data.length - 1].temp_air);
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
                                    <div className={classes.serviceContainer}>
                                        <AccessibleIcon className={classes.serviceIcon} />
                                        <FastfoodIcon className={classes.serviceIcon} />
                                        <WcIcon className={classes.serviceIcon} />
                                        <LocalParkingIcon className={classes.serviceIcon} />
                                    </div>
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
                        <TabPanel value={tabValue} index={1}>
                            Infomation
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
