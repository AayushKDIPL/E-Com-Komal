import "./SecondLast.css"
const SecondLast=()=>{
    return(
        <>
            <div className="container-fluid before_footer mt-4">
                <div className="container d-flex justify-content-between">
                    <div className="p-4">
                        <p>Sign up to Newslatter</p>
                    </div>
                    <div className="p-4">
                        ...and Receive $25 coupon for first shopping.
                    </div>
                    <div className="p-4" style={{width: "400px",display:"inline-flex"}}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Enter your email" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0 text-light" type="submit" style={{backgroundColor: "blue"}}>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SecondLast;