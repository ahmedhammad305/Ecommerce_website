import { useParams } from "react-router-dom";
import first1 from '../Image/f1.jpg'
import first2 from '../Image/f2.jpg'
import first3 from '../Image/f3.jpg'
import first4 from '../Image/f4.jpg'
import first5 from '../Image/f5.jpg'
import first6 from '../Image/f6.jpg'
import first7 from '../Image/f7.jpg'
import first8 from '../Image/f8.jpg'
// ///////////////////
import sconed1 from '../Image//n1.jpg'
import sconed2 from '../Image/n2.jpg'
import sconed3 from '../Image/n3.jpg'
import sconed4 from '../Image/n4.jpg'
import sconed5 from '../Image/n5.jpg'
import sconed6 from '../Image/n6.jpg'
import sconed7 from '../Image/n7.jpg'
import sconed8 from '../Image/n8.jpg'
import { IoIosCard } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { FaArrowsSpin } from "react-icons/fa6";
import { Addcart } from "../rtk/slices/cartSystem";
import { useDispatch } from "react-redux";
import Sconed2 from "./Sconed-2";
import Form from "./Form";
import Footer from "./Footer";
import Swal from "sweetalert2";
function ProductDetails(){
    const dispatch = useDispatch();
    const handle = (product) =>{
        dispatch(Addcart(product));
        Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Good job ",
            text: `item "${product.title}" Added To Cart`,
            showConfirmButton: false,
            timer: 1500
          });
      }
     
    const products = [
        {
            id:1,
            title:'Colorful Pattern Shirts',
            available:'10 Items In Stock',
            name:'T-Shirts',
            Brand:'GUCCI',
            price:'238.84',
            oldPrice:'250.8',
            category:'Hot',
            image:first1
            
        },
        {
            id:2,
            title:'Classic Leather Shoes',
            available:'5 Items In Stock',
            name:'Footware',
            Brand:'Zara',
            price:'149.99',
            oldPrice:'169.99',
            category:'New',
            image:first2
        },
        {
            id:3,
            title:'Colorful Pattern Shirts',
            available:'7 Items In Stock',
            name:'T-shirt',
            Brand:'NIKE',
            price:'289.95',
            oldPrice:'99.99',
            category:'Sale',
            image :first3
        },
        {
            id:4,
            title:'Vintage Wooden Desk',
            available:'9 Items In Stock',
            Brand:'FITBIT',
            price:'238.84',
            oldPrice:'250.8',
            category:'for free',
            image:first4
        },
        {
            id:5,
            title:'Healthy Meal Prep Cookbook',
            available:'5 Items In Stock',
            Brand:'LC',
            price:'321.84',
            oldPrice:'250.8',
            category:'New Arrival',
            image:first5
        },
        {
            id:6,
            title:'Pillowcase',
            available:'3 Items In Stock',
            Brand:'Defacto',
            price:'168.84',
            oldPrice:'250.8',
            category:'Hot',
            image:first6
        },
        {
            id:7,
            title:'Jumpsuit',
            available:'1 Items In Stock',
            Brand:'LC',
            price:'289',
            oldPrice:'250.8',
            category:'Best ',
            image:first7
        },
        {
            id:8,
            title:'Vintage Wooden Desk',
            available:'8 Items In Stock',
            Brand:'PRADA',
            price:'238.84',
            oldPrice:'250.8',
            category:'Recomend',
            image:first8,
        },
        {
            id:9,
            title:'Colorful Pattern Shirts',
            available:'2 Items In Stock',
            name:'T-Shirts',
            Brand:'FURNITURE',
            price:'259.84',
            oldPrice:'250.8',
            category:'Hot',
            image:sconed1,
        },
        {
            id:10,
            title:'Classic Leather Shoes',
            available:'3 Items In Stock',
            name:'Footware',
            Brand:'goso',
            price:'149.99',
            oldPrice:'169.99',
            category:'New',
            image:sconed2,
        },
        {
            id:11,
            title:'Designer Sunglasses',
            available:'9 Items In Stock',
            name:'Accessories',
            Brand:'Zara',
            price:'289.95',
            oldPrice:'99.99',
            category:'Sale',
            image:sconed3,
        },
        {
            id:12,
            title:'Smartphone Accessories Kit',
            available:'4 Items In Stock',
            name:'Electronics',
            Brand:'Adidas',
            price:'34.99',
            oldPrice:'39.99',
            category:'Best ',
            image:sconed4,
        },
        {
            id:13,
            title:'Healthy Meal Prep Cookbook',
            available:'6 Items In Stock',
            name:'Books',
            Brand:'Defacto',
            price:'19.99',
            oldPrice:'24.99',
            category:'Recommended',
            image:sconed5,
        
        },
        {
            id:14,
            title:'Fitness Tracker Watch',
            available:'10 Items In Stock',
            name:'Electronics',
            Brand:'Adidas',
            price:'79.99',
            oldPrice:'89.99',
            category:'special',
            image:sconed6,
        
        },
        {
            id:15,
            title:'Vintage Wooden Desk',
            available:'7 Items In Stock',
            name:'Furniture',
            Brand:'LC',
            price:'299.95',
            oldPrice:'349.99',
            category:'Sale',
            image:sconed7,
        },
        {
            id:16,
            title:'Designer Handbag',
            available:'2 Items In Stock',
            name:'Clothing',
            Brand:'NIKE',
            price:'199.99',
            oldPrice:'229.99',
            category:'New Arrival',
            image:sconed8,
        }
    ]
    const {id} = useParams();
    const product = products.find(p => p.id === parseInt(id, 10));
    if(!product){
        return <div>product not found</div>
    }
    return(  
        <>
    <div className="Details">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="Information">
                        <img style={{width:'100%', borderRadius:'7px'}} src={product.image} alt={product.id}/>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div style={{marginBottom:'-13px'}} className="information2">
                        <h1>{product.title}</h1>
                        <h5 style={{}}>Brand : <span>{product.Brand}</span></h5>
                        <hr style={{maxWidth:'200px', marginTop:'25px'}}/>
                    </div>
                    <div className="price">
                        <span style={{color:'#088179', fontWeight:'400',fontSize:'18px'}}>${product.price}</span>
                        <span style={{textDecoration:'line-through' ,color:'#858585', fontSize:'15px',marginLeft:'15px',fontWeight:'400'}}>{product.oldPrice}</span>
                        <span style={{color:'#565656' ,fontSize:'15px',marginLeft:'15px'}}>14% off</span>
                    </div>
                    <div className="About">
                        <hr  style={{maxWidth:'200px', marginTop:'0'}}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex, repellendus est consectetur facere ipsum provident! Eum doloribus libero soluta a facilis fugit, voluptates, nam doloremque nisi rem eaque cumque!</p>
                    </div>
                    <div className="feat">
                        <span><FaCrown/></span>
                        <h5>1 Year AL Jazzere Brand warranty</h5>
                    </div>
                    <div className="feat">
                        <span><FaArrowsSpin/></span>
                        <h5>30 Days Return Policy</h5>
                    </div>
                    <div className="feat">
                        <span><IoIosCard/></span>
                        <h5>Cash on Delivery availabel</h5>
                    </div>
                    <div className="color">
                        <h5 style={{marginTop:'7px',fontSize:'14px',color:'#565656',fontWeight:'700'}}>Color</h5>
                        <div className="info">
                        <span className="s1"></span>
                        <span className="s2"></span>
                        <span className="s3"></span>
                        </div>
                    </div>
                    <div className="action mb-5">
                        <div className="info">
                            <button onClick={() => handle(product)} className="btn butn">Add To Cart</button>
                        </div>
                    </div>
                    <div className="about mt-5 mb-5">
                        <p>Tags: Cloth, Women, Dress</p>
                        <p>Availabelity: {product.available} </p>
                    </div>
                </div>
                <h3 style={{fontSize:"15px",fontWeight:"600" ,marginTop:'50px'}}> <span style={{color:'#088179'}}>Additional info</span> Reviews (0)</h3>
                  <div className="col-12 col-md-12 col-lg-12 mt-5"> 
                    <div className="item">
                        <div style={{color:"#475c53"}}>NAME</div>
                        <div style={{color:'#959595'}}>{product.title}</div>

                        <div style={{color:"#475c53"}}>CATEGORY</div>
                        <div  style={{color:'#959595'}}>{product.name}</div>

                        <div style={{color:"#475c53"}}>BRAND</div>
                        <div  style={{color:'#959595'}}>{product.Brand}</div>

                        <div style={{color:"#475c53"}}>SIZE</div>
                        <div  style={{color:'#959595'}}>XL</div>

                        <div style={{color:"#475c53"}}>AVAILABLE</div>
                        <div  style={{color:'#959595'}}>{product.available}</div>

                        <div style={{color:"#475c53"}}>TAGS</div>
                        <div  style={{color:'#959595'}}>Cloth, Women, Dress</div>
                    </div>
                </div>                 
            </div>
        </div>
    </div>
    <Sconed2/>
    <Form/>
    <Footer/>
    </>
    )
}
export default ProductDetails;