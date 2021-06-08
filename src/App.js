import {Cards, Chart, CountryPicker } from './components';
import { useState,useEffect } from 'react';
import styles from './App.module.css';
import {fetchData} from './api';

const App = () => {
  const [data, setData] = useState()
  const getData = async () =>{
    const data = await fetchData();
    setData(data);
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
  );
}
 
export default App;
