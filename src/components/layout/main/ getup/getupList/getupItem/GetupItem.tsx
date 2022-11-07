import './getup-item.scss';
import long from '../../../../../../assets/images/item/longTea.png'
import short from '../../../../../../assets/images/item/shortTea.png'
import cap from '../../../../../../assets/images/item/cap.png'
import blue from '../../../../../../assets/images/item/blue.png'
import getupItemInterface from "../../../../../../interfaces/getupItem/getupItemInterface";


function GetupItem({date,active,look}:getupItemInterface) {

    return(
        <div className={active ? "getupItemWrap active": 'getupItemWrap'}>
           <h3><span>{date}</span></h3>
            <ul className="getupItemList">
                <li><div>{active ? <img src={long} alt={long}/> : <img src={blue} alt={blue}/>} </div><span>{look.long !==null ? look.long : look.Tea}</span></li>
                <li><div>{active ?<img src={short} alt={short}/>:null}</div><span>{active? look.Tea : null}</span></li>
                <li><div>{active ?<img src={cap} alt={cap}/>:null}</div><span>{active? look.cap:null}</span></li>
            </ul>
        </div>
    )
}
export default GetupItem;