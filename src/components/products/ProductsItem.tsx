import React, { ReactElement } from "react";
import { IProduct } from "../../types/types";
import { changeOrderIndicator } from "../../store/slices/ordersSlice";
import { useAppDispatch } from "../../hooks/useStore";
import { ref, set } from "firebase/database";
import { db } from "../../firebase";
import { Add } from "../icons/add";

export const ProductsItem = ({
  product,
}: {
  product: IProduct;
}): ReactElement => {
  const dispatch = useAppDispatch();

  const dateHandle = () => {
    let ddStart = "";
    let mmStart = "";
    let yyyyStart = "";
    let ddEnd = "";
    let mmEnd = "";
    let yyyyEnd = "";
    if (product?.guarantee?.start && product?.guarantee?.end) {
      ddStart = String(new Date(product?.guarantee?.start)?.getDate()).padStart(
        2,
        "0"
      );
      mmStart = String(
        new Date(product?.guarantee?.start)?.getMonth() + 1
      ).padStart(2, "0");
      yyyyStart = String(new Date(product?.guarantee?.start)?.getFullYear());
      ddEnd = String(new Date(product?.guarantee?.end)?.getDate()).padStart(
        2,
        "0"
      );
      mmEnd = String(
        new Date(product?.guarantee?.end)?.getMonth() + 1
      ).padStart(2, "0");
      yyyyEnd = String(new Date(product?.guarantee?.end)?.getFullYear());
    }

    const formattedDateStart = ddStart + "/" + mmStart + "/" + yyyyStart;
    const formattedDateEnd = ddEnd + "/" + mmEnd + "/" + yyyyEnd;

    return [formattedDateStart, formattedDateEnd];
  };

  const convertToUah = () => {
    return product?.price * 38;
  };

  const addOrder = () => {
    set(ref(db, `/orders/${product?.id}`), {
      id: product?.id,
      title: product?.title,
      quantity: 1,
      price: product?.price,
      date: new Date().toISOString(),
      photo: product?.photo,
    }).then(() => {
      dispatch(changeOrderIndicator(true));
    });
  };

  return (
    <div className="item">
      <div className="item-image">
        <img src={product?.photo} alt={product?.title} />
      </div>
      <div className="item-name">
        <span className="item-name__main">{product?.title}</span>
        <span className="item-name__model">{product?.specification}</span>
      </div>
      <div className="item-type">{product?.type}</div>
      <div className="item-garantue">
        {dateHandle()?.map((date, idx) =>
          idx === 0 ? <span>from {date}</span> : <span>to {date}</span>
        )}
      </div>
      <div className="item-price">
        <span>{product?.price} $</span>
        <span>{convertToUah()} UAH</span>
      </div>
      <div className="item-comes">Biiiiig comeeees here man</div>
      <div className="item-action" onClick={addOrder}>
        <Add />
      </div>
    </div>
  );
};
