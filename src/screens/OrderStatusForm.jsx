import React, { useState } from 'react';
import '../style/OrderStatusUser.css';


const OrderStatusForm = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    const orders = [
        {
            orderId: "123456",
            status: "Đang xử lý",
            orderDate: "2024-06-18",
            estimatedDelivery: "2024-06-25"
        },
        {
            orderId: "123457",
            status: "Đã giao",
            orderDate: "2024-06-15",
            estimatedDelivery: "2024-06-20"
        }
    ];

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
    };

    return (
        <div className="container11 py-4">
            <h1 className="mb-4" style={{ textAlign: 'center' }}>Danh sách đơn hàng</h1>
            <table className="table1 table-striped">
                <thead>
                    <tr>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderId} onClick={() => handleOrderClick(order)} style={{ cursor: 'pointer' }}>
                            <td>{order.orderId}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedOrder && (
                <div className="order-details mt-4">
                    <h2 className="mb-3" style={{ textAlign: 'center' }}>Thông tin chi tiết đơn hàng</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="orderId" className="form-label">Mã đơn hàng:</label>
                            <input type="text" className="form-control" id="orderId" value={selectedOrder.orderId} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Trạng thái:</label>
                            <input type="text" className="form-control" id="status" value={selectedOrder.status} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="orderDate" className="form-label">Ngày đặt hàng:</label>
                            <input type="date" className="form-control" id="orderDate" value={selectedOrder.orderDate} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="estimatedDelivery" className="form-label">Ngày giao hàng dự kiến:</label>
                            <input type="date" className="form-control" id="estimatedDelivery" value={selectedOrder.estimatedDelivery} readOnly />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default OrderStatusForm;
