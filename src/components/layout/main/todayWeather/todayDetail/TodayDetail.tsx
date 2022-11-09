import './today-detail.scss';
import umbrella from '../../../../../assets/images/icon/umbrella.png';
import todayDetail from "../../../../../daummy/todayDetail";
import {useState} from "react";
function TodayDetail(){
    const [items,setItem] = useState(todayDetail);
    return(
        <div className="todayDetailWrap">
            <ul>
                {items.map((item) =>{
                    return(
                        <li><div className="todayDetailTitle"><span className="todayDetailImg"><img src={umbrella} alt={umbrella}/></span><span>{item.title}</span></div>
                            <div className="todayDetailText">
                                {item.firstState !== "" ? <div><span className="todaySubText">{item.firstText}</span><span className={item.id !== 6 ? "usually" :"side"}>{item.firstState}</span></div>
                                : <div><span className={item.id === 2 ? "good" :"side"}>{item.firstText}</span></div>}
                                {item.secondState !== "" ? <div><span className="todaySubText">{item.secondText}</span><span className={item.id !== 6 ? "bad" :"side"}>{item.secondState}</span></div>
                                : item.secondText !== "" ?  <div><span className="omm">{item.secondText}</span></div> : null}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default  TodayDetail;