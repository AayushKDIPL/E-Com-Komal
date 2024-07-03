import "./Navbar.css"
const Navbar=()=>{
    return(
        <>
            <hr className="dashed-line"></hr>
            <div className="container">
                <div className="row">
                    <div className="col-2 categories row">
                        <div className="col-4 text-light cat_logo"><i className="fa-solid fa-table-cells-large"></i></div>
                        <div className="col-8 text-light text-center cat_content">Browse Categories</div>
                    </div>
                    <div className="col-8 nav">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/shop">Shop</a>
                        <a href="/">Mega menu</a>
                        <a href="/">Blog</a>
                        <a href="/">Pages</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="col-2 number">
                        <p><i class="fa-solid fa-headphones"></i> Hotline <span className="text-primary">1900 - 888</span></p>
                    </div>
                </div>
            </div>
            <hr className="dashed-line"></hr>
        </>
    )
}
export default Navbar;