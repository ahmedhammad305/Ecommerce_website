import logo from '../Image/logo.svg'
  // import { ImHeart } from "react-icons/im";
// import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from 'react-router-dom';
// import { IoIosHeart } from "react-icons/io";
import { useSelector } from 'react-redux';
import Cart from '../Image/cart-shopping-solid.svg'
import heart from '../Image/heart-solid.svg'

function NavBar (){
  const {cart} = useSelector(item => item.user)
  return (
    <>
      <nav style={{marginBottom:'70px', marginTop:'10px'}} className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <img src={logo} alt='/'   className ="logo"/>
      <ul className="navbar-nav so ms-auto">
            <li className="nav-item ">
              <Link to={"/"} className="nav-link " aria-current="page" ><img style={{width:'20px'}} src={heart} alt='0'/></Link>
            </li>
            <li className="nav-item ">
              <Link to={"/Cart1"} className="nav-link" ><img style={{width:'20px'}} src={Cart} alt='0'/></Link>
            </li>
            <li className='count'>{cart.length}</li>
          </ul>
        <button className="navbar-toggler bot " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ">
              <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Products"} className="nav-link active">Product</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Login"} className="nav-link active" >Login</Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/"} className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</Link>
            </li> */}
          </ul>
          
        </div>

      </div>
      
    </nav>
    </> 
    )
}
export default NavBar;
 





      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <div className="container-fluid">
      //   <img src={logo} alt='/'   className ="logo"/>
      //   <ul className="navbar-nav so ms-auto">
      //         <li className="nav-item">
      //           <Link to={"/"} className="nav-link active" aria-current="page" ><IoIosHeart/></Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to={"/Cart1"} className="nav-link" ><HiMiniShoppingCart/></Link>
      //         </li>
      //         <li className='count'>{cart.length}</li>
      //       </ul>
      //     <button className="navbar-toggler bot " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse " id="navbarNav">
      //       <ul className="navbar-nav me-auto">
      //         <li className="nav-item">
      //           <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to={"/ProductDetails"} className="nav-link">Features</Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to={"/Login"} className="nav-link" >Login</Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to={"/"} className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</Link>
      //         </li>
      //       </ul>
            
      //     </div>
  
      //   </div>
        
      // </nav>