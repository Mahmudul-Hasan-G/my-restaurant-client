import React, { useState } from 'react';
import oImg from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = [ "salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  // const [menu] = UseMenu();
  // const salads = menu.filter(item => item.category === "salad");
  // const pizzas = menu.filter(item => item.category === "pizza");
  // const soups = menu.filter(item => item.category === "soup");
  // const desserts = menu.filter(item => item.category === "dessert");
  // const allDrinks = menu.filter(item => item.category === "drinks");
  return (
    <div>
    <Helmet>
        <title>Bangla Grill | Order Food</title>
      </Helmet>
      <Cover img={oImg} title="Order Food"/>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(tabIndex)}>
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUPS</Tab>
    <Tab>DESSERTS</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
  <TabPanel>
    <OrderTab sItem = "salad" />
  </TabPanel>
  <TabPanel>
  <OrderTab sItem = "pizza" />
  </TabPanel>
  <TabPanel>
  <OrderTab sItem = "soup" />
  </TabPanel>
  <TabPanel>
  <OrderTab sItem = "dessert" />
  </TabPanel>
  <TabPanel>
  <OrderTab sItem = "drinks" />
  </TabPanel>
</Tabs>
    </div>
  );
};

export default Order;