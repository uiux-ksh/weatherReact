import { Swiper, SwiperSlide } from 'swiper/react';

import {  Pagination } from 'swiper';

function GetupItem() {
    return(
        <div>
            <Swiper
                modules={[ Pagination]}
                className="banner"
                spaceBetween={50}
                pagination={{
                    clickable: true
                }}>
                <SwiperSlide className="Sw_parents">222</SwiperSlide>
                <SwiperSlide className="Sw_parents">222 </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default GetupItem;