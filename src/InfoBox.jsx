import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    const HOT_URL = "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=600";
    const COLD_URL = "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600";
    const RAIN_URL = "https://images.pexels.com/photos/68357/pexels-photo-68357.jpeg?auto=compress&cs=tinysrgb&w=600";

    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>                
            </Card>
            </div>
        </div>
    )
}