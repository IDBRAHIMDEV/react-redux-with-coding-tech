import React from 'react'
import ProductList from '../components/product/ProductList'
import ProductForm from '../components/product/ProductForm'

const Shop = () => {
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