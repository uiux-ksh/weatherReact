import './banner.scss';
import bannerType from "../../../../interfaces/banner/bannerInterface";
import RightImg from "./rightImg/RightImg";
import LeftText from "./leftText/leftText";

function Banner({bg}:bannerType) {
    return(
        <figure className="bannerWrap">
            <img src={bg} alt="몬스터"/>
              <LeftText />
              <RightImg />
        </figure>
    )
}
export default Banner;