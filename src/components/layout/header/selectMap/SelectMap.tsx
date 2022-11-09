import './select-map.scss';
import down  from '../../../../assets/images/icon/down.png'
import map from '../../../../assets/images/icon/map.png'
function SelectMap(){
    return(
        <div className="selectMap">
            <ul className="selectMap_list">
                <li><span><img src={map} alt={map}/></span></li>
                <li><span>서울시 강남구</span></li>
                <li><span><img src={down} alt={down}/></span></li>
            </ul>
        </div>
    )
}
export default  SelectMap;