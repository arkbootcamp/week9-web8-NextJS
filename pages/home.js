import Layout from '../components/base/Layout'
import Link from 'next/link'
import {useRouter} from 'next/router'

function Home() {
  const router = useRouter()
  const handleRoute =()=>{
    router.push('/auth/login')
  }
  return (
    <Layout title="web 8 Home" isNav>
      <div className="container">
        <h1>halaman home</h1>
        <Link href="/about">
          <a>pindah ke about</a>
        </Link>
        <br/>
        <button onClick={() => router.push('/auth/login')}>Login</button>
      </div>
    </Layout>
  )
}

export default Home
