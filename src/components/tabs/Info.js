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
    console.log(info);
    console.log(infoText);
    return (
        <Grid container direction="column" component="span">
            <Grid item xs={12}>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.forDogs ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Suitable for dogs</Typography>
                </Grid>
                <Grid item container alignItems="center" justify="flex-start">
                    {dataDetail.winterSwimming ? (
                        <CheckIcon color="primary" />
                    ) : (
                        <CloseIcon color="secondary" />
                    )}
                    <Typography component="span">Winter Swimming</Typography>
                </Grid>
            </Grid>
            <Typography component="span" className={classes.moreInfoTitle}>
                More infomation:
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
