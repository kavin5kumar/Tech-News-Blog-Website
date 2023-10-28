import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
  

const Nav = ({search, setSearch}) => {
  const [hamb, setHamb] = useState(false);
  

  const toggle = () => {
    if(hamb) {
      setHamb(false);
    } else {
      setHamb(true);
    }
  }



  return (
    <div className="bg-black text-white flex justify-between items-center px-5">
        <input type="text" name="Text bar" className="h-3/4 w-1/2 ps-2 text-black" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
        <nav className={`flex h-full gap-5 max-[420px]:flex-col max-[420px]:relative max-[420px]:top-24 max-[420px]:left-24 max-[420px]:bg-black max-[420px]:z-[99999999] max-[420px]:px-2 max-[420px]:py-3.5 ${hamb ? '' : 'max-[420px]:hidden'}`} >
            <Link to={'/'} className='hover:bg-gray-700 grid place-content-center h-full w-full px-4'><h1>Home</h1></Link>
            <Link to={'/post'} className='hover:bg-gray-700 grid place-content-center h-full w-full px-4'><h1>Post</h1></Link>
            <Link to={'/about'} className='hover:bg-gray-700 grid place-content-center h-full px-4'><h1>About</h1></Link>
        </nav>
        <button onClick={() => toggle()} className='hidden max-[420px]:block'><GiHamburgerMenu/></button>
    </div>
  )
}
Nav.propTypes = {  
  search: PropTypes.string,
  setSearch: PropTypes.func,   
}  


export default Nav