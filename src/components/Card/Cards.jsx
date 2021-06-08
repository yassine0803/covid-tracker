import { CardContent, Card, Grid, Typography } from "@material-ui/core";
import styles from './Cards.module.css';
const Cards = ({data}) => {
    if(!data.confirmed) return 'loading...';
    console.log(data.confirmed.value);
    return ( 
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            {data.confirmed.value}
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            REAL DATE
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Recovery
                        </Typography>
                        <Typography variant="h5">
                            {data.recovered.value}
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            REAL DATE
                        </Typography>
                        <Typography variant="body2">
                            Number of recovered cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            {data.deaths.value}
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            REAL DATE
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