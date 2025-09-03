import React, { useEffect, useState } from 'react';
// import mywork_data from '../assets/mywork_data';
import axios from 'axios'

import { Link } from 'react-router-dom';
const Mywork = () => {
   const [product, setProduct] = useState([]);
const [showAll, setShowAll] = useState(false)

  const fetchProduct = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/product/get-products');
      setProduct(response.data); 
    } catch (error) {
      toast.error('Product not fetched');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

 
 
const displayedProducts = showAll ? product : product.slice(0, 3)
  return (
    <div id='portfolio' className='md:mx-20 p-6 relative'>
      <h2 className='text-white text-center text-3xl font-semibold mb-4'>
        My latest work
      </h2>

      <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-4 p-6'>
       
        {displayedProducts.map((item, index) => (
          <div
            key={index}
            className='hover:scale-105 transition cursor-pointer'
           
          >
          <Link to={`/ProductDetail/${item._id}`}> <img src={`http://localhost:3000/uploads/${item.productimage}`} alt={item.productname} /></Link>
          </div>
        ))}
      </div>
      <div className='flex '>
<button onClick={()=> setShowAll(!showAll)} className='bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] px-10 py-2 m-auto rounded'>{showAll ? 'Show Less' : 'View More'}</button>
    </div>
    </div>
  );
 }

export default Mywork;
