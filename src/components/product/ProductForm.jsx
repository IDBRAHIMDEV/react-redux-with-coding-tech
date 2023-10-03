import { useState } from "react"
import { useDispatch } from "react-redux"
import { persistProduct } from "../../store/features/product/productSlice"

const ProductForm = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)

  const submit = (e) => {
    e.preventDefault()
    dispatch(persistProduct({title, price}))
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
                value={title} 
                type="text" 
                id="title" 
                className="form-control" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="price">Price</label>
              <input 
                onChange={ (e) => setPrice(e.target.value) } 
                value={price} 
                type="number" 
                name="title" 
                id="price" 
                className="form-control" />
            </div>
            <div className="d-grid my-3">
              <button className="btn btn-success">Add a product</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductForm