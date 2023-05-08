import { ReactElement, useState } from "react";
import { DeleteModal } from "./DeleteModal";
import { IOrder } from "../../types/types";
import { Delete } from "../icons/delete";

export const OrdersItem = ({ order }: { order: IOrder }): ReactElement => {
  const [open, setOpen] = useState(false);

  const deleteHandle = () => {
    setOpen(true);
  };

  const dateFormat = (type: string) => {
    const day = new Date(order?.date)?.getDate();
    const month = new Date(order?.date)?.getMonth() + 1;
    const year = new Date(order?.date)?.getFullYear();

    return `${day < 10 ? 0 : ""}${day}/${month < 10 ? "0" : ""}${month}${
      type === "long" ? "/" + year : ""
    }`;
  };

  const convertToUah = () => {
    return order?.price * 38;
  };

  return (
    <>
      <div className="item">
        <div className="item-image">
          <img src={order?.photo} alt={order?.title} />
        </div>
        <div className="item-name">{order?.title}</div>
        <div className="item-quantity">{order?.quantity}</div>
        <div className="item-date">
          <span className="item-date__short">{dateFormat("short")}</span>
          <span className="item-date__long">{dateFormat("long")}</span>
        </div>
        <div className="item-price">
          <span className="item-date__dol">{order?.price}$</span>
          <span className="item-date__ua">{convertToUah()} UAH</span>
        </div>
        <div className="item-action" onClick={deleteHandle}>
          <Delete />
        </div>
      </div>
      <DeleteModal
        id={order?.id}
        open={open}
        close={setOpen}
        title={order?.title}
        photo={order?.photo}
      />
    </>
  );
};
