import "./Blog.css"
const Blog=()=>{
    return(
        <>
            <div className="container row row_main">
                <h2 className="text-start">From Blog</h2>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <img className="first_img" src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/blog/blog-2.jpg" alt="image" />
                        </div>
                        <div className="col-6 first_content">
                            <p>Fashion</p>
                            <h5>Qualcomm is developing a Nintendo Switch-like console, report says</h5>
                            <p>14 April 2022</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img className="first_img" src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/blog/blog-1.jpg" alt="image" />
                        </div>
                        <div className="col-6 first_content">
                            <p>Healthy</p>
                            <h5>Not even the coronavirus can derail 5G's global momentum</h5>
                            <p>14 April 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6 second_col">
                            <p className="pblog">Accessories</p>
                            <h3>Save 17% on Autumn Hat</h3>
                            <a href="#">Shop Now</a>
                        </div>
                        <div className="col-6">
                            <div className="third_col1 mb-3">
                                <p className="pblog">Big Offer</p>
                                <h3>Save 20% on Women's socks</h3>
                                <a href="#">Shop Now</a>
                            </div>
                            <div className="third_col2">
                                <p className="pblog">Smart Offer</p>
                                <h3>Save 20% on Eardrop</h3>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog;