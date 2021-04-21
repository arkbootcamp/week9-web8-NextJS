import React, { useState } from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
// import connection from '../../configs/db'
function Product2({ product}) {
  // const [search, setSearch] = useState('')
  const router = useRouter()
  const handleSearch=(e) =>{
    // console.log(search);
    router.push(`/product2?search=${e.target.value}`)

  }
  return (
    <div>
      <ul>
        {product.map((item)=>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
      {/* <input type="text" name="" id="" onKeyUp={(e) => handleSearch(e)}/> */}
      {/* <button onClick={handleSearch}>search</button> */}
      <hr/>
      {/* <ul>
        {users.map((item)=>
        <li>
          {item.name}
        </li>
        )}
      </ul> */}
    </div>
  )
}

Product2.getInitialProps = async(ctx) =>{
  // const search = ctx.query.search || ''

  // const result = await new Promise((resolve, reject) => {
  //   connection.query("SELECT * FROM products", (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       reject(err)
  //     } else {
  //       resolve(result)
  //     }
  //   })
  // })
  // console.log(result)


  // console.log(search);
  // const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + search)
  // const posts = result.data
  // console.log(posts);
  const result = await axios.get('http://localhost:4500/v1/products')
  const products = result.data.data
  return {
    product: products,
    // users: users
  }
}

export default Product2
