import './week-weather.scss';
import {BAD} from "../../../../constants/color";
import WeekItem from "./weekItem/WeekItem";
import {useState} from "react";
import weekdayData from "../../../../daummy/weekdayData";

function WeekWeather() {
    const [Weeks,setWeek] = useState(weekdayData);
    return(
        <section>
            <h2 className="weekWeatherTitle">주간날씨</h2>
            <div className="weekWeatherWrap">
                {Weeks.map((week) => {
                    return(
                        <WeekItem week={week}/>
                    )})
                }
            </div>
        </section>
    )
}
export default  WeekWeather;