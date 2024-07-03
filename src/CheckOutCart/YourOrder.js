import React from 'react';
import './YourOrder.css';

const YourOrder = () => {
    return (
        <div className="col-6">
            <div className="order-div">
                <h4 className="text-start m-4">Your Orders</h4>
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th colSpan="2">Product</th>
                            <th>Table</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img className='img-cart' src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-1-1.jpg" alt="image" /></td>
                            <td className="td-middel"><p>Yidarton Women Summer Blue</p>
                            <h6>x2</h6></td>
                            <td rowSpan="1"><p>$180.90</p></td>
                        </tr>
                        <tr>
                            <td><img className='img-cart' src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-2-1.jpg" alt="image" /></td>
                            <td className="td-middel"><p>LDB MOON Women Summe</p>
                            <h6>x1</h6></td>
                            <td rowSpan="1"><p>$190.99</p></td>
                        </tr>
                        <tr>
                            <td><img className='img-cart' src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-3-1.jpg" alt="image" /></td>
                            <td className="td-middel"><p>Women's Short Sleeve Loose</p>
                            <h6>x1</h6></td>
                            <td rowSpan="1"><p>$120.10</p></td>
                        </tr>
                        <tr>
                            <td>SubTotal</td>
                            <td colSpan="2">$280.00</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td colSpan="2">Free Shipping</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td colSpan="2"><p className='total-price'>$280.00</p></td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-start'>
                    <h6 className='text-start m-4'>Payment</h6>
                    <div className="text-start m-4">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label className="form-check-label" for="flexRadioDefault2">
                        Direct Bank Transfer
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label className="form-check-label" for="flexRadioDefault2">
                        Check Payment
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label className="form-check-label" for="flexRadioDefault2">
                        Paypal
                        </label>
                    </div>
                    </div>
                    <a className="btn-place-order m-4" href="#">Place Order</a>
                </div>
            </div>
        </div>
    );
};

export default YourOrder;
