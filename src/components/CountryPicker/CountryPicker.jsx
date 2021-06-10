import { useState, useEffect } from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';
const CountryPicker = ({handleInputChange}) => {
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        setCountries(await fetchCountries());
    }
    useEffect(() =>{
        getCountries();
    },[]);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=> handleInputChange(e.target.value)}>
                <option value="">Global</option>
                {countries.length && countries.map((country, index) =>(
                    <option key={index} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    );
}
 
export default CountryPicker;