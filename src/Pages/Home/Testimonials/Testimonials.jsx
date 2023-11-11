import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '@smastrom/react-rating/style.css'
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Testimonials = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <section className="my-20">
      <SectionsTitle
        subHeading="What Our Client Say"
        heading="testimonials"
      ></SectionsTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating style={{ maxWidth: 180 }} value={review.rating}  />
              <p className="my-10">{review.details}</p>
              <h2 className="text-2xl text-orange-400">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
