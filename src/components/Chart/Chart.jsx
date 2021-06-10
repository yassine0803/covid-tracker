import { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    const fetchData = async()=>{
        const data = await fetchDailyData();
        setDailyData(data);
    };

    useEffect(() =>{
        fetchData();
    },[]);
    
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
                        backgroundColor: 'rgb(255,0,0, 0.5)',
                        fill: true
                    }],
                }}
            />
        ): null
    );
    console.log(dailyData);
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
    
}
 
export default Chart;