import { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = ({data, country}) => {
    const [dailyData, setDailyData] = useState([]);

    const fetchData = async()=>{
        const data = await fetchDailyData();
        setDailyData(data);
    };

    useEffect(() =>{
        fetchData();
    },[]);
    const barChart = (
        data.confirmed
        ? <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(0,0,255)', 'rgba(0,255,0)', 'rgba(255,0,0)'],
                    data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current state in ${country}`}
            }}
        />
        : null
    )
    const lineChart = (
        dailyData.length
        ?(
            <Line
                data={{
                    labels: dailyData.map(({reportDate})=> reportDate ),
                    datasets: [{
                        data: dailyData.map(({confirmed})=> confirmed.total ),
                        label: 'infected',
                        borderColor: '#3333ff',
                        fill: true
                    },{
                        data: dailyData.map(({deaths})=> deaths.total ),
                        label: 'deaths',
                        borderColor: 'red',
                        //backgroundColor: 'rgb(255,0,0, 0.5)',
                        fill: true
                    }],
                }}
            />
        ): null
    );
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
    
}
 
export default Chart;