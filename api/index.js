
import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
export const fetchData = async (country) => {
    let changableUrl = url

        if (country) {

            changableUrl = `${url}/countries/${country}`
            console.log(changableUrl)
        }
    try {
        
        const res = await axios.get(changableUrl)
        // //console(res)
        return res.data
    }
    catch (e) {
        //console(e)
    }

}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios(`${url}/daily`)
        const modifieddata = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate

        }))

        return modifieddata
    }
    catch (e) {
        console.log(e)
    }
}



export const fetchCountries = async () => {
    try {
        const data = await axios.get(`${url}/countries`)
        //console(data.data)
        const data1 = data.data
        const countries = []
        data1.countries.map((c) => countries.push(c.name))
        //console(countries)
        return countries
    }
    catch (e) {
        //console(e)
    }

}