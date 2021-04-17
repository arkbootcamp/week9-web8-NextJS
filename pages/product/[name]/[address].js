import React from 'react'
import {useRouter} from 'next/router'
function DetailProduct() {
  const {query} = useRouter()
  return (
    <div>
      <h1>isi dinamic routing {JSON.stringify(query)}</h1>
    </div>
  )
}

export default DetailProduct
