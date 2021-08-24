import React from 'react';
import { useLocation } from 'react-router';
import UpdateProductForm from '../../components/UpdateProductForm/UpdateProductForm'

const UpdateProduct = (props) => {
  const location = useLocation()
  return (
    <>
    <UpdateProductForm product={location.state.product}/>
    </>
  );
}
 
export default UpdateProduct;