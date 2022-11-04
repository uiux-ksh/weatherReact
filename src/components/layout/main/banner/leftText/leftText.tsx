
import './left-text.scss';
function leftText() {
    return(
        <div className="leftText">
            <div className="cloudImg"><span className="img"><img src="https://ssl.pstatic.net/sstatic/keypage/outside/scui/weather_new_new/img/weather_svg_v2/icon_flat_wt5.svg" alt=""/></span><span className="todayText">10월17일(월)</span></div>
            <div className="temperature">
                <div className="mainTitle"><span >30<sup>o</sup>C</span></div>
                <div className="maxMin_temper"><span>최저30C</span><span>최고30C</span></div>
            </div>
        </div>
    )
}
export default leftText;