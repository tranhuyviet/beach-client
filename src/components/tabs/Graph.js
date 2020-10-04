import React from 'react';
import { useStyles } from './Graph.style';
import GraphImg from '../../assets/images/graph.png';
import { Grid, Typography } from '@material-ui/core';
import CanvasJSReact from '../../assets/canvasjs.react';
import moment from 'moment';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = ({ data }) => {
    const classes = useStyles();
    console.log('GRAPH DATA', data);
    let airTemp = [];
    let waterTemp = [];
    if (data) {
        data.forEach((dt) => {
            airTemp.push({
                label: moment(dt.time).format('DD.MM'),
                y: dt.temp_air,
            });
            waterTemp.push({
                label: moment(dt.time).format('DD.MM'),
                y: dt.temp_water,
            });
        });
    }
    // const airTemp = data.map((dt) => {
    //     return {
    //         label: moment(dt.time).format('DD.MM'),
    //         y: dt.temp_air,
    //     };
    // });

    // const waterTemp = data.map((dt) => {
    //     return {
    //         label: moment(dt.time).format('DD.MM'),
    //         y: dt.temp_water,
    //     };
    // });

    console.log('air temp', airTemp);
    console.log('water temp', waterTemp);

    const optionsAir = {
        theme: 'light2', // "light1", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            // text: 'AIR TEMPERATURE',
        },
        axisY: {
            includeZero: false,
            valueFormatString: '##.# ℃',
        },
        data: [
            {
                type: 'spline',
                // name: 'Air Temperature',
                showInLegend: true,
                dataPoints: airTemp,
            },
        ],
    };

    const optionsWater = {
        theme: 'light2', // "light1", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            // text: 'WATER TEMPERATURE',
        },
        axisY: {
            includeZero: false,
            valueFormatString: '##.# ℃',
        },
        data: [
            {
                type: 'spline',
                // name: 'Water Temperature',
                showInLegend: true,
                dataPoints: waterTemp,
            },
        ],
    };

    return (
        <Grid container component="span" direction="column" alignItems="center">
            <Typography component="span" className={classes.title}>
                Air Temperature:
            </Typography>
            <Grid
                item
                xs={12}
                container
                component="span"
                direction="column"
                className={classes.chartContainer}
            >
                <CanvasJSChart options={optionsAir} component="span" />
                <span className={classes.hideTrial} component="span"></span>
            </Grid>
            <Typography component="span" className={classes.title}>
                Water Temperature:
            </Typography>
            <Grid
                item
                xs={12}
                container
                component="span"
                direction="column"
                className={classes.chartContainer}
            >
                <CanvasJSChart options={optionsWater} component="span" />
                <span className={classes.hideTrial} component="span"></span>
            </Grid>
        </Grid>
    );
};

export default Graph;
