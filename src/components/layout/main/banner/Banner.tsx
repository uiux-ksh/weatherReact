import './banner.scss';
import bannerType from "../../../../interfaces/banner/bannerInterface";
import RightImg from "./rightImg/RightImg";
import LeftText from "./leftText/leftText";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper';

function Banner({bg}:bannerType) {
    return(
        <figure className="bannerWrap">
            <Swiper
                modules={[ Pagination]}
                className="banner"
                spaceBetween={50}
                pagination={{
                    clickable: true
                }}>
                <SwiperSlide className="Sw_parents">
                    <img src={bg} alt="몬스터"/>
                    <LeftText />
                    <RightImg />
                </SwiperSlide>
                <SwiperSlide className="Sw_parents"><img src={bg} alt="몬스터"/> </SwiperSlide>
            </Swiper>
        </figure>
    )
}
export default Banner;