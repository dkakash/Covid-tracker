import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Cards from './components/cards/cards'
import Chart from './components/chart/chart'
import CountryPicker from './components/countrypicker/countrypicker'
import {fetchData, fetchDailyData} from './api'
import Logo from './images/titleLogo.png'
class App extends React.Component{
  state={
    data:'',
    country:''
  }
  async componentDidMount(){
    const data= await fetchData()
    //console(data)
    this.setState({data:data})
  }
  onCountryChange=async (country)=>{
    //console(country)
    const data = await fetchData(country)
    // console.log(data)
    this.setState({data:data,country:country})
  }
  render(){
    const {data,country}=this.state
    return(
      <div className='main-container'>
        <img  src= {Logo} alt='logo'/>
        <br/> <br/> <br/>
        <Cards data={data} />
        <CountryPicker onCountryChange={this.onCountryChange} />
        <Chart data={data} country={country}/>

      </div>
    )
  }
}

export default App;
