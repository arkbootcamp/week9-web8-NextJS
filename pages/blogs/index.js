import axios from 'axios'
import React from 'react'

export default function Blogs({ product}) {
  return (
    <div>
      <ul>
        {product.map((item)=>
        <li key={item.id}>{item.name}</li>
        )}
      </ul>
      
    </div>
  )
}

export const getStaticProps = async(ctx) =>{
  const result = await axios.get('http://localhost:4500/v1/products')
  const product = result.data.data
  return {
    props:{
      product: product
    }
  }
}
