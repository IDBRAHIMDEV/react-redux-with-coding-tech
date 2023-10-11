import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import ProductList from '../components/product/ProductList'
import ProductForm from '../components/product/ProductForm'
import { getAllProducts } from '../store/features/product/productActions'

const Shop = () => {

  const { token } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts(token))
  }, [])

  return (
    <>
      <ProductForm />
      <hr />
      <div className="row my-4">
        <div className="col-12">
            <ProductList />
        </div>
      </div>
    </>
  )
}

export default Shop