import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";

const Category = () => {
  return (
    <div>
        <SectionsTitle 
        subHeading={'From 11:00AM to 10:00PM'}
        heading={'ORDER ONLINE'}
        ></SectionsTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-center uppercase -mt-28 text-white text-4xl">salate</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-center uppercase -mt-28 text-white text-4xl">salate</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-center uppercase -mt-28 text-white text-4xl">salate</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-center uppercase -mt-28 text-white text-4xl">salate</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-center uppercase -mt-28 text-white text-4xl">salate</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-center uppercase -mt-28 text-white text-4xl">salate</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-center uppercase  text-white text-4xl">salate</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
