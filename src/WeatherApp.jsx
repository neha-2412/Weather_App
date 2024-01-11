import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox";
import { useState } from "react";
import CloudIcon from '@mui/icons-material/Cloud';

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        humidity: 47,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "haze"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App <CloudIcon/></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}