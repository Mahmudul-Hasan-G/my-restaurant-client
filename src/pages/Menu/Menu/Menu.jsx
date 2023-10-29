import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import dImg from '../../../assets/menu/dessert-bg.jpeg';
import pImg from '../../../assets/menu/pizza-bg.jpg';
import sImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
const Menu = () => {

  return (
    <div>
      <Helmet>
        <title>Bangla Grill | Menu</title>
      </Helmet>
      <Cover img={menuImg} title= "Our Menu" />
      <SectionTitle heading = "Today's Offer" subHeading = "Don't miss" />
      <PopularMenu sItem = "popular" tButton= "Order Your favorite food" />
      <Cover img={dImg} title= "Desserts" />
      <PopularMenu sItem = "dessert" tButton= "Order Your favorite food" />
      <Cover img={pImg} title= "Pizza" />
      <PopularMenu sItem = "pizza" tButton= "Order Your favorite food" />
      <Cover img={sImg} title= "Salads" />
      <PopularMenu sItem = "salad" tButton= "Order Your favorite food" />
      <Cover img={soupImg} title= "Soups" />
      <PopularMenu sItem = "soup" tButton= "Order Your favorite food" />
    </div>
  );
};

export default Menu;