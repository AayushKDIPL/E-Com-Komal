import "./CartTotal.css"
const CartTotal=()=>{
    return(
        <>
            <div className="col-6 text-start main-cart-total">
                <h4>Cart Totals</h4>
                <table class="table table-bordered table-cart">
                    <thead>
                        <tr>
                            <th scope="col">Cart Subtotal</th>
                            <th scope="col">$240.00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Shipping</td>
                            <td>Free Shipping</td>
                        </tr>
                        <tr>
                            <td>Totals</td>
                            <td>$240.00</td>
                        </tr>
                    </tbody>
                    </table>
                    <a className="btn-place-order8" href="/">Proceed To CheckOut</a>
            </div>
        </>
    )
}
export default CartTotal