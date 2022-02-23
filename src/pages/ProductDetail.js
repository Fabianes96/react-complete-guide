import {useParams} from 'react-router-dom'

export const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product detail</h1>
      <p>{params.id}</p>
    </section>
  )
}
