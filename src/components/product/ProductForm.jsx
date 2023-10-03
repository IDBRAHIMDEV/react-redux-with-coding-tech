import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { persistProduct, updateProduct } from "../../store/features/product/productSlice"

const ProductForm = () => {

  const { product, edit } = useSelector(state => state.product)

  const dispatch = useDispatch()

  const [title, setTitle] = useState()
  const [price, setPrice] = useState()

  const submit = (e) => {
    e.preventDefault()

    const data = { title, price }

    if(edit) {
      dispatch(updateProduct(data))
    }else {

      dispatch(persistProduct(data))
    }

    setTitle('')
    setPrice(0)
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
                onChange={ (e) => setTitle(e.target.value) } 
                value={title || product.title} 
                type="text" 
                id="title" 
                className="form-control" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="price">Price</label>
              <input 
                onChange={ (e) => setPrice(e.target.value) } 
                value={price || product.price} 
                type="number" 
                name="title" 
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