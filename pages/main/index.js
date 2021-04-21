import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Router from 'next/router'

function Main({dataProducts}) {
  const [products, setProducts] = useState([])
  // useEffect(() => {
  //   axios.get('http://localhost:4500/v1/products', {
  //     withCredentials: true,
  //   })
  //   .then((res)=>{
  //     const products = res.data.data
  //     setProducts(products)
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }, [])
  return (
    <div className="container">
      <h1>halmaan main</h1>
      {dataProducts.map((item) =>
        <div className="card" key={item.id}>
          <div className="card-body">
            <p>{item.name}</p>
      </div>
        </div>
      )}

    </div>
  )
}
Main.getInitialProps = async (ctx) => {
  try {
    
 
  let cookie = ''
  if(ctx.req){
    // console.log(ctx.req.headers.cookie);
    cookie = ctx.req.headers.cookie
    // log(ctx.req
  }

  const res = await axios.get('http://localhost:4500/v1/products', {
      withCredentials: true,
      headers: {
        cookie: cookie
      }
    })
    // console.log(res);
  const products = res.data.data
  return { dataProducts: products}
  } catch (error) {
    // console.log('err', error);
    
    if(ctx.req){
      // console.log(re);
      ctx.res.writeHead(301,
        { Location: 'http://localhost:3000/auth/login'}
      );
      ctx.res.end();
    }
    if (!ctx.req){
      Router.push('/auth/login')
    }
    return { dataProducts: [] }
  }
}

export default Main
