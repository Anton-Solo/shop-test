import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { fetchOrders } from "../../store/actions/ordersActions";
import { ordersList } from "../../store/selectors";
import { OrdersItem } from "./OrdersItem";
import "./orders.scss";
import { ReactElement, useEffect } from "react";

export const Orders = (): ReactElement => {
  const dispatch = useAppDispatch();
  const orderList = useAppSelector(ordersList);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div className="container">
      <div className="orders">
        <div className="orders-head">
          <h2 className="orders-head__title">Comes</h2>
          <div className="orders-head__num">
            /{" "}
            {!orderList || orderList?.length === 0 ? 0 : orderList?.length - 1}
          </div>
        </div>
        <div className="orders-wrapper">
          {orderList?.length > 0
            ? orderList?.map((order) => (
                <OrdersItem key={order?.id} order={order} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};
