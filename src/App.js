import {Cards, Chart, CountryPicker } from './components';
import { useState,useEffect } from 'react';
import styles from './App.module.css';
import {fetchData} from './api';

const App = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('');
  const getData = async () =>{
    const data = await fetchData();
    setData(data);
  }
  const handleInputChange =async (country) => {
    console.log("country changed!");
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  }
  useEffect(() => {
    getData();
  }, [])
  console.log(country);
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleInputChange={handleInputChange} />
      <Chart data={data} country={country} />
    </div>
  );
}
 
export default App;
