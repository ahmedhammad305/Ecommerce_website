import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";



function Login(){
    const [action, setaction] = useState("Login");
    return(
        <>
        <div className="login">
            <div className="container">
                <h3 style={{marginBottom:'-20px'}}>{action}</h3>
                <div className="row">
                    <div style={{padding:'40px'}} className="col-12 ">
                        {action==="Login"? <div></div>: <div className="info">
                                <span><FaUserLarge/></span>
                            <input placeholder="Name" type="text"/>
                            </div>
                            }
                            <div className="info">
                            <span><MdEmail/></span>
                                <input placeholder="Email" type="text"/>
                            </div>
                            <div className="info">
                            <span><FaLock/></span>
                            <input placeholder="Password" type="text"/>
                            </div>
                            {action==="Sign Up"?<div></div>: <div><h2>Forgot your password?</h2></div> }
                            {/* <h2>Forgot your password?</h2> */}
                            <div style={{display:'flex',marginTop:'35px'}} className="but">
                            <button className={action==="login"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sing Up</button>
                            {/* <h4>Or don't have an account?</h4> */}
                            <button className={action==="Sing Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</button>
                            </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
        <Form/>
        <Footer/>
        </>
    )
}
export default Login;