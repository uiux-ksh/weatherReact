import './getup.scss';
import GetUpList from "./getupList/GetUpList";
function GetUp({title}:{title:string}) {
    return(
        <div className="getup">
            <h2>{title}</h2>
            <GetUpList />
        </div>
    )
}
export default GetUp;