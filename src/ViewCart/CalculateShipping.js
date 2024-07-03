import "./CalculateShipping.css"
const CalculateShipping=()=>{
    return(
        <>
            <div className="col-6">
                <h4>Calculate Shipping</h4>
                <p>Flat rate: <span>5%</span></p>
                <select name="inquiryType" className="form-select">
                    <option value="">Select Inquiry Type</option>
                    <option value="general">General</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>
        </>
    )
}
export default CalculateShipping