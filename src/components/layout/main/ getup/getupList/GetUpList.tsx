import './getup-list.scss';
import getupData from "../../../../../daummy/getupData";
import {useEffect, useState} from "react";
import GetupItem from "./getupItem/GetupItem";
function GetUpList(){

    const [getupItem,setGetupItem] = useState(getupData);



    return(
        <div className="getupItem">
            {/*{ getupItem.map((list) => {*/}
            {/*    return(*/}
            {/*        <div key ={list.id}>*/}
            {/*            {list.date}*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
            <GetupItem />
        </div>
    )
}
export default GetUpList;