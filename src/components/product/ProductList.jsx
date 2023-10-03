import { useSelector } from "react-redux"
import Buttons from "./Buttons"

const ProductList = () => {

  const {products} = useSelector(state => state.product)

  return (
    <>   
     {/* (table.table.table-dark>(tread>tr>th{Title}+th{Price}+th)+(tbody>tr>td*3)) */}
     <table className="table table-dark">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{ product.title }</td>
            <td>{ product.price }</td>
            <td className="text-end">
              <Buttons product={product} />
            </td>
          </tr>
        ))}
      </tbody>
     </table>
    </>
  )
}

export default ProductList