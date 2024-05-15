import {  useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import {  deletecar } from "../rtk/slices/cartSystem";
import { increm } from "../rtk/slices/cartSystem";
import { decre } from "../rtk/slices/cartSystem";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { MdFingerprint } from "react-icons/md";
import { TiArrowShuffle } from "react-icons/ti";
import { FaBagShopping } from "react-icons/fa6";
import Form from "./Form";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";


function Cart1(){
    const {cart} = useSelector(item=> item.user)
    const handle2 = (product) =>{
      dispatch(deletecar(product));
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "Good Job",
        text:"Deleted From Cart",
        showConfirmButton: false,
        timer: 1500
      });
    }
    const dispatch = useDispatch();
    const total = cart.reduce((acc, product) => {
      acc += product.price * product.quantity;
      return acc;
    }, 0)
    const subtotal = total + 10;
    
    // return(
    //     <>
    //     <section className="section mb-5">
    //       <table width='100%'>
    //         <thead>
    //           <tr>
    //             <td >Image</td>
    //             <td>Categories</td>
    //             <td style={{paddingLeft:'26px'}}>Price</td>
    //             <td>Quantity</td>
    //             <td >Remove</td>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {cart.map((product) => (
    //             <>
    //             <tr key={product.id}>
    //               <td>
    //                 <img style={{width:'95px'}} src={product.image} alt={product.id}/>
    //               </td>
    //               <td style={{color:'#088179',fontWeight:'600'}}>
    //                 {product.title}
    //               </td>
    //               <td style={{fontSize:'14px',paddingLeft:'24px'}}>{product.price}$</td>
    //               <td style={{fontSize:'14px'}}>
    //                 <div style={{display:'flex',justifyContent:'center'}}>
    //                   <button onClick={() => dispatch(increm(product))} >+</button>
    //                   <input value={product.quantity} type="text"/>
    //                   {/* <h5>{</h5> */}
    //                   <button onClick={()=> dispatch(decre(product))}>-</button>
    //                 </div>
    //                 </td>
    //                 {/* <td>{total}</td> */}
    //               <td onClick={() => dispatch(deletecar(product))} style={{fontSize:'20px',}}><MdDelete style={{cursor:'pointer'}}/></td>
    //             </tr>
    //             </>
    //           ))}
    //         </tbody>
    //       </table>
    //       {/* <h5>total Price:  {total.toFixed(2)}$</h5> */}
    //     </section>
    //     <div className="shoping m">
    //       <div className="container">
    //         <div style={{position:'relative'}} className="info mb-5">
    //           <button> <span style={{marginLeft:'-4px',marginRight:'3px', fontSize:'17px'}}><HiMiniShoppingCart/></span> Continue shopping </button>
    //         </div>
    //         <div className="line mt-5">
    //           <div className="about"><MdFingerprint/></div>
    //         </div>
    //         <div style={{padding:'30px'}} className="row">
    //           <div className="col-12 col-md-6 col-lg-6">
    //             <h3>Update </h3>
    //             <input placeholder="State / Country" type="text"/>
    //             <input  placeholder="City" type="text"/>
    //             <input  placeholder="Post Code / Zip" type="text"/>
    //           <div style={{position:'relative'}} className="info mb-5">
    //             <button style={{padding:'4px 17px', marginTop:'7px'}}><span style={{marginLeft:'-4px',marginRight:'3px', fontSize:'17px',marginTop:'17px'}}><TiArrowShuffle/></span> Update  </button>
    //           </div>
    //           <div style={{position:'relative'}} className="info mb-5">
    //           <h3>Apply Coupon </h3>
    //           <input placeholder="Enter Your Coupon" type="text"/>
    //             <button style={{padding:'2px 15px'}}><span style={{marginLeft:'-4px',marginRight:'3px', fontSize:'17px',marginBottom:'10px',marginTop:'7px'}}></span> Apply  </button>
    //           </div>
    //           </div>
    //           <div className="col-12 col-md-6 col-lg-6 mt-5">
    //             <div className="content">
    //               <h3>Cart Totals</h3>
    //                 <h4>Cart Subtotal</h4>
    //                 <h4 className="li">{total.toFixed(2)}$</h4>
    //                 <h4>Shipping</h4>
    //                 <h4 className="li">$10.00</h4>
    //                 <h4>Total</h4>
    //                 <h4 style={{marginBottom:'20px'}} className="li">{subtotal}$</h4>
    //                 <Link to={'/Payment'} className="bot" style={{marginTop:'15px'}}><span style={{marginLeft:'-4px',marginRight:'3px', fontSize:'17px',marginBottom:'10px',marginTop:'7px'}}><FaBagShopping/></span> Proceed To Checkout  </Link>                </div>

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <Form/>
    //     <Footer/>
    //     </>
    //     )

    if(cart.length === 0){
      return <>
      <div className="empty">
        <div className="container">
          <div className="text-center">
            <h2 style={{fontSize:'40px'}}><IoCloseCircleOutline/></h2>
            <h2 style={{color:'#475c53',textTransform:'uppercase',fontSize:'17px', wordSpacing:'4' ,marginTop:'20px' ,marginBottom:'20px'}}>Your Cart is empty</h2>
            <Link style={{fontSize:'13px' ,padding:'8px 12px' ,borderRadius:'4px'}} to={'/Products'} className='btnn btn'>Continue shopping</Link>
          </div>
        </div>
      </div>
      <Form/>
      <Footer/>
      </> 
    }
    return(
      <>
      <section className="section mb-5">
           <table width='100%'>
            <thead>
               <tr>
               <td >Image</td>
                <td>Categories</td>
                <td style={{paddingLeft:'26px'}}>Price</td>
                <td>Quantity</td>
                <td >Remove</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <>
                <tr key={product.id}>
                  <td>
                    <img style={{width:'95px'}} src={product.image} alt={product.id}/>
                  </td>
                  <td style={{color:'#088179',fontWeight:'600'}}>
                    {product.title}
                  </td>
                  <td style={{fontSize:'14px',paddingLeft:'24px'}}>{product.price}$</td>
                  <td style={{fontSize:'14px'}}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                      <button onClick={() => dispatch(increm(product))} >+</button>
                      <input value={product.quantity} type="text"/>
                      {/* <h5>{</h5> */}
                      <button onClick={()=> dispatch(decre(product))}>-</button>
                    </div>
                    </td>
                  <td onClick={() => handle2(product) } style={{fontSize:'20px',}}><MdDelete style={{cursor:'pointer'}}/></td>
                </tr>
                </>
              ))}
            </tbody>
          </table>
        </section>
        <div className="shoping m">
          <div className="container">
            <div style={{position:'relative'}} className="info mb-5">
              <button> <span style={{marginLeft:'-4px',marginRight:'3px', fontSize:'17px'}}><HiMiniShoppingCart/></span> Continue shopping </button>
            </div>
            <div className="line mt-5">
              <div className="about"><MdFingerprint/></div>
            </div>
            <div style={{padding:'30px'}} className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <h3>Update </h3>
                <input placeholder="State / Country" type="text"/>
                <input  placeholder="City" type="text"/>
                <input  placeholder="Post Code / Zip" type="text"/>
              <div style={{position:'relative'}} className="info mb-5">
                <button style={{padding:'4px 17px', marginTop:'7px'}}><span style={{marginLeft:'-4px',marginRight:'3px', fontSize:'17px',marginTop:'17px'}}><TiArrowShuffle/></span> Update  </button>
              </div>
              <div style={{position:'relative'}} className="info mb-5">
              <h3>Apply Coupon </h3>
              <input placeholder="Enter Your Coupon" type="text"/>
                <button style={{padding:'2px 15px'}}><span style={{marginLeft:'-4px',marginRight:'3px', fontSize:'17px',marginBottom:'10px',marginTop:'7px'}}></span> Apply  </button>
              </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mt-5">
                <div className="content">
                  <h3>Cart Totals</h3>
                    <h4>Cart Subtotal</h4>
                    <h4 className="li">{total.toFixed(2)}$</h4>
                    <h4>Shipping</h4>
                    <h4 className="li">$10.00</h4>
                    <h4>Total</h4>
                    <h4 style={{marginBottom:'20px'}} className="li">{subtotal}$</h4>
                    <Link to={'/Payment'} className="bot" style={{marginTop:'15px'}}><span style={{marginLeft:'-4px',marginRight:'3px', fontSize:'17px',marginBottom:'10px',marginTop:'7px'}}><FaBagShopping/></span> Proceed To Checkout  </Link>                </div>

              </div>
            </div>
          </div>
        </div>
        <Form/>
        <Footer/>
      </>
    )
  }


export default Cart1;
