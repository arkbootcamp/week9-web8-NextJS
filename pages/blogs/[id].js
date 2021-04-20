import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
export default function DetailBlog({ product}) {
  const router = useRouter()
  if(router.isFallback){
    return (
      <h1>loadingg......</h1>
    )
  }
  return (
    <div>
      <h1>halman detail</h1>
      <h4>{product[0].id}</h4>
      <h4>{product[0].name}</h4>
      <h4>{product[0].price}</h4>
      <h4>{product[0].description}</h4>
    </div>
  )
}

export const getStaticProps = async(ctx) =>{
  const id = ctx.params.id
  console.log(id);
  const result = await axios.get('http://localhost:4500/v1/products/'+id)
  const product = result.data.data
  return {
    props: {
      product
    }
  }
}

export const getStaticPaths = async() =>{

  const result = await axios.get('http://localhost:4500/v1/products')
  const product = result.data.data
  console.log(product);
  const paths = product.map((item)=>{
    return {
      params: { id: item.id }
    }
  })
return {
  fallback: true,
  paths: paths,
}
}
