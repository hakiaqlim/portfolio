import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
 const { id } = useParams()
  const [product, setProduct] = useState(null);

  const fetchProductDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/product/get-product/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error('Failed to fetch product detail:', error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  if (!product) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="text-white mt-20 rounded-lg shadow-xl p-8 flex m-auto w-[90%]">
    <div className='w-[70%]'>
      <img 
        src={`http://localhost:3000/uploads/${product.productimage}`}
        alt={'product image'}
        className="w-full  rounded-lg"
      />
      </div>
      <div className='flex w-[90%] flex-col px-6 justify-center '>
      <h2 className="text-2xl font-bold  mb-2">{product.productname}</h2>
      <p className="  text-gray-300">{product.productdesc}</p>
    </div>
    
    </div>
  );
};

export default ProductDetail;
