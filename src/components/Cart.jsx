import { useSelector, useDispatch } from "react-redux";
import MenuItemCard from "./MenuItemCard.jsx";
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem.jsx";

const Cart = () => {
  // Subscribe to the store
  const cartData = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const btnAction = (
    <p className="flex justify-between items-center px-4">
      <span className="text-[24px] font-bold">-</span>
      <span>{cartData?.length} </span>
      <span className="text-[16px] font-bold">+</span>
    </p>
  );

  return (
    <div className="flex justify-center mt-10 min-h-dvh">
      <div className="w-7/12 h-auto flex flex-col items-center gap-5">
        <h2 className=" text-[24px] font-bold uppercase text-center">
          {cartData.length === 0 ? "Your cart is empty 🛒" : "Cart Items"}
        </h2>
        {cartData.length > 0 && (
          <button className="btn-secondary" onClick={handleClearCart}>
            Clear Cart
          </button>
        )}
        <div className="p-4 my-4 flex flex-col gap-8 ">
          <div className="w-full">
            {cartData && cartData?.map((item) => {
              return (
                <CartItem data={item} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
