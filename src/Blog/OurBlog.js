import "./OurBlog.css"
const OurBlog=()=>{
    return(
        <>
            <div className="container">
                <div className="col-9 main-div-blog">
                    <h1>Our Blog</h1>
                    <span>32 Sub Categories</span>
                    <span>1020k Article</span>
                    <span>480 Authors</span>
                    <span>29k Views</span>
                    <div className="big-img-div">
                        <img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/blog/blog-6.jpg" alt="image/photo" />
                        <span>MOBILE PHONE</span>
                        <span>23K</span>
                        <span>17K</span>
                        <span>18K</span>
                        <div className="last-div">
                        <div>By Azimeto 12/07/2022 09:35 EST 8 mins read Updated 18/08/2022 07:12 EST</div>
                        <div><button className="btn btn-danger">Read More</button></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurBlog