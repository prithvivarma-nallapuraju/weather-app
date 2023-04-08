import axios from "axios"
import Button from "../Button/button"
import { useEffect, useState } from "react"
import Display from "../display/display"

const input = () => {
    const [city, setCity] = useState("Visakhapatnam")
    const [weatherData, setWeatherData] = useState("")
    const baseUrl = ' http://api.weatherapi.com/v1'
    const apiKey = '6e8cb9ab007c4ca7acb40724230704'

    let region = ""
    useEffect(()=>{
        axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${city}`)
             .then(response => {
                setWeatherData(response.data)
            })
              .catch(error=>(console.log(error)))
    },[])

    const changeHandler = (e) => {
        setCity(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${city}`)
             .then(response => {
                setWeatherData(response.data)
            })
              .catch(error=>(console.log(error)))
    }

    return (
        <div className="flex flex-col bg-blue-800 justify-center w-3/4 xl:w-2/4 mx-auto shadow-3xl shadow-black">  
           <div className="flex md:justify-evenly flex-col md:flex-row">
                <input type="text" className="m-4 h-12 p-4 font-extrabold text-xl md:text-3xl md:w-4/5 mx-4 font-Alkatra rounded-none shadow-4xl shadow-black" placeholder="search for city" onChange={changeHandler} value={city}/>
                
                <Button onClick = {submitHandler}/>
           </div> 
           <Display 
           />
        </div>
    )
}

export default input