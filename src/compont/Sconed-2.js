// import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
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
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Addcart } from "../rtk/slices/cartSystem";
import Swal from "sweetalert2";


// import { products } from "./New";
function Sconed2(){
    const dispath = useDispatch();
    const handle = (product) =>{
        dispath(Addcart(product));
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
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
            amount:1,
            available:'2 Items In Stock',
            name:'Clothing',
            Brand:'NIKE',
            price:'199.99',
            oldPrice:'229.99',
            category:'New Arrival',
            image:sconed8,
        }
    ]
    return(
        <>
        <div className="categories mb-5">
            <div className="container mb-5">
                <h2 style={{color:'088179', fontWeight:'600'}}>New <span style={{ marginLeft:'5px'}}>Arrival</span></h2>
                <div className="row">
                { products.slice(8, 16).map((product, index) =>{
                return( <>
                    <div key={index} style={{padding:'30px'}} className="col-md-6 col-lg-4 mb-3">
                        <div key={index} style={{}} className="First-Section">
                            <Link to={`/product/${product.id}`}><img style={{borderRadius :"5px", display:'block', width:'100%'}} className="img-fluid" src={product.image} alt={product.id}/></Link>
                            <h5>{product.name}</h5> 
                                <Link to={`/product/${product.id}`}>
                                    <h1>{product.title}</h1>
                                </Link>
                                    <span style={{color:'#ffb300',fontSize:'18px'}}><AiFillStar/></span>
                                    <span style={{color:'#ffb300',fontSize:'18px'}}><AiFillStar/></span>
                                    <span style={{color:'#ffb300',fontSize:'18px'}}><AiFillStar/></span>
                                    <span style={{color:'#ffb300',fontSize:'18px'}}><AiFillStar/></span>
                                    <h6 className="pos">{product.category}</h6>
                                    
                                    <div style={{marginTop:'10px' ,display:'flex', alignItems:'center'}} className="content">
                                        <span style={{color:'#088179' ,fontSize:'17px', marginRight :'12px', fontWeight:'500'}}>${product.price}</span>
                                        <span style={{textDecoration:'line-through',color:'#6a6a6a',fontSize:'14px'}}>{product.oldPrice}</span>
                                    </div>
                                    <div className="link">
                                    <Link to={''} onClick={()=> handle(product)}><FaCartPlus/></Link>
                                    </div>
                        </div>
                    </div>
                </>
                )})}
                </div>
        </div>
        </div>
        </>
    )
}
export default Sconed2;
