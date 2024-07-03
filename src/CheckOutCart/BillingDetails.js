import "./BillingDetails.css"
const BillingDetails=()=>{
    return(
        <>
            <div className="col-6">
            <h3 className="billing-div-h3">Billing Details</h3>
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="First Name*" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Last Name*" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Company Name" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div className="form1-row">
                <select name="inquiryType" className="form-select">
                    <option value="">Select an option</option>
                    <option value="general">General</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Address*" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Address line2" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="City/Town*" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="State/Country*" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Postcode/ZIP*" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Phone*" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Email address*" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <h3 className="billing-div-h3">Billing Details</h3>
                <div className="form1-row">
                    <textarea className="form-control text-area" aria-label="With textarea"></textarea>
                </div>
                </form>
            </div>
        </>
    )
}
export default BillingDetails