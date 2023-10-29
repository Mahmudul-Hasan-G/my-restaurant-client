import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import UseMenu from '../../../Hooks/UseMenu';
import { Link } from 'react-router-dom';

const PopularMenu = ({sItem, tButton}) => {
  const [menu] = UseMenu();
  const popularItem = menu.filter(item => item.category === sItem);

// const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     fetch('menu.json')
//     .then(res => res.json())
//     .then(data => {
//       const popularItems = data.filter(item => item.category === 'popular');
//       setMenu(popularItems)
//     })
//   }, [])


  return (
    <section className='my-12'>
      
      <div className='grid md:grid-cols-2 gap-10'>
        {
          popularItem.map(item =><MenuItem 
            key={item._id}
            item={item}
          />)
        }
      </div>
      <div className='text-center mt-8'>
     <Link to={`/order/${sItem}`}>
     <button className="btn btn-outline border-0 border-b-4">{tButton}</button>
     </Link>
      </div>
    </section>
  );
};

export default PopularMenu;