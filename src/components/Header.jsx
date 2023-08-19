import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { TiThMenuOutline } from 'react-icons/ti';
import { CgClose } from 'react-icons/cg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {signOut } from 'firebase/auth'
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';



const logo = (
  <Link to="/">
    <div>
      <h1 className='font-semibold text-2xl text-blue-900'>
        <span className='font-bold text-blue-700 text-3xl'>E</span>
        -Store
      </h1>
    </div>
  </Link>
)

const cart = (
  <span>
    <Link to="/Cart" className='flex gap-0.7 pt-1 text-blue-900 hover:duration-300 hover:scale-110'>
      <FaShoppingCart size={32} className='pt-1.5 '/>
      <p className=' font-bold'>0</p>
    </Link>
  </span>
)

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  const hideMenu = () => {
    setShowMenu(false);
  }

  function onOutsideClick(){
    setShowMenu(false);
  }

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Sign-out successful")
      navigate("/");
    }).catch((error) => {
      toast.error(error.message)
    });
  }


  return (

    
    <div className='shadow-[0_10px_20px_rgba(0,0,0,0.05)]'>
    <div className=' w-11/12 lg:w-9/12 flex flex-row justify-between py-5 m-auto text-center  items-center'>
      {logo}

      <nav className='hidden lg:flex w-4/5 justify-between'>

        <ul className='flex gap-4 xl:gap-12 items-center'>
          <li className='h3 hover:text-red-600 hover:duration-300'>
            <Link to="/" >
                <h3>
                  Home
                </h3>
            </Link>
          </li>
          <li className='h3 hover:text-red-600 hover:duration-300'>
            <Link to="/Contact" >
                <h3>
                  Contact Us
                </h3>
            </Link>
          </li>
          <li className='h3 hover:text-red-600 hover:duration-300'>
            <Link to="/OrderHistory" >
                <h3>
                  My Orders
                </h3>
            </Link>
          </li>
          <li className='h3 hover:text-red-600 hover:duration-300'>
            <Link to="/" onClick={logoutUser} >
                <h3>
                  Logout
                </h3>
            </Link>
          </li>
        </ul>

        {/* className=' hover:text-[#515251]' */}
        <span className='flex gap-6'>
          <Link className='h3 py-2 px-10 border-blue-900 border-2 shadow-xl rounded-3xl  hover:border-gray-100 hover:duration-300 hover:text-[#515251] hover:bg-gray-100 ' to="/Login"><h3 className='drop-shadow-2xl'>Login</h3></Link>
          <Link className='py-2 px-10 rounded-3xl bg-blue-900 shadow-xl border-2 text-white hover:border-gray-100 hover:duration-300 hover:text-[#515251]  hover:bg-gray-100'to="/Register" ><h3>Register</h3></Link>
          {cart}
        </span>
      </nav>

      <div className='flex gap-3 lg:hidden hover:cursor-pointer' onClick={toggleMenu}>
        {cart}
        <TiThMenuOutline size={38} className='pt-2.5 text-blue-900 hover:drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)]' />
      </div>

       <div onClick={onOutsideClick} className={`${showMenu ? 'absolute' : 'hidden'}  right-0 top-0 w-full h-full backdrop-blur-sm`}>
          <div onClick={(e) => e.stopPropagation()} className='absolute z-200 right-2 top-4 rounded-lg bg-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] w-64 py-4 pb-7 px-1'>
            <span className='flex justify-between px-2.5 mb-12'>
              {logo}
              <CgClose onClick={hideMenu} size={30} className='pt-1.5 text-[#11453b] hover:cursor-pointer hover:text-red-600 hover:drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)]' />
            </span>
            <ul className='text-start pl-4'>
              <li>
                <Link to="/" >
                    <h3 className='h3 py-1.5 AoenikBold hover:text-red-600 hover:duration-300'>
                      <span onClick={hideMenu}> Home</span>
                    </h3>
                </Link>
              </li>
              <li>
                <Link to="/Contact" >
                    <h3 className='h3 py-1.5 AoenikBold hover:text-red-600 hover:duration-300'>
                    <span onClick={hideMenu}> Contact Us</span>
                    </h3>
                </Link>
              </li>
              <li>
                <Link to="/OrderHistory" >
                    <h3 className='h3 py-1.5 AoenikBold hover:text-red-600 hover:duration-300'>
                      <span onClick={hideMenu}> My Orders</span>
                    </h3>
                </Link>
              </li>

              <li >
                <Link to="/" >
                    <h3  className='h3 my-10 AoenikBold hover:text-red-600 hover:duration-300'>
                      <span onClick={hideMenu}>Login</span>
                    </h3>
                </Link>
              </li>
            </ul>
            <span>
              <Link to="/Register" >
                      <h3 className=' w-11/12 m-auto AoenikBold py-2.5 px-10 rounded-3xl bg-blue-900 shadow-xl border-transparent border-2 text-white hover:border-gray-100 hover:duration-300 hover:text-black hover:bg-gray-100'>
                        <span onClick={hideMenu}>Register</span>
                      </h3>
              </Link>
            </span>
          </div>
        </div>
 

    </div>
    </div>

    // <div className='border-b-gray-200 border-b-2'>
    // <div className=' w-11/12 lg:w-4/5  flex flex-row justify-between py-3.5 m-auto text-center items-center'>
    //   {logo}
    //   <nav className='flex justify-between w-3/5 text-center items-center'>

    //     <ul className='flex justify-between gap-3 lg:gap-7'>
    //       <li>
    //         <Link to="/" >
    //           <h3>
    //             Home
    //           </h3>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/Contact" >
    //           <h3>
    //             Contact us
    //           </h3>
    //         </Link>
    //       </li>
    //     </ul>

    //     <div className='flex justify-between gap-1 lg:gap-3 '>
    //       <span className='flex justify-between gap-5'>
    //         <Link to="/Login">Login</Link>
    //         <Link to="/Register">Register</Link>
    //         <Link to="/OrderHistory">OrderHistory</Link>
    //       </span>
    //       {cart}
    //     </div>

    //   </nav>

    //   <div className='flex gap-3 md:hidden'>
    //     {cart}
    //     <TiThMenuOutline size={30} className='pt-1.5' />
    //   </div>


    // </div>
    // </div>
  )
}

export default Header