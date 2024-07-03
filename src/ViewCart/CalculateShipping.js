import "./CalculateShipping.css"
const CalculateShipping=()=>{
    return(
        <>
            <div className="col-6 text-start">
                <h4>Calculate Shipping</h4>
                <p>Flat rate: <span className="span-per">5%</span></p>
                <select name="inquiryType" className="form-select select-option">
                    <option value="">Choose an option</option>
                    <option value="general">General</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
                <div className="d-flex mt-3">
                    <div class="input-group mb-3 me-3">
                        <input type="text" class="form-control" placeholder="State/Country*" aria-label="Amount (to the nearest dollar)"/>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="PostCode/ZIP*" aria-label="Amount (to the nearest dollar)"/>
                    </div>
                </div>
                <a className="btn-place-order8" href="#">Update</a>
                <h4 className="mt-4">Apply Coupon</h4>
                <div class="input-group mb-3 me-3">
                    <input type="text" class="form-control apply-coupon" placeholder="State/Country*" aria-label="Amount (to the nearest dollar)"/>
                    <a className="btn-place-order8" href="#">Apply</a>
                </div>
            </div>
        </>
    )
}
export default CalculateShipping