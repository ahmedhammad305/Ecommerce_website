import { useSelector } from "react-redux";
import Form from "./Form";
import Footer from "./Footer";
import Swal from "sweetalert2";

function Payment(){
    const {cart} = useSelector(item=> item.user)
    const handle3 = () =>{
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: "Order Placed!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    const total = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
      }, 0)
    return(
    <>
        <div style={{marginBottom:'20px'}} className="Payment">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                    <div className="pilling">
                        <div className="info">
                            <form>
                                <h3>Billing Details</h3>
                                <input placeholder="Name" type="text"/>
                                <input placeholder="sssdsd" type="text"/>
                                <input placeholder="City" type="text"/>
                                <input placeholder="Country" type="text"/>
                                <input placeholder="Postcode" type="text"/>
                                <input placeholder="Phone" type="text"/>
                                <input placeholder="Email" type="text"/>
                            </form>
                        </div>
                    </div>
                    </div>
                    <div  className="col-12 col-md-6 col-lg-5">
                        <div style={{border:'1px solid #ddd'}} className="info">
                            <h2>Cart Totals</h2>
                            <div className="head">
                                <h3 style={{width:'100%'}}>Products</h3>
                                <h3 style={{paddingLeft:'30px'}}>Total</h3>
                            </div>
                            {cart.map((product) => (
                                <>
                                    <div className="item">
                                    <div style={{padding:'5px'}} className="image">
                                    <img style={{width:'70px'}} src={product.image} alt={product.id}/>
                                </div>
                                <div className="title">
                                    <h3 style={{color:'#088179'}}>{product.title} <span style={{padding:'2px',display:'block',width:'fit-content',marginTop:'5px', color:'#000000',fontWeight:'400',border:'1px solid #bfbfbf'}}>×{product.quantity}</span></h3>
                                </div>
                                <div className="price">
                                    <h3 style={{fontWeight:'500'}}>{product.price}$</h3>
                                </div>
                                    </div>
                                </>
                            ))}
                            <div style={{display:'flex'}} className="sub-total">
                                <h3 style={{fontWeight:'600'}}>Sub Total</h3>
                                <h3 style={{fontWeight:'400'}}>{total.toFixed(2)}$</h3>
                            </div>
                            <h3 style={{fontSize:'15px', fontWeight:'600', marginBottom:'10px',marginTop:'20px'}}>Payment</h3>
                            <div className="opt">
                            <div class="form-check se">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label style={{fontSize:'14px' ,color:'#475c53',fontWeight:'500'}} class="form-check-label" for="flexRadioDefault1">
                                Direct Bank Tranfer
                                </label>
                            </div>
                            <div class="form-check se">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label  style={{fontSize:'14px' ,color:'#475c53',fontWeight:'500'}} class="form-check-label" for="flexRadioDefault2">
                                    Paypal
                                </label>
                            </div>
                            <div class="form-check se">
                                <input  class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label  style={{fontSize:'14px' ,color:'#475c53',fontWeight:'500'}} class="form-check-label" for="flexRadioDefault2">
                                Cash On Delivary
                                </label>
                            </div>
                            </div>
                            <button onClick={()=> handle3()} style={{padding:'2px 15px'}}><span style={{marginLeft:'-4px',marginRight:'3px', fontSize:'17px',marginBottom:'10px',marginTop:'7px'}}></span> Place Order  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Form/>
        <Footer/>
    </>
)
}
export default Payment;