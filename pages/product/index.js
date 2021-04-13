import axios from 'axios'
import {useEffect, useState} from 'react'
import Card from '../../components/module/Card'
function Product() {
  const [post, setPost] = useState([])
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      const data = res.data
      console.log(data)
      setPost(data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div>
      <h1>halaman product</h1>
      {post.map((item)=>
        <Card title={item.title} body={item.body} key={item.id}/>
        // <h1>{item.title}</h1>
      )}
    </div>
  )
}

export default Product
