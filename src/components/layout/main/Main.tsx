import './main.scss';
import Banner from "./banner/Banner";
import NewsText from "./newsText/NewsText";
import bell from '../../../assets/images/icon/bell.png'
import bg from '../../../assets/images/banner/banner-bg.png'
function Main(){
    return(
        <div className="main">
           <Banner bg ={bg} />
           <NewsText text="5시간 뒤에 비 소식이 있어요" imgUrl={bell} />
        </div>
    )
}

export default Main;