import { memo, useEffect, useState } from "react";
import "./style.scss";
import { formatter } from "utils/fomater";

const STATUS = {
  ORDERED: { key: "ORDERED", label: "Đã đặt", className: "orders__dropdown-item" },
  PREPARING: { key: "PREPARING", label: "Lên đơn", className: "orders__dropdown-item" },
  DELIVERED: { key: "DELIVERED", label: "Đã giao hàng", className: "orders__dropdown-item" },
  CANCELLED: { key: "CANCELLED", label: "Hủy đơn", className: "orders__dropdown-item orders__dropdown-item--danger" },
};

const OrderPageAdPage = () => {
  const initialOrders = [
    { id: 1, total: 2000000, customerName: "John 1", date: "11/12/2025", status: "ORDERED" },
    { id: 2, total: 2000000, customerName: "John 2", date: "10/12/2025", status: "PREPARING" },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [activedDropdown, setActivedDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".orders__dropdown")) {
        setActivedDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    setActivedDropdown(null);
  };

  return (
    <div className="container">
      <div className="orders">
        <h2>Quản lý đơn hàng:</h2>
        <div className="orders__content">
          <table className="orders__table">
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Tổng đơn</th>
                <th>Khách hàng</th>
                <th>Ngày đặt</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{formatter(item.total)}</td>
                  <td>{item.customerName}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>
                    <div className="orders__dropdown">
                      <button className="orders__action-buton" onClick={() => setActivedDropdown(item.id)}>
                        {STATUS[item.status]?.label || "Không xác định"}
                        <span className="arrow">▽</span>
                      </button>
                      {activedDropdown === item.id && (
                        <div className="orders__dropdown-menu">
                          {Object.values(STATUS).map((status) => (
                            <button key={status.key} className={status.className} onClick={() => handleStatusChange(item.id, status.key)}>
                              {status.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="orders__footer">
          <div className="orders__pagination">
            <div className="orders__page-numbers">
              <button className="orders__page-btn">←</button>
              <button className="orders__page-btn orders__page-btn--active">1</button>
              <button className="orders__page-btn">2</button>
              <button className="orders__page-btn">3</button>
              <button className="orders__page-btn">4</button>
              <button className="orders__page-btn">5</button>
              <button className="orders__page-btn">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderPageAdPage);
