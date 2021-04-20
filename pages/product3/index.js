import axios from 'axios'
import React from 'react'
import connnection from '../../configs/db/index'

export default function Product3({ product}) {
  return (
    <div>
      <h1>halaman product 3</h1>
      <ul>
        {JSON.parse(product).map((item)=>
          <li>{item.name}</li>
        )}
      </ul>
    </div>
  )
}

 export const getServerSideProps = async(ctx) =>{
   const result = await new Promise((resolve, reject) => {
     connnection.query("SELECT * FROM products", (err, result) => {
       if (err) {
         console.log(err);
         reject(err)
       } else {
         resolve(result)
       }
     })
   })
   console.log(result)

   return{
     props: {
       product: JSON.stringify(result)
      //  product: []
     }
   }
  //  const result = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  //  const posts = result.data
  //  return {
  //    props:{
  //      posts
  //    }
  //  }
 }
