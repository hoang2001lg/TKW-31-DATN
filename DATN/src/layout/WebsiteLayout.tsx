import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
    )
}

export default WebsiteLayout