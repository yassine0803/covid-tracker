import { CardContent, Card, Grid, Typography } from "@material-ui/core";
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data}) => {
    if(!data.confirmed) return 'loading...';
    return ( 
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.confirmed.value} duration={1} separator=",">
                            {data.confirmed.value}
                            </CountUp>
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            {new Date(data.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Recovery
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.recovered.value} duration={1} separator=",">
                            {data.recovered.value}
                            </CountUp>
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            {new Date(data.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of recovered cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.deaths.value} duration={1} separator=",">
                            {data.deaths.value}
                            </CountUp>
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            {new Date(data.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Cards;