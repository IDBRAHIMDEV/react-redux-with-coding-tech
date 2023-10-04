
import { useDispatch, useSelector } from "react-redux"
import { setProduct } from "../../store/features/product/productSlice"
import { storeProduct, modifyProduct } from "../../store/features/product/productActions"

const ProductForm = () => {

  const { product, edit } = useSelector(state => state.product)

  const dispatch = useDispatch()


  const submit = (e) => {
    e.preventDefault()

    if(edit) {
      dispatch(modifyProduct(product))
    }else {

      dispatch({
        type: "product/persistProduct",
        payload: product
      })
    }

  }

  return (
    <>
    
      {/* (.row.my-5>.col-6.mx-auto>h1.my-3{New product})+(.row.my-4>.col-md-6.mx-auto>(.form-group.my-3>label+input#title.form-control)+(.form-group.my-3>label+input:number.form-control#price)+(.d-grid.my-3>button.btn.btn-success{Add a product})) */}
      <div className="row my-5">
        <div className="col-6 mx-auto">
          <h1 className="my-3">New product</h1>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 mx-auto">

          <form onSubmit={submit}>
            <div className="form-group my-3">
              <label htmlFor="title">Title</label>
              <input 
                onChange={ ({ target: { name, value} }) => dispatch(setProduct({
                  name,
                  value
                })) } 
                value={product.title}
                name="title" 
                type="text" 
                id="title" 
                className="form-control" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="price">Price</label>
              <input 
                onChange={ ({ target: {name, value}}) => dispatch(setProduct({
                  name,
                  value
                })) } 
                value={product.price} 
                type="number" 
                name="price" 
                id="price" 
                className="form-control" />
            </div>
            <div className="d-grid my-3">
              {edit && (<button className="btn btn-warning">Update a product</button>)}
              {!edit && (<button className="btn btn-success">Add a product</button>)}
              
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductForm