import './getup-list.scss';
import getupData from "../../../../../daummy/getupData";
import {useEffect, useState} from "react";
import GetupItem from "./getupItem/GetupItem";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper";
function GetUpList(){

    const [getupItem,setGetupItem] = useState(getupData);

    return(
        <div className="getupList">
            <Swiper
                modules={[ Scrollbar]}
                className="getupListBanner"
                spaceBetween={10}
                slidesPerView={3}
                scrollbar={true}
            >
                {getupItem.map((list) =>  {
                    return(
                        <SwiperSlide className="Sw_parents" key={list.id}><GetupItem date={list.date}  active={list.active} look={list.look}/></SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
export default GetUpList;