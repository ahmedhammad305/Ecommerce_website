/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import image1 from'../Image/home-img.png'
function FristPage(){
    return(
        <>
            <div className="First-page">
                <div style={{marginBottom:'100px'}} className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 mb-5">
                            <div className="text">
                                <span className='hom-sub'>Hot Promotions</span>
                                <h2 className='hom-title'>Fashion Trending</h2>
                                <h1 className='hom-title'>Great Collections</h1>
                                <p className='home-des'>Save more with coupons & up to 20% off</p>
                                <Link to={'/Products'} className='btnn btn'>Shop Now</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="Head">
                                <img style={{width:'600px'}} className="img-fluid" src ={image1} alt='/'/>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default FristPage;