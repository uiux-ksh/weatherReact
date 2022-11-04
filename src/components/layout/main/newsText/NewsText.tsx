import NewsTextType from "../../../../interfaces/newsText/newsTextInterface";
import './news-text.scss';
function NewsText({text,imgUrl}:NewsTextType) {
    return(
        <div className="newsText">
            <span className="bell"><img src={imgUrl} alt=""/></span>
            <span>{text}</span>
        </div>
    )
}
export default  NewsText;