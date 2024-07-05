import CalculateShipping from "./CalculateShipping"
import Cart from "./Cart"
import CartTotal from "./CartTotal"

const ViewCart=()=>{
    return(
        <>
            <Cart/>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <CalculateShipping/>
                    <CartTotal/>
                </div>
            </div>
        </>
    )
}
export default ViewCart