import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import ProductList from '../components/product/ProductList'
import ProductForm from '../components/product/ProductForm'
import { getAllProducts } from '../store/features/product/productActions'

const Shop = () => {

  const { token } = useSelector(state => state.auth)
  const { error } = useSelector(state => state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts(token))
  }, [])

  return (
    <>

        {error && (
                    <div class="alert alert-danger my-5" role="alert">
                        <strong>Error product</strong> { error }
                    </div>
                )}

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