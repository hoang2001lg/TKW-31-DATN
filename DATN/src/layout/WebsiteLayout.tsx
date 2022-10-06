import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../templace/js/jquery-3.3.1.min.js'
import '../templace/js/bootstrap.min.js'
import '../templace/js/jquery.magnific-popup.min.js'
import '../templace/js/masonry.pkgd.min.js'
import '../templace/js/jquery.barfiller.js'
import '../templace/js/jquery.slicknav.js'
import '../templace/js/owl.carousel.min.js'
import '../templace/js/main.js'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default WebsiteLayout