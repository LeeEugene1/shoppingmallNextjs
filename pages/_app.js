import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import Top from '../src/components/Top'
import Footer from '../src/components/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
        <Top/>
        <Component {...pageProps} />
        <Footer/>
    </>
  )
}

export default MyApp
