
import Top from './Top'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'; 

const Layout = ({
    search,
    setSearch,
    width
}) => {
  return (
    <div className='min-w-screen bg-gray-200 flex items-center justify-center'>
        <div className="w-full max-w-[800px] h-full shadow-xl border border-charcoal grid grid-rows-[100px_50px_1fr_60px]">
          <Top width={width}/>
          <Nav search={search} setSearch={setSearch}/>
          <Outlet/>
          <Footer/>
        </div>
    </div>
  )
}

Layout.propTypes = {  
    search: PropTypes.string,
    setSearch: PropTypes.func,
    width: PropTypes.number   
}  

export default Layout