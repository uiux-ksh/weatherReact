import './today-weather.scss';
import TodayChart from "./todayChart/TodayChart";
import TodayDetail from "./todayDetail/TodayDetail";
import {useState} from "react";

function TodayWeather() {


    return(
        <div>
            <h2 className="todayTitle">오늘의 날씨</h2>
            <TodayChart />
            <TodayDetail />
        </div>
    )
}
export default TodayWeather;