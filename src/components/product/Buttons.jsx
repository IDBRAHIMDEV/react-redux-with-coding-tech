
import { useDispatch } from 'react-redux'
import { editProduct } from '../../store/features/product/productSlice'
import { destroyProduct } from '../../store/features/product/productActions'

const Buttons = ({ product }) => {

    const dispatch = useDispatch()

  return (
    <>
        <button onClick={ (e) => dispatch(editProduct(product)) } className="me-2 btn btn-sm btn-warning">Edit</button>
        <button onClick={(e) => dispatch(destroyProduct(product.id)) } className="btn btn-sm btn-danger">Delete</button>
    </>
  )
}

export default Buttons