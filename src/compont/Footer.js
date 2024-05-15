import { Link } from 'react-router-dom';
import imgg from '../Image/logo.svg'
import imgg2 from '../Image/payment-method.png'
function Footer(){
    return(
        <>
        <div className="Footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-3 mb-5">
                        <div className="information">
                            <img style={{width:'100px', marginBottom:'15px',}} className='image-fluid' src={imgg} alt='2'/>
                            <h3 >Contact</h3>
                            <h4 ><span>Address:</span> 65 Roshdi street, cairo</h4>
                            <h4 ><span>Phone:</span>+20 155 8591 539</h4>
                            <h4 ><span>Hours:</span>10.00-18.00, Man-Sat</h4>
                            <h3>Follow Me</h3>
                        </div>
                    </div>
                    <div style={{marginLeft:'-26px'}} className='col-6 col-lg-3 mb-5'>
                        <div className='information'>
                            <h2>Links</h2>
                            <ul className='never'>
                                <li><Link>About Us</Link></li>
                                <li><Link> Delivery Information</Link></li>
                                <li><Link>Privacy Policy</Link></li>
                                <li><Link>Term & Conditions</Link></li>
                                <li><Link>Contact Us</Link></li>
                                <li><Link>Support Center</Link></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div style={{marginLeft:'-30px'}} className='col-6 col-lg-3 mb-5'>
                        <div className='information'>
                            <h2>My Account</h2>
                            <ul className='never'>
                                <li><Link>Sign In</Link></li>
                                <li><Link> View Cart</Link></li>
                                <li><Link>My Wishlist</Link></li>
                                <li><Link>Track My Order</Link></li>
                                <li><Link>Help</Link></li>
                                <li><Link>Order</Link></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className='col-6 col-lg-3'>
                        <h2 style={{fontSize:'16px',fontWeight:'700'}}>Secured Payment Goteways</h2>
                        <img style={{width:'100%', maxWidthL:'250px'}} src={imgg2} className='image-fluid' alt='2'/>
                    </div>
                </div>
            </div>
            <h2 style={{color:'#7e7e7e', fontSize:'14px',fontWeight:'600', padding:'10px 15px'}} className='text-center'>Copyright 2023 © All Right Reserved</h2>
        </div>
        </>
    )
}
export default Footer;