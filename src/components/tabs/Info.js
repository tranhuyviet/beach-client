import React from 'react';
import { useStyles } from './Info.style';
import { Grid, Typography } from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const Info = ({ dataDetail }) => {
    const classes = useStyles();
    const info = dataDetail.info;

    const infoText = info.match(/[^\.!\?]+[\.!\?]+/g);

    return (
        <Grid container direction="column" component="span">
            <Grid
                item
                xs={12}
                container
                className={`${classes.table} ${classes.tableHeader}`}
                alignItems="center"
            >
                <Grid item xs={8} container>
                    <Typography component="span" className={classes.palvelut}>
                        Palvelut
                    </Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    <Typography component="span">Kyllä</Typography>
                </Grid>
                <Grid item xs={2} container justify="center">
                    <Typography component="span">Ei</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Lapsiystävällinen</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.children && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.children && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Koiraystävällinen</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.forDogs && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.forDogs && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Suihku</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.shower && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.shower && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">WC</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.toilet && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.toilet && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Ravintola</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.restaurant && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.restaurant && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Pukuhuone</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.changing && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.changing && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Uimavalvonta</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.guard && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.guard && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Fitness</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.fitness && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.fitness && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Urheilu</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.sport && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.sport && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Kioski</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.kiosk && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.kiosk && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid item xs={12} container className={classes.table} alignItems="center">
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Sauna</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.sauna && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.sauna && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                container
                className={classes.table}
                alignItems="center"
                style={{ borderBottom: '1px solid #388e3c' }}
            >
                <Grid item xs={8} container className={classes.palvelut}>
                    <Typography component="span">Avantouinti</Typography>
                </Grid>
                <Grid item xs={2} container justify="center" className={classes.kylla}>
                    {dataDetail.winterSwimming && <CheckIcon color="primary" />}
                </Grid>
                <Grid item xs={2} container justify="center">
                    {!dataDetail.winterSwimming && <CloseIcon color="secondary" />}
                </Grid>
            </Grid>

            {info === 'No data from API' ? null : (
                <>
                    <Typography component="span" className={classes.moreInfoTitle}>
                        Lisätietoja:
                    </Typography>
                    <Grid item xs={12} component="span">
                        {infoText ? (
                            infoText.map((inf, index) => (
                                <div key={index} style={{ marginBottom: 8 }} component="span">
                                    <Typography component="span" key={index}>
                                        {inf}
                                    </Typography>
                                    <br />
                                </div>
                            ))
                        ) : (
                            <Typography component="span">{info}</Typography>
                        )}
                    </Grid>
                </>
            )}
        </Grid>
    );
};

export default Info;
