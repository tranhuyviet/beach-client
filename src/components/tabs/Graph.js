import React, { useState } from 'react';
import { useStyles } from './Graph.style';
import GraphImg from '../../assets/images/graph.png';
import { Grid, Typography, Select, MenuItem } from '@material-ui/core';
import CanvasJSReact from '../../assets/canvasjs.react';
import moment from 'moment';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = ({ data }) => {
    const classes = useStyles();
    const [timeSelect, setTimeSelect] = useState('2 weeks');

    const handleChange = (event) => {
        setTimeSelect(event.target.value);
    };

    console.log('GRAPH DATA', data);
    let airTemp = [];
    let waterTemp = [];
    let week = new Date();
    week.setDate(week.getDate() - 7);
    let day = new Date();
    day.setDate(day.getDate() - 2);
    console.log(day);
    if (data) {
        data.forEach((dt) => {
            if (timeSelect === '2 weeks') {
                airTemp.push({
                    label: moment(dt.time).format('DD.MM. HH:mm'),
                    y: dt.temp_air,
                });
                waterTemp.push({
                    label: moment(dt.time).format('DD.MM. HH:mm'),
                    y: dt.temp_air,
                });
            } else if (timeSelect === '1 week') {
                if (new Date(dt.time) >= week) {
                    airTemp.push({
                        label: moment(dt.time).format('DD.MM. HH:mm'),
                        y: dt.temp_air,
                    });
                    waterTemp.push({
                        label: moment(dt.time).format('DD.MM. HH:mm'),
                        y: dt.temp_air,
                    });
                }
            } else if (timeSelect === '48 hours') {
                if (new Date(dt.time) >= day) {
                    airTemp.push({
                        label: moment(dt.time).format('DD.MM. HH:mm'),
                        y: dt.temp_air,
                    });
                    waterTemp.push({
                        label: moment(dt.time).format('DD.MM. HH:mm'),
                        y: dt.temp_air,
                    });
                }
            }
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
        toolTip:{
            content:"Aika: {label}</br>Lämpötila: {y} °C" ,
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
        toolTip:{
            content:"Aika: {label}</br>Lämpötila: {y} °C" ,
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

    console.log(timeSelect);

    return (
        <Grid container component="span" direction="column" alignItems="center">
            <Typography className={classes.timeSelectTitle}>Valitse aikaväli</Typography>
            <Grid
                item
                container
                component="span"
                justify="center"
                className={classes.timeSelectContainer}
            >
                <Select value={timeSelect} onChange={handleChange} className={classes.timeSelect}>
                    <MenuItem value={'2 weeks'} classes={{ selected: classes.selected }}>
                        2 viikkoa
                    </MenuItem>
                    <MenuItem value={'1 week'} className={classes.menuItem}>
                        1 viikko
                    </MenuItem>
                    <MenuItem value={'48 hours'} className={classes.menuItem}>
                        48 tuntia
                    </MenuItem>
                </Select>
            </Grid>
            <Typography component="span" className={classes.title}>
                Ilman lämpötila:
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
                Veden lämpötila:
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
