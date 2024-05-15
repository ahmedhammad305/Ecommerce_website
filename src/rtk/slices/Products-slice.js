// import { createSlice } from "@reduxjs/toolkit";
// import first1 from '..//../Image/f1.jpg'
// import first2 from '..//../Image/f2.jpg'
// import first3 from '..//../Image/f3.jpg'
// import first4 from '..//../Image/f4.jpg'
// import first5 from '..//../Image/f5.jpg'
// import first6 from '..//../Image/f6.jpg'
// import first7 from '..//../Image/f7.jpg'
// import first8 from '..//../Image/f8.jpg'
// ///////////////////
// import sconed1 from '..//../Image//n1.jpg'
// import sconed2 from '..//../Image/n2.jpg'
// import sconed3 from '..//../Image/n3.jpg'
// import sconed4 from '..//../Image/n4.jpg'
// import sconed5 from '../../Image/n5.jpg'
// import sconed6 from '..//../Image/n6.jpg'
// import sconed7 from '..//../Image/n7.jpg'
// import sconed8 from '../../Image/n8.jpg'
// const products = [
//     {
//         id:1,
//         title:'Colorful Pattern Shirts',
//         name:'T-Shirts',
//         rate:'',
//         price:'238.84',
//         oldPrice:'250.8',
//         category:'Hot',
//         image:first1
        
//     },
//     {
//         id:2,
//         title:'Classic Leather Shoes',
//         name:'Footware',
//         rate:'',
//         price:'149.99',
//         oldPrice:'169.99',
//         category:'New',
//         image:first2
//     },
//     {
//         id:3,
//         title:'Colorful Pattern Shirts',
//         name:'T-shirt',
//         rate:'',
//         price:'289.95',
//         oldPrice:'99.99',
//         category:'Sale',
//         image :first3
//     },
//     {
//         id:4,
//         title:'Vintage Wooden Desk',
//         rate:'',
//         price:'238.84',
//         oldPrice:'250.8',
//         category:'for free',
//         image:first4
//     },
//     {
//         id:5,
//         title:'Healthy Meal Prep Cookbook',
//         rate:'',
//         price:'321.84',
//         oldPrice:'250.8',
//         category:'New Arrival',
//         image:first5
//     },
//     {
//         id:6,
//         title:'Pillowcase',
//         rate:'',
//         price:'168.84',
//         oldPrice:'250.8',
//         category:'Hot',
//         image:first6
//     },
//     {
//         id:7,
//         title:'Jumpsuit',
//         rate:'',
//         price:'289',
//         oldPrice:'250.8',
//         category:'Best ',
//         image:first7
//     },
//     {
//         id:8,
//         title:'Vintage Wooden Desk',
//         rate:'',
//         price:'238.84',
//         oldPrice:'250.8',
//         category:'Recomend',
//         image:first8,
//     },
//     {
//         id:9,
//         title:'Colorful Pattern Shirts',
//         name:'T-Shirts',
//         rate:'',
//         price:'259.84',
//         oldPrice:'250.8',
//         category:'Hot',
//         image:sconed1,
//     },
//     {
//         id:10,
//         title:'Classic Leather Shoes',
//         name:'Footware',
//         rate:'',
//         price:'149.99',
//         oldPrice:'169.99',
//         category:'New',
//         image:sconed2,
//     },
//     {
//         id:11,
//         title:'Designer Sunglasses',
//         name:'Accessories',
//         rate:'',
//         price:'289.95',
//         oldPrice:'99.99',
//         category:'Sale',
//         image:sconed3,
//     },
//     {
//         id:12,
//         title:'Smartphone Accessories Kit',
//         name:'Electronics',
//         rate:'',
//         price:'34.99',
//         oldPrice:'39.99',
//         category:'Best ',
//         image:sconed4,
//     },
//     {
//         id:13,
//         title:'Healthy Meal Prep Cookbook',
//         name:'Books',
//         rate:'',
//         price:'19.99',
//         oldPrice:'24.99',
//         category:'Recommended',
//         image:sconed5,
    
//     },
//     {
//         id:14,
//         title:'Fitness Tracker Watch',
//         name:'Electronics',
//         rate:'',
//         price:'79.99',
//         oldPrice:'89.99',
//         category:'special',
//         image:sconed6,
    
//     },
//     {
//         id:15,
//         title:'Vintage Wooden Desk',
//         name:'Furniture',
//         rate:'',
//         price:'299.95',
//         oldPrice:'349.99',
//         category:'Sale',
//         image:sconed7,
//     },
//     {
//         id:16,
//         title:'Designer Handbag',
//         name:'Clothing',
//         rate:'',
//         price:'199.99',
//         oldPrice:'229.99',
//         category:'New Arrival',
//         image:sconed8,
//     }
// ]
// export const productslice = createSlice({
//     initialState :[  {
//         id:1,
//         title:'Colorful Pattern Shirts',
//         name:'T-Shirts',
//         rate:'',
//         price:'238.84',
//         oldPrice:'250.8',
//         category:'Hot',
//         image:first1
        
//     },
//     {
//         id:2,
//         title:'Classic Leather Shoes',
//         name:'Footware',
//         rate:'',
//         price:'149.99',
//         oldPrice:'169.99',
//         category:'New',
//         image:first2
//     },
//     {
//         id:3,
//         title:'Colorful Pattern Shirts',
//         name:'T-shirt',
//         rate:'',
//         price:'289.95',
//         oldPrice:'99.99',
//         category:'Sale',
//         image :first3
//     },
//     {
//         id:4,
//         title:'Vintage Wooden Desk',
//         rate:'',
//         price:'238.84',
//         oldPrice:'250.8',
//         category:'for free',
//         image:first4
//     },
//     {
//         id:5,
//         title:'Healthy Meal Prep Cookbook',
//         rate:'',
//         price:'321.84',
//         oldPrice:'250.8',
//         category:'New Arrival',
//         image:first5
//     },
//     {
//         id:6,
//         title:'Pillowcase',
//         rate:'',
//         price:'168.84',
//         oldPrice:'250.8',
//         category:'Hot',
//         image:first6
//     },
//     {
//         id:7,
//         title:'Jumpsuit',
//         rate:'',
//         price:'289',
//         oldPrice:'250.8',
//         category:'Best ',
//         image:first7
//     },
//     {
//         id:8,
//         title:'Vintage Wooden Desk',
//         rate:'',
//         price:'238.84',
//         oldPrice:'250.8',
//         category:'Recomend',
//         image:first8,
//     },
//     {
//         id:9,
//         title:'Colorful Pattern Shirts',
//         name:'T-Shirts',
//         rate:'',
//         price:'259.84',
//         oldPrice:'250.8',
//         category:'Hot',
//         image:sconed1,
//     },
//     {
//         id:10,
//         title:'Classic Leather Shoes',
//         name:'Footware',
//         rate:'',
//         price:'149.99',
//         oldPrice:'169.99',
//         category:'New',
//         image:sconed2,
//     },
//     {
//         id:11,
//         title:'Designer Sunglasses',
//         name:'Accessories',
//         rate:'',
//         price:'289.95',
//         oldPrice:'99.99',
//         category:'Sale',
//         image:sconed3,
//     },
//     {
//         id:12,
//         title:'Smartphone Accessories Kit',
//         name:'Electronics',
//         rate:'',
//         price:'34.99',
//         oldPrice:'39.99',
//         category:'Best ',
//         image:sconed4,
//     },
//     {
//         id:13,
//         title:'Healthy Meal Prep Cookbook',
//         name:'Books',
//         rate:'',
//         price:'19.99',
//         oldPrice:'24.99',
//         category:'Recommended',
//         image:sconed5,

//     },
//     {
//         id:14,
//         title:'Fitness Tracker Watch',
//         name:'Electronics',
//         rate:'',
//         price:'79.99',
//         oldPrice:'89.99',
//         category:'special',
//         image:sconed6,

//     },
//     {
//         id:15,
//         title:'Vintage Wooden Desk',
//         name:'Furniture',
//         rate:'',
//         price:'299.95',
//         oldPrice:'349.99',
//         category:'Sale',
//         image:sconed7,
//     },
//     {
//         id:16,
//         title:'Designer Handbag',
//         name:'Clothing',
//         rate:'',
//         price:'199.99',
//         oldPrice:'229.99',
//         category:'New Arrival',
//         image:sconed8,
//     },],
//     name:"productslice",
//     reducers :{
//         addproduct :(state, action) =>{
//             state.push(action.payload)
//         }
//     }
// })
// export const {addproduct} = productslice.actions;
// export default productslice.reducer;
