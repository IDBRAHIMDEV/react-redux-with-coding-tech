
import { useDispatch } from 'react-redux'
import { editProduct } from '../../store/features/product/productSlice'
import { deleteProduct } from '../../store/features/product/productSlice'

const Buttons = ({ product }) => {

    const dispatch = useDispatch()

  return (
    <>
        <button onClick={ (e) => dispatch(editProduct(product)) } className="me-2 btn btn-sm btn-warning">Edit</button>
        <button onClick={(e) => dispatch(deleteProduct(product.id)) } className="btn btn-sm btn-danger">Delete</button>
    </>
  )
}

export default Buttons