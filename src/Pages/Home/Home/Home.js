import React from 'react';
import AppInfo from '../../AppInfo/AppInfo';
import BestDeals from '../../BestDeals/BestDeals';
import Login from '../../Login/Login/Login';
import ReadyToOrder from '../../ReadyToOrder/ReadyToOrder';
import Footer from '../../Shared/Footer/Footer';
import SpecialItem from '../../SpecialItem/SpecialItem';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import FeaturedRestaurants from '../FeaturedRestaurants/FeaturedRestaurants';
import HowDoesItWork from '../HowDoesItWork/HowDoesItWork';
import PopularItems from '../PopularItems/PopularItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialItem></SpecialItem>
            <HowDoesItWork></HowDoesItWork>
            <PopularItems></PopularItems>
            <FeaturedRestaurants></FeaturedRestaurants>
            <BestDeals></BestDeals>
            <Login></Login>
            <ReadyToOrder></ReadyToOrder>
            <ContactUs></ContactUs>
            <AppInfo></AppInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;