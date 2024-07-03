import "./SaleOffer.css"
const SaleOffer=()=>{
    return(
        <>
            <div className="container d-flex mt-4 mb-4">
                <div className="sale_img1">
                    <div className="sale_content">
                        <h3>Deal of the Day</h3>
                        <p>Limited quantities.</p>
                        <h5>Summar Collection New Morden Design</h5>
                        <p><span className="price">$139.99 </span><span className="oprice">$160.00</span></p>
                        <p>Hurry Up! Offer End In:</p>
                        <div className="d-flex">
                            <div className="time">
                                <button className="btn-time">02</button>
                                <p className="btn-">Days</p>
                            </div>
                            <div className="time">
                                <button className="btn-time">02</button>
                                <p>Days</p>
                            </div>
                            <div className="time">
                                <button className="btn-time">02</button>
                                <p>Days</p>
                            </div>
                            <div className="time">
                                <button className="btn-time">02</button>
                                <p>Days</p>
                            </div>
                        </div>
                        <button className="shop-now">Shop Now</button>
                    </div>
                </div>
                <div className="sale_img2">
                    <div className="sale_content">
                        <h3>Deal of the Day</h3>
                        <p className="limited">Limited quantities.</p>
                        <h5>Summar Collection New Morden Design</h5>
                        <p><span className="price">$139.99 </span><span className="oprice">$160.00</span></p>
                        <p className="hurry">Hurry Up! Offer End In:</p>
                        <div className="d-flex">
                            <div className="time">
                                <button className="btn-time">02</button>
                                <p className="btn-">Days</p>
                            </div>
                            <div className="time">
                                <button className="btn-time">02</button>
                                <p>Days</p>
                            </div>
                            <div className="time">
                                <button className="btn-time">02</button>
                                <p>Days</p>
                            </div>
                            <div className="time">
                                <button className="btn-time">02</button>
                                <p>Days</p>
                            </div>
                        </div>
                        <button className="shop-now">Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SaleOffer;