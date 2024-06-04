import React from 'react';
import './Payment.css';
import Header from '../components/Header';

const PaymentPage = () => {
    return (
        <div>
            <Header />
            <div className="payment-body">
                <div className="container">
                    <div className="row upper">
                        <span><i className="fa fa-check-circle-o"></i> Shopping bag</span>
                        <span><i className="fa fa-check-circle-o"></i> Order details</span>
                        <span id="payment"><span id="three">3</span> Payment</span>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="payment-left border">
                                <div className="payment-row">
                                    <span className="payment-header">Payment</span>
                                    <div className="payment-icons">
                                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                                        <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" />
                                        <img src="https://img.icons8.com/color/48/000000/maestro.png" alt="Maestro" />
                                    </div>
                                </div>
                                <form>
                                    <span>Cardholder's name:</span>
                                    <input placeholder="Linda Williams" />
                                    <span>Card Number:</span>
                                    <input placeholder="0125 6780 4567 9909" />
                                    <div className="payment-row">
                                        <div className="row">
                                            <div className="col-6">
                                                <span>Expiry date:</span>
                                                <input placeholder="YY/MM" />
                                            </div>
                                            <div className="col-6">
                                                <span>CVV:</span>
                                                <input id="cvv" />
                                            </div>
                                        </div>

                                    </div>
                                    <input type="checkbox" id="save_card" className="align-left" />
                                    <label htmlFor="save_card">Save card details to wallet</label>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="payment-right border">
                                <div className="payment-header">Order Summary</div>
                                <p>2 items</p>
                                <div className="payment-row item">
                                    <div className="col-4 align-self-center"><img className="img-fluid" src="https://i.imgur.com/79M6pU0.png" alt="Product 1" /></div>
                                    <div className="col-8">
                                        <div className="payment-row"><b>$ 26.99</b></div>
                                        <div className="payment-row text-muted">Be Legandary Lipstick-Nude rose</div>
                                        <div className="payment-row">Qty:1</div>
                                    </div>
                                </div>
                                <div className="payment-row item">
                                    <div className="col-4 align-self-center"><img className="img-fluid" src="https://i.imgur.com/Ew8NzKr.jpg" alt="Product 2" /></div>
                                    <div className="col-8">
                                        <div className="payment-row"><b>$ 19.99</b></div>
                                        <div className="payment-row text-muted">Be Legandary Lipstick-Sheer Navy Cream</div>
                                        <div className="payment-row">Qty:1</div>
                                    </div>
                                </div>
                                <hr />
                                <div className="payment-row lower">
                                    <div className="payment-col text-left">Subtotal</div>
                                    <div className="payment-col text-right">$ 46.98</div>
                                </div>
                                <div className="payment-row lower">
                                    <div className="payment-col text-left">Delivery</div>
                                    <div className="payment-col text-right">Free</div>
                                </div>
                                <div className="payment-row lower">
                                    <div className="payment-col text-left"><b>Total to pay</b></div>
                                    <div className="payment-col text-right"><b>$ 46.98</b></div>
                                </div>
                                <div className="payment-row lower">
                                    <div className="payment-col text-left"><a href="#"><u>Add promo code</u></a></div>
                                </div>
                                <button className="payment-btn">Place order</button>
                                <p className="payment-text-muted text-center">Complimentary Shipping & Returns</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
