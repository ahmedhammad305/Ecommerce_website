// import { Button } from "bootstrap";
import { BiEnvelope } from "react-icons/bi";
function Form(){
    return(<>
    <div style={{width:'98%', margin:'auto',backgroundColor:'#a5d3a7'}} className="form mt-5 mb-5">
        <div className="container" >
            <div className="Sec">
                <h2 style={{fontSize:'17px',lineHeight:'1.6',fontWeight:'bolder',textAlign:'center'}}><span style={{marginRight:'6px',fontSize:'19px'}}><BiEnvelope/></span>Sign Up To Newsletter</h2>
                    <div className="row">
                        < div className="parent">
                            <div className="info ">
                                <input placeholder="" id="1" style={{width:'100%'}} type="email"/>
                            </div>
                                <div className="info">
                                    <button className="btn"> Subscribe</button>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Form; 