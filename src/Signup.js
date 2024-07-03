import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    return (
        <>  
            <div className="container-fluid" style={{backgroundColor:"#E6F6F8"}}>
                <div className="row m-5">
                    <div className="d-flex flex-row justify-content-center align-items-center ">
                        <div className="col-md-6">
                            <div>
                                <img src="https://thumbs.dreamstime.com/b/online-shopping-background-e-commerce-marketing-technology-shopping-cart-stacked-mobile-tablet-laptop-connection-line-123110434.jpg" className="w-100" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-4 m-5 p-4" style={{border:"1px solid rgb(192, 192, 192)"}}>
                            <h2>Create New Account</h2>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" id="txtname" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" id="txtmobile" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" id="txtemail" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="txtpassword" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" id="txtcpassword" className="form-control" />
                            </div>
                            <div className="form-group text-start">
                                <br />
                                <button className="btn" style={{backgroundColor:"#046963",color:"white"}}>Create Account</button>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Signup;