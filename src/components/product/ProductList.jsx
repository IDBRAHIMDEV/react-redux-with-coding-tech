import { useSelector, useDispatch } from "react-redux"
import { setTitle } from "../../store/features/product/productSlice"
import { useState } from "react"

const ProductList = () => {

    const dispatch = useDispatch()

    const [label, setLabel] = useState('')

    const {title, products} = useSelector((state) => state.product)
    const { title: titleBlog } = useSelector((state) => state.blog)

    const changeTitle = () => {
        dispatch(setTitle(label))
    }

  return (
    <>
        <h1>{ title }</h1> 
        
        <input type="text" onChange={ (e) => setLabel(e.target.value) } value={ label }/>

        <button onClick={changeTitle}>click here</button>

        <h2>{ titleBlog }</h2> 

        <ul>
            {products.map(product => (

                <li key={product.id}>{ product.title }</li>
            ))}
        </ul>
    </>
  )
}

export default ProductList