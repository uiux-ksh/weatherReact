import './getup.scss';
import GetUpList from "./getupList/GetUpList";
function GetUp({title}:{title:string}) {
    return(
        <section className="getup">
            <h2>{title}</h2>
            <GetUpList />
        </section>
    )
}
export default GetUp;