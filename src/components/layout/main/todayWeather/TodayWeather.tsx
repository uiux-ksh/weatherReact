import './today-weather.scss';
import TodayChart from "./todayChart/TodayChart";
import TodayDetail from "./todayDetail/TodayDetail";
import {useState} from "react";

function TodayWeather() {


    return(
        <section>
            <h2 className="todayTitle">오늘의 날씨</h2>
            <TodayChart />
            <TodayDetail />
        </section>
    )
}
export default TodayWeather;