import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Home = () => {
  return (
    <div>
    <Helmet>
    <title>Bangla Grill | Home</title>
    </Helmet>
     <Banner />
     <Category />
     <SectionTitle
      heading = {"From Our Menu"}
      subHeading = {"Popular Items"}
      ></SectionTitle>
     <PopularMenu sItem = "popular" tButton = "View Full Menu" />
     <Featured />
     <Testimonials />
    </div>
  );
};

export default Home;