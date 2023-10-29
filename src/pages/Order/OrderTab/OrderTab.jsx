import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';
import UseMenu from '../../../Hooks/UseMenu';

const OrderTab = ({sItem}) => {
  const [menu] = UseMenu();
  const popularItem = menu.filter(item => item.category === sItem);
  return (
    <div className='my-12'>
      <div className='grid md:grid-cols-3 gap-10'>
    {
popularItem.map(item => <FoodCard key={item._id} item={item} />)
    }
    </div>
    </div>
  );
};

export default OrderTab;