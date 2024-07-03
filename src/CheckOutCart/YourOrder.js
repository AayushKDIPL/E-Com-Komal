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
                            <td>Include 1A</td>
                            <td className="td-middel">Include 1B</td>
                            <td rowSpan="1">Table Content</td>
                        </tr>
                        <tr>
                            <td>Include 2A</td>
                            <td className="td-middel">Include 2B</td>
                            <td rowSpan="1">Table Content</td>
                        </tr>
                        <tr>
                            <td>Include 2A</td>
                            <td className="td-middel">Include 2B</td>
                            <td rowSpan="1">Table Content</td>
                        </tr>
                        <tr>
                            <td>Include 2A</td>
                            <td colSpan="2">Include 2B</td>
                        </tr>
                        <tr>
                            <td>Include 2A</td>
                            <td colSpan="2">Include 2B</td>
                        </tr>
                        <tr>
                            <td>Include 2A</td>
                            <td colSpan="2">Include 2B</td>
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
