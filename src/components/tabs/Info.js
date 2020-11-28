import React from 'react';
import { useStyles } from './Info.style';
import { Grid, Typography } from '@material-ui/core';

import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const Info = ({ dataDetail }) => {
    const classes = useStyles();
    const info = dataDetail.info;
    const infoText = info.match(/[^\.!\?]+[\.!\?]+["']?|.+$/g);

    console.log(infoText);
    return (
        <Grid container direction="column" component="span">
            {/* <Grid item xs={12}>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.children ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Lapsiystävällinen</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.forDogs ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Koiraystävällinen</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.shower ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Suihku</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.toilet ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">WC</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.restaurant ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Ravintola</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.changing ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Pukuhuone</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.guard ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Uimavalvonta</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.fitness ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Fitness</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.sport ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Urheilu</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.kiosk ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Kioski</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.sauna ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Sauna</Typography>
                </Grid>

                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.winterSwimming ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Avantouinti</Typography>
                </Grid>
            </Grid> */}
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

            {infoText[0] === 'No data from API' ? null : (
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
            {/* <Grid item xs={12} container style={{ marginTop: 16 }} component="span">
                <Grid item xs={3} container justify="center" alignItems="center" component="span">
                    <AccessTimeIcon className={classes.infoIcon} />
                </Grid>
                <Grid item xs={9} className={classes.infoTextContainer} component="span">
                    <Typography component="span" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        Aukioloajat:
                    </Typography>
                    <br />
                    <Typography component="span">Kausi 1.6. - 9.8.2020 </Typography>
                    <br />
                    <Typography component="span">klo 10.00 - 18.00</Typography>
                    <br />
                    <Typography component="span">Uimarantakausi alkaa normaalisti 1.6</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} container style={{ marginTop: 24 }} component="span">
                <Grid item xs={3} container justify="center" alignItems="center" component="span">
                    <LocalParkingIcon className={classes.infoIcon} />
                </Grid>
                <Grid item xs={9} className={classes.infoTextContainer} component="span">
                    <Typography component="span">
                        Uimarannan lähettyvillä ei ole esteettömiä autopaikkoja. Lähin
                        pysäköintialue sijaitsee yli 100 m etäisyydellä.
                    </Typography>
                </Grid>
            </Grid> */}
        </Grid>
    );
};

export default Info;
