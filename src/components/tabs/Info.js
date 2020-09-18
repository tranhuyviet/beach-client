import React from 'react';
import { useStyles } from './Info.style';
import { Grid, Typography } from '@material-ui/core';

import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Info = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" component="span">
            <Grid item xs={12} component="span">
                <Typography component="span">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel interdum ex.
                    Proin quis vulputate lectus, in varius lectus. Aliquam erat volutpat.
                    Suspendisse suscipit dolor sit amet mi bibendum.
                </Typography>
                <br />
                <br />
                <Typography component="span">Uimarantakausi alkaa normaalisti 1.6</Typography>
            </Grid>
            <Grid item xs={12} container style={{ marginTop: 16 }} component="span">
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
            </Grid>
        </Grid>
    );
};

export default Info;