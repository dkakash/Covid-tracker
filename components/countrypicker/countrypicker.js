import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl, FormLabel,Typography} from '@material-ui/core';
import { fetchCountries } from '../../api' 
import './countrypicker.css'
const CountryPicker = (props)=>{
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        const getCountires = async ()=>{
            const data = await fetchCountries()
            setCountries(data)
        }
        getCountires()
        
    },[setCountries])
    //console(countries)
    return (
    <div className='select-container' >
        {countries ? <FormControl >
            <span><FormLabel>Country :   </FormLabel>
            <NativeSelect onChange={(e)=>props.onCountryChange(e.target.value)}> 
                <option value=''>Global</option>
                 {/* {countires.map((country,i)=>(<option key={i}>{country}</option>))} */}
                 {countries.map((c,i)=><option key={i} value={c}>{c}</option>)}
            </NativeSelect>
            </span>
        </FormControl>
        
        :null}
    </div>
    )
}

export default CountryPicker