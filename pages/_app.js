import '../styles/globals.css'
import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/module/Navbar'


function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
