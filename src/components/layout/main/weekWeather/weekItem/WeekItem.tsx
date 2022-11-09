import {YELLOW} from "../../../../../constants/color";
import weekInterface from "../../../../../interfaces/week/weekInterface";

function WeekItem({week}:weekInterface) {
    return(
       <>
           <ul className="weekWeatherList">
               <li className="date"><span className="date">{week.date}</span></li>
               <li className="img"><img src={week.img} alt="구름사진"/></li>
               <li> <span>{week.min}</span></li>
               <li><div className="all_bar"><div className="active_bar" style={{background:week.color, width:week.width}}></div></div></li>
               <li><span>{week.max}</span></li>
           </ul>
       </>
    )
}
export  default  WeekItem;