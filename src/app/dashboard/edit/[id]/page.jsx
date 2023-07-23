'use client'
import FormProduct from '@components/FormProduct';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import endPoints from '@services/api';




export default function Edit({ params }) {
  const [product, setProduct] = useState({})
  const id =  params.id

  useEffect(() => {
    if (!id) return

    const getProduct = async () => {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data)
    }
    getProduct();
  }, [id])

  return (
    <FormProduct product={product} />
  )
}

