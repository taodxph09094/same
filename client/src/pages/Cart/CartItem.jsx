import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
const CartItem = ({ item, deleteCartItems }) => {
  return (
    <>
      <div className="CartItemCard">
        <img src={item.image} alt="ssa" />
        <div>
          <Link to={`/product/${item.product}`} className="nameProductCart">
            {item.name}
          </Link>
          <span>{`Giá: ${item.price} đ`}</span>
          <p onClick={() => deleteCartItems(item.product)}>Xóa</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
