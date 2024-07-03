import "./Cart.css"
const Cart=()=>{
    return(
        <>
            <div className="container mt-4 mb-4">
                <hr style={{marginBottom:"0%",marginTop:"40px"}}></hr>
            <table class="table text-center custom-table-cart">
                <thead>
                    <tr>
                    <th className="first" scope="col">Image</th>
                    <th className="second" scope="col">Name</th>
                    <th className="third" scope="col">Price</th>
                    <th className="fourth" scope="col">Quantity</th>
                    <th className="fifth" scope="col">SubTotal</th>
                    <th className="sixth" scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className="cart-img" src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-1-2.jpg" alt="" /></td>
                        <td><h6 className="cart-h6-name">J.Crew Mercantile Women's Short-Sleeve</h6>
                        <div className="div-cart-des"><p>Maboriosam in a tonto nesciung eget distingy magndapibus</p></div>
                        </td>
                        <td>$65.00</td>
                        <td>Mark</td>
                        <td>$65.00</td>
                        <td><i class="fa-solid fa-trash"></i></td>
                    </tr>
                    <tr>
                        <td><img className="cart-img" src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-1-2.jpg" alt="" /></td>
                        <td><h6 className="cart-h6-name">J.Crew Mercantile Women's Short-Sleeve</h6>
                        <div className="div-cart-des"><p>Maboriosam in a tonto nesciung eget distingy magndapibus</p></div>
                        </td>
                        <td>$65.00</td>
                        <td>Mark</td>
                        <td>$65.00</td>
                        <td><i class="fa-solid fa-trash"></i></td>
                    </tr>
                    <tr>
                        <td><img className="cart-img" src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-1-2.jpg" alt="" /></td>
                        <td><h6 className="cart-h6-name">J.Crew Mercantile Women's Short-Sleeve</h6>
                        <div className="div-cart-des"><p>Maboriosam in a tonto nesciung eget distingy magndapibus</p></div>
                        </td>
                        <td>$65.00</td>
                        <td>Mark</td>
                        <td>$65.00</td>
                        <td><i class="fa-solid fa-trash"></i></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </>
    )
}
export default Cart