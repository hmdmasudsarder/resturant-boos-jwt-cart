import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import featureImg from '../../../assets/home/featured.jpg';
import './Feature.css';

const Feature = () => {
    return (
        <div className="featureItems bg-fixed text-white my-20 pt-8">
            <SectionsTitle subHeading="Check IT Out" heading="Featured item"></SectionsTitle>
            <div className="md:flex items-center justify-center pb-20 pt-12 px-36 bg-slate-400 bg-opacity-40">
                <div className="">
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>AUG 29, 2028</p>
                    <h3 className="uppercase">where can i get some?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, exercitationem ut, voluptates voluptas veritatis necessitatibus odio illum officia doloremque assumenda veniam repudiandae debitis cupiditate corporis expedita. Similique voluptas non deserunt.</p>
                    <button className="btn border-0 border-b-4 border-b-white  btn-outline  uppercase mt-4">order now</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;