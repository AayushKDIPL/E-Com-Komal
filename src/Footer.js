import "./Footer.css";
const Footer=()=>{
    return(
        <>
            <div className="container">
                <div className="d-flex m-5">
                    <div className="col-3">
                        <h4>Contact</h4>
                        <p><span className="location">Location:</span>G/F 190-A, GAUTAM NAGAR DELHI South West Delhi DL 110049 IN</p>
                        <p><span className="location">Customer Support: </span>support@swadesipay.in</p>
                        <p><span className="location">Phone: </span>+91 7303933793</p>
                        <h4>Follow Us</h4>
                        <div className="d-flex">
                            <div><i class="fa-brands fa-square-instagram instagram"></i></div>
                            <div><i class="fa-brands fa-square-x-twitter x-twitter"></i></div>
                            <div><i class="fa-brands fa-square-whatsapp whatsapp"></i></div>
                            <div><i class="fa-brands fa-facebook facebook"></i></div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4>About</h4>
                        <h6 className="pb-1"><a href="#" className="link">About Us</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">Delivery Information</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">Privacy Policy</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">Terms & Conditions</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">Contact Us</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">Support Center</a></h6>
                    </div>
                    <div className="col-3">
                        <h4>My Account</h4>
                        <h6 className="pb-1"><a href="#" className="link">Sign In</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">View Cart</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">My Wishlist</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">Track My Order</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">Help</a></h6>
                        <h6 className="pb-1"><a href="#" className="link">Order</a></h6>
                    </div>
                    <div className="col-3">
                        <h4>Install App</h4>
                        <p>From App Store or Google Play</p>
                        <img className="m-1" style={{height: "50px",width:"200px", border:"2px solid black"}} src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/app-store.jpg" alt="image" />
                        <img className="m-1" style={{height: "50px",width:"200px", border:"2px solid black"}} src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/google-play.jpg" alt="image" />
                        <p>Secured Payment Gateways</p>
                        <div className="d-flex">
                            <img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/payment-method.png" alt="image" />
                        </div>
                </div>
            </div>
                <hr className="dashed-line"></hr>
                <div className="m-4"><span className="copyright">COPYRIGHT © 2024, Kanak - HTML Ecommerce Template</span> <span className="website">Designed by <a style={{textDecoration: "none"}} href="www.kanakdrishtiinfotec.in">www.kanakdrishtiinfotec.in</a> All rights reserved</span></div>
            </div>
        </>
    )
}
export default Footer;