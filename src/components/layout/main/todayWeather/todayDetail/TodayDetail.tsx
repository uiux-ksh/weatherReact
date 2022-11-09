import './today-detail.scss';
import todayDetail from "../../../../../daummy/todayDetail";
import {useState} from "react";
import TodayItem from "./todayItem/TodayItem";

function TodayDetail(){
    const [items,setItem] = useState(todayDetail);
    return(
        <div className="todayDetailWrap">
            <ul>
                {items.map((item) =>{
                    return(
                       <TodayItem item={item} />
                    )
                })}
            </ul>
        </div>
    )
}
export default  TodayDetail;