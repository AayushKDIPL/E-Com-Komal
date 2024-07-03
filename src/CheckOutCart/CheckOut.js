import BillingDetails from "./BillingDetails"
import YourOrder from "./YourOrder"

const CheckOut=()=>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <BillingDetails/>
                    <YourOrder/>
                </div>
            </div>
        </>
    )
}
export default CheckOut