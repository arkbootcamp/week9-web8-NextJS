import '../styles/globals.css'
import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/module/Navbar'

const islogin = ()=>{
  if (typeof window !== "undefined") {
    if (localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  }
}
function MyApp({ Component, pageProps }) {
  return (
    <>
      {islogin() ? 
      <Navbar/>: <div></div>
      }
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
