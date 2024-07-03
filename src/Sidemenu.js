import "./Sidemenu.css"
const Sidemenu=()=>{
    return(
        <>
            <div className="col-3">
                <div className="card_menu">
                    <h4 className="mb-4 font-weight-bold">Category</h4>
                    <p><a href="/" className="menu_text">Shoes & Bags</a></p>
                    <p><a href="/" className="menu_text">Blouses & Shirts</a></p>
                    <p><a href="/" className="menu_text">Dressess</a></p>
                    <p><a href="/" className="menu_text">Swimwear</a></p>
                    <p><a href="/" className="menu_text">Beauty</a></p>
                    <p><a href="/" className="menu_text">Jewelry & Watch</a></p>
                    <p><a href="/" className="menu_text">Accessories</a></p>
                </div>
                <div className="card_menu mt-4">
                    <h4 className="mb-4 font-weight-bold">Sort By</h4>
                    <p><a href="/" className="menu_text">Popularity</a></p>
                    <p><a href="/" className="menu_text">Average rating</a></p>
                    <p><a href="/" className="menu_text">Price: Low to High</a></p>
                    <p><a href="/" className="menu_text">Price: High to Low</a></p>
                </div>
                <div className="card_menu mt-4">
                    <h4 className="mb-4 font-weight-bold">Price Range</h4>
                    <p><a href="/" className="menu_text">$0-$200</a></p>
                    <p><a href="/" className="menu_text">$200-$400</a></p>
                    <p><a href="/" className="menu_text">$400-$600</a></p>
                    <p><a href="/" className="menu_text">$600-$800</a></p>
                    <p><a href="/" className="menu_text">800$+</a></p>
                </div>
                <div className="card_img1 mt-4">
                    <div className="over_img">
                        <p>Women Zone</p>
                        <h3>Save 17% on Office Dress</h3>
                        <a href="/">Shop Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidemenu;